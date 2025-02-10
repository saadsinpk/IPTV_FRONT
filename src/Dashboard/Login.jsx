import { useState, useEffect, useRef } from "react";
import { useLocation } from "wouter";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import gsap from "gsap";
import Background3D from "@/components/Background3D";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [, setLocation] = useLocation();

  const formRef = useRef(null);
  const heroRef = useRef(null);
  const listItemsRef = useRef([]);

  useEffect(() => {
    // Form animation
    gsap.fromTo(
      formRef.current,
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
      }
    );

    // Hero section animation
    gsap.fromTo(
      heroRef.current,
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
      }
    );

    // Staggered list items animation
    gsap.fromTo(
      listItemsRef.current,
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        delay: 0.5,
      }
    );
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setLocation("/");
    }, 1000);
  };

  return (
    <div className="relative min-h-screen flex">
      <Background3D />

      {/* Content wrapper - above the 3D background */}
      <div className="relative z-10 flex min-h-screen w-full">
        {/* Form Section */}
        <div className="flex-1 flex items-center justify-center p-8">
          <div
            ref={formRef}
            className="w-[360px] backdrop-blur-md bg-black/30 p-8 rounded-lg border border-white/10"
          >
            <h2 className="text-lg text-blue-400 mb-6">Welcome Back</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-300 text-sm mb-1">
                  Username
                </label>
                <Input
                  type="text"
                  placeholder="Enter your username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="bg-black/50 border-white/10 text-white hover:border-blue-400/50 focus:border-blue-400 transition-colors"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-300 text-sm mb-1">
                  Password
                </label>
                <Input
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-black/50 border-white/10 text-white hover:border-blue-400/50 focus:border-blue-400 transition-colors"
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 transition-colors"
                disabled={isLoading}
              >
                {isLoading ? "Signing in..." : "Sign In"}
              </Button>
            </form>
          </div>
        </div>

        {/* Right Section */}
        <div
          ref={heroRef}
          className="hidden lg:flex flex-1 backdrop-blur-md bg-black/30 p-12 items-center border-l border-white/10"
        >
          <div className="max-w-lg">
            <h1 className="text-3xl font-medium text-white mb-4">
              Monitor Dashboard
            </h1>
            <p className="text-gray-400 mb-6">
              Get real-time insights into your server's performance, monitor
              connections, and track resource usage all in one place.
            </p>
            <ul className="space-y-3">
              {[
                "Real-time server statistics",
                "Connection monitoring",
                "Resource usage tracking",
                "Performance analytics",
              ].map((item, index) => (
                <li
                  key={index}
                  ref={(el) => (listItemsRef.current[index] = el)}
                  className="text-gray-400 flex items-center space-x-2"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
