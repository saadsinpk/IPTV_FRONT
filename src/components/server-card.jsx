import { Card } from "./card";

export function ServerCard({ server, index, isStatic = false }) {
  const status = isStatic ? (index % 2 === 0 ? "Online" : "Offline") : "Online";
  const statusClass =
    status === "Online"
      ? "bg-green-500/20 text-green-500"
      : "bg-red-500/20 text-red-500";
  const theme = isStatic ? "bg-white text-black" : "bg-[#25262b] text-white";

  const getRandomValue = (max) => Math.floor(Math.random() * max);

  return (
    <Card className={`${theme} p-4 rounded-lg relative overflow-hidden`}>
      <div className="flex justify-between items-center mb-3">
        <h3 className="font-medium">{server?.name || `Server ${index + 1}`}</h3>
        <div className={`${statusClass} px-2 py-0.5 rounded text-xs`}>
          {status}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="space-y-2">
          <div className="flex justify-between">
            <span>Connections:</span>
            <span className="text-blue-600">
              {server?.connections || getRandomValue(100)}
            </span>
          </div>
          <div className="flex justify-between">
            <span>Users:</span>
            <span className="text-blue-600">
              {server?.users || getRandomValue(50)}
            </span>
          </div>
          <div className="flex justify-between">
            <span>Input BW:</span>
            <span className="text-blue-600">
              {server?.bandwidth?.in || `${getRandomValue(500)} Mbps`}
            </span>
          </div>
          <div className="flex justify-between">
            <span>Output BW:</span>
            <span className="text-blue-600">
              {server?.bandwidth?.out || `${getRandomValue(1000)} Mbps`}
            </span>
          </div>
          <div className="flex justify-between">
            <span>Uptime:</span>
            <span className="text-blue-600">{server?.uptime || "25d 17h"}</span>
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span>Free Streams:</span>
            <span className="text-blue-600">
              {server?.streams || getRandomValue(20)}
            </span>
          </div>
          <div className="flex justify-between">
            <span>Free Cache:</span>
            <span className="text-blue-600">
              {server?.freeCache || "90.95"}
            </span>
          </div>
          <div className="flex justify-between">
            <span>Total Disk:</span>
            <span className="text-blue-600">
              {server?.totalDisk || `${getRandomValue(500)}GB`}
            </span>
          </div>
        </div>
      </div>
      <div className="space-y-3">
        <div>
          <div className="text-sm mb-1">CPU Usage</div>
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-blue-500 rounded-full transition-all duration-300"
              style={{ width: `${server?.cpuUsage || getRandomValue(100)}%` }}
            />
          </div>
        </div>
        <div>
          <div className="text-sm mb-1">Mem Usage</div>
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-orange-500 rounded-full transition-all duration-300"
              style={{ width: `${server?.memUsage || getRandomValue(100)}%` }}
            />
          </div>
        </div>
      </div>
    </Card>
  );
}
