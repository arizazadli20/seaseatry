// Footer component

export function Footer() {
  return (
    <footer className="bg-[#0B1121] border-t border-white/10 pt-20 pb-8 px-[20px] md:px-6 relative z-20 pb-24 md:pb-8">
      <div className="container mx-auto max-w-7xl">
        
        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row justify-between gap-16 lg:gap-8 mb-24">
          
          {/* Left Column - Logo & Tagline */}
          <div className="flex flex-col justify-between lg:w-1/3 items-center lg:items-start text-center lg:text-left">
            <div className="mb-12 lg:mb-0">
              <div className="h-10 inline-block mb-8">
                <img 
                  src="/logo.png" 
                  alt="SeaSentry Logo" 
                  className="h-full w-auto object-contain" 
                  style={{ filter: 'brightness(0) invert(1)' }} 
                />
              </div>
              <p className="text-[11px] text-gray-400 font-medium tracking-wide leading-relaxed uppercase">
                Engineered in Azerbaijan.<br/>
                Protecting the Caspian Sea.
              </p>
            </div>
          </div>

          {/* Right Columns - Links */}
          <div className="flex flex-col lg:grid lg:grid-cols-3 gap-12 lg:w-2/3 lg:pl-16 text-center lg:text-left">
            
            {/* Column 1 */}
            <div>
              <h4 className="text-[12px] text-gray-500 font-medium tracking-wide mb-6 uppercase">Company</h4>
              <ul className="space-y-4">
                <li><a href="#hero" className="text-[13px] text-white font-medium hover:text-brand-primary transition-colors uppercase">About Us</a></li>
                <li><a href="#team" className="text-[13px] text-white font-medium hover:text-brand-primary transition-colors uppercase">Team</a></li>
                <li><a href="mailto:seasentry@gmail.com" className="text-[13px] text-white font-medium hover:text-brand-primary transition-colors uppercase">Contact Us</a></li>
              </ul>
            </div>

            {/* Column 2 */}
            <div>
              <h4 className="text-[12px] text-gray-500 font-medium tracking-wide mb-6 uppercase">Platform</h4>
              <ul className="space-y-4">
                <li><a href="#workflow" className="text-[13px] text-white font-medium hover:text-brand-primary transition-colors uppercase">Satellite Intel</a></li>
                <li><a href="#intelligence" className="text-[13px] text-white font-medium hover:text-brand-primary transition-colors uppercase">AI Analysis</a></li>
                <li><a href="#problem" className="text-[13px] text-white font-medium hover:text-brand-primary transition-colors uppercase">Sorbent Recovery</a></li>
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <h4 className="text-[12px] text-gray-500 font-medium tracking-wide mb-6 uppercase">Contact Us</h4>
              <ul className="space-y-4">
                <li className="text-[13px] text-white font-medium leading-relaxed uppercase">
                  Baku, AZ1000,<br/>
                  Azerbaijan
                </li>
                <li><a href="tel:+994503806566" className="text-[13px] text-white font-medium hover:text-brand-primary transition-colors uppercase">+994 50 380 65 66</a></li>
                <li><a href="mailto:seasentry@gmail.com" className="text-[13px] text-white font-medium hover:text-brand-primary transition-colors uppercase">seasentry@gmail.com</a></li>
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-gray-400 font-medium tracking-wide uppercase text-center md:text-left">
            © {new Date().getFullYear()} SeaSentry. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
