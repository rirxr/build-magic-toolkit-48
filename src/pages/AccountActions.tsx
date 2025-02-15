
import Sidebar from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MessagesSquare, UserCheck, Mail, Shield } from "lucide-react";
import { useSettings } from "@/store/settings";
import { cn } from "@/lib/utils";

const AccountActions = () => {
  const { isSidebarCollapsed } = useSettings();
  const actions = [
    {
      title: 'Отправка сообщений',
      description: 'Массовая рассылка сообщений',
      icon: MessagesSquare
    },
    {
      title: 'Проверка аккаунтов',
      description: 'Проверка статуса и активности',
      icon: UserCheck
    },
    {
      title: 'Смена информации',
      description: 'Изменение профиля и настроек',
      icon: Mail
    },
    {
      title: 'Защита аккаунтов',
      description: 'Настройка безопасности',
      icon: Shield
    }
  ];

  return (
    <div className="min-h-screen">
      <Sidebar />
      <main className={cn(
        "transition-all duration-300",
        isSidebarCollapsed ? "pl-20" : "pl-64"
      )}>
        <div className="container py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold">Действия с аккаунтом</h1>
            <p className="mt-2 text-muted-foreground">
              Выберите действие для выполнения
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {actions.map((action) => (
              <Card key={action.title}>
                <CardHeader className="flex flex-row items-center gap-4">
                  <action.icon className="h-8 w-8" />
                  <div>
                    <CardTitle>{action.title}</CardTitle>
                    <CardDescription>{action.description}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <Button className="w-full">Выполнить</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default AccountActions;
