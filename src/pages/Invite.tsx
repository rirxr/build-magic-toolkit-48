
import Sidebar from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";

const Invite = () => {
  return (
    <div className="min-h-screen">
      <Sidebar />
      <main className="pl-64">
        <div className="container py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold">Инвайт</h1>
            <p className="mt-2 text-muted-foreground">
              Массовое приглашение пользователей
            </p>
          </div>

          <div className="max-w-2xl">
            <Card>
              <CardHeader>
                <CardTitle>Настройки инвайта</CardTitle>
                <CardDescription>
                  Укажите параметры для рассылки приглашений
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Input placeholder="Ссылка на группу/канал" />
                </div>
                <div className="space-y-2">
                  <Textarea placeholder="База пользователей (каждый с новой строки)" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <Input type="number" min="0" placeholder="Задержка (сек)" />
                  <Input type="number" min="1" placeholder="Кол-во аккаунтов" />
                </div>
                <Button className="w-full">Запустить инвайт</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Invite;
