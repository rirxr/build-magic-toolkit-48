
import Sidebar from "@/components/Sidebar";
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { useSettings } from "@/store/settings";
import { cn } from "@/lib/utils";

const Accounts = () => {
  const { isSidebarCollapsed } = useSettings();
  const accounts = [
    { 
      phone: '+7 999 123-45-67',
      status: 'Активный',
      lastActive: '2024-02-20',
      proxy: 'Proxy #1',
      messages: 156
    },
    // Add more accounts here
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
            <h1 className="text-3xl font-bold">Панель аккаунтов</h1>
            <p className="mt-2 text-muted-foreground">
              Управление аккаунтами Telegram
            </p>
          </div>

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Телефон</TableHead>
                  <TableHead>Статус</TableHead>
                  <TableHead>Последняя активность</TableHead>
                  <TableHead>Прокси</TableHead>
                  <TableHead>Сообщений</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {accounts.map((account) => (
                  <TableRow key={account.phone}>
                    <TableCell>{account.phone}</TableCell>
                    <TableCell>
                      <Badge variant="secondary">
                        {account.status}
                      </Badge>
                    </TableCell>
                    <TableCell>{account.lastActive}</TableCell>
                    <TableCell>{account.proxy}</TableCell>
                    <TableCell>{account.messages}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Accounts;
