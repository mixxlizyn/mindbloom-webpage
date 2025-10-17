import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const AboutSection = () => {
  return (
    <section className="py-20 px-4" id="about">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Обо</span>{" "}
            <span className="bg-gradient-to-r from-burgundy to-healing bg-clip-text text-transparent">
              мне
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Помогаю людям обрести внутреннюю гармонию и найти пути решения
            жизненных сложностей
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Card className="p-6 bg-gradient-to-br from-healing-light to-calm-light border-0">
              <h3 className="text-2xl font-semibold mb-4 text-healing">
                Образование и опыт
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Badge
                    variant="secondary"
                    className="bg-healing text-primary-foreground"
                  >
                    БГПУ им. М. Акмулы
                  </Badge>
                  <span className="text-sm">Семейный психолог</span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge
                    variant="secondary"
                    className="bg-warmth text-primary-foreground"
                  >
                    5+ лет
                  </Badge>
                  <span className="text-sm">Практический опыт</span>
                </div>
                {/* <div className="flex items-center gap-2">
                  <Badge
                    variant="secondary"
                    className="bg-calm text-primary-foreground"
                  >
                    500+
                  </Badge>
                  <span className="text-sm">Успешных консультаций</span>
                </div> */}
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-burgundy-light to-healing-light border-0">
              <h3 className="text-2xl font-semibold mb-4 text-burgundy">
                Сертификаты
              </h3>
              {/* <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-burgundy rounded-full"></div>
                  Песочная терапия (международный сертификат)
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-burgundy rounded-full"></div>
                  ДПДГ терапия (EMDR International Association)
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-burgundy rounded-full"></div>
                  Телесно-ориентированная терапия
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-burgundy rounded-full"></div>
                  Групповая терапия и фасилитация
                </li>
              </ul> */}
              <p className="text-xs text-muted-foreground mt-4 italic">
                💬 Все сертификаты можно посмотреть в Телеграм
              </p>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="p-8 bg-gradient-to-br from-background to-muted border-healing/20">
              <blockquote className="text-lg italic text-center mb-6">
                "Каждый человек уникален, и путь к исцелению тоже должен быть
                индивидуальным. Моя задача — создать безопасное пространство,
                где вы сможете раскрыть свой потенциал."
              </blockquote>
              <div className="text-center">
                <div className="font-semibold text-healing">
                  Ксения Батурина
                </div>
                <div className="text-sm text-muted-foreground">
                  Практикующий психолог
                </div>
              </div>
            </Card>

            <div className="grid grid-cols-2 gap-4">
              <Card className="p-4 text-center bg-gradient-to-br from-burgundy-light to-transparent">
                <div className="text-2xl font-bold text-burgundy mb-1">
                  Индивидуальный
                </div>
                <div className="text-sm text-muted-foreground">подход</div>
              </Card>
              <Card className="p-4 text-center bg-gradient-to-br from-healing-light to-transparent">
                <div className="text-2xl font-bold text-healing mb-1">
                  Безопасное
                </div>
                <div className="text-sm text-muted-foreground">
                  пространство
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
