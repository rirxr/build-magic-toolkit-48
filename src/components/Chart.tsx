
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const data = [
  { month: 'Jan', value: 1000 },
  { month: 'Feb', value: 2000 },
  { month: 'Mar', value: 1500 },
  { month: 'Apr', value: 3000 },
  { month: 'May', value: 2500 },
  { month: 'Jun', value: 4000 },
];

export const Chart = () => {
  return (
    <div className="card h-[300px]">
      <h3 className="mb-6 text-lg font-semibold">Sales Overview</h3>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#2563EB" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#2563EB" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis
            dataKey="month"
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#94A3B8' }}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#94A3B8' }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: '#1E293B',
              border: 'none',
              borderRadius: '8px',
              color: '#FFFFFF',
            }}
          />
          <Area
            type="monotone"
            dataKey="value"
            stroke="#2563EB"
            fill="url(#colorValue)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};
