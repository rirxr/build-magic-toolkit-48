
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  CheckCircle,
  AlertCircle,
} from 'lucide-react';

export const Projects = () => {
  const accounts = [
    { 
      name: '+7 999 123-45-67', 
      status: 'Активный',
      icon: CheckCircle,
      color: 'text-green-500' 
    },
    { 
      name: '+7 999 234-56-78', 
      status: 'В спаме',
      icon: Shield,
      color: 'text-yellow-500'
    },
    { 
      name: '+7 999 345-67-89', 
      status: 'Заблокирован',
      icon: AlertCircle,
      color: 'text-red-500'
    },
  ];

  return (
    <div className="card">
      <h3 className="mb-6 text-lg font-semibold">Последние аккаунты</h3>
      <div className="space-y-4">
        {accounts.map((account) => {
          const Icon = account.icon;
          return (
            <div
              key={account.name}
              className="flex items-center justify-between rounded-lg bg-muted/50 p-4"
            >
              <div className="flex items-center gap-3">
                <Icon className={`h-5 w-5 ${account.color}`} />
                <span>{account.name}</span>
              </div>
              <Badge variant="secondary" className={account.color}>
                {account.status}
              </Badge>
            </div>
          );
        })}
      </div>
    </div>
  );
};
