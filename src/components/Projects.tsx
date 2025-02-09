
export const Projects = () => {
  const projects = [
    { name: 'Vision UI Updates', status: 'In Progress' },
    { name: 'Development Phase', status: 'Done' },
    { name: 'Design System', status: 'Review' },
  ];

  return (
    <div className="card">
      <h3 className="mb-6 text-lg font-semibold">Projects</h3>
      <div className="space-y-4">
        {projects.map((project) => (
          <div
            key={project.name}
            className="flex items-center justify-between rounded-lg bg-muted/50 p-4"
          >
            <span>{project.name}</span>
            <span className="rounded-full bg-primary/20 px-3 py-1 text-sm text-primary">
              {project.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
