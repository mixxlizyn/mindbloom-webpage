import { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { href: '#about', label: 'О себе', isAnchor: true },
    { href: '#services', label: 'Услуги', isAnchor: true },
    { href: '/club-meetings', label: 'Клубные встречи', isAnchor: false },
    { href: '#testimonials', label: 'Отзывы', isAnchor: true },
    { href: '#contact', label: 'Контакты', isAnchor: true },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string, isAnchor: boolean) => {
    setIsMenuOpen(false);
    if (isAnchor) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.location.href = href;
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/80 backdrop-blur-md border-b shadow-sm' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold text-primary">
            Психолог
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href, item.isAnchor)}
                className="text-foreground/80 hover:text-primary transition-colors cursor-pointer"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Contact Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Button size="sm" variant="outline" asChild>
              <a href="https://wa.me/your-number" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
            </Button>
            <Button size="sm" asChild>
              <a href="tel:+your-phone">
                <Phone className="w-4 h-4" />
                Позвонить
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t bg-background/95 backdrop-blur-sm rounded-lg">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href, item.isAnchor)}
                  className="text-left text-foreground/80 hover:text-primary transition-colors px-4 py-2"
                >
                  {item.label}
                </button>
              ))}
              <div className="flex flex-col space-y-2 px-4 pt-4 border-t">
                <Button size="sm" variant="outline" asChild>
                  <a href="https://wa.me/your-number" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp
                  </a>
                </Button>
                <Button size="sm" asChild>
                  <a href="tel:+your-phone">
                    <Phone className="w-4 h-4" />
                    Позвонить
                  </a>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;