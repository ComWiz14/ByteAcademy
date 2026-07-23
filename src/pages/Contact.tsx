import { useState, FormEvent } from 'react';
import { Mail, Phone, Send, CheckCircle2, AlertCircle, HelpCircle, ChevronDown } from 'lucide-react';
import TutoringCTA from '../components/TutoringCTA';
import { CONTACT } from '../constants/contact';

// ============================================================================
// EMAILJS CONFIGURATION & INSTRUCTIONS FOR THE OWNER (Chimango Mughogho)
// ============================================================================
// To make this contact form deliver directly to your inbox, you should:
// 1. Sign up for a free account at https://www.emailjs.com/
// 2. Connect your email service (e.g., Gmail) to get a SERVICE ID.
// 3. Create an email template and get a TEMPLATE_ID. 
//    - The template should contain these place holders:
//      Subject: {{subject}}
//      From Name: {{name}}
//      From Email: {{email}}
//      Message: {{message}}
// 4. Copy your Public Key from the Account section.
// 5. Add these keys to your .env file in your workspace or AI Studio project settings:
//    VITE_EMAILJS_SERVICE_ID=your_actual_service_id
//    VITE_EMAILJS_TEMPLATE_ID=your_actual_template_id
//    VITE_EMAILJS_PUBLIC_KEY=your_actual_public_key
// ============================================================================

const env = (import.meta as any).env || {};

const SERVICE_ID = env.VITE_EMAIL_SERVICE_ID || env.VITE_EMAILJS_SERVICE_ID || '';
const TEMPLATE_ID = env.VITE_EMAIL_TEMPLATE_ID || env.VITE_EMAILJS_TEMPLATE_ID || '';
const PUBLIC_KEY = env.VITE_EMAIL_PUBLIC_KEY || env.VITE_EMAILJS_PUBLIC_KEY || '';

// ============================================================================
// DAILY SUBMISSION LIMIT CONFIGURATION & HELPERS (2 submissions per day max)
// ============================================================================
const CONTACT_DAILY_MAX = 2;
const CONTACT_STORAGE_KEY = 'byteacademy-contact-submissions';

interface ContactSubmissionData {
  date: string; // YYYY-MM-DD
  submissions: number;
}

const getTodayDateString = (): string => {
  const d = new Date();
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

/**
 * Checks if the user has reached the daily limit (2 successful submissions)
 */
const checkContactDailyLimit = (): { reached: boolean; count: number } => {
  try {
    const today = getTodayDateString();
    const raw = localStorage.getItem(CONTACT_STORAGE_KEY);
    if (!raw) return { reached: false, count: 0 };
    const data: ContactSubmissionData = JSON.parse(raw);
    if (data.date !== today) {
      // New day: automatically reset limit
      return { reached: false, count: 0 };
    }
    return {
      reached: data.submissions >= CONTACT_DAILY_MAX,
      count: data.submissions,
    };
  } catch (e) {
    console.error('Error checking contact daily limit:', e);
    return { reached: false, count: 0 };
  }
};

/**
 * Records a successful submission in localStorage
 */
const recordSuccessfulSubmission = (): number => {
  try {
    const today = getTodayDateString();
    const raw = localStorage.getItem(CONTACT_STORAGE_KEY);
    let count = 0;
    if (raw) {
      const data: ContactSubmissionData = JSON.parse(raw);
      if (data.date === today) {
        count = data.submissions;
      }
    }
    const newCount = count + 1;
    localStorage.setItem(
      CONTACT_STORAGE_KEY,
      JSON.stringify({ date: today, submissions: newCount })
    );
    return newCount;
  } catch (e) {
    console.error('Error recording successful contact submission:', e);
    return 1;
  }
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Java Lessons',
    message: '',
    honeypot: '' // Anti-spam hidden field
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [lastSubmitTime, setLastSubmitTime] = useState<number>(0);
  const [isLimitReached, setIsLimitReached] = useState<boolean>(() => checkContactDailyLimit().reached);
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const dropdownOptions = [
    { value: 'Java Lessons', label: 'Java Lessons' },
    { value: 'Programming Help', label: 'Programming Help' },
    { value: 'Assignment Support', label: 'Assignment Support' },
    { value: 'Exam Preparation', label: 'Exam Preparation' },
    { value: 'General Question', label: 'General Question' },
    { value: 'Other', label: 'Other' }
  ];

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    // 0. Daily Submission Limit Check (Max 2 successful messages per day)
    const limitStatus = checkContactDailyLimit();
    if (limitStatus.reached) {
      setIsLimitReached(true);
      setErrorMsg("You have reached today's contact message limit. Please try again tomorrow.");
      return;
    }

    // 1. Anti-Spam Honeypot Check: silently drop bot submissions
    if (formData.honeypot.trim() !== '') {
      setSuccessMsg('Your message has been sent successfully.');
      setFormData({ name: '', email: '', subject: 'Java Lessons', message: '', honeypot: '' });
      return;
    }

    // 2. Submission Rate Limiting (15 second cooldown)
    const now = Date.now();
    if (now - lastSubmitTime < 15000) {
      setErrorMsg('Please wait a few seconds before sending another message.');
      return;
    }

    // 3. Validation: Name, Email, and Message length/format
    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedMessage = formData.message.trim();

    if (!trimmedName || !trimmedEmail || !trimmedMessage) {
      setErrorMsg('Please fill in all required fields.');
      return;
    }

    if (trimmedName.length < 2) {
      setErrorMsg('Please enter a valid full name (at least 2 characters).');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }

    if (trimmedMessage.length < 10) {
      setErrorMsg('Please enter a more descriptive message (at least 10 characters).');
      return;
    }

    setIsSubmitting(true);
    setSuccessMsg('');
    setErrorMsg('');
    setLastSubmitTime(now);

    // Check if EmailJS keys are provided
    if (SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY) {
      // Send via EmailJS REST API
      fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          service_id: SERVICE_ID,
          template_id: TEMPLATE_ID,
          user_id: PUBLIC_KEY,
          template_params: {
            name: trimmedName,
            email: trimmedEmail,
            subject: formData.subject,
            message: trimmedMessage
          }
        })
      })
      .then(async (response) => {
        if (response.ok) {
          // Record successful submission for daily quota protection
          recordSuccessfulSubmission();
          if (checkContactDailyLimit().reached) {
            setIsLimitReached(true);
          }

          setSuccessMsg('Your message has been sent successfully. I will get back to you soon.');
          setFormData({
            name: '',
            email: '',
            subject: 'Java Lessons',
            message: '',
            honeypot: ''
          });
        } else {
          const text = await response.text();
          console.error("EmailJS API responded with error:", text);
          setErrorMsg('Something went wrong. Please try again or contact us directly.');
        }
      })
      .catch((err) => {
        console.error("EmailJS network error:", err);
        setErrorMsg('Something went wrong. Please try again or contact us directly.');
      })
      .finally(() => {
        setIsSubmitting(false);
      });
    } else {
      // Fallback: If EmailJS environment variables are not configured yet,
      // use FormSubmit targeting email to ensure out-of-the-box working form!
      fetch("https://formsubmit.co/ajax/chimangomughogho22@gmail.com", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          "ByteAcademy Contact Request": "New Inquiry Received",
          name: trimmedName,
          email: trimmedEmail,
          subject: formData.subject,
          message: trimmedMessage
        })
      })
      .then(response => {
        if (response.ok) {
          // Record successful submission for daily quota protection
          recordSuccessfulSubmission();
          if (checkContactDailyLimit().reached) {
            setIsLimitReached(true);
          }

          setSuccessMsg('Your message has been sent successfully. I will get back to you soon.');
          setFormData({
            name: '',
            email: '',
            subject: 'Java Lessons',
            message: '',
            honeypot: ''
          });
        } else {
          setErrorMsg('Something went wrong. Please try again or contact us directly.');
        }
      })
      .catch(error => {
        console.error("Fallback submission error:", error);
        setErrorMsg('Something went wrong. Please try again or contact us directly.');
      })
      .finally(() => {
        setIsSubmitting(false);
      });
    }
  };

  return (
    <div className="bg-[#0B0B0F] text-zinc-100 min-h-screen transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        
        {/* Title */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-xs font-bold text-[#FF0800] tracking-wider uppercase">Get Connected</span>
          <h1 className="text-3xl sm:text-5xl font-black text-white mt-1">
            Contact Our Educators
          </h1>
          <p className="text-zinc-400 text-sm mt-3 max-w-xl mx-auto">
            Have a question about our Java curriculum, or want to register for our private tutoring sessions? Send us a direct message or chat with us on WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Form Col (7 cols) */}
          <div className="lg:col-span-7 bg-zinc-900 p-6 md:p-8 rounded-3xl border border-zinc-800 shadow-sm relative z-20">
            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <Send className="w-5 h-5 text-[#FF0800]" />
              Send Us A Message
            </h3>

            {/* Daily Submission Limit Reached Warning Banner */}
            {isLimitReached && (
              <div className="p-4 bg-amber-500/15 border border-amber-500/20 rounded-xl flex items-start gap-3 text-amber-400 text-xs font-semibold mb-6 animate-fadeIn">
                <AlertCircle className="w-5 h-5 shrink-0 mt-0.5 text-amber-400" />
                <div>
                  <span className="font-bold block mb-0.5 text-amber-300">Daily Submission Limit Reached</span>
                  You have reached today's contact message limit. Please try again tomorrow.
                </div>
              </div>
            )}

            {/* Success Feedback Banner */}
            {successMsg && (
              <div className="p-4 bg-emerald-500/15 border border-emerald-500/20 rounded-xl flex items-start gap-3 text-emerald-400 text-xs font-semibold mb-6 animate-fadeIn">
                <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold block mb-0.5 text-emerald-300">Message Sent!</span>
                  {successMsg}
                </div>
              </div>
            )}

            {/* Error Feedback Banner */}
            {errorMsg && (
              <div className="p-4 bg-rose-500/15 border border-rose-500/20 rounded-xl flex items-start gap-3 text-rose-400 text-xs font-semibold mb-6 animate-fadeIn">
                <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold block mb-0.5 text-rose-300">Error Sending Message</span>
                  {errorMsg}
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              {/* Anti-spam honeypot field (hidden from human users, targets automated bots) */}
              <div className="hidden" aria-hidden="true">
                <input
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  value={formData.honeypot}
                  onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="contact-name" className="text-xs font-bold text-zinc-500 uppercase tracking-wide">
                    Full Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 text-sm bg-zinc-950 border border-zinc-800 rounded-xl focus:border-[#FF0800] focus:ring-1 focus:ring-[#FF0800] outline-none transition-colors text-white"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="contact-email" className="text-xs font-bold text-zinc-500 uppercase tracking-wide">
                    Email Address
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@example.com"
                    className="w-full px-4 py-3 text-sm bg-zinc-950 border border-zinc-800 rounded-xl focus:border-[#FF0800] focus:ring-1 focus:ring-[#FF0800] outline-none transition-colors text-white"
                  />
                </div>
              </div>

              {/* Custom Styled Dropdown */}
              <div className="flex flex-col gap-1.5 relative">
                <label className="text-xs font-bold text-zinc-500 uppercase tracking-wide">
                  Inquiry Topic
                </label>
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="w-full px-4 py-3 text-sm bg-zinc-950 border border-zinc-800 rounded-xl focus:border-[#FF0800] focus:ring-1 focus:ring-[#FF0800] outline-none transition-all text-white flex items-center justify-between cursor-pointer text-left shadow-xs"
                  >
                    <span className="font-medium text-zinc-200">
                      {dropdownOptions.find(opt => opt.value === formData.subject)?.label || formData.subject}
                    </span>
                    <ChevronDown className="w-4 h-4 text-zinc-500 transition-transform duration-200 shrink-0" />
                  </button>
                  
                  {isDropdownOpen && (
                    <>
                      <div className="fixed inset-0 z-40" onClick={() => setIsDropdownOpen(false)} />
                      <div className="absolute left-0 right-0 mt-1.5 bg-zinc-900 border border-zinc-800 rounded-xl shadow-lg z-50 overflow-hidden py-1 animate-fadeIn max-h-60 overflow-y-auto">
                        {dropdownOptions.map((opt) => (
                          <button
                            key={opt.value}
                            type="button"
                            onClick={() => {
                              setFormData({ ...formData, subject: opt.value });
                              setIsDropdownOpen(false);
                            }}
                            className={`w-full px-4 py-2.5 text-xs sm:text-sm text-left hover:bg-zinc-800/60 transition-colors ${
                              formData.subject === opt.value
                                ? 'text-[#FF0800] font-black bg-zinc-800/80'
                                : 'text-zinc-300'
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

              <div className="flex flex-col gap-1.5">
                <label htmlFor="contact-message" className="text-xs font-bold text-zinc-500 uppercase tracking-wide">
                  Your Message
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="How can we help you understand Java?"
                  className="w-full px-4 py-3 text-sm bg-zinc-950 border border-zinc-800 rounded-xl focus:border-[#FF0800] focus:ring-1 focus:ring-[#FF0800] outline-none transition-colors text-white resize-none"
                />
              </div>

              <div>
                <button
                  type="submit"
                  disabled={isSubmitting || isLimitReached}
                  className="w-full py-4 px-6 bg-[#FF0800] hover:bg-rose-700 disabled:bg-zinc-800 disabled:text-zinc-500 disabled:cursor-not-allowed disabled:shadow-none text-white font-bold text-xs tracking-wider uppercase rounded-xl shadow-lg shadow-[#FF0800]/25 transition-all active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
                >
                  {isLimitReached ? (
                    <span>Daily Limit Reached (2/2 Messages Sent)</span>
                  ) : isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* Tutoring & Channels Col (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6 relative z-10">
            
            {/* Tutoring CTA Component - Unified Design */}
            <TutoringCTA variant="contact" />

            {/* General Direct Channels */}
            <div className="p-6 rounded-3xl bg-zinc-900 border border-zinc-800 shadow-sm flex flex-col gap-4">
              <h4 className="font-bold text-white text-sm uppercase tracking-wider">
                Direct Channels
              </h4>
              
              <div className="flex flex-col gap-4 text-xs text-zinc-400">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-zinc-800 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-[#FF0800]" />
                  </div>
                  <div>
                    <span className="font-bold block text-white">Email Address</span>
                    <a href={`mailto:${CONTACT.email}`} className="hover:text-[#FF0800] transition-colors">
                      {CONTACT.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-zinc-800 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 text-[#FF0800]" />
                  </div>
                  <div>
                    <span className="font-bold block text-white">Phone / WhatsApp</span>
                    <a href={CONTACT.whatsappLink} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-500 transition-colors">
                      {CONTACT.whatsapp}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-zinc-800 flex items-center justify-center shrink-0">
                    <HelpCircle className="w-4 h-4 text-[#FF0800]" />
                  </div>
                  <div>
                    <span className="font-bold block text-white">Working Hours</span>
                    <span>Monday – Saturday (8:00 AM – 6:00 PM CAT)</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
