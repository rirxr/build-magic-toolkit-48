
import { 
  Home,
  Users,
  UserPlus,
  Mail,
  Network,
  Archive,
  Trash2,
  Shield,
  CheckCircle,
  Settings,
  UserCog,
  UserCheck,
  MessagesSquare,
} from 'lucide-react';
import { cn } from '@/lib/utils';

const Sidebar = () => {
  const navigation = [
    { 
      name: 'Главная', 
      icon: Home, 
      active: true 
    },
    { 
      name: 'Панель аккаунтов', 
      icon: Users 
    },
    { 
      name: 'Действие с аккаунтом', 
      icon: UserCog 
    },
    { 
      name: 'Авторегистрация', 
      icon: UserPlus 
    },
    { 
      name: 'Сбор аудитории', 
      icon: UserCheck 
    },
    { 
      name: 'Инвайт', 
      icon: MessagesSquare 
    },
    { 
      name: 'Отправка СМС', 
      icon: Mail 
    },
    { 
      name: 'Прокси', 
      icon: Network 
    },
    {
      name: 'Удаленные',
      icon: Trash2,
      submenu: [
        { name: 'Архив', icon: Archive },
        { name: 'Вечный спамблок', icon: Shield },
        { name: 'Активные аккаунты', icon: CheckCircle },
      ]
    }
  ];

  return (
    <aside className="fixed left-0 top-0 z-40 h-screen w-64 animate-slideIn border-r border-white/10 bg-card overflow-y-auto">
      <div className="flex h-16 items-center gap-2 px-6 border-b border-white/10">
        <div className="h-8 w-8 rounded-full bg-primary"></div>
        <span className="text-lg font-semibold">Telegram Manager</span>
      </div>
      
      <nav className="mt-8 px-3 space-y-1">
        {navigation.map((item) => (
          <div key={item.name}>
            <a
              href="#"
              className={cn('nav-link', item.active && 'active')}
            >
              <item.icon className="h-5 w-5" />
              {item.name}
            </a>
            
            {item.submenu && (
              <div className="ml-6 mt-1 space-y-1">
                {item.submenu.map((subItem) => (
                  <a
                    key={subItem.name}
                    href="#"
                    className="nav-link text-sm"
                  >
                    <subItem.icon className="h-4 w-4" />
                    {subItem.name}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>

      <div className="absolute bottom-8 w-full px-3">
        <a href="#" className="nav-link">
          <Settings className="h-5 w-5" />
          Настройки
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;
