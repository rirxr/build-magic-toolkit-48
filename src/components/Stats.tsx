
import { ArrowUpRight } from 'lucide-react';

export const Stats = () => {
  const stats = [
    { label: 'Total Sales', value: '$53,000', change: '+55%' },
    { label: 'Visitors', value: '2,300', change: '+5%' },
    { label: 'Orders', value: '3,052', change: '+25%' },
    { label: 'Revenue', value: '$173,000', change: '+15%' },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <div key={stat.label} className="animate-fadeIn stat-card">
          <div>
            <p className="text-sm text-muted-foreground">{stat.label}</p>
            <p className="mt-2 text-2xl font-semibold">{stat.value}</p>
          </div>
          <div className="flex items-center gap-1 text-emerald-400">
            <ArrowUpRight className="h-4 w-4" />
            {stat.change}
          </div>
        </div>
      ))}
    </div>
  );
};
