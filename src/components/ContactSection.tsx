import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, MapPin, Clock, Mail } from "lucide-react";

const ContactSection = () => {
  const openWhatsApp = () => {
    window.open("https://wa.me/your-phone-number", "_blank");
  };

  const openTelegram = () => {
    window.open("https://t.me/your-username", "_blank");
  };

  return (
    <section
      className="py-20 px-4 bg-gradient-to-b from-muted to-background"
      id="contact"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Свяжитесь</span>{" "}
            <span className="bg-gradient-to-r from-healing to-calm bg-clip-text text-transparent">
              со мной
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Готова ответить на ваши вопросы и помочь сделать первый шаг к
            изменениям
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <Card className="p-6 bg-gradient-to-br from-healing-light to-transparent border-healing/20">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-healing text-white rounded-lg">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">
                    Телефон и мессенджеры
                  </h3>
                  <div className="space-y-2">
                    <div className="flex gap-3">
                      <Button
                        onClick={openWhatsApp}
                        className="bg-[#25D366] hover:bg-[#128C7E]"
                      >
                        <MessageCircle className="mr-2 h-4 w-4" />
                        WhatsApp
                      </Button>
                      <Button
                        onClick={openTelegram}
                        className="bg-[#0088cc] hover:bg-[#0077b3]"
                      >
                        <Phone className="mr-2 h-4 w-4" />
                        Telegram
                      </Button>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      +7 (917) 400-72-83
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-warmth-light to-transparent border-warmth/20">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-warmth text-white rounded-lg">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Email</h3>
                  <p className="text-muted-foreground">kuzminakm@mail.ru</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Отвечаю в течение 24 часов
                  </p>
                </div>
              </div>
            </Card>

            {/* <Card className="p-6 bg-gradient-to-br from-calm-light to-transparent border-calm/20">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-calm text-white rounded-lg">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Адрес кабинета</h3>
                  <p className="text-muted-foreground">
                    г. Москва, ул. Психологов, д. 15
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Рядом с метро "Сокольники"
                  </p>
                </div>
              </div>
            </Card> */}

            {/* <Card className="p-6 bg-gradient-to-br from-healing-light to-calm-light border-0">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-r from-healing to-calm text-white rounded-lg">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Часы работы</h3>
                  <div className="space-y-1 text-muted-foreground">
                    <div className="flex justify-between">
                      <span>Пн-Пт:</span>
                      <span>10:00 - 20:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Суббота:</span>
                      <span>11:00 - 17:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Воскресенье:</span>
                      <span>выходной</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card> */}
          </div>

          <div className="space-y-6">
            <Card className="p-8 bg-gradient-to-br from-card to-muted border-healing/10">
              <h3 className="text-2xl font-semibold mb-6 text-healing">
                Онлайн консультации
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Провожу сессии онлайн через защищенные платформы. Это удобно для
                тех, кто находится в другом городе или предпочитает домашнюю
                обстановку.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-healing rounded-full"></div>
                  <span className="text-sm">Zoom, WhatsApp видеозвонки</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-healing rounded-full"></div>
                  <span className="text-sm">Полная конфиденциальность</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-healing rounded-full"></div>
                  <span className="text-sm">Гибкое расписание</span>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-warmth-light to-healing-light border-0">
              <h3 className="text-2xl font-semibold mb-4 text-warmth">
                Запись на консультацию
              </h3>
              <p className="text-muted-foreground mb-6">
                Выберите удобный способ связи для записи на первую встречу
              </p>
              <div className="space-y-3">
                <Button
                  onClick={openWhatsApp}
                  className="w-full bg-gradient-to-r from-healing to-calm hover:shadow-lg transition-all duration-300"
                  size="lg"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Записаться через WhatsApp
                </Button>
                <Button
                  onClick={openTelegram}
                  variant="outline"
                  className="w-full border-healing text-healing hover:bg-healing-light transition-all duration-300"
                  size="lg"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Записаться через Telegram
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
