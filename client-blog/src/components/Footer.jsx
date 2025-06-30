import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full bg-white border-gray-200">
      <div className="w-full max-w-[1900px] mt-4 mx-auto px-12 py-20 grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-0 font-sans">
        {/* Column 1: Logo + About */}
        <div className="pr-8">
           <div className="flex items-center gap-2 mb-2">
            <img src="/images/logo.png" alt="Logo" width={20} height={15} className="object-contain" />
            <h2 className="font-semibold text-base text-gray-800 tracking-tight">QUORE B2B MARKETING</h2>
          </div>
          <div className="flex gap-2">
            <div className="h-1 w-2 bg-[#00d8a6] mb-7 mt-3 rounded-sm"></div>
            <div className="h-1 w-10 bg-[#00d8a6] mb-7 mt-3 rounded-sm"></div>
          </div>
          <p className="text-sm text-gray-700 leading-relaxed">
            At Quore B2B Marketing, we help businesses grow through strategic, creative partnerships that drive results and make them stand out in the competitive B2B landscape.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div className="pl-4">
          <h3 className="text-base font-semibold mb-2 tracking-tight text-gray-800">QUICK LINKS</h3>
          <div className="flex gap-2">
            <div className="h-1 w-2 bg-[#00d8a6] mb-7 mt-3 rounded-sm"></div>
            <div className="h-1 w-10 bg-[#00d8a6] mb-7 mt-3 rounded-sm"></div>
          </div>
          <ul className="space-y-2 text-sm text-gray-900">
            <li><a href="#careers" className="hover:text-[#00d8a6] transition">Careers</a></li>
            <li><a href="#about" className="hover:text-[#00d8a6] transition">About</a></li>
            <li><a href="#terms" className="hover:text-[#00d8a6] transition">Terms of use</a></li>
            <li><a href="#privacy" className="hover:text-[#00d8a6] transition">Privacy & Policy</a></li>
            <li><a href="#california" className="hover:text-[#00d8a6] transition">California Do Not Sell My Info</a></li>
            <li><a href="#contact" className="hover:text-[#00d8a6] transition">Contact</a></li>
          </ul>
        </div>

        {/* Column 3: Contact */}
        <div className="pl-4">
          <h3 className="font-semibold text-base mb-2 tracking-tight text-gray-800">CONTACT</h3>
          <div className="flex gap-2">
            <div className="h-1 w-2 bg-[#00d8a6] mb-7 mt-3 rounded-sm"></div>
            <div className="h-1 w-10 bg-[#00d8a6] mb-7 mt-3 rounded-sm"></div>
          </div>
          <p className="text-sm text-gray-700 mb-4">
            <span className="text-[#00d8a6] font-bold text-xl">India:</span> Marvel Fuego Office, 7140 seventh floor, opposite We Work, Magarpatta road, Hadapsar, Pune 411028
          </p>
          <p className="text-sm text-gray-700 mb-4">
            <span className="text-[#00d8a6] font-bold text-xl">USA:</span> 539 W. Commerce St #2577 Dallas, TX 75208
          </p>
          <p className="text-sm text-gray-700 mb-4">Email: contactus@quoreb2b.com</p>
          <p className="text-sm text-gray-700">Phone: +1 332-231-0404</p>
        </div>

        {/* Column 4: Map */}
        <div className="pl-4">
          <h3 className="font-semibold text-base mb-2 tracking-tight text-gray-800">LOCATION ON MAP</h3>
          <div className="flex gap-2">
            <div className="h-1 w-2 bg-[#00d8a6] mb-7 mt-3 rounded-sm"></div>
            <div className="h-1 w-10 bg-[#00d8a6] mb-7 mt-3 rounded-sm"></div>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.2294415337057!2d73.856743!3d18.5204303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c08744a74c81%3A0x4cbe7e56a3d1a1a9!2sPune%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sin!4v1633958808463!5m2!1sen!2sin"
            width="100%"
            height="170"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            className="rounded-lg"
            title="Quore B2B Marketing Location Map"
          ></iframe>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative w-full bg-gradient-to-br from-[#2a2a2a] via-[#333] to-[#1f1f1f] text-[#ffffffcb] text-sm flex items-center justify-between py-8 px-12 rounded-b-xl overflow-hidden group transition-all duration-500 hover:shadow-2xl hover:shadow-[#00d8a6]/20 border-t border-[#404040]">
        {/* Animated background overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#00d8a6]/3 via-transparent to-[#00d8a6]/3 opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
        
        {/* Subtle animated dots */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute w-1 h-1 bg-[#00d8a6] rounded-full animate-pulse opacity-20" style={{top: '25%', left: '15%', animationDelay: '0s'}}></div>
          <div className="absolute w-0.5 h-0.5 bg-[#00d8a6] rounded-full animate-pulse opacity-30" style={{top: '70%', left: '25%', animationDelay: '1.5s'}}></div>
          <div className="absolute w-1 h-1 bg-[#00d8a6] rounded-full animate-pulse opacity-25" style={{top: '40%', right: '30%', animationDelay: '3s'}}></div>
        </div>

        {/* Copyright section with enhanced styling */}
        <div className="relative z-10 flex items-center space-x-2">
          <span className="text-[#ffffffcb] group-hover:text-white transition-all duration-300">©</span>
          <span className="text-[#00d8a6] font-semibold hover:text-[#00f2b8] transition-colors duration-300 cursor-pointer tracking-wide">
            2025 quoreb2b.com
          </span>
          <span className="text-[#ffffff80]">|</span>
          <span className="text-[#ffffffcb] group-hover:text-white transition-colors duration-300">
            All Rights Reserved.
          </span>
          
          {/* Subtle badge */}
          <div className="hidden lg:flex items-center ml-6 px-3 py-1 bg-[#404040]/50 rounded-full text-xs text-[#ffffff70] border border-[#505050]/30 hover:border-[#00d8a6]/30 transition-all duration-300">
            <span className="w-2 h-2 bg-[#00d8a6] rounded-full mr-2 animate-pulse"></span>
            B2B Excellence
          </div>
        </div>

        {/* Enhanced LinkedIn section */}
        <div className="relative z-10 flex items-center space-x-4">
          <span className="hidden md:block text-xs text-[#ffffff50] font-light tracking-wider">
            Connect with us
          </span>
          
          <div className="flex items-center space-x-3">
            <a
              href="https://www.linkedin.com/company/quoreb2bmarketing"
              target="_blank"
              rel="noopener noreferrer"
              className="group/linkedin relative p-3 text-[#ffffffcb] hover:text-[#0077b5] text-xl transition-all duration-300 transform hover:scale-110 hover:-rotate-6 rounded-lg hover:bg-[#0077b5]/10"
              aria-label="Follow us on LinkedIn"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-[#0077b5]/20 rounded-lg opacity-0 group-hover/linkedin:opacity-100 transition-opacity duration-300 blur-sm"></div>
              
              <svg className="relative z-10 drop-shadow-lg w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              
              {/* Tooltip */}
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-[#0077b5] text-white text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover/linkedin:opacity-100 transition-all duration-300 pointer-events-none shadow-lg">
                Follow on LinkedIn
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-[#0077b5]"></div>
              </div>
            </a>

            {/* Additional social placeholder with subtle styling */}
            <div className="w-px h-8 bg-[#404040] mx-2"></div>
            
            <button
              className="group/contact relative p-2 text-[#ffffffcb] hover:text-[#00d8a6] text-lg transition-all duration-300 transform hover:scale-105 rounded-lg hover:bg-[#00d8a6]/10"
              aria-label="Contact us"
              onClick={() => window.open('mailto:contactus@quoreb2b.com', '_blank')}
            >
              <div className="absolute inset-0 bg-[#00d8a6]/20 rounded-lg opacity-0 group-hover/contact:opacity-100 transition-opacity duration-300 blur-sm"></div>
              <svg className="relative z-10 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              
              {/* Tooltip */}
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-[#00d8a6] text-white text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover/contact:opacity-100 transition-all duration-300 pointer-events-none shadow-lg whitespace-nowrap">
                Get in touch
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-[#00d8a6]"></div>
              </div>
            </button>
          </div>
        </div>

        {/* Animated bottom accent line */}
        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#00d8a6] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out"></div>
        
        {/* Corner accents */}
        <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-[#00d8a6] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-200"></div>
        <div className="absolute bottom-0 right-0 w-8 h-0.5 bg-[#00d8a6] transform origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-200"></div>
      </div>
    </footer>
  );
}