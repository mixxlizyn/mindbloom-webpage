import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Мария К.",
      text: "Песочная терапия помогла мне проработать детские травмы, о которых я даже не подозревала. Анна создала безопасное пространство для исцеления.",
      rating: 5,
      service: "Песочная терапия"
    },
    {
      name: "Алексей М.",
      text: "После ДПДГ сессий наконец-то смог избавиться от панических атак. Очень благодарен за профессиональный подход и терпение.",
      rating: 5,
      service: "ДПДГ терапия"
    },
    {
      name: "Елена В.",
      text: "Телесная терапия открыла для меня новое понимание связи тела и эмоций. Теперь я чувствую себя более цельной личностью.",
      rating: 5,
      service: "Телесная терапия"
    },
    {
      name: "Дмитрий С.",
      text: "Клубные встречи дали мне поддержку и понимание, что я не один со своими проблемами. Групповая работа оказалась очень эффективной.",
      rating: 5,
      service: "Клубные встречи"
    }
  ];

  return (
    <section className="py-20 px-4" id="testimonials">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Отзывы</span>{" "}
            <span className="bg-gradient-to-r from-healing to-warmth bg-clip-text text-transparent">
              клиентов
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Истории людей, которые нашли свой путь к гармонии
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 bg-gradient-to-br from-card to-muted border-healing/10"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-warmth text-warmth" />
                ))}
              </div>
              
              <blockquote className="text-foreground mb-4 italic leading-relaxed">
                "{testimonial.text}"
              </blockquote>
              
              <div className="flex justify-between items-center">
                <div>
                  <div className="font-semibold text-healing">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.service}</div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-muted-foreground">Проверенный отзыв</div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Card className="p-8 bg-gradient-to-r from-healing-light to-calm-light border-0 max-w-xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-healing mb-2">98%</div>
              <div className="text-muted-foreground">клиентов рекомендуют мои услуги</div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;