import Image from "next/image";
import React from "react";
import {
  Code2,
  Zap,
  Layers,
  MousePointer2,
  CheckCircle2,
  Smartphone,
  Cpu,
  ShieldCheck,
  Layout,
  Target,
  Globe2,
  ShoppingCart,
  MousePointerClick,
  Palette,
  Search,
  LayoutDashboard,
  Gauge,
  Rocket,
} from "lucide-react";
import FadeIn from "@components/MotionWrapper";
import Link from "next/link";

export const metadata = {
  title: "Professional Web Development Services | BizGrow Digital ",
  description:
    "Get a modern, responsive website that converts. Built by BizGrow Digital using Next.js for speed, performance, and growth.",
  alternates: {
    canonical: "https://bizgrow-digital.co.uk/web-development/",
  },
};

const WebDevelopmentPage = () => {
  const techStack = [
    {
      title: "Next.js & React",
      desc: "Developing high-performance, SEO-optimised web applications using modern React features and server-side rendering for superior speed",
      icon: <Cpu className="w-8 h-8" />,
    },
    {
      title: "Tailwind CSS",
      desc: (
        <>
          Delivering clean, responsive
          <Link
            href="https://bizgrow-digital.co.uk/graphic-design-services/"
            className="text-[#B54118] font-bold underline ml-1"
          >
            designs
          </Link>{" "}
          with a utility-first framework for consistent styling and fast,
          scalable development.
        </>
      ),
      icon: <Layers className="w-8 h-8" />,
    },
    {
      title: "Animations Magic",
      desc: "Bringing interfaces to life with fluid Framer Motion and GSAP animations that enhance user engagement.",
      icon: <Zap className="w-8 h-8" />,
    },
    {
      title: "Modern TypeScript",
      desc: "Writing clean, type-safe, and maintainable code to ensure your project grows smoothly  without technical debt or bugs.",
      icon: <Code2 className="w-8 h-8" />,
    },
  ];

  return (
    <section className="w-full bg-white">
      {/* --- HERO SECTION --- */}
      <div className="relative h-[80vh] md:h-screen w-full flex items-center justify-center overflow-hidden">
        <Image
          src="/web-dev-hero.jpg"
          alt="Modern web development services "
          fill
          className="object-cover object-center"
          priority
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col items-center text-center">
          <FadeIn direction="up">
            <span className="text-orange-500 font-bold tracking-[0.3em] uppercase text-xs md:text-sm mb-4 block">
              Start Your Web Development Journey
            </span>
            <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-black leading-none mb-6">
              Fast & Powerful{" "}
              <span className="text-orange-500">Web Development </span> for UK
              Businesses
            </h1>
            <p className="text-gray-300 text-base md:text-xl max-w-3xl mb-10 mx-auto px-4 font-light leading-relaxed">
              Your Digital Growth Starts With a Website That Performs. At
              <Link
                href="https://bizgrow-digital.co.uk/about-us/"
                className="text-[#B54118] font-bold ml-1"
              >
                BizGrow Digital
              </Link>
              , we create fast, responsive, and{" "}
              <Link
                href="https://bizgrow-digital.co.uk/write-better-content-with-these-e-e-a-t-seo-techniques/"
                className="text-[#B54118] font-bold"
              >
                SEO-optimised
              </Link>{" "}
              websites designed to attract, engage, and convert your ideal
              customers.
            </p>
            <Link href="/contact-us">
              <button className="bg-[#B54118] text-white px-10 py-5 rounded-full font-bold hover:scale-105 transition-all uppercase tracking-widest shadow-2xl">
                Start Your Project Today
              </button>
            </Link>
          </FadeIn>
        </div>
      </div>

      {/* --- TECH FEATURES GRID --- */}
      <section className="w-full py-24 bg-white dark:bg-black dark:border-t-2 dark:border-orange-700">
        <div className="max-w-7xl mx-auto px-6">
          {/* 🎯 Section Header: Fully Centered */}
          <FadeIn
            direction="up"
            className="mb-20 flex flex-col items-center text-center"
          >
            <h2 className="text-4xl md:text-6xl font-black text-gray-800 dark:text-white uppercase leading-tight mb-6">
              Modern Tech That <br />
              <span className="text-orange-500 italic font-light">
                Powers Your Website
              </span>
            </h2>
            <div className="w-24 h-2 bg-orange-500 rounded-full mx-auto" />
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 items-stretch">
            {techStack.map((tech, i) => (
              <FadeIn key={i} direction="up" delay={i * 0.1} className="flex">
                <div className="p-10 bg-slate-50 dark:bg-slate-700/40 rounded-[2.5rem] border border-transparent hover:border-orange-500/30 transition-all group w-full flex flex-col h-full shadow-sm hover:shadow-xl text-center items-center">
                  <div className="text-orange-500 mb-6 group-hover:rotate-6 transition-transform duration-300">
                    {tech.icon}
                  </div>
                  <div className="flex-grow">
                    <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4 uppercase tracking-tight">
                      {tech.title}
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                      {tech.desc}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* --- PREMIUM Z-PATTERN SECTION: WHY YOUR BUSINESS NEEDS A WEBSITE --- */}
      <section className="w-full py-24 bg-white dark:bg-[#020817]">
        <div className="max-w-7xl mx-auto px-6">
          {/* 🎯 Header Section: Exact Content */}
          <div className="text-center mb-24">
            <FadeIn direction="up">
              <h2 className="text-4xl md:text-6xl font-black text-gray-800 dark:text-white uppercase leading-tight mb-8">
                Why Your Business <br />
                <span className="text-orange-500">
                  Needs a Professional
                </span>{" "}
                <br />
                Website?
              </h2>
              <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
                Your{" "}
                <Link
                  href="https://bizgrow-digital.co.uk/website-design-and-development/"
                  className="text-[#B54118] font-bold"
                >
                  website
                </Link>{" "}
                is often the first impression your customers have of your
                business. A poorly designed or slow website can drive potential
                clients away before they even engage.
              </p>
            </FadeIn>
          </div>

          {/* 🎯 Content: Zig-Zag Layout with Exact Points */}
          <div className="space-y-32">
            {[
              {
                t: "Build trust and credibility with your audience",
                icon: <ShieldCheck className="w-16 h-16" />,
                align: "left",
              },
              {
                t: "Showcase your products and services effectively",
                icon: <Layout className="w-16 h-16" />,
                align: "right",
              },
              {
                t: "Convert visitors into enquiries and customers",
                icon: <Target className="w-16 h-16" />,
                align: "left",
              },
              {
                t: "Reach users across all devices with a responsive design",
                icon: <Smartphone className="w-16 h-16" />,
                align: "right",
              },
            ].map((item, idx) => (
              <FadeIn
                key={idx}
                direction={item.align === "left" ? "right" : "left"}
              >
                <div
                  className={`flex flex-col ${item.align === "left" ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-12 lg:gap-24`}
                >
                  {/* Visual Side */}
                  <div className="w-full md:w-1/2 flex justify-center">
                    <div className="relative group">
                      <div className="absolute -inset-4 bg-orange-500/10 rounded-full blur-3xl group-hover:bg-orange-500/20 transition-all duration-700" />
                      <div className="relative w-32 h-32 md:w-48 md:h-48 bg-white dark:bg-slate-900 border-2 border-orange-500/20 rounded-[3rem] flex items-center justify-center text-orange-500 shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                        {item.icon}
                      </div>
                    </div>
                  </div>

                  {/* Text Side - Exact Content as Headings */}
                  <div className="w-full md:w-1/2 text-center md:text-left">
                    <span className="text-orange-500 font-black text-2xl italic mb-4 block opacity-30">
                      0{idx + 1}
                    </span>
                    <h3 className="text-2xl md:text-4xl font-black text-gray-800 dark:text-white uppercase mb-6 tracking-tighter leading-tight">
                      {item.t}
                    </h3>
                    <div className="w-12 h-1 bg-orange-500/30 rounded-full" />
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn direction="up" className="mt-24 text-center">
            <p className="text-gray-400 italic text-lg">
              A professionally developed website helps you stand out.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* --- SECTION: OUR WEB DEVELOPMENT SERVICES --- */}
      <section className="w-full py-24 bg-white dark:bg-[#020817]">
        <div className="max-w-7xl mx-auto px-6">
          {/* 🎯 Header Area */}
          <div className="mb-20">
            <FadeIn direction="up">
              <h2 className="text-4xl md:text-6xl text-center font-black text-gray-800 dark:text-white uppercase leading-tight tracking-tighter mb-6">
                Our Web <br />
                <span className="text-orange-500">Development</span> Services
              </h2>
              <div className="max-w-2xl mx-auto">
                <p className="text-gray-500 text-center dark:text-gray-400 text-lg md:text-xl font-medium">
                  We offer a complete range of{" "}
                  <Link
                    href="https://bizgrow-digital.co.uk/what-is-b2b-web-development-in-the-uk/"
                    className="text-[#B54118] font-bold"
                  >
                    web development
                  </Link>{" "}
                  solutions tailored to your UK business needs:
                </p>
              </div>
            </FadeIn>
          </div>

          {/* 🎯 Services List (Strip Style) */}
          <div className="grid grid-cols-1 gap-4">
            {[
              {
                t: "Business Websites",
                d: "Professional websites that represent your UK brand effectively.",
                icon: <Globe2 className="w-6 h-6" />,
              },
              {
                t: "E-commerce Websites",
                d: "Online stores designed to drive sales and growth.",
                icon: <ShoppingCart className="w-6 h-6" />,
              },
              {
                t: "WordPress Development",
                d: "Flexible, scalable, and easy-to-manage websites.",
                icon: <Code2 className="w-6 h-6" />,
              },
              {
                t: "Landing Pages",
                d: (
                  <>
                    High-converting pages focused on generating{" "}
                    <Link
                      href="https://bizgrow-digital.co.uk/lead-generation-agency-uk-in-2026/"
                      className="text-[#B54118] font-bold"
                    >
                      leads
                    </Link>
                    .
                  </>
                ),
                icon: <MousePointerClick className="w-6 h-6" />,
              },
              {
                t: "Custom Website Design",
                d: "Unique designs tailored specifically to your business.",
                icon: <Palette className="w-6 h-6" />,
              },
            ].map((item, idx) => (
              <FadeIn key={idx} direction="up" delay={idx * 0.05}>
                <div className="group relative overflow-hidden bg-slate-50 dark:bg-slate-900/40 p-8 md:p-10 rounded-[2rem] border border-transparent hover:border-orange-500/30 transition-all duration-500 flex flex-col md:flex-row md:items-center justify-between gap-6">
                  {/* Left: Icon & Title */}
                  <div className="flex items-center gap-6 z-10">
                    <div className="w-12 h-12 rounded-xl bg-white dark:bg-slate-800 flex items-center justify-center text-orange-500 shadow-sm group-hover:bg-orange-500 group-hover:text-white transition-all duration-500">
                      {item.icon}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-black text-gray-800 dark:text-white uppercase tracking-tight">
                      {item.t}
                    </h3>
                  </div>

                  {/* Right: Description */}
                  <div className="md:max-w-md lg:max-w-xl z-10">
                    <p className="text-gray-500 dark:text-gray-400 text-lg leading-relaxed md:text-right group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors">
                      {item.d}
                    </p>
                  </div>

                  {/* Background Decoration on Hover */}
                  <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* --- BEYOND TEMPLATES SECTION --- */}
      <section className="dark:bg-[#020817] py-20 dark:border-t-2 dark:border-orange-700">
        <div className="py-24 bg-slate-900 mx-4 md:mx-10 dark:border dark:border-orange-700 rounded-[4rem] mb-24 overflow-hidden relative">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-black text-white leading-tight uppercase">
                The Power of
                <span className="text-orange-500 ml-1">Custom Development</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                No more slow themes or generic templates. We build bespoke React
                applications that deliver exceptional speed, smooth
                interactions, and a premium{" "}
                <Link
                  href="https://bizgrow-digital.co.uk/how-good-ux-can-keep-visitors-on-your-website-longer/"
                  className="text-[#B54118] font-bold"
                >
                  user experience
                </Link>
                .
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Fast loading Performance",
                  <Link
                    href="https://bizgrow-digital.co.uk/how-can-expert-seo-techniques-boost-your-business-visibility/"
                    className="underline font-bold decoration-[#B54118]"
                  >
                    SEO-Optimised Structure
                  </Link>,
                  "Mobile-First Design",
                  "Advanced Interactive Animations",
                  "Clean & Maintainable Code",
                  "Scalable Architecture",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="text-orange-500 w-5 h-5 flex-shrink-0" />
                    <span className="text-white font-medium text-sm uppercase tracking-wide">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden shadow-2xl">
              <Image
                src="/web-strategy.jpg"
                alt="Custom web development services by BizGrow Digital "
                fill
                className="object-cover transition-all duration-1000"
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION: OUR PROCESS (TIMELINE STYLE) --- */}
      <section className="w-full py-24 bg-slate-50 dark:bg-black">
        <div className="max-w-7xl mx-auto px-6">
          {/* 🎯 Header Section */}
          <FadeIn direction="up" className="text-center mb-24">
            <h2 className="text-4xl md:text-7xl font-black text-gray-800 dark:text-white uppercase tracking-tighter mb-6">
              Our <span className="text-orange-500">Process</span>
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              <Link
                href="https://bizgrow-digital.co.uk/our-digital-services/"
                className="text-[#B54118] font-bold"
              >
                BizGrow
              </Link>{" "}
              follows a structured and transparent process to ensure your UK
              website delivers real results:
            </p>
          </FadeIn>

          {/* 🎯 Timeline Flow */}
          <div className="relative">
            {/* Center Line (Hidden on Mobile) */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-[2px] bg-gray-200 dark:bg-gray-800" />

            <div className="space-y-20 md:space-y-32">
              {[
                {
                  step: "01",
                  title: "Discovery & Planning",
                  desc: "Understanding your business goals and audience.",
                  icon: <Search className="w-6 h-6" />,
                  side: "left",
                },
                {
                  step: "02",
                  title: "Design & Structure",
                  desc: "Creating a layout focused on user experience and branding.",
                  icon: <LayoutDashboard className="w-6 h-6" />,
                  side: "right",
                },
                {
                  step: "03",
                  title: "Development",
                  desc: "Building a fast, secure, and responsive website.",
                  icon: <Cpu className="w-6 h-6" />,
                  side: "left",
                },
                {
                  step: "04",
                  title: "Testing & Optimisation",
                  desc: "Ensuring performance, speed, and functionality.",
                  icon: <Gauge className="w-6 h-6" />,
                  side: "right",
                },
                {
                  step: "05",
                  title: "Launch & Support",
                  desc: "Smooth launch with ongoing guidance and support.",
                  icon: <Rocket className="w-6 h-6" />,
                  side: "left",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className={`relative flex flex-col ${
                    item.side === "left" ? "md:flex-row" : "md:flex-row-reverse"
                  } items-center`}
                >
                  {/* Content Side */}
                  <div className="w-full md:w-1/2 px-6 md:px-12">
                    <FadeIn direction={item.side === "left" ? "right" : "left"}>
                      <div
                        className={`p-10 bg-white dark:bg-slate-900 rounded-[3rem] shadow-xl border border-gray-100 dark:border-gray-800 text-center ${
                          item.side === "left"
                            ? "md:text-right"
                            : "md:text-left"
                        } group hover:border-orange-500 transition-all duration-500`}
                      >
                        <span className="text-orange-500 font-black text-4xl italic mb-4 block opacity-20 group-hover:opacity-100 transition-opacity">
                          {item.step}
                        </span>
                        <h3 className="text-2xl font-black text-gray-800 dark:text-white uppercase mb-4 tracking-tight">
                          {item.title}
                        </h3>
                        <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </FadeIn>
                  </div>

                  {/* Center Icon Node (Fixed in Middle) */}
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-14 h-14 bg-orange-500 rounded-2xl items-center justify-center text-white shadow-lg shadow-orange-500/40 z-10 border-4 border-white dark:border-black">
                    {item.icon}
                  </div>

                  {/* Spacer for the other side */}
                  <div className="hidden md:block w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 🚀 FINAL CTA: Web Development (Signature Style) */}
      <section className="dark:bg-black py-24 dark:border-y-2 dark:border-orange-700 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-10">
          <div
            className="relative py-24 md:py-32 rounded-[3.5rem] overflow-hidden text-white text-center shadow-[0_30px_70px_rgba(0,0,0,0.5)] group"
            style={{
              backgroundImage: "url('/web-cta.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundAttachment: "fixed",
            }}
          >
            {/* 🔹 Deep Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/80 to-[#B54118]/20 z-0"></div>

            {/* 🔹 Signature Glass Border */}
            <div className="absolute inset-0 border-2 border-white/10 rounded-[3.5rem] z-10 pointer-events-none group-hover:border-[#B54118]/30 transition-all duration-500"></div>

            <div className="relative z-20 max-w-5xl mx-auto px-6 flex flex-col items-center">
              {/* 🎯 FIXED TOP BADGE: Wrapped in flex-col for perfect centering */}
              <FadeIn
                direction="up"
                className="flex flex-col items-center w-full"
              >
                <div className="flex flex-col items-center mb-8">
                  <span className="px-6 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 border-l-[#B54118] border-l-4 text-white text-xs md:text-sm font-black tracking-[0.3em] uppercase">
                    Frontend Mastery
                  </span>
                </div>

                <h2 className="text-4xl md:text-7xl font-black mb-8 leading-[1.1] tracking-tighter uppercase">
                  Ready to Launch <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B54118] to-orange-400">
                    Something Exceptional?
                  </span>
                </h2>
              </FadeIn>

              <FadeIn
                direction="up"
                delay={0.2}
                className="flex flex-col items-center text-center"
              >
                <p className="mx-auto mb-12 text-lg md:text-2xl text-gray-300 font-light leading-relaxed max-w-3xl italic">
                  "Stop using slow, outdated websites. Let’s create a modern,
                  fast, and premium frontend that reflects your UK brand’s true
                  value"
                </p>
              </FadeIn>

              <FadeIn
                direction="up"
                delay={0.4}
                className="flex flex-col items-center"
              >
                <Link href="/contact-us">
                  {/* 🎯 SIGNATURE SHINE BUTTON */}
                  <button className="relative px-8 py-4 bg-[#B54118] text-white font-black rounded-2xl overflow-hidden group transition-all duration-300 hover:scale-110 hover:shadow-[0_0_50px_rgba(181,65,24,0.6)]">
                    {/* Shine Effect Animation */}
                    <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:animate-shine" />
                    <span className="relative z-10 text-lg uppercase tracking-[0.2em]">
                      Start Your Project →
                    </span>
                  </button>
                </Link>
              </FadeIn>
            </div>

            {/* Background Decorative Accents */}
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#B54118]/10 blur-[130px] rounded-full -z-10"></div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default WebDevelopmentPage;
