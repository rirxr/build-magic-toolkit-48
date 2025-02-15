
import { Routes, Route, useNavigate } from 'react-router-dom';
import Sidebar from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { useSettings } from "@/store/settings";
import { cn } from "@/lib/utils";

const DeletedAccounts = () => {
  const accounts = [
    { 
      phone: '+7 999 123-45-67',
      type: 'Архив',
      date: '2024-02-20',
      reason: 'По запросу'
    },
    // Add more accounts here
  ];

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Телефон</TableHead>
            <TableHead>Тип</TableHead>
            <TableHead>Дата</TableHead>
            <TableHead>Причина</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {accounts.map((account) => (
            <TableRow key={account.phone}>
              <TableCell>{account.phone}</TableCell>
              <TableCell>
                <Badge variant="secondary">
                  {account.type}
                </Badge>
              </TableCell>
              <TableCell>{account.date}</TableCell>
              <TableCell>{account.reason}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

const Deleted = () => {
  const navigate = useNavigate();
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
            <h1 className="text-3xl font-bold">Удаленные аккаунты</h1>
            <p className="mt-2 text-muted-foreground">
              Управление удаленными аккаунтами
            </p>
          </div>

          <div className="mb-8 space-x-4">
            <Button 
              variant="outline" 
              onClick={() => navigate('/deleted/archive')}
            >
              Архив
            </Button>
            <Button 
              variant="outline"
              onClick={() => navigate('/deleted/spam')}
            >
              Вечный спамблок
            </Button>
            <Button 
              variant="outline"
              onClick={() => navigate('/deleted/active')}
            >
              Активные аккаунты
            </Button>
          </div>

          <Routes>
            <Route path="/" element={<DeletedAccounts />} />
            <Route path="/archive" element={<DeletedAccounts />} />
            <Route path="/spam" element={<DeletedAccounts />} />
            <Route path="/active" element={<DeletedAccounts />} />
          </Routes>
        </div>
      </main>
    </div>
  );
};

export default Deleted;
