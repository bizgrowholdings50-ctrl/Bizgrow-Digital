import Image from "next/image";
import React from "react";
import { PenTool, Video, Layers, Target, CheckCircle2, Globe, LineChart, Zap } from "lucide-react";
import HorizontalProcess from "@components/HorizontalProcess";
import ShapeChangeSection from "@components/test";
import VShapeTransition from "@components/test2";
import Link from "next/link";
import FadeIn from "@components/MotionWrapper";

export const metadata = {
  title: "Creative Content Services by BizGrow Digital UK",
  description:
    "BizGrow Digital offers expert creative content services to enhance engagement, brand visibility, and online business growth across the UK.",
  alternates: {
    canonical: "https://bizgrow-digital.co.uk/creative-content/",
  },
};

const CreativeContentPage = () => {
  const contentFeatures = [
    {
      title: "Brand Storytelling",
      desc: "We develop authentic, compelling narratives that connect with your audience and translate your brand values into memorable experiences.",
      icon: <Layers className="w-8 h-8" />,
      bgColor: "bg-orange-100",
      hoverBg: "group-hover:bg-[#B54118]",
    },
    {
      title: "Visual Design",
      desc: (
        <>
          High-impact{" "}
          <Link
            href="https://bizgrow-digital.co.uk/how-digital-marketing-drives-faster-growth-for-businesses/"
            className="text-[#B54118] font-bold underline"
          >
            digital visuals and marketing
          </Link>{" "}
          assets created to strengthen brand consistency and enhance visual
          recognition across platforms.
        </>
      ),
      icon: <PenTool className="w-8 h-8" />,
      bgColor: "bg-blue-100",
      hoverBg: "group-hover:bg-[#B54118]",
    },
    {
      title: "Video & Motion Content",
      desc: "Professionally produced video editing and motion graphics designed to increase engagement, communicate value, and build audience trust.",
      icon: <Video className="w-8 h-8" />,
      bgColor: "bg-purple-100",
      hoverBg: "group-hover:bg-[#B54118]",
    },
    {
      title: "Content Strategy",
      desc: "Insight-led content frameworks developed using data and audience analysis to drive reach, relevance, and sustainable organic growth.",
      icon: <Target className="w-8 h-8" />,
      bgColor: "bg-green-100",
      hoverBg: "group-hover:bg-[#B54118]",
    },
  ];

  return (
    <section className="relative w-full">
      {/* --- HERO SECTION --- */}
      <div className="relative  h-[85vh] md:h-screen w-full">
        <Image
          src="/creative-content-hero.jpg"
          alt="Creative Content Services - BizGrow Digital"
          fill
          fetchPriority="high"
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 w-full mx-auto bg-black/70 flex flex-col pt-12 justify-center items-center px-6">
          <FadeIn direction="up" delay={0.2}>
            {/* 🔹 FIX: Wrapper div inside FadeIn to force centering */}
            <div className="w-full flex flex-col items-center">
              <span className="text-orange-500 font-bold tracking-widest uppercase text-sm mb-4 block text-center">
                Creative Content
              </span>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.4}>
            <div className="w-full flex flex-col items-center">
              <h1 className="text-white text-4xl md:text-7xl text-center font-bold max-w-5xl leading-tight">
                Words & Visuals That Define Authority <br />
                <span className="text-orange-500 text-4xl ">
                  Command Attention
                </span>
              </h1>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.6}>
            <div className="w-full flex flex-col items-center">
              <p className="text-gray-300 text-lg md:text-xl text-center max-w-2xl ">
                Strategically developed words and visuals that elevate your
                brand voice and engage the right audience in the UK.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* 🚀 UNIQUE FEATURES GRID: Crafting Masterpieces */}
      <section className="py-24 bg-gray-50 dark:bg-black relative overflow-hidden">
        {/* Background Branding Orbs */}
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-[#B54118]/5 blur-[120px] rounded-full -z-10" />

        <div className="max-w-7xl mx-auto px-6">
          {/* Header Text */}
          <div className="flex flex-col justify-center items-center mb-20 gap-4 text-center">
            <FadeIn direction="up" delay={0.2}>
              <h2 className="text-4xl md:text-6xl  font-black text-slate-900 dark:text-white leading-tight tracking-normal uppercase">
                Crafting Digital Experiences <br />
                That
                <span className="text-[#B54118]"> Inspire</span>
              </h2>
              <div className="w-24 h-1.5 bg-[#B54118] mx-auto mt-4 rounded-full" />
            </FadeIn>

            <FadeIn direction="up" delay={0.4}>
              <div className="flex justify-center">
                <p className="text-gray-600 dark:text-gray-400 text-lg md:text-[16px] max-w-4xl leading-relaxed font-medium mt-4">
                  Your content is your brand’s first impression. We ensure every
                  word, visual, and interaction is strategically designed to
                  support your business objectives and drive meaningful results.
                </p>
              </div>
            </FadeIn>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contentFeatures.map((item, index) => (
              <FadeIn
                key={index}
                direction="up"
                delay={0.2 * index}
                className="h-full"
              >
                <div className="group relative h-full p-8 bg-white dark:bg-[#001235]/40 backdrop-blur-md rounded-[2rem] border-2 border-slate-100 dark:border-white/5 shadow-xl hover:shadow-[#B54118]/20 transition-all duration-500 flex flex-col items-start overflow-hidden hover:-translate-y-3">
                  {/* 🔹 Icon Box: Animated & Glowing */}
                  <div className="relative mb-8">
                    <div
                      className={`relative z-10 w-16 h-16 ${item.bgColor} ${item.hoverBg} group-hover:text-white text-[#B54118] rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:rotate-[15deg] group-hover:scale-110 shadow-lg`}
                    >
                      <span className="text-3xl">{item.icon}</span>
                    </div>
                    <div className="absolute inset-0 bg-[#B54118]/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity rounded-full" />
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-4 tracking-normal group-hover:text-[#B54118] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed font-medium flex-grow">
                    {item.desc}
                  </p>

                  {/* 🔹 Decorative Subtle Indicator */}
                  <div className="mt-6 w-8 h-1 bg-[#B54118]/20 group-hover:w-full group-hover:bg-[#B54118] transition-all duration-500 rounded-full" />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 🚀 NEW SECTION: PROFESSIONAL CONTENT CREATION (Business Growth Focus) */}
      <section className="py-24 bg-white dark:bg-black overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Left Column: Image/Visual with Floating Elements */}
            <div className="w-full lg:w-1/2 relative">
              <FadeIn direction="right">
                <div className="relative h-[450px] md:h-[600px] w-full rounded-[3.5rem] overflow-hidden shadow-2xl">
                  <Image
                    src="/professional-content.jpg" // Suggestion: High-quality image of a writer or digital designer
                    alt="Professional Content Creation UK"
                    fill
                    className="object-cover"
                  />
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                  {/* Floating Metric Card (Business Growth Highlight) */}
                  <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-3xl">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-[#B54118] rounded-full flex items-center justify-center text-white shadow-lg shadow-[#B54118]/40">
                        <CheckCircle2 className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-white font-black uppercase tracking-widest text-xs">
                          Target Focus
                        </p>
                        <p className="text-gray-200 text-sm">
                          SEO-Optimised for UK Markets
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>

              {/* Decorative Background Shape */}
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-orange-500/10 blur-3xl rounded-full -z-10" />
            </div>

            {/* Right Column: Detailed Content */}
            <div className="w-full lg:w-1/2 space-y-8">
              <FadeIn direction="left">
                <span className="text-[#B54118] font-black uppercase tracking-[0.3em] text-xs">
                  Measurable Results
                </span>
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white leading-[1.1] uppercase tracking-tighter mt-4">
                  Professional Content <br />
                  <span className="text-orange-500">For Business Growth</span>
                </h2>

                <div className="space-y-6 mt-8">
                  <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed font-medium">
                    At BizGrow Digital, we create content that not only speaks
                    to your audience but also
                    <span className="text-slate-900 dark:text-white font-bold ml-1">
                      drives measurable results.
                    </span>{" "}
                    From website pages to social media posts, our team crafts
                    engaging, SEO-optimised content tailored for UK businesses.
                  </p>

                  <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed italic border-l-4 border-orange-500 pl-6">
                    Our focus is on clarity, creativity, and conversions,
                    helping your brand connect with potential customers and
                    stand out in competitive markets. Whether it’s blog posts,
                    email campaigns, or ad copy, every piece is designed to
                    boost your online presence.
                  </p>

                  <p className="text-gray-700 dark:text-gray-300 font-semibold text-lg">
                    Let us transform your ideas into content that delivers
                    <span className="text-[#B54118] uppercase ml-1">
                      real business impact.
                    </span>
                  </p>
                </div>

                {/* Micro-Features Grid */}
                <div className="grid grid-cols-2 gap-4 pt-8">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#B54118] rounded-full" />
                    <span className="text-sm font-bold dark:text-gray-200">
                      Ad Copywriting
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#B54118] rounded-full" />
                    <span className="text-sm font-bold dark:text-gray-200">
                      Email Marketing
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#B54118] rounded-full" />
                    <span className="text-sm font-bold dark:text-gray-200">
                      Blog Strategy
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#B54118] rounded-full" />
                    <span className="text-sm font-bold dark:text-gray-200">
                      Social Content
                    </span>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>


    {/* 🚀 NEW SECTION: WHY CREATIVE CONTENT MATTERS (Centered Version) */}
      <section className="py-24 bg-gray-50 dark:bg-[#020817] relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(#B54118_0.5px,transparent_0.5px)] [background-size:24px_24px] opacity-[0.05] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          
          {/* Centered Heading Section */}
          <div className="text-center mb-20">
            <FadeIn direction="up">
              <span className="text-[#B54118] font-black uppercase tracking-[0.3em] text-xs mb-4 block">
                The Power of Words
              </span>
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white leading-tight uppercase tracking-tighter">
                Why Creative Content <br />
                <span className="text-orange-500">Matters For Your Business</span>
              </h2>
              <div className="w-24 h-1.5 bg-[#B54118] mx-auto mt-6 rounded-full" />
              <p className="mt-8 text-gray-600 dark:text-gray-400 text-lg leading-relaxed font-medium max-w-3xl mx-auto">
                Creative content is more than just writing; it’s the voice of your brand. 
                In the UK's competitive digital landscape, it’s the bridge between being 
                seen and being remembered.
              </p>
            </FadeIn>
          </div>

          {/* Points Grid - Responsive 1, 2, or 3 columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Stand Out Online",
                desc: "Unique content makes your brand memorable in a crowded market and gives you a distinct competitive edge.",
                icon: <Globe className="w-6 h-6" />,
              },
              {
                title: "Attract the Right Audience",
                desc: "Targeted content attracts visitors who are genuinely interested in your specific services and industry.",
                icon: <Target className="w-6 h-6" />,
              },
              {
                title: "Build Trust & Credibility",
                desc: "Professional, well-researched content establishes your brand as an authority and expert in the UK market.",
                icon: <CheckCircle2 className="w-6 h-6" />,
              },
              {
                title: "Boost SEO & Visibility",
                desc: "Well-crafted, keyword-optimised content improves search rankings and drives sustainable organic traffic.",
                icon: <LineChart className="w-6 h-6" />,
              },
              {
                title: "Drive Leads & Conversions",
                desc: "Engaging copy and strategic calls-to-action encourage visitors to take the next step in their journey.",
                icon: <Zap className="w-6 h-6" />,
              },
            ].map((item, i) => (
              <FadeIn key={i} direction="up" delay={0.1 * i}>
                <div className="group h-full p-10 bg-white dark:bg-[#001235]/20 backdrop-blur-sm rounded-[2.5rem] border border-slate-100 dark:border-white/5 hover:border-orange-500/30 transition-all duration-500 shadow-sm hover:shadow-xl hover:-translate-y-2 flex flex-col items-center text-center">
                  {/* Icon Box */}
                  <div className="flex-shrink-0 w-16 h-16 bg-orange-50 dark:bg-orange-500/10 rounded-2xl flex items-center justify-center text-[#B54118] group-hover:bg-[#B54118] group-hover:text-white transition-all duration-500 mb-6 shadow-inner">
                    {item.icon}
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-tight mb-4 transition-colors group-hover:text-[#B54118]">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
      {/* --- WHY CHOOSE US SECTION --- */}
      <section className="py-10 bg-white dark:bg-[#020817]  dark:border-t-2 dark:border-orange-700">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 md:flex-row gap-16 items-center">
          <FadeIn direction="right" delay={0.3}>
            <div className="relative h-[400px] md:h-[500px] w-full rounded-[3rem] overflow-hidden">
              <Image
                src="/download (8).png"
                alt="BizGrow Digital - Creative Strategy "
                fill
                className="object-center"
              />
            </div>
          </FadeIn>

          <div className="space-y-8">
            <FadeIn direction="up" delay={0.2}>
              <h2 className="text-4xl font-black dark:text-white leading-tight">
                Why Choose Our <br />
                <span className="text-orange-500">Creative Strategy?</span>
              </h2>
            </FadeIn>

            <div className="space-y-6">
              {[
                "Insight-Driven Creative Planning",
                <>
                  Audience-Focused{" "}
                  <Link
                    href="https://bizgrow-digital.co.uk/what-is-content-marketing-types-benefits-of-content-marketing/"
                    className="text-[#B54118] font-bold underline"
                  >
                    Content Development
                  </Link>{" "}
                </>,
                "Consistent Brand Voice & Visual Identity",
                "Performance-Led Creative Execution",
                "Scalable Content Systems for Growth",
              ].map((text, i) => (
                <FadeIn key={i} direction="up" delay={0.1 * i}>
                  <div className="flex items-center gap-4">
                    <CheckCircle2 className="text-[#B54118] w-6 h-6 flex-shrink-0" />
                    <p className="text-lg font-medium dark:text-gray-200">
                      {text}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>

            <FadeIn direction="up" delay={0.6}>
              <Link href="/contact-us">
                <button className="bg-black dark:bg-white dark:text-black text-white px-8 py-4 rounded-2xl font-bold hover:bg-[#B54118] dark:hover:bg-[#B54118] dark:hover:text-white transition-all">
                  Discuss Your Project
                </button>
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 🚀 CREATIVE CTA SECTION: Consistent & Bold */}
      <section className="dark:bg-black py-24 dark:border-y-2 dark:border-orange-700 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-10">
          <div
            className="relative py-20 md:py-28 rounded-[3.5rem] overflow-hidden text-white text-center shadow-[0_20px_50px_rgba(0,0,0,0.3)] group"
            style={{
              backgroundImage: "url('/creative-cta.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundAttachment: "fixed", // Parallax consistent
            }}
          >
            {/* 🔹 Consistent Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-[#B54118]/20 z-0"></div>

            {/* 🔹 Glassmorphism Border */}
            <div className="absolute inset-0 border-2 border-white/10 rounded-[3.5rem] z-10 pointer-events-none group-hover:border-[#B54118]/30 transition-all duration-500"></div>

            <div className="relative z-10 max-w-4xl mx-auto px-6">
              <FadeIn direction="up" delay={0.2}>
                {/* Top Badge for extra detail */}
                <div className="flex justify-center mb-8">
                  <span className="px-6 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 border-l-[#B54118] border-l-4 text-white text-xs md:text-sm font-black tracking-[0.3em] uppercase">
                    Creative Excellence
                  </span>
                </div>

                <h2 className="text-4xl md:text-7xl font-black mb-8 leading-[1.1] tracking-tighter uppercase">
                  Let's Build Something <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B54118] to-orange-400">
                    Extraordinary
                  </span>
                </h2>
              </FadeIn>

              <FadeIn direction="up" delay={0.4}>
                <p className="mx-auto mb-12 text-lg md:text-2xl text-gray-300 font-light leading-relaxed max-w-2xl italic">
                  "Ready to give your brand a creative edge that delivers real
                  impact? Your next project starts with a simple conversation."
                </p>
              </FadeIn>

              <FadeIn direction="up" delay={0.6}>
                <Link href="/contact-us">
                  <button className="relative px-8 py-4 bg-[#B54118] text-white font-black rounded-2xl overflow-hidden group transition-all duration-300 hover:scale-110 hover:shadow-[0_0_40px_rgba(181,65,24,0.5)]">
                    {/* Shine Animation Effect */}
                    <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:animate-shine" />
                    <span className="relative z-10 text-xl uppercase tracking-widest">
                      Start Your Journey →
                    </span>
                  </button>
                </Link>
              </FadeIn>
            </div>

            {/* Decorative Blur Orbs */}
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#B54118]/10 blur-[120px] rounded-full -z-10"></div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default CreativeContentPage;
