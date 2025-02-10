import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Link, useLocation } from "wouter";
import { useAuth } from "@/hooks/use-auth";
import {
  LayoutDashboard,
  Activity,
  Settings,
  Users,
  LogOut,
  Loader2,
} from "lucide-react";

const items = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    href: "/",
  },
  {
    title: "Activity",
    icon: Activity,
    href: "/activity",
  },
  {
    title: "Users",
    icon: Users,
    href: "/users",
  },
  {
    title: "Settings",
    icon: Settings,
    href: "/settings",
  },
];

interface SidebarNavProps extends React.HTMLAttributes<HTMLDivElement> {}

export function SidebarNav({ className, ...props }: SidebarNavProps) {
  const [location] = useLocation();
  const { logoutMutation } = useAuth();

  return (
    <div className={cn("pb-12", className)} {...props}>
      <div className="space-y-4 py-4">
        <div className="px-4 py-2">
          <h2 className="mb-2 px-2 text-lg font-semibold tracking-tight">
            Monitor
          </h2>
          <ScrollArea className="px-1">
            <div className="space-y-1">
              {items.map((item) => (
                <Link key={item.href} href={item.href}>
                  <Button
                    variant={location === item.href ? "secondary" : "ghost"}
                    className="w-full justify-start"
                  >
                    <item.icon className="mr-2 h-4 w-4" />
                    {item.title}
                  </Button>
                </Link>
              ))}
              <Button
                variant="ghost"
                className="w-full justify-start"
                onClick={() => logoutMutation.mutate()}
                disabled={logoutMutation.isPending}
              >
                {logoutMutation.isPending ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  <LogOut className="mr-2 h-4 w-4" />
                )}
                Logout
              </Button>
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  );
}
