import {
  Headset,
  PhoneForwarded,
  Target,
  ShieldCheck,
  PhoneCall,
  UserCheck,
  FileCheck,
  GraduationCap,
  Share2,
} from "lucide-react";
import Marquee from "../ui/Marquee";

const services = [
  {
    icon: Headset,
    badge: "24/7 Support",
    title: "Customer Care",
    subtitle: "Focus on your business, we'll handle customer happiness",
    description:
      "In-house support is expensive and time-consuming. We provide expert 24/7 support tailored to you, so you can focus on growth while we keep your customers happy.",
  },
  {
    icon: PhoneForwarded,
    badge: "Sales Boost",
    title: "Telemarketing Service",
    subtitle: "Tired of chasing leads? Let our experienced team boost your sales",
    description:
      "Struggling to connect with your ideal customers? Our battle-tested telemarketers have the experience and communication skills to turn cold leads into sales across B2B and B2C markets.",
  },
  {
    icon: Target,
    badge: "B2B & B2C",
    title: "B2B/B2C Lead Gen",
    subtitle: "Generate Qualified Leads for Your B2B or B2C Business",
    description:
      "Our team of experienced telemarketing agents crafts targeted campaigns delivering high-quality leads. We create bespoke lead generation strategies aligned with your ideal customer profile.",
  },
  {
    icon: ShieldCheck,
    badge: "CRM Integrated",
    title: "24/7 Technical Support",
    subtitle: "Stop IT Headaches: Get Reliable 24/7 Technical Support",
    description:
      "Our 24/7 technical support frees your team, reduces costs, and ensures expert help for your customers. We integrate seamlessly with your CRM for continuous assistance.",
  },
  {
    icon: PhoneCall,
    badge: "Flexible & Scalable",
    title: "Inbound & Outbound Calling",
    subtitle: "Level Up Your Customer Service: Inbound & Calling Solutions",
    description:
      "We offer expert Inbound Agents delivering exceptional service using your brand voice & Targeted Outbound Calls to reach new audiences and generate leads. Flexible and scalable to your needs.",
  },
  {
    icon: UserCheck,
    badge: "Productivity",
    title: "Virtual Assistant",
    subtitle: "Boost Your Productivity: Hire a Top-Tier Virtual Assistant",
    description:
      "Free up your time. Our VAs tackle tasks like email, social media, data entry, and more. We find the perfect fit, handle everything, and offer flexible plans. Focus on what matters.",
  },
  {
    icon: FileCheck,
    badge: "Efficiency",
    title: "Back Office Support",
    subtitle: "Focus on Growth, We'll Handle the Back Office",
    description:
      "Offload tasks, boost efficiency. Our expert virtual assistants handle daily back-office needs, freeing you to focus on what matters most. Contact us today!",
  },
  {
    icon: GraduationCap,
    badge: "Team Growth",
    title: "Training and Coaching",
    subtitle: "Unlock Your Team's Potential with Expert Training & Coaching",
    description:
      "Empower your team for success. We offer training in sales, team management, cold calling, and communication. Proven results, customizable programs. Schedule a free consultation today!",
  },
  {
    icon: Share2,
    badge: "Brand Growth",
    title: "Social Media Management",
    subtitle: "Supercharge Your Brand: Expert Social Media Management",
    description:
      "Grow your online presence. We craft engaging content, manage interactions, and drive sales—all with a personalized touch. Free up your time, maximize impact. Contact us today!",
  },
];

export default function Services() {
  return (
    <>
      <Marquee />

      <section
        id="services"
        className="relative overflow-hidden bg-slate-50 py-24"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(14,165,233,0.08),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(99,102,241,0.08),transparent_28%)]" />

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">
              Our Services
            </span>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
              Some of our Services
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Outsource any extra services you have your hands full with—from lead generation,
              calling prospects on your list, providing 24/7 customer care support for your
              office, managing appointments, to taking orders via call! Basically have a
              professional assistant or team working for you without spending a fortune for
              hiring a professional, renting an office, or employing an entire team.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="group relative overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-sky-300 hover:shadow-xl"
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(14,165,233,0.08),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(99,102,241,0.06),transparent_26%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <div className="relative">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-100 text-sky-600 transition duration-300 group-hover:bg-sky-600 group-hover:text-white">
                        <Icon className="h-7 w-7" />
                      </div>

                      <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-600 transition group-hover:border-sky-200 group-hover:bg-sky-50 group-hover:text-sky-700">
                        {item.badge}
                      </span>
                    </div>

                    <h3 className="mt-6 text-2xl font-bold tracking-tight text-slate-900">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm font-semibold text-sky-600">
                      {item.subtitle}
                    </p>

                    <p className="mt-3 text-[15px] leading-7 text-slate-600">
                      {item.description}
                    </p>

                    <div className="mt-8 border-t border-slate-100 pt-5">
                      <a
                        href="#contact"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-sky-600 transition group-hover:gap-3 group-hover:text-sky-700"
                      >
                        Click here to learn more
                        <span>→</span>
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}