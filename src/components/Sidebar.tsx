
import { Home, BarChart2, File, Settings, LogOut } from 'lucide-react';
import { cn } from '@/lib/utils';

const Sidebar = () => {
  const navigation = [
    { name: 'Dashboard', icon: Home, active: true },
    { name: 'Analytics', icon: BarChart2 },
    { name: 'Projects', icon: File },
    { name: 'Settings', icon: Settings },
  ];

  return (
    <aside className="fixed left-0 top-0 z-40 h-screen w-64 animate-slideIn border-r border-white/10 bg-card">
      <div className="flex h-16 items-center gap-2 px-6">
        <div className="h-8 w-8 rounded-full bg-primary"></div>
        <span className="text-lg font-semibold">Vision UI PRO</span>
      </div>
      
      <nav className="mt-8 px-3">
        {navigation.map((item) => (
          <a
            key={item.name}
            href="#"
            className={cn('nav-link', item.active && 'active')}
          >
            <item.icon className="h-5 w-5" />
            {item.name}
          </a>
        ))}
      </nav>

      <div className="absolute bottom-8 w-full px-3">
        <button className="nav-link w-full text-red-400 hover:bg-red-500/10 hover:text-red-400">
          <LogOut className="h-5 w-5" />
          Sign Out
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
