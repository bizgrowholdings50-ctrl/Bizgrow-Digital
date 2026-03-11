import Image from "next/image";
import React from "react";
import {
  Target,
  Magnet,
  Filter,
  LineChart,
  CheckCircle2,
  Globe,
  Zap,
} from "lucide-react";

import Link from "next/link";
import FadeIn from "@components/MotionWrapper";

export const metadata = {
  title: "Lead Generation Services to Grow Your UK Business",
  description:
    "Maximise engagement and qualified leads with BizGrow Digital’s professional lead generation solutions for UK businesses.",
  alternates: {
    canonical: "https://bizgrow-digital.co.uk/lead-generation-solutions/",
  },
};

const LeadGenerationPage = () => {
  const leadServices = [
    {
      title: "Lead Prospecting",
      desc: "We identify and connect you with high-value decision-makers in your industry using advanced targeting tools, ensuring every lead has genuine potential to convert.",
      icon: <Target className="w-8 h-8" />,
      bgColor: "bg-orange-100",
      hoverBg: "group-hover:bg-[#B54118]",
    },
    {
      title: "Lead Magnets",
      desc: "We craft irresistible offers, whitepapers, and webinars that attract qualified prospects into your sales ecosystem, increasing engagement and nurturing trust.",
      icon: <Magnet className="w-8 h-8" />,
      bgColor: "bg-blue-100",
      hoverBg: "group-hover:bg-[#B54118]",
    },
    {
      title: "Conversion Funnels",
      desc: "Designing multi-step funnels that turn cold traffic into high-quality leads, optimising every stage for maximum conversions.",
      icon: <Filter className="w-8 h-8" />,
      bgColor: "bg-purple-100",
      hoverBg: "group-hover:bg-[#B54118]",
    },
    {
      title: "Lead Nurturing",
      desc: "Automated follow-up sequences keep your brand top-of-mind, ensuring prospects are ready to engage when the timing is right.",
      icon: <Zap className="w-8 h-8" />,
      bgColor: "bg-green-100",
      hoverBg: "group-hover:bg-[#B54118]",
    },
  ];

  return (
    <section className="relative w-full">
      {/* --- HERO SECTION --- */}
      <div className="relative  h-screen w-full">
        <Image
          src="/lead-hero.jpg" // Hero image suggestion: High-end corporate building or data visualization
          alt="Lead generation services by BizGrow digital"
          fill
          priority
          fetchPriority="high"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 w-full bg-black/75 flex flex-col justify-center items-center px-6">
          {/* 🔹 FIX: Har element ko 'w-full flex justify-center' wale div mein wrap kiya gaya hai */}
          <FadeIn direction="up" delay={0.2} className="w-full">
            <div className="w-full flex justify-center">
              <span
                className="text-orange-500 font-bold tracking-[0.3em] uppercase 
              text-xs md:text-sm mb-4 block text-center"
              >
                Lead Generation Solutions
              </span>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.4} className="w-full">
            <div className="w-full flex justify-center">
              <h1 className="text-white text-3xl md:text-6xl text-center font-black max-w-5xl leading-tiet tracking-normal">
                Boost sales with UK
                <span className="text-orange-500 ml-5">
                   Lead Generation Services{" "}
                </span>
              </h1>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.6} className="w-full">
            <div className="w-full flex justify-center">
              <p className="text-gray-300 text-lg md:text-lg text-center max-w-3xl mt-8">
                BizGrow Digital provides advanced lead generation solutions that
                connect your sales team with high-quality prospects ready to
                engage. Drive measurable growth and strengthen your business
                presence in the UK.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
      {/* 🚀 SERVICE GRID: Results-First Approach */}
      <section className="py-24 bg-gray-50 dark:bg-black relative overflow-hidden">
        {/* Subtle Branding Blur */}
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-[#B54118]/5 blur-[120px] rounded-full -z-10" />

        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="mb-20">
            <FadeIn
              direction="up"
              delay={0.2}
              className="flex flex-col items-center"
            >
              <div className="flex flex-col items-center">
                <h2 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white leading-[1.1] tracking-tighter uppercase">
                  Outcome-Driven Lead Generation{" "}
                  <span className="text-[#B54118]">Approach</span>
                </h2>
                <div className="w-24 h-1.5 bg-[#B54118] mt-6 rounded-full" />
              </div>
            </FadeIn>

            <FadeIn
              direction="up"
              delay={0.4}
              className="flex flex-col items-center"
            >
              <div className="flex justify-center">
                <p className="mt-8 text-gray-600 dark:text-gray-400 text-lg md:text-lg max-w-3xl leading-relaxed font-medium">
                  At{" "}
                  <Link
                    href="https://bizgrow-digital.co.uk/about-us/"
                    className="text-[#B54118] font-bold underline"
                  >
                    BizGrow Digital,
                  </Link>{" "}
                  we prioritise quality over quantity. With UK-focused
                  strategies, we deliver measurable results that optimise your
                  sales pipeline efficiently.
                </p>
              </div>
            </FadeIn>
          </div>

          {/* leadServices Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
            {leadServices.map((item, index) => (
              <FadeIn
                key={index}
                direction="up"
                delay={0.1 * index}
                className="h-full flex"
              >
                {/* Card: Changed dark:bg-slate-700 to match your Brand Navy/Black */}
                <div className="group relative h-full flex flex-col p-10 bg-white dark:bg-[#001235]/40 backdrop-blur-md rounded-[3rem] border-2 border-slate-100 dark:border-white/5 shadow-xl hover:shadow-[#B54118]/20 transition-all duration-500 w-full overflow-hidden hover:-translate-y-3">
                  {/* Icon Container - Animated Scale/Rotate */}
                  <div
                    className={`w-20 h-20 mx-auto ${item.bgColor} ${item.hoverBg} group-hover:text-white text-[#B54118] rounded-2xl flex items-center justify-center mb-8 shadow-lg transition-all duration-500 group-hover:rotate-[15deg] group-hover:scale-110 shrink-0 text-3xl`}
                  >
                    {item.icon}
                  </div>

                  {/* Title - Consistent Font Black */}
                  <h3 className="text-xl font-black dark:text-white mb-4 uppercase tracking-tight group-hover:text-[#B54118] transition-colors">
                    {item.title}
                  </h3>

                  {/* Description - flex-grow ensures cards stay equal height */}
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed font-medium flex-grow">
                    {item.desc}
                  </p>

                  {/* Hover Indicator Line */}
                  <div className="mt-8 w-12 h-1 bg-gray-100 dark:bg-white/10 mx-auto rounded-full overflow-hidden">
                    <div className="w-0 group-hover:w-full h-full bg-[#B54118] transition-all duration-700 mx-auto" />
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
      {/* 🚀 NEW SECTION: LEAD GENERATION PROCESS (Horizontal Steps) */}
      <section className="py-32 bg-gray-50 dark:bg-black relative overflow-hidden">
        {/* Subtle Background Text for Design Depth */}
        <div className="absolute top-10 left-10 text-slate-200/50 dark:text-white/[0.02] font-black text-9xl pointer-events-none uppercase tracking-tighter">
          Process
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8">
            <div className="max-w-3xl">
              <FadeIn direction="up">
                <span className="text-[#B54118] font-black uppercase tracking-[0.3em] text-xs mb-4 block">
                  How We Drive Results
                </span>
                <h2 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white leading-none uppercase tracking-tighter">
                  Our Lead <br />
                  <span className="text-[#B54118]">Generation Process</span>
                </h2>
                <p className="mt-8 text-gray-600 dark:text-gray-400 text-lg leading-relaxed font-medium italic border-l-4 border-[#B54118] pl-6">
                  At BizGrow Digital, we follow a structured and results-driven
                  process designed to generate qualified leads and real sales
                  opportunities for UK businesses.
                </p>
              </FadeIn>
            </div>
          </div>

          {/* Process Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              {
                step: "01",
                title: "Onboarding",
                desc: "Understanding your UK business goals and target audience to build a tailored strategy.",
              },
              {
                step: "02",
                title: "Organic Growth",
                desc: "SEO and content optimisation to attract high-intent UK prospects organically.",
              },
              {
                step: "03",
                title: "Email Marketing",
                desc: "Targeted outreach campaigns to connect and nurture valuable client relationships.",
              },
              {
                step: "04",
                title: "Lead Activation",
                desc: "Activating lead capture channels to generate qualified enquiries for your business.",
              },
              {
                step: "05",
                title: "Review & Refine",
                desc: "Continuous tracking and optimisation to improve lead quality and long-term results.",
              },
            ].map((item, i) => (
              <FadeIn
                key={i}
                direction="up"
                delay={0.1 * i}
                className="group relative"
              >
                <div className="h-full bg-white dark:bg-[#001235]/40 backdrop-blur-md p-8 rounded-[2.5rem] border border-slate-200 dark:border-white/5 hover:bg-[#B54118] transition-all duration-500 group">
                  {/* Step Number */}
                  <div className="text-5xl font-black text-slate-100 dark:text-white/5 group-hover:text-white/20 transition-colors duration-500 mb-6">
                    {item.step}
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-black text-slate-900 dark:text-white group-hover:text-white uppercase tracking-tight mb-4 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 group-hover:text-white/80 text-xs leading-relaxed font-medium transition-colors">
                    {item.desc}
                  </p>

                  {/* Connecting Arrow (Only on Desktop) */}
                  {i < 4 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                      <Zap
                        className="text-[#B54118] group-hover:text-white opacity-20 group-hover:opacity-100 transition-all"
                        size={20}
                      />
                    </div>
                  )}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
      {/* 🎯 NEW SECTION: TYPES OF LEADS WE GENERATE */}
      <section className="py-24 bg-white dark:bg-black overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Side: Content */}
            <div className="max-w-xl">
              <FadeIn direction="right">
                <h2 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white leading-[1.1] uppercase tracking-tighter">
                  Types of Leads <br />
                  <span className="text-orange-500">We Generate</span>
                </h2>
                <p className="mt-8 text-gray-600 dark:text-gray-400 text-lg leading-relaxed font-medium">
                  BizGrow Digital helps UK businesses generate different types
                  of high-quality leads tailored to their industry and growth
                  objectives. We focus on intent, not just traffic.
                </p>

                {/* Visual Accent */}
                <div className="mt-10 p-6 bg-orange-50 dark:bg-orange-900/10 rounded-2xl border-l-4 border-orange-500">
                  <p className="text-sm font-bold text-slate-800 dark:text-gray-200 uppercase tracking-widest leading-relaxed">
                    "Quality over quantity: Every lead is a potential long-term
                    partner."
                  </p>
                </div>
              </FadeIn>
            </div>

            {/* Right Side: Interactive Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  title: "B2B Lead Generation",
                  desc: "Connecting businesses with decision-makers and qualified prospects seeking professional services.",
                  icon: <Globe className="w-6 h-6" />,
                  style: "bg-slate-50 dark:bg-[#001235]/40",
                },
                {
                  title: "Inbound Leads",
                  desc: "Attracting customers who are actively searching for your services through SEO and digital channels.",
                  icon: <Zap className="w-6 h-6" />,
                  style:
                    "bg-white border-2 border-slate-100 dark:bg-transparent dark:border-orange-500/30",
                },
                {
                  title: "Local Business Leads",
                  desc: "Generating enquiries from customers in your local UK areas through targeted digital marketing.",
                  icon: <Target className="w-6 h-6" />,
                  style:
                    "bg-white border-2 border-slate-100 dark:bg-transparent dark:border-orange-500/30",
                },
                {
                  title: "Sales-Ready Leads",
                  desc: "Delivering prospects who are genuinely interested and ready to move forward with your business.",
                  icon: <CheckCircle2 className="w-6 h-6" />,
                  style: "bg-orange-500 text-white",
                },
              ].map((item, i) => (
                <FadeIn key={i} direction="up" delay={0.1 * i}>
                  <div
                    className={`p-8 rounded-[2.5rem] h-full flex flex-col justify-between transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${item.style}`}
                  >
                    <div>
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${
                          i === 3
                            ? "bg-white/20"
                            : "bg-orange-500/10 text-orange-500"
                        }`}
                      >
                        {item.icon}
                      </div>
                      <h3
                        className={`text-lg font-black uppercase tracking-tight mb-4 ${
                          i === 3
                            ? "text-white"
                            : "text-slate-900 dark:text-white"
                        }`}
                      >
                        {item.title}
                      </h3>
                      <p
                        className={`text-sm leading-relaxed font-medium ${
                          i === 3
                            ? "text-orange-50/80"
                            : "text-gray-500 dark:text-gray-400"
                        }`}
                      >
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* --- DATA SECTION (Lead Gen Focus) --- */}
      <section className="py-24 bg-white dark:bg-black dark:border-t-2 dark:border-orange-700 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <FadeIn direction="right" delay={0.2}>
              <h2 className="text-4xl md:text-5xl font-black dark:text-white leading-tight">
                PRECISION LEAD GENERATION
                <span className="text-orange-500 ml-1">
                  & TARGETED SALES INSIGHTS
                </span>
              </h2>
              <p className="text-gray-600 dark:text-gray-400 pt-8 text-lg">
                Stop wasting time on unqualified traffic. BizGrow Digital
                delivers{" "}
                <Link
                  href="https://bizgrow-digital.co.uk/8-effective-lead-generation-strategies/ "
                  className="text-[#B54118] font-bold underline"
                >
                  high-quality leads{" "}
                </Link>
                through smart analytics, predictive targeting, and UK-focused
                strategies. Connect with prospects ready to engage and convert,
                growing your business efficiently.
              </p>
            </FadeIn>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                "Targeted LinkedIn Outreach",
                "High-Intent Google Ads",
                "Custom Landing Pages",
                "CRM Integration & Tracking",
              ].map((feature, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="text-[#B54118] w-5 h-5" />
                  <span className="font-semibold dark:text-gray-200">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <FadeIn direction="left" delay={0.4}>
            <div className="relative h-[500px] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-gray-100 dark:border-orange-800">
              <Image
                src="/lead-generation.jpg" // Suggestion: Screenshot of a lead dashboard or growth chart
                alt="Smart Lead Generation UK"
                fill
                className="object-cover"
              />
            </div>
          </FadeIn>
        </div>
      </section>
      {/* 🚀 FINAL PREMIUM CTA: Sales Pipeline */}
      <section className="dark:bg-black py-24 dark:border-y-2 dark:border-orange-700 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-10">
          <div
            className="relative py-24 md:py-32 rounded-[3.5rem] overflow-hidden text-white text-center shadow-[0_30px_70px_rgba(0,0,0,0.5)] group"
            style={{
              backgroundImage: "url('/sales-pipeline.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundAttachment: "fixed",
            }}
          >
            {/* 🔹 Overlay: Depth aur Readability ke liye */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/80 to-[#B54118]/20 z-0"></div>

            {/* 🔹 Premium Glass Border Overlay */}
            <div className="absolute inset-0 border-2 border-white/10 rounded-[3.5rem] z-10 pointer-events-none group-hover:border-[#B54118]/30 transition-all duration-500"></div>

            <div className="relative z-20 max-w-5xl mx-auto px-6 flex flex-col items-center">
              {/* Top Status Badge */}
              <FadeIn direction="up" className="flex flex-col items-center">
                <span className="px-6 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 border-l-[#B54118] border-l-4 text-white text-xs md:text-sm font-black tracking-[0.3em] uppercase">
                  BOOST YOUR SALES PIPELINE
                </span>

                <h2 className="text-4xl md:text-6xl mt-6 font-black mb-8 leading-[1.1] tracking-tighter uppercase">
                  Connect with <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B54118] to-orange-400">
                    HIGH-INTENT BUSINESS LEADS
                  </span>
                </h2>
              </FadeIn>

              <FadeIn
                direction="up"
                delay={0.2}
                className="flex flex-col items-center"
              >
                <p className="mx-auto mb-14 text-lg md:text-xl text-gray-300 font-light leading-relaxed max-w-3xl italic">
                  Stop waiting for customers to find you. BizGrow Digital helps
                  UK businesses attract and connect with qualified prospects
                  actively searching for their services.
                </p>
              </FadeIn>

              <FadeIn
                direction="up"
                delay={0.4}
                className="flex flex-col items-center text-center"
              >
                <Link href="/contact-us">
                  {/* 🎯 Aapka Fixed Bold Button with Shine Effect */}
                  <button className="relative px-8 py-4 bg-[#B54118] text-white font-black rounded-2xl overflow-hidden group transition-all duration-300 hover:scale-110 hover:shadow-[0_0_50px_rgba(181,65,24,0.6)]">
                    {/* Shine Animation */}
                    <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:animate-shine" />

                    <span className="relative z-10 text-lg uppercase tracking-[0.2em]">
                      Get Your Free LEAD  Audit →
                    </span>
                  </button>
                </Link>
              </FadeIn>
            </div>

            {/* 🔹 Background Glowing Accents */}
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#B54118]/10 blur-[130px] rounded-full -z-10"></div>
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#B54118]/10 blur-[130px] rounded-full -z-10"></div>
          </div>
        </div>
      </section>{" "}
    </section>
  );
};

export default LeadGenerationPage;
