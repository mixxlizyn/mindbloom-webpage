import { Heart, MessageCircle, Phone, Mail } from "lucide-react";

const Footer = () => {
  const openWhatsApp = () => {
    window.open("https://wa.me/your-phone-number", "_blank");
  };

  const openTelegram = () => {
    window.open("https://t.me/your-username", "_blank");
  };

  return (
    <footer className="bg-gradient-to-r from-healing to-calm text-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Ксения Батурина</h3>
            <p className="text-white/80 leading-relaxed">
              Практикующий психолог с 5+ летним опытом. Помогаю людям обрести
              внутреннюю гармонию и решить жизненные вопросы.
            </p>
            <div className="flex items-center gap-2 text-white/80">
              <Heart className="w-4 h-4 fill-current" />
              <span className="text-sm">
                Сделано с заботой о вашем благополучии
              </span>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Услуги</h4>
            <ul className="space-y-2 text-white/80">
              <li>
                <a
                  href="#services"
                  className="hover:text-white transition-colors"
                >
                  Песочная терапия
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-white transition-colors"
                >
                  Телесная терапия
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-white transition-colors"
                >
                  ДПДГ терапия
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-white transition-colors"
                >
                  Клубные встречи
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-white transition-colors"
                >
                  Онлайн консультации
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Навигация</h4>
            <ul className="space-y-2 text-white/80">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  Обо мне
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-white transition-colors"
                >
                  Услуги
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="hover:text-white transition-colors"
                >
                  Отзывы
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-white transition-colors"
                >
                  Контакты
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Контакты</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4" />
                <span className="text-white/80">+7 (917) 400-72-83</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4" />
                <span className="text-white/80">kuzminakm@mail.ru</span>
              </div>
              <div className="flex gap-2 pt-2">
                <button
                  onClick={openWhatsApp}
                  className="p-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="w-5 h-5" />
                </button>
                <button
                  onClick={openTelegram}
                  className="p-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors"
                  aria-label="Telegram"
                >
                  <Phone className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-white/60 text-sm">
              © 2024 Ксения Батурина. Психологические услуги. Все права
              защищены.
            </div>
            <div className="flex gap-6 text-sm text-white/60">
              <a href="#" className="hover:text-white transition-colors">
                Политика конфиденциальности
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Условия услуг
              </a>
            </div>
          </div>
          <div className="text-center text-white/40 text-xs mt-4">
            Лицензия на осуществление медицинской деятельности № ЛО-77-01-000000
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
