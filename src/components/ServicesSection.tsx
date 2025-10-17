import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import sandboxTherapy from "@/assets/sandbox-therapy.jpg";
import bodyTherapy from "@/assets/body-therapy.jpg";
import emdrTherapy from "@/assets/emdr-therapy.jpg";
import groupTherapy from "@/assets/group-therapy.jpg";
import transformGame from "@/assets/transformGame.jpg";
import motherAndMe from "@/assets/mama.jpg";
import NationalDoll from "@/assets/national-doll.jpg";
import psychosomatics from "@/assets/psychosomatics.jpg";
import HolisticMassage from "@/assets/holistic-massage.jpg";

const ServicesSection = () => {
  const services = [
    {
      title: "Песочная терапия",
      description:
        "Работа с подсознанием через создание символических композиций в песочнице. Эффективна для проработки травм и внутренних конфликтов.",
      image: sandboxTherapy,
      duration: "60 минут",
      price: "от 3500 ₽",
      color: "healing",
    },
    {
      title: "Телесная терапия",
      description:
        "Работа с телесными зажимами и напряжениями. Помогает восстановить связь с телом и освободить заблокированные эмоции.",
      image: bodyTherapy,
      duration: "90 минут",
      price: "от 4000 ₽",
      color: "warmth",
    },
    {
      title: "ДПДГ терапия",
      description:
        "Эффективный метод работы с травмами и посттравматическими стрессовыми расстройствами через двустороннюю стимуляцию мозга.",
      image: emdrTherapy,
      duration: "60 минут",
      price: "от 4500 ₽",
      color: "calm",
    },
    {
      title: "Клубные встречи",
      description:
        "Групповая терапия и тематические встречи. Поддержка в кругу единомышленников и работа над общими вопросами.",
      image: groupTherapy,
      duration: "120 минут",
      price: "от 2000 ₽",
      color: "burgundy",
    },
    {
      title: "Трансформационные игры",
      description:
        "Игровые практики для глубинной трансформации и осознания жизненных паттернов. Раскрытие внутреннего потенциала через метафорический процесс.",
      image: transformGame,
      duration: "от 60 до 180 минут",
      price: "от 3000 ₽",
      color: "healing",
      subServices: [
        {
          title: "Я мама",
          duration: "60 минут",
          price: "от 3500 ₽",
        },
        {
          title: "Энергия рода",
          duration: "90 минут",
          price: "от 4500 ₽",
        },
      ],
    },
    {
      title: "Психосоматика",
      description:
        "Исследование связи между эмоциями и телесными проявлениями. Работа с психосоматическими симптомами через осознание глубинных причин.",
      image: psychosomatics,
      duration: "90 минут",
      price: "от 4000 ₽",
      color: "burgundy",
    },
    {
      title: "Мастер-класс: Народная кукла",
      description:
        "Творческий процесс изготовления народной куклы как терапевтическая практика. Погружение в традиции и работа с личными смыслами.",
      image: NationalDoll,
      duration: "120 минут",
      price: "от 2500 ₽",
      color: "burgundy",
    },
    {
      title: "Холистический массаж",
      description:
        "Комплексный подход к телу и душе. Работа с энергетическими центрами и снятие физических и эмоциональных блоков через прикосновение.",
      image: HolisticMassage,
      duration: "90 минут",
      price: "от 4500 ₽",
      color: "burgundy",
    },
  ];

  const openWhatsApp = (serviceTitle?: string) => {
    const baseUrl = "https://wa.me/79174007283";
    const text = serviceTitle
      ? `Здравствуйте! Хочу записаться на услугу: ${serviceTitle}.`
      : "Здравствуйте! Хочу записаться на консультацию 💬";
    window.open(`${baseUrl}?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <section
      className="py-24 px-4 bg-gradient-to-b from-background to-muted"
      id="services"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6">
            <span className="text-foreground">Мои</span>{" "}
            <span className="bg-gradient-to-r from-healing to-burgundy bg-clip-text text-transparent">
              услуги
            </span>
          </h2>
          <p className="text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Разнообразные терапевтические подходы для работы с различными
            запросами
          </p>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="overflow-hidden group hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] bg-card flex flex-col h-full"
            >
              <div className="aspect-[3/2] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start gap-3 mb-3">
                  <h3
                    className={`text-2xl font-semibold text-${service.color} leading-tight`}
                  >
                    {service.title}
                  </h3>
                  <div className="text-right flex-shrink-0">
                    <div className="text-sm text-muted-foreground whitespace-nowrap">
                      {service.duration}
                    </div>
                    <div className="font-semibold text-healing text-base whitespace-nowrap">
                      {service.price}
                    </div>
                  </div>
                </div>

                <p className="text-base text-muted-foreground leading-relaxed mb-4 flex-grow">
                  {service.description}
                </p>

                {service.subServices && (
                  <div className="mb-5 space-y-3">
                    {service.subServices.map((sub, i) => (
                      <div
                        key={i}
                        className="flex justify-between items-center bg-muted/50 p-3 rounded-lg"
                      >
                        <div>
                          <div className="font-medium text-lg text-foreground">
                            {sub.title}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {sub.duration} — {sub.price}
                          </div>
                        </div>
                        <Button
                          onClick={() => openWhatsApp(sub.title)}
                          size="sm"
                          className="bg-gradient-to-r from-healing to-calm text-white"
                        >
                          Записаться
                        </Button>
                      </div>
                    ))}
                  </div>
                )}

                <Button
                  onClick={() => openWhatsApp(service.title)}
                  className={`w-full hover:shadow-lg transition-all duration-300 mt-auto text-lg py-4 rounded-xl ${
                    service.color === "healing"
                      ? "bg-gradient-to-r from-healing to-calm"
                      : service.color === "warmth"
                      ? "bg-gradient-to-r from-warmth to-healing"
                      : service.color === "burgundy"
                      ? "bg-gradient-to-r from-burgundy to-healing"
                      : service.color === "calm"
                      ? "bg-gradient-to-r from-calm to-healing"
                      : "bg-gradient-to-r from-healing to-burgundy"
                  }`}
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Записаться
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-20">
          <Card className="p-10 bg-gradient-to-r from-healing-light to-calm-light border-0 max-w-2xl mx-auto">
            <h3 className="text-3xl font-semibold mb-4 text-healing">
              Первая консультация
            </h3>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Бесплатная 20-минутная встреча для знакомства и определения
              подходящего метода работы
            </p>
            <Button
              onClick={() => openWhatsApp()}
              size="lg"
              className="text-lg py-5 bg-gradient-to-r from-healing to-burgundy hover:shadow-xl transition-all duration-300"
            >
              <MessageCircle className="mr-3 h-6 w-6" />
              Записаться на знакомство
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
