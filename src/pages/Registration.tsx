
import Sidebar from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useSettings } from "@/store/settings";
import { cn } from "@/lib/utils";

const Registration = () => {
  const { isSidebarCollapsed } = useSettings();

  return (
    <div className="min-h-screen">
      <Sidebar />
      <main className={cn(
        "transition-all duration-300",
        isSidebarCollapsed ? "pl-20" : "pl-64"
      )}>
        <div className="container py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold">Авторегистрация</h1>
            <p className="mt-2 text-muted-foreground">
              Автоматическая регистрация новых аккаунтов
            </p>
          </div>

          <div className="max-w-2xl">
            <Card>
              <CardHeader>
                <CardTitle>Новая регистрация</CardTitle>
                <CardDescription>
                  Заполните данные для регистрации аккаунта
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="proxy">Прокси</Label>
                  <Input id="proxy" placeholder="Выберите прокси" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="count">Количество аккаунтов</Label>
                  <Input id="count" type="number" min="1" placeholder="Введите количество" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email для привязки</Label>
                  <Input id="email" type="email" placeholder="example@mail.com" />
                </div>
                <Button className="w-full">Начать регистрацию</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Registration;
