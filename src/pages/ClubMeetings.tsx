import { motion } from 'framer-motion';
import { Calendar, Clock, Users, MapPin, Phone, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

const ClubMeetings = () => {
  const meetings = [
    {
      title: "Трансформационная игра 'Лила'",
      date: "15 ноября 2025",
      time: "14:00 - 17:00",
      duration: "3 часа",
      participants: "6-8 человек",
      price: "3000 ₽",
      location: "Центр психологии, ул. Примерная, 12",
      description: "Древняя индийская игра самопознания. Путешествие по игровому полю, отражающему жизненный путь. Работа с текущими жизненными ситуациями через метафорический процесс.",
      color: "burgundy"
    },
    {
      title: "Женский круг 'Я мама'",
      date: "20 ноября 2025",
      time: "18:00 - 20:00",
      duration: "2 часа",
      participants: "8-10 человек",
      price: "2500 ₽",
      location: "Центр психологии, ул. Примерная, 12",
      description: "Пространство поддержки для мам. Обмен опытом, работа с эмоциями, понимание детских потребностей. Практики для восстановления ресурса и гармонизации отношений с детьми.",
      color: "healing"
    },
    {
      title: "Мастер-класс: Народная кукла",
      date: "25 ноября 2025",
      time: "15:00 - 17:00",
      duration: "2 часа",
      participants: "5-8 человек",
      price: "2500 ₽",
      location: "Творческая мастерская, ул. Примерная, 25",
      description: "Изготовление традиционной народной куклы-оберега. Погружение в славянские традиции, работа с личными смыслами через творческий процесс. Все материалы включены.",
      color: "warmth"
    },
    {
      title: "Групповая терапия 'Энергия рода'",
      date: "2 декабря 2025",
      time: "16:00 - 18:30",
      duration: "2.5 часа",
      participants: "6-10 человек",
      price: "3500 ₽",
      location: "Центр психологии, ул. Примерная, 12",
      description: "Исследование родовых сценариев и семейных систем. Расстановки, медитативные практики, работа с родовыми программами. Освобождение от негативных паттернов.",
      color: "burgundy"
    },
    {
      title: "Песочная терапия в группе",
      date: "8 декабря 2025",
      time: "14:00 - 16:00",
      duration: "2 часа",
      participants: "4-6 человек",
      price: "2800 ₽",
      location: "Центр психологии, ул. Примерная, 12",
      description: "Групповая работа с песочными мирами. Создание коллективных композиций, обмен проекциями, глубинная работа с бессознательным в безопасном пространстве группы.",
      color: "calm"
    },
    {
      title: "Трансформационная игра 'Путь героя'",
      date: "15 декабря 2025",
      time: "13:00 - 16:00",
      duration: "3 часа",
      participants: "6-8 человек",
      price: "3000 ₽",
      location: "Центр психологии, ул. Примерная, 12",
      description: "Игра-путешествие для осознания своего пути и раскрытия потенциала. Работа с препятствиями, ресурсами и целями через архетипический процесс.",
      color: "healing"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <ScrollToTop />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-burgundy/10 via-healing/10 to-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-foreground">Клубные</span>{" "}
              <span className="bg-gradient-to-r from-burgundy to-healing bg-clip-text text-transparent">
                встречи
              </span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Групповые занятия, трансформационные игры и творческие мастер-классы. 
              Пространство для роста, поддержки и самопознания в кругу единомышленников.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Meetings Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 max-w-6xl mx-auto">
            {meetings.map((meeting, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className={`overflow-hidden border-${meeting.color}/20 hover:shadow-xl transition-all duration-300`}>
                  <div className={`h-2 bg-gradient-to-r from-${meeting.color} to-${meeting.color}-light`} />
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                      <div className="flex-1">
                        <CardTitle className="text-2xl mb-2">{meeting.title}</CardTitle>
                        <CardDescription className="text-base">{meeting.description}</CardDescription>
                      </div>
                      <div className={`text-3xl font-bold text-${meeting.color} shrink-0`}>
                        {meeting.price}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <div className="flex items-center gap-3 text-muted-foreground">
                          <Calendar className="w-5 h-5 text-burgundy" />
                          <span className="font-medium">{meeting.date}</span>
                        </div>
                        <div className="flex items-center gap-3 text-muted-foreground">
                          <Clock className="w-5 h-5 text-burgundy" />
                          <span>{meeting.time} ({meeting.duration})</span>
                        </div>
                        <div className="flex items-center gap-3 text-muted-foreground">
                          <Users className="w-5 h-5 text-burgundy" />
                          <span>{meeting.participants}</span>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-start gap-3 text-muted-foreground">
                          <MapPin className="w-5 h-5 text-burgundy shrink-0 mt-0.5" />
                          <span>{meeting.location}</span>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-2 mt-4">
                          <Button className="flex-1 bg-gradient-to-r from-burgundy to-healing">
                            <Phone className="w-4 h-4 mr-2" />
                            Записаться
                          </Button>
                          <Button variant="outline" className="flex-1" asChild>
                            <a href="https://wa.me/your-number" target="_blank" rel="noopener noreferrer">
                              <MessageCircle className="w-4 h-4 mr-2" />
                              WhatsApp
                            </a>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Info Block */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16 max-w-4xl mx-auto"
          >
            <Card className="bg-gradient-to-br from-burgundy/5 to-healing/5 border-burgundy/20">
              <CardHeader>
                <CardTitle className="text-2xl">Важная информация</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  📌 <strong>Предварительная запись обязательна</strong> - количество мест ограничено
                </p>
                <p className="text-muted-foreground">
                  💳 <strong>Оплата</strong> - по предоплате 50% для бронирования места
                </p>
                <p className="text-muted-foreground">
                  🔄 <strong>Отмена</strong> - возможна не позднее чем за 48 часов до начала встречи
                </p>
                <p className="text-muted-foreground">
                  ❓ <strong>Вопросы</strong> - пишите в WhatsApp или звоните для уточнения деталей
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ClubMeetings;
