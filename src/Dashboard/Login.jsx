import { useState } from "react";
import "../index.css";
// import { useLocation } from "react-router-dom";
// import { useAuth } from "../hooks/use-auth";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const [, setLocation] = useLocation();
  // const { loginMutation } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // await loginMutation.mutateAsync({ username, password });
      // setLocation("/");
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Form Section */}
      <div className="flex-1 flex items-center justify-center p-8 bg-background">
        <div className="max-w-md w-full">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Monitoring Dashboard
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              // disabled={loginMutation.isPending}
            >
              {/* {loginMutation.isPending ? "Logging in..." : "Login"} */}
            </button>
          </form>
        </div>
      </div>

      {/* Info Section */}
      <div className="hidden lg:flex flex-1 bg-primary p-8 items-center justify-center">
        <div className="max-w-lg text-primary-foreground">
          <h1 className="text-4xl font-bold mb-6">Welcome to Monitor</h1>
          <p className="text-xl opacity-90">
            Get real-time insights into your server's performance, monitor
            connections, and track resource usage all in one place.
          </p>
        </div>
      </div>
    </div>
  );
}
