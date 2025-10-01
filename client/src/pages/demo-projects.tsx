import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";

const demoLinks = [
  {
    title: "Billing Experience",
    description: "Walk through the modern billing workflow built for rapid invoicing.",
    route: "/splash",
  },
  {
    title: "Menu & Ordering",
    description: "Explore the interactive menu that powers ordering experiences.",
    route: "/menu",
  },
  {
    title: "Inventory Dashboard",
    description: "Monitor inventory health and supplier updates in real time.",
    route: "/dashboard",
  },
  {
    title: "Admin Console",
    description: "Manage users, permissions, and configurations effortlessly.",
    route: "/admin",
  },
];

export default function DemoProjectsPage() {
  const [, navigate] = useLocation();

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-100 flex flex-col">
      <header className="bg-blue-700 text-white">
        <div className="max-w-5xl mx-auto px-6 py-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="space-y-1">
            <p className="text-sm uppercase tracking-[0.4em] text-blue-200">Inwora</p>
            <h1 className="text-3xl font-semibold">Demo Projects</h1>
          </div>
          <div className="flex gap-3">
            <Button
              variant="outline"
              className="border-white bg-transparent text-white hover:bg-white/10"
              onClick={() => navigate("/")}
            >
              Back to Home
            </Button>
            <Button className="bg-white text-blue-700 hover:bg-blue-100" onClick={() => navigate("/splash")}>
              Launch Primary Demo
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center px-6 py-16">
        <div className="max-w-5xl w-full grid gap-8 sm:grid-cols-2">
          {demoLinks.map((demo) => (
            <button
              key={demo.title}
              onClick={() => navigate(demo.route)}
              className="group relative overflow-hidden rounded-3xl border border-blue-100 bg-white shadow-lg transition-transform duration-300 hover:-translate-y-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100/40 via-transparent to-blue-200/40 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10 h-full p-8 flex flex-col gap-4 text-left">
                <div>
                  <h2 className="text-2xl font-semibold text-blue-900">{demo.title}</h2>
                  <p className="mt-2 text-slate-600">{demo.description}</p>
                </div>
                <div className="mt-auto">
                  <span className="inline-flex items-center gap-2 text-blue-700 font-medium">
                    Explore now
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-4 w-4 transition-transform group-hover:translate-x-1"
                      aria-hidden
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 11-1.414-1.414L13.586 11H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </main>

      <footer className="bg-blue-900 text-blue-100 py-6">
        <div className="max-w-5xl mx-auto px-6 text-center text-sm">
          Need a guided tour? Reach out to our team for a personalized walkthrough.
        </div>
      </footer>
    </div>
  );
}