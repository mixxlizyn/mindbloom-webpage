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
      color: "healing"
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
            <span className="bg-gradient-to-r from-healing to-calm bg-clip-text text-transparent">
              услуги
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Разнообразные терапевтические подходы для работы с различными запросами
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="overflow-hidden group hover:shadow-xl transition-all duration-500 hover:scale-105 bg-card"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              <div className="p-6 space-y-4">
                <div className="flex justify-between items-start">
                  <h3 className={`text-2xl font-semibold text-${service.color}`}>
                    {service.title}
                  </h3>
                  <div className="text-right">
                    <div className="text-sm text-muted-foreground">{service.duration}</div>
                    <div className="font-semibold text-healing">{service.price}</div>
                  </div>
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
                
                <div className="pt-2">
                  <Button 
                    onClick={openWhatsApp}
                    className={`w-full bg-gradient-to-r from-${service.color} to-${service.color === 'healing' ? 'calm' : 'healing'} hover:shadow-lg transition-all duration-300`}
                  >
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Записаться на сессию
                  </Button>
                </div>
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
              className="bg-gradient-to-r from-healing to-calm hover:shadow-lg transition-all duration-300"
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