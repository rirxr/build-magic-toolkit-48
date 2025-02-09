
import Sidebar from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const SMS = () => {
  return (
    <div className="min-h-screen">
      <Sidebar />
      <main className="pl-64">
        <div className="container py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold">Отправка СМС</h1>
            <p className="mt-2 text-muted-foreground">
              Массовая рассылка SMS сообщений
            </p>
          </div>

          <div className="max-w-2xl">
            <Card>
              <CardHeader>
                <CardTitle>Новая рассылка</CardTitle>
                <CardDescription>
                  Настройте параметры SMS рассылки
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Textarea placeholder="Текст сообщения" />
                </div>
                <div className="space-y-2">
                  <Textarea placeholder="Список номеров (каждый с новой строки)" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <Input type="number" min="0" placeholder="Задержка (сек)" />
                  <Input type="number" min="1" placeholder="Кол-во потоков" />
                </div>
                <Button className="w-full">Начать рассылку</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SMS;
