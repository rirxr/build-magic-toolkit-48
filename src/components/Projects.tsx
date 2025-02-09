
export const Projects = () => {
  const accounts = [
    { name: 'Account #1', status: 'Активный' },
    { name: 'Account #2', status: 'В спаме' },
    { name: 'Account #3', status: 'Новый' },
  ];

  return (
    <div className="card">
      <h3 className="mb-6 text-lg font-semibold">Последние аккаунты</h3>
      <div className="space-y-4">
        {accounts.map((account) => (
          <div
            key={account.name}
            className="flex items-center justify-between rounded-lg bg-muted/50 p-4"
          >
            <span>{account.name}</span>
            <span className="rounded-full bg-primary/20 px-3 py-1 text-sm text-primary">
              {account.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
