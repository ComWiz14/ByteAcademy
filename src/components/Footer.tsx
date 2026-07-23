import { Link } from 'react-router-dom';
import { Terminal, Mail, Phone, ExternalLink, MessageCircle, Facebook } from 'lucide-react';
import { CONTACT } from '../constants/contact';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Learn Java', path: '/learn-java' },
    { name: 'Worked Examples', path: '/examples' },
    { name: 'Setup Guide', path: '/downloads' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <footer className="bg-[#07070a] border-t border-zinc-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand Col */}
          <div className="md:col-span-1 flex flex-col gap-4">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#FF0800] shadow-md shadow-[#FF0800]/25">
                <Terminal className="w-4.5 h-4.5 text-white" />
              </div>
              <span className="text-lg font-bold tracking-tight text-white">
                Byte<span className="text-[#FF0800]">Academy</span>
              </span>
            </Link>
            <p className="text-sm text-zinc-400 leading-relaxed">
              An educational platform dedicated to teaching Java through clear concepts, practical demonstrations, and real comprehension. Learn to understand, not memorize.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold text-zinc-400 tracking-wider uppercase mb-4">Quick Navigation</h4>
            <ul className="flex flex-col gap-2.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-zinc-400 hover:text-[#FF0800] transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Col */}
          <div>
            <h4 className="text-xs font-bold text-zinc-400 tracking-wider uppercase mb-4">Get In Touch</h4>
            <ul className="flex flex-col gap-3 text-sm text-zinc-400">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#FF0800] shrink-0" />
                <a href={`mailto:${CONTACT.email}`} className="hover:text-[#FF0800] transition-colors">
                  {CONTACT.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#FF0800] shrink-0" />
                <span>{CONTACT.whatsapp}</span>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                <a
                  href={CONTACT.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  referrerPolicy="no-referrer"
                  className="hover:text-emerald-500 font-medium transition-colors inline-flex items-center gap-1"
                >
                  WhatsApp Support <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Facebook className="w-4 h-4 text-blue-500 shrink-0" />
                <a
                  href={CONTACT.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  referrerPolicy="no-referrer"
                  className="hover:text-blue-400 font-medium transition-colors inline-flex items-center gap-1"
                >
                  Facebook Page <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Tutoring Notice Col */}
          <div>
            <h4 className="text-xs font-bold text-zinc-400 tracking-wider uppercase mb-4">Private Tutoring</h4>
            <p className="text-sm text-zinc-400 leading-relaxed mb-4">
              Need personalized support? Book one-on-one sessions tailored for students and hobbyists at only <strong className="text-[#FF0800]">MWK 20,000/mo</strong>.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 font-semibold text-xs tracking-wider uppercase rounded-lg transition-all"
            >
              Inquire Now
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-zinc-800" />

        {/* Bottom Line */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <span>&copy; {currentYear} ByteAcademy. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
