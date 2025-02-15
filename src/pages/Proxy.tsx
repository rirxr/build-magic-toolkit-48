
import Sidebar from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { useSettings } from "@/store/settings";
import { cn } from "@/lib/utils";

const Proxy = () => {
  const { isSidebarCollapsed } = useSettings();
  const proxies = [
    { 
      ip: '192.168.1.1',
      port: '8080',
      type: 'SOCKS5',
      status: 'Активный',
      country: 'RU'
    },
    // Add more proxies here
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
            <h1 className="text-3xl font-bold">Прокси</h1>
            <p className="mt-2 text-muted-foreground">
              Управление прокси серверами
            </p>
          </div>

          <div className="grid gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Добавить прокси</CardTitle>
                <CardDescription>
                  Добавьте новые прокси серверы
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Textarea placeholder="Введите прокси (формат: ip:port:login:password или ip:port)" />
                <Button>Добавить прокси</Button>
              </CardContent>
            </Card>

            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>IP</TableHead>
                    <TableHead>Порт</TableHead>
                    <TableHead>Тип</TableHead>
                    <TableHead>Статус</TableHead>
                    <TableHead>Страна</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {proxies.map((proxy) => (
                    <TableRow key={proxy.ip}>
                      <TableCell>{proxy.ip}</TableCell>
                      <TableCell>{proxy.port}</TableCell>
                      <TableCell>{proxy.type}</TableCell>
                      <TableCell>
                        <Badge variant="secondary">
                          {proxy.status}
                        </Badge>
                      </TableCell>
                      <TableCell>{proxy.country}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Proxy;
