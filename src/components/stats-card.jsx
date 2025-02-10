export function StatCard({ title, value1, value2, icon: Icon, className }) {
  return (
    <div className={`rounded-md pl-4 pt-4 pb-4 text-white ${className}`}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm opacity-90">{title}</p>
          <p className="text-3xl font-bold mt-1">{value1}</p>
          <p className="text-sm opacity-90">{value2}</p>
        </div>
        {Icon && <Icon className="h-20 w-20 opacity-40" />}
      </div>
    </div>
  );
}
