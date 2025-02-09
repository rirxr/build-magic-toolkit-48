
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
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();
  
  const navigation = [
    { 
      name: 'Главная', 
      icon: Home, 
      path: '/',
    },
    { 
      name: 'Панель аккаунтов', 
      icon: Users,
      path: '/accounts'
    },
    { 
      name: 'Действие с аккаунтом', 
      icon: UserCog,
      path: '/actions'
    },
    { 
      name: 'Авторегистрация', 
      icon: UserPlus,
      path: '/registration'
    },
    { 
      name: 'Сбор аудитории', 
      icon: UserCheck,
      path: '/audience'
    },
    { 
      name: 'Инвайт', 
      icon: MessagesSquare,
      path: '/invite'
    },
    { 
      name: 'Отправка СМС', 
      icon: Mail,
      path: '/sms'
    },
    { 
      name: 'Прокси', 
      icon: Network,
      path: '/proxy'
    },
    {
      name: 'Удаленные',
      icon: Trash2,
      path: '/deleted',
      submenu: [
        { name: 'Архив', icon: Archive, path: '/deleted/archive' },
        { name: 'Вечный спамблок', icon: Shield, path: '/deleted/spam' },
        { name: 'Активные аккаунты', icon: CheckCircle, path: '/deleted/active' },
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
            <Link
              to={item.path}
              className={cn(
                'nav-link',
                location.pathname === item.path && 'active'
              )}
            >
              <item.icon className="h-5 w-5" />
              {item.name}
            </Link>
            
            {item.submenu && (
              <div className="ml-6 mt-1 space-y-1">
                {item.submenu.map((subItem) => (
                  <Link
                    key={subItem.name}
                    to={subItem.path}
                    className={cn(
                      'nav-link text-sm',
                      location.pathname === subItem.path && 'active'
                    )}
                  >
                    <subItem.icon className="h-4 w-4" />
                    {subItem.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>

      <div className="absolute bottom-8 w-full px-3">
        <Link to="/settings" className="nav-link">
          <Settings className="h-5 w-5" />
          Настройки
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;
