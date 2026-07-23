import { motion } from 'motion/react';
import { ShieldCheck, MessageCircle } from 'lucide-react';
import { CONTACT } from '../constants/contact';

interface TutoringCTAProps {
  variant?: 'homepage' | 'lesson' | 'module' | 'contact' | 'plain' | 'compact';
}

export default function TutoringCTA({ variant = 'homepage' }: TutoringCTAProps) {
  const whatsappUrl = CONTACT.whatsappEnquiryLink;

  const cardContent = (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="p-6 md:p-8 rounded-3xl bg-gradient-to-tr from-[#FF0800]/5 to-rose-500/5 border border-[#FF0800]/10 shadow-sm relative overflow-hidden flex flex-col gap-5 w-full text-left"
    >
      {/* Background decoration */}
      <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#FF0800]/5 rounded-full blur-2xl pointer-events-none" />
      
      {/* Header Info */}
      <div className="flex items-center gap-2 text-[#FF0800]">
        <ShieldCheck className="w-5 h-5 shrink-0" />
        <span className="text-xs font-black uppercase tracking-wider">Premium Support</span>
      </div>

      {/* Title & Desc */}
      <div>
        <h3 className="text-xl sm:text-2xl font-black text-white leading-tight">
          Need More Guidance With Java?
        </h3>
        <p className="text-xs sm:text-sm text-zinc-400 mt-2 leading-relaxed">
          ByteAcademy provides free, structured Java lessons designed to help you learn programming through clear explanations, practical examples, and hands-on practice. For learners who want additional personal support, our one-on-one Java mentorship provides dedicated guidance, exam preparation, and direct tutor assistance.
        </p>
      </div>

      {/* Pricing */}
      <div className="pt-4 border-t border-zinc-850 flex items-baseline gap-1.5">
        <span className="text-2xl font-black text-white">MWK 20,000</span>
        <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">/ month</span>
      </div>

      {/* Benefits List */}
      <ul className="flex flex-col gap-2.5 text-xs text-zinc-400 my-1">
        <li className="flex items-start gap-2">
          <span className="text-[#FF0800] font-bold shrink-0 select-none">•</span>
          <span>2 personalized Java sessions per week</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-[#FF0800] font-bold shrink-0 select-none">•</span>
          <span>Face-to-face or online learning support</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-[#FF0800] font-bold shrink-0 select-none">•</span>
          <span>Assignment guidance and exam preparation</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-[#FF0800] font-bold shrink-0 select-none">•</span>
          <span>Homework reviews</span>
        </li>
        <li className="flex items-start gap-2 font-semibold text-zinc-200">
          <span className="text-[#FF0800] font-bold shrink-0 select-none">•</span>
          <span>Direct tutor support</span>
        </li>
      </ul>

      {/* WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        referrerPolicy="no-referrer"
        className="w-full py-3.5 px-4 bg-emerald-500 hover:bg-emerald-600 active:scale-95 text-white font-bold text-xs tracking-wider uppercase rounded-xl shadow-md hover:shadow-lg hover:shadow-emerald-500/25 flex items-center justify-center gap-1.5 transition-all cursor-pointer text-center"
      >
        <MessageCircle className="w-5 h-5 shrink-0" />
        <span>Enquire via WhatsApp</span>
      </a>
    </motion.div>
  );

  const compactContent = (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="p-5 md:p-6 rounded-2xl bg-gradient-to-r from-[#FF0800]/5 via-rose-500/5 to-transparent border border-[#FF0800]/10 shadow-xs relative overflow-hidden flex flex-col lg:flex-row lg:items-center justify-between gap-6 w-full text-left"
    >
      {/* Background decoration */}
      <div className="absolute -top-8 -right-8 w-20 h-20 bg-[#FF0800]/5 rounded-full blur-xl pointer-events-none" />
      
      {/* Left: Content */}
      <div className="flex-col gap-3 flex-1 flex">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
          <div className="flex items-center gap-1.5 text-[#FF0800]">
            <ShieldCheck className="w-4 h-4 shrink-0" />
            <span className="text-[10px] font-black uppercase tracking-wider">Premium Support</span>
          </div>
          <div className="text-xs font-black text-white bg-zinc-850 px-2.5 py-0.5 rounded-full border border-zinc-800/50">
            MWK 20,000 / month
          </div>
        </div>
        
        <div className="space-y-1">
          <h3 className="text-base md:text-lg font-black text-white leading-tight">
            Need extra help learning Java?
          </h3>
          <p className="text-xs text-zinc-400 leading-relaxed max-w-3xl">
            ByteAcademy offers personalized one-on-one Java mentorship for learners who want deeper guidance, exam preparation, and direct tutor support.
          </p>
        </div>

        {/* Benefits Grid */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 text-[11px] text-zinc-400 mt-1">
          <li className="flex items-center gap-1.5">
            <span className="text-[#FF0800] font-bold shrink-0 select-none">•</span>
            <span>2 customized sessions per week</span>
          </li>
          <li className="flex items-center gap-1.5">
            <span className="text-[#FF0800] font-bold shrink-0 select-none">•</span>
            <span>Online or face-to-face support</span>
          </li>
          <li className="flex items-center gap-1.5">
            <span className="text-[#FF0800] font-bold shrink-0 select-none">•</span>
            <span>Assignment and exam preparation</span>
          </li>
          <li className="flex items-center gap-1.5">
            <span className="text-[#FF0800] font-bold shrink-0 select-none">•</span>
            <span>Direct learner support</span>
          </li>
        </ul>
      </div>

      {/* Right: CTA Button */}
      <div className="shrink-0 flex items-center lg:self-center">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          referrerPolicy="no-referrer"
          className="w-full lg:w-auto py-3 px-5 bg-emerald-500 hover:bg-emerald-600 active:scale-95 text-white font-bold text-xs tracking-wider uppercase rounded-xl shadow-md hover:shadow-lg hover:shadow-emerald-500/25 flex items-center justify-center gap-1.5 transition-all cursor-pointer text-center whitespace-nowrap"
        >
          <MessageCircle className="w-4 h-4 shrink-0" />
          <span>Enquire via WhatsApp</span>
        </a>
      </div>
    </motion.div>
  );

  if (variant === 'compact') {
    return compactContent;
  }

  if (variant === 'plain' || variant === 'contact') {
    return cardContent;
  }

  if (variant === 'lesson' || variant === 'module') {
    return (
      <div className="my-12 max-w-2xl mx-auto w-full px-1 sm:px-0">
        {compactContent}
      </div>
    );
  }

  // default / homepage variant wrapped in a nice wide centered container
  return (
    <section className="py-20 bg-zinc-950/20 border-t border-zinc-900">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        {cardContent}
      </div>
    </section>
  );
}
