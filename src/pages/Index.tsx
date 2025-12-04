import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [isRegistered, setIsRegistered] = useState(false);
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [activeTab, setActiveTab] = useState<'services' | 'profile'>('services');
  const [steps, setSteps] = useState(7342);
  const [goal] = useState(10000);

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (userName && userEmail) {
      setIsRegistered(true);
    }
  };

  const weeklyData = [
    { day: 'ПН', steps: 8234 },
    { day: 'ВТ', steps: 6891 },
    { day: 'СР', steps: 9456 },
    { day: 'ЧТ', steps: 7342 },
    { day: 'ПТ', steps: 5678 },
    { day: 'СБ', steps: 11234 },
    { day: 'ВС', steps: 9876 },
  ];

  const services = [
    { 
      id: 1, 
      name: 'Шагомер', 
      icon: 'Footprints', 
      status: 'active',
      color: 'primary'
    },
    { 
      id: 2, 
      name: 'Финансы', 
      icon: 'Wallet', 
      status: 'dev',
      color: 'secondary'
    },
    { 
      id: 3, 
      name: 'Заметки', 
      icon: 'NotebookPen', 
      status: 'dev',
      color: 'accent'
    },
    { 
      id: 4, 
      name: 'Задачи', 
      icon: 'ListChecks', 
      status: 'dev',
      color: 'primary'
    },
    { 
      id: 5, 
      name: 'Календарь', 
      icon: 'Calendar', 
      status: 'dev',
      color: 'secondary'
    },
    { 
      id: 6, 
      name: 'Погода', 
      icon: 'CloudSun', 
      status: 'dev',
      color: 'accent'
    },
  ];

  if (!isRegistered) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#0a0a0f] via-[#1a1a2e] to-[#0a0a0f] flex items-center justify-center p-4">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-primary/20 rounded-full blur-3xl top-20 left-20 animate-pulse"></div>
          <div className="absolute w-96 h-96 bg-secondary/20 rounded-full blur-3xl bottom-20 right-20 animate-pulse"></div>
        </div>
        
        <Card className="relative w-full max-w-md glass border-primary/20 p-8 animate-scale-in">
          <div className="text-center mb-8">
            <h1 className="text-5xl font-bold mb-2 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              МАЙ
            </h1>
            <p className="text-muted-foreground">Экосистема сервисов</p>
          </div>

          <form onSubmit={handleRegister} className="space-y-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Имя пользователя</label>
              <Input
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                className="glass border-primary/30 focus:border-primary neon-glow"
                placeholder="Введите имя"
                required
              />
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">Email</label>
              <Input
                type="email"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
                className="glass border-primary/30 focus:border-primary neon-glow"
                placeholder="your@email.com"
                required
              />
            </div>

            <Button 
              type="submit"
              className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 neon-glow text-background font-semibold"
            >
              Войти в экосистему
            </Button>
          </form>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0f] via-[#1a1a2e] to-[#0a0a0f]">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-primary/10 rounded-full blur-3xl top-20 left-20 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-secondary/10 rounded-full blur-3xl bottom-20 right-20 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-accent/10 rounded-full blur-3xl top-1/2 right-1/3 animate-pulse"></div>
      </div>

      <div className="relative">
        <header className="glass border-b border-primary/20">
          <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              МАЙ
            </h1>
            
            <div className="flex items-center gap-4">
              <Button
                variant={activeTab === 'services' ? 'default' : 'ghost'}
                onClick={() => setActiveTab('services')}
                className={activeTab === 'services' ? 'neon-glow bg-primary/20 text-primary' : ''}
              >
                <Icon name="Grid3x3" size={20} className="mr-2" />
                Сервисы
              </Button>
              <Button
                variant={activeTab === 'profile' ? 'default' : 'ghost'}
                onClick={() => setActiveTab('profile')}
                className={activeTab === 'profile' ? 'neon-glow bg-primary/20 text-primary' : ''}
              >
                <Icon name="User" size={20} className="mr-2" />
                Профиль
              </Button>
            </div>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-4 py-8">
          {activeTab === 'profile' && (
            <div className="animate-fade-in space-y-6">
              <Card className="glass border-primary/20 p-8">
                <div className="flex items-center gap-6">
                  <Avatar className="w-24 h-24 border-4 border-primary neon-glow">
                    <AvatarFallback className="text-3xl bg-gradient-to-br from-primary to-secondary">
                      {userName.charAt(0).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h2 className="text-3xl font-bold mb-2">{userName}</h2>
                    <p className="text-muted-foreground">{userEmail}</p>
                  </div>
                </div>
              </Card>

              <Card className="glass border-primary/20 p-6">
                <h3 className="text-xl font-semibold mb-4">Статистика</h3>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-4 glass rounded-lg border border-primary/20">
                    <div className="text-3xl font-bold text-primary">1</div>
                    <div className="text-sm text-muted-foreground">Активных сервисов</div>
                  </div>
                  <div className="text-center p-4 glass rounded-lg border border-secondary/20">
                    <div className="text-3xl font-bold text-secondary">5</div>
                    <div className="text-sm text-muted-foreground">В разработке</div>
                  </div>
                  <div className="text-center p-4 glass rounded-lg border border-accent/20">
                    <div className="text-3xl font-bold text-accent">{steps.toLocaleString()}</div>
                    <div className="text-sm text-muted-foreground">Шагов сегодня</div>
                  </div>
                </div>
              </Card>
            </div>
          )}

          {activeTab === 'services' && (
            <div className="animate-fade-in space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6">Активные сервисы</h2>
                
                <Card className="glass border-primary/20 p-6 mb-6 hover-scale">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center neon-glow">
                        <Icon name="Footprints" size={24} className="text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold">Шагомер</h3>
                        <p className="text-sm text-muted-foreground">Отслеживайте активность</p>
                      </div>
                    </div>
                    <Badge className="bg-primary/20 text-primary neon-glow">Активен</Badge>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm">Прогресс</span>
                        <span className="text-sm font-semibold">{steps.toLocaleString()} / {goal.toLocaleString()}</span>
                      </div>
                      <div className="h-3 bg-muted rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-primary to-secondary neon-glow transition-all duration-500"
                          style={{ width: `${(steps / goal) * 100}%` }}
                        />
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">
                        Осталось {(goal - steps).toLocaleString()} шагов до цели
                      </p>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold mb-4">Активность за неделю</h4>
                      <div className="flex items-end justify-between gap-2 h-32">
                        {weeklyData.map((day, index) => (
                          <div key={index} className="flex-1 flex flex-col items-center gap-2">
                            <div 
                              className="w-full bg-gradient-to-t from-primary to-secondary rounded-t-lg transition-all duration-300 hover:opacity-80 neon-glow"
                              style={{ 
                                height: `${(day.steps / 12000) * 100}%`,
                                minHeight: '20%'
                              }}
                            />
                            <span className="text-xs text-muted-foreground">{day.day}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex justify-center">
                      <Button 
                        onClick={() => setSteps(prev => prev + Math.floor(Math.random() * 500) + 100)}
                        className="bg-primary/20 hover:bg-primary/30 text-primary neon-glow"
                      >
                        <Icon name="Plus" size={20} className="mr-2" />
                        Добавить шаги
                      </Button>
                    </div>
                  </div>
                </Card>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-6">Сервисы в разработке</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {services.filter(s => s.status === 'dev').map((service) => (
                    <Card 
                      key={service.id}
                      className="glass border-primary/20 p-6 hover-scale cursor-pointer group"
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <div className={`w-12 h-12 rounded-xl bg-${service.color}/20 flex items-center justify-center group-hover:neon-glow-${service.color === 'primary' ? '' : service.color} transition-all`}>
                          <Icon name={service.icon} size={24} className={`text-${service.color}`} />
                        </div>
                        <h3 className="text-lg font-semibold">{service.name}</h3>
                      </div>
                      <Badge variant="outline" className="border-muted-foreground/30">
                        В разработке
                      </Badge>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Index;
