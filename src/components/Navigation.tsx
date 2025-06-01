
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-saffron-200 shadow-lg">
      <style>{`
        #menu-checkbox {
          display: none;
        }

        .toggle {
          position: relative;
          width: 40px;
          height: 40px;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 10px;
          transition-duration: .5s;
        }

        .bars {
          width: 100%;
          height: 4px;
          background-color: #a16207;
          border-radius: 4px;
        }

        #bar2 {
          transition-duration: .8s;
        }

        #bar1, #bar3 {
          width: 70%;
        }

        #menu-checkbox:checked + .toggle .bars {
          position: absolute;
          transition-duration: .5s;
        }

        #menu-checkbox:checked + .toggle #bar2 {
          transform: scaleX(0);
          transition-duration: .5s;
        }

        #menu-checkbox:checked + .toggle #bar1 {
          width: 100%;
          transform: rotate(45deg);
          transition-duration: .5s;
        }

        #menu-checkbox:checked + .toggle #bar3 {
          width: 100%;
          transform: rotate(-45deg);
          transition-duration: .5s;
        }

        #menu-checkbox:checked + .toggle {
          transition-duration: .5s;
          transform: rotate(180deg);
        }
      `}</style>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-playfair font-bold">
              <span className="gradient-text">Bahar Al Zafran</span>
            </h1>
            <p className="text-xs text-saffron-700 arabic-text mt-1">
              مطحنة و اعشاب بحرالزعفران
            </p>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => scrollToSection('home')}
                className="text-earth-700 hover:text-saffron-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-earth-700 hover:text-saffron-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                About Us
              </button>
              <button
                onClick={() => scrollToSection('products')}
                className="text-earth-700 hover:text-saffron-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Products
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-earth-700 hover:text-saffron-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-earth-700 hover:text-saffron-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Contact Button */}
          <div className="hidden md:flex items-center">
            <Button
              onClick={() => scrollToSection('contact')}
              className="bg-saffron-500 hover:bg-saffron-600 text-white flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <input 
              type="checkbox" 
              id="menu-checkbox" 
              checked={isMenuOpen}
              onChange={handleMenuToggle}
            />
            <label htmlFor="menu-checkbox" className="toggle">
              <div className="bars" id="bar1"></div>
              <div className="bars" id="bar2"></div>
              <div className="bars" id="bar3"></div>
            </label>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-saffron-200">
              <button
                onClick={() => scrollToSection('home')}
                className="block w-full text-left px-3 py-2 text-base font-medium text-earth-700 hover:text-saffron-600"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="block w-full text-left px-3 py-2 text-base font-medium text-earth-700 hover:text-saffron-600"
              >
                About Us
              </button>
              <button
                onClick={() => scrollToSection('products')}
                className="block w-full text-left px-3 py-2 text-base font-medium text-earth-700 hover:text-saffron-600"
              >
                Products
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="block w-full text-left px-3 py-2 text-base font-medium text-earth-700 hover:text-saffron-600"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left px-3 py-2 text-base font-medium text-earth-700 hover:text-saffron-600"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
