import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import sandboxTherapy from "@/assets/sandbox-therapy.jpg";
import bodyTherapy from "@/assets/body-therapy.jpg";
import emdrTherapy from "@/assets/emdr-therapy.jpg";
import groupTherapy from "@/assets/group-therapy.jpg";

const ServicesSection = () => {
  const services = [
    {
      title: "Песочная терапия",
      description: "Работа с подсознанием через создание символических композиций в песочнице. Эффективна для проработки травм и внутренних конфликтов.",
      image: sandboxTherapy,
      duration: "60 минут",
      price: "от 3500 ₽",
      color: "healing"
    },
    {
      title: "Телесная терапия",
      description: "Работа с телесными зажимами и напряжениями. Помогает восстановить связь с телом и освободить заблокированные эмоции.",
      image: bodyTherapy,
      duration: "90 минут",
      price: "от 4000 ₽",
      color: "warmth"
    },
    {
      title: "ДПДГ терапия",
      description: "Эффективный метод работы с травмами и посттравматическими стрессовыми расстройствами через двусторонную стимуляцию мозга.",
      image: emdrTherapy,
      duration: "60 минут",
      price: "от 4500 ₽",
      color: "calm"
    },
    {
      title: "Клубные встречи",
      description: "Групповая терапия и тематические встречи. Поддержка в кругу единомышленников и работа над общими вопросами.",
      image: groupTherapy,
      duration: "120 минут",
      price: "от 2000 ₽",
      color: "burgundy"
    },
    {
      title: "Трансформационные игры",
      description: "Игровые практики для глубинной трансформации и осознания жизненных паттернов. Раскрытие внутреннего потенциала через метафорический процесс.",
      image: sandboxTherapy,
      duration: "180 минут",
      price: "от 3000 ₽",
      color: "healing"
    },
    {
      title: "Я мама",
      description: "Работа с отношениями мамы и ребёнка. Понимание потребностей, выстраивание здоровых границ и гармоничных отношений в семье.",
      image: groupTherapy,
      duration: "60 минут",
      price: "от 3500 ₽",
      color: "warmth"
    },
    {
      title: "Психосоматика",
      description: "Исследование связи между эмоциями и телесными проявлениями. Работа с психосоматическими симптомами через осознание глубинных причин.",
      image: bodyTherapy,
      duration: "90 минут",
      price: "от 4000 ₽",
      color: "burgundy"
    },
    {
      title: "Энергия рода",
      description: "Работа с родовыми сценариями и семейными системами. Освобождение от негативных родовых программ и восстановление связи с предками.",
      image: emdrTherapy,
      duration: "90 минут",
      price: "от 4500 ₽",
      color: "calm"
    },
    {
      title: "Мастер-класс: Народная кукла",
      description: "Творческий процесс изготовления народной куклы как терапевтическая практика. Погружение в традиции и работа с личными смыслами.",
      image: sandboxTherapy,
      duration: "120 минут",
      price: "от 2500 ₽",
      color: "burgundy"
    }
  ];

  const openWhatsApp = () => {
    window.open("https://wa.me/your-phone-number", "_blank");
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-muted" id="services">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Мои</span>{" "}
            <span className="bg-gradient-to-r from-healing to-burgundy bg-clip-text text-transparent">
              услуги
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Разнообразные терапевтические подходы для работы с различными запросами
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="overflow-hidden group hover:shadow-xl transition-all duration-500 hover:scale-105 bg-card flex flex-col h-full"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              <div className="p-5 flex flex-col flex-grow">
                <div className="flex justify-between items-start gap-3 mb-3">
                  <h3 className={`text-xl font-semibold text-${service.color} leading-tight`}>
                    {service.title}
                  </h3>
                  <div className="text-right flex-shrink-0">
                    <div className="text-xs text-muted-foreground whitespace-nowrap">{service.duration}</div>
                    <div className="font-semibold text-healing text-sm whitespace-nowrap">{service.price}</div>
                  </div>
                </div>
                
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-grow line-clamp-4">
                  {service.description}
                </p>
                
                <Button 
                  onClick={openWhatsApp}
                  className={`w-full bg-gradient-to-r from-${service.color} to-${service.color === 'healing' ? 'calm' : 'healing'} hover:shadow-lg transition-all duration-300 mt-auto`}
                  size="sm"
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Записаться
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Card className="p-8 bg-gradient-to-r from-healing-light to-calm-light border-0 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4 text-healing">Первая консультация</h3>
            <p className="text-muted-foreground mb-6">
              Бесплатная 20-минутная встреча для знакомства и определения подходящего метода работы
            </p>
            <Button 
              onClick={openWhatsApp}
              size="lg"
              className="bg-gradient-to-r from-healing to-burgundy hover:shadow-lg transition-all duration-300"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Записаться на знакомство
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;