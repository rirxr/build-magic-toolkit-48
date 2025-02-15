
import Sidebar from "@/components/Sidebar";
import { Stats } from "@/components/Stats";
import { Chart } from "@/components/Chart";
import { Projects } from "@/components/Projects";
import { useSettings } from "@/store/settings";
import { cn } from "@/lib/utils";

const Index = () => {
  const { language, isSidebarCollapsed } = useSettings();

  return (
    <div className="min-h-screen">
      <Sidebar />
      <main className={cn(
        "transition-all duration-300",
        isSidebarCollapsed ? "pl-20" : "pl-64"
      )}>
        <div className="container py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold">
              {language === 'ru' ? 'Панель управления' : 'Dashboard'}
            </h1>
            <p className="mt-2 text-muted-foreground">
              {language === 'ru' ? 'Обзор аккаунтов Telegram' : 'Telegram Accounts Overview'}
            </p>
          </div>
          
          <div className="space-y-8">
            <Stats />
            
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <Chart />
              </div>
              <div>
                <Projects />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
