import { useState, useRef, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ThumbsUp, ThumbsDown, MessageSquare, X, ChevronDown, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

interface LessonFeedbackProps {
  lessonTitle: string;
  moduleTitle: string;
}

export default function LessonFeedback({ lessonTitle, moduleTitle }: LessonFeedbackProps) {
  const [vote, setVote] = useState<'Yes' | 'No' | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [feedbackType, setFeedbackType] = useState('');
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const env = (import.meta as any).env || {};
  const SERVICE_ID = env.VITE_EMAIL_SERVICE_ID || env.VITE_EMAILJS_SERVICE_ID || '';
  const PUBLIC_KEY = env.VITE_EMAIL_PUBLIC_KEY || env.VITE_EMAILJS_PUBLIC_KEY || '';
  const FEEDBACK_TEMPLATE_ID = env.VITE_EMAIL_FEEDBACK_TEMPLATE_ID || '';

  const dropdownOptions = [
    { value: 'Incorrect explanation', label: 'Incorrect explanation' },
    { value: 'Suggest another example', label: 'Suggest another example' },
    { value: 'Typo', label: 'Typo' },
    { value: 'Bug', label: 'Bug' },
    { value: 'General suggestion', label: 'General suggestion' }
  ];

  const handleVote = (selectedVote: 'Yes' | 'No') => {
    setVote(selectedVote);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
    setSuccessMsg('');
    setErrorMsg('');
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setFeedbackType('');
    setMessage('');
    setEmail('');
    setEmailError('');
    setIsDropdownOpen(false);
    setSuccessMsg('');
    setErrorMsg('');
  };

  const handleEmailChange = (val: string) => {
    setEmail(val);
    setSuccessMsg('');
    setErrorMsg('');
    if (!val.trim()) {
      setEmailError('');
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(val.trim())) {
        setEmailError('Please enter a valid email address.');
      } else {
        setEmailError('');
      }
    }
  };

  const handleSubmitFeedback = async (e: FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    setSuccessMsg('');
    setErrorMsg('');

    const trimmedMsg = message.trim();
    if (!feedbackType) {
      setErrorMsg('Please select a feedback type.');
      return;
    }
    if (trimmedMsg.length < 10) {
      setErrorMsg('Message must be at least 10 characters long.');
      return;
    }
    if (trimmedMsg.length > 1000) {
      setErrorMsg('Message cannot exceed 1000 characters.');
      return;
    }

    const trimmedEmail = email.trim();
    if (trimmedEmail) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(trimmedEmail)) {
        setEmailError('Please enter a valid email address.');
        setErrorMsg('Please enter a valid email address.');
        return;
      }
    }

    setIsSubmitting(true);

    try {
      if (!SERVICE_ID || !PUBLIC_KEY || !FEEDBACK_TEMPLATE_ID) {
        console.warn('Missing EmailJS environment variables configuration.');
        // If keys are missing, simulate failure or throw to trigger error toast
        throw new Error('EmailJS keys are not configured in environment variables.');
      }

      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          service_id: SERVICE_ID,
          template_id: FEEDBACK_TEMPLATE_ID,
          user_id: PUBLIC_KEY,
          template_params: {
            lesson_name: lessonTitle,
            lessonName: lessonTitle,
            module_name: moduleTitle,
            moduleName: moduleTitle,
            helpful_vote: vote || 'Not Selected',
            helpfulVote: vote || 'Not Selected',
            feedback_type: feedbackType,
            feedbackType: feedbackType,
            message: trimmedMsg,
            reply_email: trimmedEmail,
            replyEmail: trimmedEmail,
            lesson_url: window.location.href,
            timestamp: new Date().toLocaleString(),
            website_name: 'ByteAcademy',
            websiteName: 'ByteAcademy'
          }
        })
      });

      if (response.ok) {
        setSuccessMsg('Thanks for your feedback! Your suggestions help us improve ByteAcademy.');
        setFeedbackType('');
        setMessage('');
        setEmail('');
        setEmailError('');
      } else {
        const errorText = await response.text();
        console.error('EmailJS feedback API responded with error status:', response.status, errorText);
        setErrorMsg('Something went wrong. Please try again later.');
      }
    } catch (err) {
      console.error('EmailJS network error:', err);
      setErrorMsg('Something went wrong. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* COMPACT FEEDBACK CARD AT BOTTOM OF LESSON */}
      <div id="lesson-feedback-card" className="border border-zinc-800 bg-zinc-900/40 rounded-2xl p-5 sm:p-6 shadow-sm my-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h4 className="text-xs font-black text-white uppercase tracking-wider mb-1">
              Was this lesson helpful?
            </h4>
            <p className="text-[11px] text-zinc-500 font-semibold">
              Your response helps us fine-tune the curriculum and examples.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => handleVote('Yes')}
              className={`flex items-center gap-1.5 px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-xl border transition-all active:scale-95 cursor-pointer ${
                vote === 'Yes'
                  ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400 font-extrabold shadow-sm'
                  : 'bg-zinc-950 border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700'
              }`}
              title="Yes, this lesson was helpful"
              aria-label="Yes, this lesson was helpful"
            >
              <ThumbsUp className={`w-3.5 h-3.5 ${vote === 'Yes' ? 'fill-emerald-400/20' : ''}`} />
              <span>Yes</span>
            </button>

            <button
              onClick={() => handleVote('No')}
              className={`flex items-center gap-1.5 px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-xl border transition-all active:scale-95 cursor-pointer ${
                vote === 'No'
                  ? 'bg-rose-500/10 border-rose-500/30 text-rose-400 font-extrabold shadow-sm'
                  : 'bg-zinc-950 border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700'
              }`}
              title="No, this lesson was not helpful"
              aria-label="No, this lesson was not helpful"
            >
              <ThumbsDown className={`w-3.5 h-3.5 ${vote === 'No' ? 'fill-rose-400/20' : ''}`} />
              <span>No</span>
            </button>
          </div>
        </div>

        <div className="border-t border-zinc-800/60 mt-4 pt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <p className="text-[11px] text-zinc-400 font-medium">
            Found something unclear, identified a typo, or have a suggestion?
          </p>
          <button
            onClick={handleOpenModal}
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-zinc-950 border border-zinc-800 text-zinc-300 hover:text-white hover:bg-zinc-900 font-bold text-[10px] sm:text-xs tracking-wider uppercase rounded-xl transition-all active:scale-95 cursor-pointer"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Suggest an Improvement</span>
          </button>
        </div>
      </div>

      {/* FEEDBACK POPUP MODAL */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop Blur overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleCloseModal}
              className="fixed inset-0 bg-black/75 backdrop-blur-xs cursor-pointer"
            />

            {/* Modal Body Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: 'spring', duration: 0.35, bounce: 0.1 }}
              className="relative w-full max-w-lg bg-zinc-900 border border-zinc-800 rounded-2xl p-6 shadow-2xl z-10 flex flex-col gap-5 overflow-hidden text-zinc-100"
            >
              <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-[#FF0800]" />
                  <h3 className="text-sm font-black text-white uppercase tracking-wider">
                    Suggest an Improvement
                  </h3>
                </div>
                <button
                  onClick={handleCloseModal}
                  className="p-1.5 text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-800 transition-colors cursor-pointer"
                  aria-label="Close feedback modal"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <form onSubmit={handleSubmitFeedback} className="flex flex-col gap-4">
                {/* Success Feedback Banner */}
                {successMsg && (
                  <div className="p-4 bg-emerald-500/15 border border-emerald-500/20 rounded-xl flex items-start gap-3 text-emerald-400 text-xs font-semibold mb-2 animate-fadeIn">
                    <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5 text-emerald-400" />
                    <div>
                      <span className="font-bold block mb-0.5 text-emerald-300">Feedback Submitted!</span>
                      {successMsg}
                    </div>
                  </div>
                )}

                {/* Error Feedback Banner */}
                {errorMsg && (
                  <div className="p-4 bg-rose-500/15 border border-rose-500/20 rounded-xl flex items-start gap-3 text-rose-400 text-xs font-semibold mb-2 animate-fadeIn">
                    <AlertCircle className="w-5 h-5 shrink-0 mt-0.5 text-rose-400" />
                    <div>
                      <span className="font-bold block mb-0.5 text-rose-300">Error Sending Feedback</span>
                      {errorMsg}
                    </div>
                  </div>
                )}
                {/* Read only Module Info */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] font-black text-zinc-500 uppercase tracking-wider">
                      Module
                    </span>
                    <input
                      type="text"
                      readOnly
                      value={moduleTitle}
                      className="w-full px-3 py-2 text-xs bg-zinc-950 border border-zinc-800 rounded-xl text-zinc-400 outline-none select-all"
                    />
                  </div>

                  {/* Read only Lesson Info */}
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] font-black text-zinc-500 uppercase tracking-wider">
                      Lesson
                    </span>
                    <input
                      type="text"
                      readOnly
                      value={lessonTitle}
                      className="w-full px-3 py-2 text-xs bg-zinc-950 border border-zinc-800 rounded-xl text-zinc-400 outline-none select-all"
                    />
                  </div>
                </div>

                {/* Feedback Type Dropdown */}
                <div className="flex flex-col gap-1 relative z-20">
                  <span className="text-[10px] font-black text-zinc-500 uppercase tracking-wider">
                    Feedback Type
                  </span>
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className="w-full px-4 py-2.5 text-xs sm:text-sm bg-zinc-950 border border-zinc-800 rounded-xl hover:border-zinc-700 focus:border-[#FF0800] outline-none transition-all text-white flex items-center justify-between cursor-pointer text-left shadow-sm"
                    >
                      <span className={feedbackType ? "font-semibold text-zinc-100" : "text-zinc-500 font-medium"}>
                        {feedbackType || 'Select a feedback type'}
                      </span>
                      <ChevronDown className="w-4 h-4 text-zinc-500 transition-transform duration-200 shrink-0" />
                    </button>

                    {isDropdownOpen && (
                      <>
                        <div className="fixed inset-0 z-40" onClick={() => setIsDropdownOpen(false)} />
                        <div className="absolute left-0 right-0 mt-1.5 bg-zinc-900 border border-zinc-800 rounded-xl shadow-xl z-50 overflow-hidden py-1 animate-fadeIn max-h-48 overflow-y-auto">
                          {dropdownOptions.map((opt) => (
                            <button
                              key={opt.value}
                              type="button"
                              onClick={() => {
                                setFeedbackType(opt.value);
                                setIsDropdownOpen(false);
                                setSuccessMsg('');
                                setErrorMsg('');
                              }}
                              className={`w-full px-4 py-2 text-xs text-left hover:bg-zinc-800/60 transition-colors ${
                                feedbackType === opt.value
                                  ? 'text-[#FF0800] font-black bg-zinc-800/80'
                                  : 'text-zinc-300 font-medium'
                              }`}
                            >
                              {opt.label}
                            </button>
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                </div>

                {/* Optional Email Field */}
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-black text-zinc-500 uppercase tracking-wider">
                    Your email (optional)
                  </span>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => handleEmailChange(e.target.value)}
                    placeholder="your@email.com"
                    className={`w-full px-4 py-2.5 text-xs sm:text-sm bg-zinc-950 border ${
                      emailError ? 'border-rose-500 focus:border-rose-500' : 'border-zinc-800 focus:border-[#FF0800]'
                    } rounded-xl outline-none transition-all text-white font-medium`}
                  />
                  {emailError ? (
                    <span className="text-[10px] text-rose-500 font-semibold italic mt-0.5">
                      {emailError}
                    </span>
                  ) : (
                    <span className="text-[10px] text-zinc-500 font-semibold italic mt-0.5 leading-relaxed">
                      Leave your email if you'd like us to follow up with you. Otherwise, you can leave it blank.
                    </span>
                  )}
                </div>

                {/* Message Textarea */}
                <div className="flex flex-col gap-1">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-black text-zinc-500 uppercase tracking-wider">
                      Feedback Message
                    </span>
                    <span className={`text-[9px] font-mono font-bold ${message.length < 10 ? 'text-zinc-500' : message.length > 1000 ? 'text-rose-500' : 'text-emerald-500'}`}>
                      {message.length} / 1000
                    </span>
                  </div>
                  <textarea
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value);
                      setSuccessMsg('');
                      setErrorMsg('');
                    }}
                    placeholder="Describe what's unclear, list a typo, or suggest a new example..."
                    className="w-full px-4 py-3 text-xs bg-zinc-950 border border-zinc-800 rounded-xl focus:border-[#FF0800] focus:ring-1 focus:ring-[#FF0800] outline-none transition-colors text-white resize-none font-medium leading-relaxed"
                  />
                  {message.length > 0 && message.length < 10 && (
                    <span className="text-[10px] text-zinc-500 font-semibold italic">
                      Please write at least 10 characters to clarify your feedback.
                    </span>
                  )}
                </div>

                {/* Action Controls */}
                <div className="flex items-center justify-end gap-3 pt-3 border-t border-zinc-800 mt-2">
                  <button
                    type="button"
                    onClick={handleCloseModal}
                    disabled={isSubmitting}
                    className="px-4 py-2 bg-zinc-950 border border-zinc-800 text-zinc-400 hover:text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-all disabled:opacity-50 disabled:pointer-events-none cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting || !feedbackType || message.trim().length < 10 || message.trim().length > 1000 || !!emailError}
                    className="px-5 py-2 bg-[#FF0800] hover:bg-rose-700 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md active:scale-95 flex items-center gap-1.5 disabled:opacity-50 disabled:pointer-events-none cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-3.5 h-3.5 animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <span>Send Feedback</span>
                    )}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
