
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
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link, useLocation } from 'react-router-dom';
import { SettingsDrawer } from './SettingsDrawer';
import { useSettings } from '@/store/settings';
import { Button } from './ui/button';

const Sidebar = () => {
  const location = useLocation();
  const { isSidebarCollapsed, toggleSidebar } = useSettings();
  
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
    <>
      <aside 
        className={cn(
          "fixed left-0 top-0 z-40 h-screen border-r border-white/10 bg-card transition-all duration-300",
          isSidebarCollapsed ? "w-20" : "w-64"
        )}
      >
        <div className={cn(
          "flex h-16 items-center border-b border-white/10",
          isSidebarCollapsed ? "justify-center px-2" : "gap-2 px-6"
        )}>
          <div className="h-8 w-8 rounded-full bg-primary shrink-0"></div>
          {!isSidebarCollapsed && <span className="text-lg font-semibold">Telegram Manager</span>}
        </div>
        
        <nav className={cn(
          "mt-8 space-y-1",
          isSidebarCollapsed ? "px-2" : "px-3"
        )}>
          {navigation.map((item) => (
            <div key={item.name}>
              <Link
                to={item.path}
                className={cn(
                  'nav-link',
                  location.pathname === item.path && 'active',
                  isSidebarCollapsed && 'justify-center'
                )}
                title={isSidebarCollapsed ? item.name : undefined}
              >
                <item.icon className="h-5 w-5 shrink-0" />
                {!isSidebarCollapsed && <span>{item.name}</span>}
              </Link>
              
              {!isSidebarCollapsed && item.submenu && (
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

        <div className={cn(
          "absolute bottom-8 w-full",
          isSidebarCollapsed ? "px-2" : "px-3"
        )}>
          <SettingsDrawer />
        </div>
      </aside>

      <Button
        variant="ghost"
        size="icon"
        className={cn(
          "fixed top-3 z-50 transition-all duration-300",
          isSidebarCollapsed ? "left-24" : "left-64"
        )}
        onClick={toggleSidebar}
      >
        {isSidebarCollapsed ? (
          <ChevronRight className="h-4 w-4" />
        ) : (
          <ChevronLeft className="h-4 w-4" />
        )}
      </Button>
    </>
  );
};

export default Sidebar;
