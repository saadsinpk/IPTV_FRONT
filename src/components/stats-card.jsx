export function StatCard({
  title,
  value1,
  value2,
  icon: Icon,
  className,
  iconClass,
}) {
  return (
    <div
      className={`rounded-md pl-4 pt-4 pb-2 text-white relative overflow-hidden ${className}`}
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm opacity-90">{title}</p>
          <p className="text-3xl font-bold mt-1">{value1}</p>
          <p className="text-sm opacity-90">{value2}</p>
        </div>
      </div>
      {Icon && (
        <div className="absolute bottom-0 right-0 transform translate-x-[22.33%] translate-y-[33.33%]">
          <Icon className={`${iconClass} opacity-40`} />
        </div>
      )}
    </div>
  );
}
