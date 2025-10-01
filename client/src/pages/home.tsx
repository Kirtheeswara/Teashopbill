import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";

const services = [
  {
    title: "Billing Application",
    description:
      "Automate invoicing, streamline payment collection, and keep cash flow visible in real time with customizable billing workflows.",
  },
  {
    title: "Inventory Management Application",
    description:
      "Track stock levels, monitor suppliers, and sync data across teams to maintain the perfect balance between demand and supply.",
  },
  {
    title: "Custom IT Solutions",
    description:
      "Build tailored platforms that solve unique operational challenges and seamlessly integrate with your existing ecosystem.",
  },
];

const advantages = [
  "Proven track record delivering reliable, enterprise-grade software.",
  "Human-centered design that keeps experiences intuitive and accessible.",
  "Rapid deployment with ongoing optimization and support.",
  "Cloud-ready infrastructure engineered for security and scalability.",
];

const teamMembers = [
  {
    name: "Kirtheeswaran GRM",
    role: "Project Leader & Developer",
    summary:
      "Guides the product vision while architecting robust full-stack solutions that bring ideas to market fast.",
  },
  {
    name: "Bhalaram Krishnan",
    role: "Senior Backend SQL Developer",
    summary:
      "Designs high-performance data models and optimized SQL pipelines that keep mission-critical information flowing.",
  },
  {
    name: "Rajesh",
    role: "Senior Deployment & Backend Engineer",
    summary:
      "Automates deployments and hardens backend services so releases are reliable, secure, and scalable from day one.",
  },
  {
    name: "Jeya Suriya",
    role: "Software Development Engineer (Full Stack)",
    summary:
      "Builds polished user experiences and stable APIs, bridging frontend delight with backend resilience.",
  },
  {
    name: "Afsar",
    role: "Business Analyst & Documentation Specialist",
    summary:
      "Transforms business goals into clear requirements and actionable documentation that aligns every stakeholder.",
  },
  {
    name: "Abishek",
    role: "Business Analyst & Documentation Specialist",
    summary:
      "Crafts insights and structured plans that keep delivery on track and stakeholders informed at every milestone.",
  },
];

export default function HomePage() {
  const [, navigate] = useLocation();

  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col">
      <header className="bg-blue-700 text-white">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <img
              src="/logo.png"
              alt="Inwora Logo"
              className="h-14 w-14 rounded-full object-cover border-2 border-white/60 shadow-md"
            />
            <div>
              <h1 className="text-3xl font-semibold tracking-tight">Inwora</h1>
              <p className="text-blue-100">Innovative IT solutions for modern businesses</p>
            </div>
          </div>
          <nav className="flex gap-3 text-sm md:text-base">
            <button
              type="button"
              onClick={() => navigate("/")}
              className="px-4 py-2 rounded-lg font-medium hover:bg-blue-800 transition-colors"
            >
              Home
            </button>
            <button
              type="button"
              onClick={() => navigate("/demo-projects")}
              className="px-4 py-2 rounded-lg font-medium hover:bg-blue-800 transition-colors"
            >
              Demo Projects
            </button>
            <Button
              onClick={() => navigate("/demo-projects")}
              className="bg-white text-blue-700 hover:bg-blue-100"
            >
              Explore Demos
            </Button>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <section className="bg-blue-50">
          <div className="max-w-6xl mx-auto px-6 py-16 flex flex-col gap-10 md:flex-row md:items-center">
            <div className="flex-1 space-y-6 text-center md:text-left">
              <p className="text-sm uppercase tracking-[0.3em] text-blue-600">Welcome to Inwora</p>
              <h2 className="text-4xl md:text-5xl font-bold text-blue-900 leading-snug">
                Smart technology crafted to simplify every part of your operations.
              </h2>
              <p className="text-lg text-slate-600">
                We craft connected experiences that unite teams, unlock insights, and accelerate decisions—so you can scale with
                confidence.
              </p>
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                <Button onClick={() => navigate("/demo-projects")} className="bg-blue-700 hover:bg-blue-800">
                  View Demo Projects
                </Button>
                <Button
                  variant="outline"
                  className="border-blue-700 text-blue-700 hover:bg-blue-100"
                  onClick={() => navigate("/splash")}
                >
                  Try Billing Demo
                </Button>
              </div>
            </div>
            <div className="flex-1">
              <div className="bg-white rounded-3xl shadow-xl p-6 border border-blue-100">
                <p className="text-blue-900 font-semibold text-lg">Fast Facts</p>
                <ul className="mt-4 space-y-3 text-slate-700">
                  <li className="flex gap-3">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-blue-600" aria-hidden />
                    Built with resilient cloud-ready infrastructure.
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-blue-600" aria-hidden />
                    Secure workflows that adapt to your governance requirements.
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-blue-600" aria-hidden />
                    Embedded analytics to keep stakeholders informed in real time.
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-blue-600" aria-hidden />
                    Dedicated support ensuring smooth onboarding and adoption.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-6 py-16 space-y-6" id="about">
          <h3 className="text-3xl font-bold text-blue-900">About Us</h3>
          <p className="text-lg text-slate-600 leading-relaxed">
            At Inwora, we provide innovative IT solutions designed to simplify business operations and boost productivity. With a
            focus on smart technology and seamless user experiences, we deliver powerful applications that help businesses run
            smoothly, make informed decisions, and scale with confidence.
          </p>
        </section>

        <section className="bg-slate-50">
          <div className="max-w-6xl mx-auto px-6 py-16 space-y-10" id="services">
            <h3 className="text-3xl font-bold text-blue-900">Our Services</h3>
            <div className="grid gap-8 md:grid-cols-3">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="bg-white rounded-2xl shadow-lg border border-blue-100 p-6 flex flex-col"
                >
                  <h4 className="text-xl font-semibold text-blue-800 mb-3">{service.title}</h4>
                  <p className="text-slate-600 leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-6 py-16 space-y-6" id="why">
          <h3 className="text-3xl font-bold text-blue-900">Why Choose Inwora?</h3>
          <ul className="grid gap-4 md:grid-cols-2">
            {advantages.map((point) => (
              <li
                key={point}
                className="flex items-start gap-3 bg-blue-50 border border-blue-100 rounded-xl p-4 text-slate-700"
              >
                <span className="mt-2 h-2.5 w-2.5 rounded-full bg-blue-600" aria-hidden />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="bg-gradient-to-br from-blue-50 via-white to-blue-100">
          <div className="max-w-6xl mx-auto px-6 py-16 space-y-10" id="team">
            <div className="text-center space-y-4">
              <p className="text-sm uppercase tracking-[0.4em] text-blue-500">People Behind the Experience</p>
              <h3 className="text-3xl md:text-4xl font-bold text-blue-900">Meet the Inwora Team</h3>
              <p className="max-w-3xl mx-auto text-lg text-slate-600">
                A multidisciplinary crew blending leadership, engineering mastery, and strategic insight to shape technology that
                works beautifully in the real world.
              </p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {teamMembers.map((member) => (
                <div
                  key={member.name}
                  className="group relative overflow-hidden rounded-3xl border border-blue-100 bg-white/90 shadow-xl backdrop-blur transition-transform duration-300 hover:-translate-y-2"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-100/40 via-transparent to-blue-200/40 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative z-10 p-8 space-y-4">
                    <div className="space-y-2">
                      <h4 className="text-2xl font-semibold text-blue-900">{member.name}</h4>
                      <p className="text-sm font-medium uppercase tracking-[0.25em] text-blue-600">{member.role}</p>
                    </div>
                    <p className="text-slate-600 leading-relaxed">{member.summary}</p>
                    <div className="flex items-center gap-2 text-blue-700 font-medium">
                      <span>Dedicated to excellence</span>
                      <span className="h-1 w-12 rounded-full bg-blue-400" aria-hidden />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-blue-700 text-white">
          <div className="max-w-6xl mx-auto px-6 py-16 space-y-10 md:flex md:items-center md:justify-between">
            <div className="space-y-6 md:max-w-xl">
              <h3 className="text-3xl font-bold">Our Mission</h3>
              <p className="text-lg text-blue-100 leading-relaxed">
                Empower organizations with intelligent digital platforms that remove operational friction, enable rapid decision
                making, and create delightful experiences for every stakeholder.
              </p>
            </div>
            <div className="space-y-6 md:max-w-xl">
              <h3 className="text-3xl font-bold">Our Vision</h3>
              <p className="text-lg text-blue-100 leading-relaxed">
                Become the trusted technology partner for forward-thinking enterprises, delivering adaptive solutions that scale
                as boldly as their ambitions.
              </p>
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-6 py-16 text-center space-y-6">
          <h3 className="text-3xl font-bold text-blue-900">Ready to experience Inwora?</h3>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Discover how our demos transform complex business processes into simple, secure, and insightful workflows tailored to
            your teams.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Button onClick={() => navigate("/demo-projects")} className="bg-blue-700 hover:bg-blue-800">
              Browse Demo Projects
            </Button>
            <Button
              variant="outline"
              onClick={() => navigate("/splash")}
              className="border-blue-700 text-blue-700 hover:bg-blue-100"
            >
              Launch Billing Demo
            </Button>
          </div>
        </section>
      </main>

      <footer className="bg-slate-900 text-slate-200 py-6">
        <div className="max-w-6xl mx-auto px-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between text-sm">
          <p>© {new Date().getFullYear()} Inwora. All rights reserved.</p>
          <p>Seamless technology. Powerful experiences.</p>
        </div>
      </footer>
    </div>
  );
}