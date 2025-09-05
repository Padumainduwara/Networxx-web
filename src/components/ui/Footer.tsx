// src/components/ui/Footer.tsx

import { FaLinkedin, FaFacebook, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 w-full border-t border-cyan-400/20 bg-black py-10 text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-8 text-center md:grid-cols-3 md:text-left">
        {/* Column 1: Company Info */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-2xl font-bold tracking-wider">NETWORXX<span className="text-cyan-400">.</span></h3>
          <p className="mt-4 text-sm text-gray-400">
            Professionals in Managed Services & Cyber Security Solutions, delivering with the professionalism and integrity you deserve since 2012.
          </p>
        </div>

        {/* Column 2: Sri Lanka HQ */}
        <div>
          <h4 className="text-lg font-semibold">Sri Lanka (HQ)</h4>
          <address className="mt-4 space-y-2 text-sm not-italic text-gray-400">
            <p>NO 22/5, Sujatha Avenue, Kalubowila, Dehiwala, Sri Lanka.</p>
            <p>Email: <a href="mailto:info@networxx.lk" className="hover:text-cyan-400">info@networxx.lk</a></p>
            <p>Phone: <a href="tel:+94112727070" className="hover:text-cyan-400">+94 112 72 7070</a></p>
          </address>
        </div>

        {/* Column 3: Qatar Branch */}
        <div>
          <h4 className="text-lg font-semibold">Qatar Branch</h4>
          <address className="mt-4 space-y-2 text-sm not-italic text-gray-400">
            <p>P.O Box 47012, Qatar.</p>
            <p>Email: <a href="mailto:info@networxx.lk" className="hover:text-cyan-400">info@networxx.lk</a></p>
            <p>Phone: <a href="tel:+97450608008" className="hover:text-cyan-400">+974 5060 8008</a></p>
          </address>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mx-auto mt-10 max-w-7xl border-t border-cyan-400/20 px-8 pt-6">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs text-gray-500">
            &copy; {currentYear} NETWORXX. All Rights Reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-gray-500 transition-colors hover:text-cyan-400"><FaLinkedin size={20} /></a>
            <a href="#" className="text-gray-500 transition-colors hover:text-cyan-400"><FaTwitter size={20} /></a>
            <a href="#" className="text-gray-500 transition-colors hover:text-cyan-400"><FaFacebook size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}