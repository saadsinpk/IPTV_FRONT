export function StatCard({ title, value, icon: Icon, className }) {
  return (
    <div className={`rounded-lg p-6 text-white ${className}`}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm opacity-90">{title}</p>
          <p className="text-3xl font-bold mt-1">{value}</p>
        </div>
        {Icon && <Icon className="h-6 w-6 opacity-80" />}
      </div>
    </div>
  );
}
