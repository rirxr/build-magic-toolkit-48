
import Sidebar from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useSettings } from "@/store/settings";
import { cn } from "@/lib/utils";

const Audience = () => {
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
            <h1 className="text-3xl font-bold">Сбор аудитории</h1>
            <p className="mt-2 text-muted-foreground">
              Сбор участников из групп и каналов
            </p>
          </div>

          <div className="max-w-2xl">
            <Card>
              <CardHeader>
                <CardTitle>Новый сбор</CardTitle>
                <CardDescription>
                  Укажите источники для сбора аудитории
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Textarea placeholder="Введите ссылки на группы/каналы (каждая с новой строки)" />
                </div>
                <div className="space-y-2">
                  <Input type="number" min="0" placeholder="Глубина парсинга (дней)" />
                </div>
                <Button className="w-full">Начать сбор</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Audience;
