import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MessageCircle, Phone } from "lucide-react";
import psychologistPortrait from "@/assets/psychologist-portrait.jpg";

const HeroSection = () => {
  const openWhatsApp = () => {
    window.open("https://wa.me/your-phone-number", "_blank");
  };

  const openTelegram = () => {
    window.open("https://t.me/your-username", "_blank");
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 pt-32">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              <span className="text-foreground">Путь к</span>{" "}
              <span className="bg-gradient-to-r from-burgundy via-healing to-calm bg-clip-text text-transparent">
                исцелению
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Профессиональная психологическая помощь с индивидуальным подходом. 
              Помогаю найти внутренние ресурсы и обрести гармонию с собой.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              onClick={openWhatsApp}
              size="lg"
              className="bg-gradient-to-r from-burgundy to-healing hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              WhatsApp
            </Button>
            <Button 
              onClick={openTelegram}
              variant="outline"
              size="lg"
              className="border-burgundy text-burgundy hover:bg-burgundy-light transition-all duration-300 hover:scale-105"
            >
              <Phone className="mr-2 h-5 w-5" />
              Telegram
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-6 pt-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-burgundy">7+</div>
              <div className="text-sm text-muted-foreground">лет опыта</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-burgundy">500+</div>
              <div className="text-sm text-muted-foreground">клиентов</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-burgundy">10</div>
              <div className="text-sm text-muted-foreground">направлений</div>
            </div>
          </div>
        </div>

        <div className="relative">
          <Card className="overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
            <div className="aspect-square">
              <img
                src={psychologistPortrait}
                alt="Профессиональный психолог"
                className="w-full h-full object-cover"
              />
            </div>
          </Card>
          <div className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-br from-burgundy-light to-healing-light rounded-full opacity-70 blur-xl"></div>
          <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-br from-burgundy-light to-calm-light rounded-full opacity-50 blur-lg"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;