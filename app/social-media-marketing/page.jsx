import Image from "next/image";
import React from "react";
import {
  PenTool,
  Share2,
  Users,
  TrendingUp,
  CheckCircle2,
  Facebook,
  Instagram,
  Linkedin,
  Video,
  ShieldCheck,
  BarChart3,
  Target,
  Zap,
} from "lucide-react";
import FadeIn from "@components/MotionWrapper";
import Link from "next/link";

const SocialMediaMarketingPage = () => {
  const smmServices = [
    {
      title: "Strategic Content & Web Design",
      desc: (
        <>
          Professionally crafted content and high-end{" "}
          <Link
            href="https://bizgrow-digital.co.uk/what-is-web-design-the-ultimate-guide-to-designing-a-website/"
            className="text-[#B54118] font-bold underline"
          >
            web designs
          </Link>{" "}
          meant to reflect your brand voice, engage your audience, and support
          your marketing objectives.
        </>
      ),
      icon: <PenTool className="w-8 h-8" />,
    },
    {
      title: "Platform-Focused Management",
      desc: (
        <>
          Tailored{" "}
          <Link
            href="https://bizgrow-digital.co.uk/what-are-the-4-stages-of-social-media-marketing/"
            className="text-[#B54118] font-bold underline"
          >
            social media management
          </Link>{" "}
          for platforms such as LinkedIn, Facebook, Instagram, and X aligned
          with your business goals.
        </>
      ),
      icon: <Share2 className="w-8 h-8" />,
    },
    {
      title: "Audience Growth & Engagement",
      desc: "We focus on building genuine connections with your audience through meaningful interactions and consistent engagement strategies.",
      icon: <Users className="w-8 h-8" />,
    },
    {
      title: "Performance Monitoring & Optimisation",
      desc: "Ongoing analysis and optimisation to improve reach, engagement, and overall social media effectiveness using data-driven insights.",
      icon: <TrendingUp className="w-8 h-8" />,
    },
  ];

  return (
    <main className="w-full bg-white dark:bg-black">
      {/* 🔹 1. HERO SECTION */}
      <section className="relative h-[80vh] md:h-screen w-full flex items-center justify-center overflow-hidden">
        <Image
          src="/fb-bg.jpg"
          alt="Social Media Growth Strategy"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/75" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <FadeIn direction="up">
            <span className="text-orange-500 font-bold tracking-[0.3em] uppercase text-xs mb-4 block">
              Digital Influence
            </span>
            <h1 className="text-white text-5xl md:text-6xl font-black leading-none mb-6 uppercase">
              Turn Social Media Into a{" "}
              <span className="text-orange-500 underline decoration-4 underline-offset-8">
                Powerful{" "}
              </span>{" "}
              Growth Channel
            </h1>
            <p className="text-gray-300 text-lg md:text-xl max-w-2xl mb-10 mx-auto font-light">
              BizGrow Digital helps UK businesses grow their audience, increase
              engagement, and generate meaningful leads through strategic social
              media marketing.
            </p>
            <Link href="/contact-us">
              <button className="bg-[#B54118] text-white px-10 py-5 rounded-full font-bold hover:scale-105 transition-all uppercase tracking-widest shadow-2xl">
                Start Your Growth Journey
              </button>
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* 🔹 2. PLATFORMS WE WORK WITH */}
      <section className="py-24 bg-zinc-50 dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black dark:text-white uppercase tracking-tighter">
              Platforms We <span className="text-orange-500">Work With</span>
            </h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
              BizGrow Digital manages social media marketing across the most
              effective platforms used by UK businesses.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                p: "Facebook",
                d: "Connect with customers, build communities, and promote services through targeted Facebook strategies.",
                icon: <Facebook />,
              },
              {
                p: "Instagram",
                d: "Showcase your brand visually and engage audiences through creative content and storytelling.",
                icon: <Instagram />,
              },
              {
                p: "LinkedIn",
                d: "Reach professionals, decision-makers, and B2B audiences through strategic LinkedIn marketing.",
                icon: <Linkedin />,
              },
              {
                p: "TikTok",
                d: "Engage modern audiences through creative short-form video content that increases brand awareness.",
                icon: <Video />,
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white dark:bg-zinc-900 p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 flex flex-col items-center text-center group hover:border-orange-500 transition-all"
              >
                <div className="text-orange-500 mb-4 group-hover:rotate-12 transition-all">
                  {item.icon}
                </div>
                <h3 className="font-bold dark:text-white uppercase text-sm mb-2">
                  {item.p} Marketing
                </h3>
                <p className="text-gray-500 text-[11px] leading-relaxed">
                  {item.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🔹 3. ORGANIC-FIRST STRATEGY (Philosophy Section) */}
      <section className="py-24 bg-[#000B25] text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
          <FadeIn direction="right">
            <h2 className="text-4xl md:text-5xl font-black uppercase leading-tight tracking-tighter mb-8">
              Organic-First <br />
              <span className="text-orange-500">Social Media Strategy</span>
            </h2>
            <h3 className="text-xl font-bold mb-6 text-blue-200">Built for Long-Term Growth, Not Temporary Spikes</h3>
            <p className="text-blue-100/70 text-lg mb-6 leading-relaxed">
              At BizGrow Digital, we believe sustainable digital growth comes from building real audience trust and consistent brand visibility.
            </p>
            <p className="text-blue-100/60 mb-10 leading-relaxed">
              While paid advertising can deliver quick results, those results often disappear once the campaign stops. That’s why our primary focus is on organic social media growth strategies designed to create long-lasting brand presence and meaningful audience engagement.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Build authentic relationships",
                "Strengthen brand credibility",
                "Maintain consistent visibility",
                "Generate genuine enquiries",
              ].map((point, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 text-sm font-bold uppercase tracking-wide"
                >
                  <ShieldCheck className="text-orange-500 w-5 h-5" /> {point}
                </li>
              ))}
            </ul>
          </FadeIn>
          <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-6 border-orange-600">
            <Image
              src="/social-media-strategy.jpg"
              alt="Sustainable Organic Growth"
              width={600}
              height={500}
              className="object-cover h-[500px]"
            />
          </div>
        </div>
      </section>

      {/* 🔹 4. APPROACH SECTION (Step-by-Step) */}
      <section className="py-24 dark:bg-[#020817] bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black dark:text-white uppercase tracking-tighter">
              Our <span className="text-orange-500">Marketing Approach</span>
            </h2>
            <p className="text-gray-500 mt-4 max-w-3xl mx-auto">
              We focus on building strategic social media systems that deliver long-term growth and consistent brand visibility.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                t: "Audience & Market Research",
                d: "We analyse your target audience, industry landscape, and competitors to understand customer interactions.",
                icon: <Target />,
              },
              {
                t: "Content & Positioning",
                d: "Developing a content strategy that reflects your brand voice and communicates your value clearly.",
                icon: <Zap />,
              },
              {
                t: "Organic Optimisation",
                d: "Through consistent posting and engagement, we help your brand grow naturally across platforms.",
                icon: <TrendingUp />,
              },
              {
                t: "Analysis & Improvement",
                d: "Using insights to evaluate performance and refine strategies for long-term engagement results.",
                icon: <BarChart3 />,
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group bg-white dark:bg-zinc-900 p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 hover:shadow-xl transition-all"
              >
                <div className="w-14 h-14 bg-orange-500/10 text-orange-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all">
                  {item.icon}
                </div>
                <h4 className="font-black dark:text-white uppercase text-xs mb-3 tracking-tight">
                  {item.t}
                </h4>
                <p className="text-gray-500 text-[11px] leading-relaxed">
                  {item.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🔹 5. CONTENT AUTHORITY SECTION */}
      <section className="py-24 bg-white dark:bg-black overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-[#000B25] rounded-[3.5rem] p-12 md:p-20 text-[#B54118] flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8 leading-[0.9]">
                Content That Builds <span className="text-white">Authority.</span>
              </h2>
              <p className="text-white/90 text-lg mb-8 font-medium">
                Social media is no longer just about posting; it’s about positioning your brand as a trusted voice within your industry.
              </p>
              <p className="text-white/80 mb-10 leading-relaxed">
                BizGrow Digital develops strategic content that reflects your expertise, communicates your value, and strengthens your authority in the market.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {["Brand Credibility", "Audience Trust", "Industry Visibility", "Digital Presence"].map((tag, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-black/40" />
                    <span className="text-xs font-black uppercase tracking-widest">{tag}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 relative w-full aspect-square md:aspect-video lg:aspect-square">
               <Image src="/Content Creation.jpg" alt="Build Authority" fill className="object-cover rounded-[2.5rem]" />
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 6. FINAL CTA */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div
            className="relative py-32 rounded-[3.5rem] overflow-hidden text-center text-white"
            style={{
              backgroundImage: "url('/smm-cta.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundAttachment: "fixed",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/85 to-[#B54118]/20" />
            <div className="relative z-10 px-6">
              <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-10">
                Ready to Lead the <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B54118] to-orange-400">
                  News Feed?
                </span>
              </h2>
              <p className="max-w-2xl mx-auto text-gray-300 italic mb-12 text-xl">
                “Don’t just participate in the conversation, lead it.”
              </p>
              <Link href="/contact-us">
                <button className="relative px-12 py-6 bg-[#B54118] text-white font-black rounded-2xl group overflow-hidden transition-all hover:scale-110">
                  <div className="absolute top-0 -inset-full h-full w-1/2 transform -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-shine" />
                  <span className="relative z-10 uppercase tracking-widest">
                    Build Your Social Presence →
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SocialMediaMarketingPage;