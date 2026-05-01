import Image from "next/image";
import React from "react";
import {
  Facebook,
  Instagram,
  CheckCircle2,
  Users,
  Heart,
  TrendingUp,
  BarChart3,
  ShieldCheck,
  Clapperboard,
} from "lucide-react";
import FadeIn from "@components/MotionWrapper";
import Link from "next/link";

export const metadata = {
  title: "Facebook marketing services - BizGrow Digital",
  description:
    "BizGrow Digital delivers Facebook marketing that boosts brand visibility, engagement, and leads with strategy-driven, measurable results.",
  alternates: {
    canonical: "https://bizgrow-digital.co.uk/facebook-marketing-services/",
  },
};

const FacebookMarketingPage = () => {
  return (
    <section className="w-full bg-white">
      {/* --- 1 HERO SECTION --- */}
      <div className="relative h-[80vh] md:h-screen w-full flex items-center justify-center overflow-hidden">
        <Image
          src="/fb.jpg"
          alt="Facebook marketing services UK"
          fill
          className="object-cover object-center"
          priority
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-black/75" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col items-center text-center">
          <FadeIn direction="up">
            <div className="flex gap-4 mt-6 opacity-80">
              <Facebook className="text-orange-500 w-8 h-8" />
              <Instagram className="text-white w-8 h-8" />
            </div>
            <h1 className="text-white text-4xl sm:text-5xl font-black leading-none mb-6 uppercase">
              Facebook Marketing Services That
              <br />
              <span className="text-orange-500 text-glow">
                Grow Your UK Business
              </span>
            </h1>
            <p className="text-gray-300 text-base md:text-xl max-w-2xl mb-10 mx-auto px-4 font-light">
              Posting content alone won’t bring results. Our expert{" "}
              <Link
                href="/ultimate-guide-to-using-facebook-for-marketing/"
                className="text-[#B54118]"
              >
                Facebook strategies
              </Link>{" "}
              increase reach, build trust, and position your brand as an
              industry leader
            </p>
            <Link href="/contact-us">
              <button className="bg-[#B54118] text-white px-10 py-5 rounded-full font-bold hover:scale-105 transition-all uppercase tracking-widest shadow-2xl">
                Leads on Facebook Today
              </button>
            </Link>
          </FadeIn>
        </div>
      </div>

      {/* --- 2 NEW SECTION: WHY FACEBOOK MARKETING MATTERS (Replacing Features) --- */}
      <section className="w-full py-24 bg-white dark:bg-[#020817] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Side: Content */}
            <FadeIn direction="right" className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-black text-orange-500 dark:text-orange-500 uppercase leading-tight mb-6">
                  Why Facebook <br />
                  <span className="italic font-light text-black">
                    Marketing Matters?
                  </span>
                </h2>
                <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  Millions of people across the UK use Facebook every day. The
                  true power lies in building authentic connections, sharing
                  valuable{" "}
                  <Link
                    href="/creative-content/"
                    className="text-[#B54118] font-bold"
                  >
                    content
                  </Link>
                  , and engaging your audience naturally,{" "}
                  <span className="font-bold">no paid ads required.</span>
                </p>
                <p className="text-slate-500 dark:text-slate-400 italic mb-8 border-l-4 border-orange-500 pl-6">
                  "Organic Facebook marketing isn’t just about being seen; it’s
                  about creating lasting relationships and achieving real,
                  measurable growth for your UK business."
                </p>
              </div>
            </FadeIn>

            {/* Right Side: Key Benefits Card */}
            <FadeIn direction="left" delay={0.2}>
              <div className="bg-slate-50 dark:bg-slate-900 p-8 md:p-12 rounded-[3rem] border border-slate-100 dark:border-orange-900/30 shadow-xl">
                <h3 className="text-xl font-black uppercase tracking-tighter mb-8 dark:text-white">
                  With expert Facebook marketing, you can:
                </h3>
                <ul className="space-y-6">
                  {[
                    "Reach the right people naturally and grow your audience authentically",
                    "Boost engagement and trust through meaningful interactions",
                    "Strengthen your brand authority in your industry",
                    "Convert followers into loyal, long-term customers",
                  ].map((item, idx) => (
                    <li key={idx} className="flex gap-4 items-start group">
                      <div className="mt-1 bg-orange-500/10 p-1 rounded-lg group-hover:bg-orange-500 transition-colors duration-300">
                        <CheckCircle2 className="w-5 h-5 text-orange-600 group-hover:text-white" />
                      </div>
                      <span className="text-slate-700 dark:text-slate-300 font-medium leading-snug">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* --- 3 STRATEGY SECTION (Keep the same) --- */}
      <section className="dark:bg-[#020817] py-20">
        <div className="py-24 bg-slate-900 dark:border dark:border-orange-700 mx-4 md:mx-10 rounded-[4rem] mb-24 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 blur-[100px] rounded-full" />
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <h2 className="text-4xl md:text-5xl font-black text-white leading-tight uppercase">
                  The 3-Step <br />{" "}
                  <span className="text-orange-500 italic">Social Growth </span>{" "}
                  Formula
                </h2>
                <div className="space-y-6">
                  {[
                    {
                      step: "01",
                      t: "Make Your Page Work for You",
                      d: (
                        <>
                          A fully optimised{" "}
                          <Link href="/how-do-i-start-marketing-on-facebook-a-complete-guide-2026/" className="text-[#B54118] font-bold">
                            Facebook
                          </Link>{" "}
                          page is the foundation of growth. From visuals to
                          descriptions, we ensure your profile reflects your
                          brand professionally, builds credibility, and attracts
                          the right audience.
                        </>
                      ),
                    },
                    {
                      step: "02",
                      t: "Engage Your Audience Regularly",
                      d: (
                        <>
                          Growth happens when you post with purpose and
                          consistency. By sharing relevant,{" "}
                          <Link
                            href="/the-ultimate-guide-to-creating-scroll-stopping-content-in-the-uk/"
                            className="text-[#B54118] font-bold"
                          >
                            high-quality content
                          </Link>{" "}
                          at the right time, your brand stays top-of-mind and
                          nurtures lasting engagement.
                        </>
                      ),
                    },
                    {
                      step: "03",
                      t: "Be Discovered Organically",
                      d: <>Using relevant <Link href="/10-steps-keyword-research-checklist-2026/" className="text-[#B54118] font-bold ">keywords</Link> and hashtags strategically ensures your content reaches the right audience naturally, increasing visibility and helping your business grow without paid ads</>,
                    },
                  ].map((s, i) => (
                    <div key={i} className="flex gap-6 items-start group">
                      <span className="text-3xl font-black text-white/20 group-hover:text-orange-500 transition-colors">
                        {s.step}
                      </span>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2 uppercase">
                          {s.t}
                        </h3>
                        <p className="text-gray-400 text-sm">{s.d}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative h-[400px] md:h-[600px] rounded-[3rem] overflow-hidden">
                <Image
                  src="/award-winning.jpg"
                  alt="Three-step digital marketing strategy"
                  fill
                  className="object-cover transition-all duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 4 NEW SECTION: WHY CHOOSE BIZGROW --- */}
      <section className="w-full py-24 bg-slate-50 dark:bg-black">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <FadeIn direction="up">
            <h2 className="text-4xl md:text-6xl font-black text-gray-700 dark:text-white uppercase mb-4">
              Why Choose <br />
              <span className="text-orange-500 italic">BizGrow</span> for
              Facebook Marketing?
            </h2>
            <p className="text-slate-500 dark:text-slate-400 font-bold uppercase tracking-[0.2em] text-xs mb-16">
              Grow Organically. Engage Authentically. Convert Naturally.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Reach the Right Audience",
                desc: "Connect with people who are most likely to engage and become loyal customers.",
                icon: <Users className="w-8 h-8" />,
              },
              {
                title: "Create Engaging Content",
                desc: "Share posts, images, and videos that clearly and professionally tell your brand story.",
                icon: <Clapperboard className="w-8 h-8" />,
              },
              {
                title: "Build Trust and Loyalty",
                desc: "Interact authentically with your audience to strengthen relationships.",
                icon: <Heart className="w-8 h-8" />,
              },
              {
                title: "Turn Followers into Customers",
                desc: "Organic engagement that drives real business results and consistent growth.",
                icon: <TrendingUp className="w-8 h-8" />,
              },
              {
                title: "Track and Improve",
                desc: "We monitor performance and adjust strategies to ensure continuous success.",
                icon: <BarChart3 className="w-8 h-8" />,
              },
              {
                title: "UK Business Focus",
                desc: <>At <Link href="/about-us/" className="text-[#B54118] font-bold">BizGrow Digital</Link>, we help UK businesses grow with measurable, real-world results.</>,
                icon: <ShieldCheck className="w-8 h-8" />,
              },
            ].map((item, i) => (
              <FadeIn key={i} direction="up" delay={i * 0.1}>
                <div className="bg-white dark:bg-slate-800 p-10 rounded-[3rem] shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-700 hover:border-orange-500 transition-all group h-full flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-orange-50 dark:bg-orange-500/10 text-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-white transition-all duration-500">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-black text-gray-700 dark:text-white uppercase mb-4 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn direction="up" delay={0.6}>
            <p className="mt-16 text-slate-400 italic text-lg max-w-3xl mx-auto">
              With BizGrow Digital, your Facebook page becomes more than a
              profile; it becomes a powerful tool for organic growth,
              credibility, and business success.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* --- 5 UPDATED SECTION: CLEAN ALIGNMENT --- */}
      <section className="w-full py-24 bg-white dark:bg-[#020817]">
        <div className="max-w-7xl mx-auto px-6">
          {/* 🎯 Header: Ab sab kuch line mein hai */}
          <FadeIn direction="up" className="mb-20">
            <h2 className="text-4xl md:text-6xl font-black text-gray-800 dark:text-white uppercase leading-[1.1] mb-8 tracking-tighter">
              Benefits of <br />
              <span className="text-orange-500">Hiring a Facebook</span> <br />
              Agency in the UK
            </h2>

            <div className="max-w-2xl border-l-4 border-orange-500 pl-6 py-2">
              <p className="text-gray-500 dark:text-gray-400 text-lg  font-medium leading-relaxed">
                Partnering with a professional agency like <Link href="/our-digital-services/" className="text-[#B54118] font-bold">BizGrow Digital</Link> gives
                your business step-by-step guidance, expert support, and
                measurable growth on Facebook. Here’s how UK businesses benefit:
              </p>
            </div>
          </FadeIn>

          {/* 🎯 Grid: 2 columns for better readability */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
            {[
              {
                t: "Step-by-Step Guidance",
                d: "Strategic roadmap tailored to your specific business goals in the UK market.",
              },
              {
                t: "Audience Targeting Expertise",
                d: "Reaching the exact demographics that matter most to your brand's success.",
              },
              {
                t: "Content Strategy Planning",
                d: <>Data-driven <Link href="/b2b-content-marketing-agency-uk" className="text-[#B54118] font-bold">content</Link> calendars that ensure consistent and high-quality posting.</>,
              },
              {
                t: "Organic Growth Optimisation",
                d: "Maximising reach and visibility without relying solely on expensive paid ads.",
              },
              {
                t: "Performance Monitoring & Reporting",
                d: "In-depth analytics to track what's working and where to improve.",
              },
              {
                t: "Engagement & Community Management",
                d: "Building a loyal community by interacting with your followers in real-time.",
              },
              {
                t: "Brand Credibility & Authority",
                d: "Positioning your business as a trusted leader through professional social presence.",
              },
              {
                t: "Time and Resource Savings",
                d: "Focus on running your business while we handle the complexities of social growth.",
              },
              {
                t: "Creative Visual & Copy Support",
                d: "High-converting visuals and compelling copy that captures attention instantly.",
              },
              {
                t: "Lead Generation & Conversion Support",
                d: "Turning social interactions into real inquiries and paying customers.",
              },
            ].map((item, i) => (
              <FadeIn key={i} direction="up" delay={i * 0.05}>
                <div className="group border-b border-gray-100 dark:border-gray-800 pb-8 hover:border-orange-500 transition-all duration-500">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-orange-500 font-black text-xl italic opacity-50 group-hover:opacity-100 transition-opacity">
                      {(i + 1).toString().padStart(2, "0")}
                    </span>
                    <h3 className="text-xl font-black text-gray-700 dark:text-gray-200 uppercase tracking-tight group-hover:text-orange-600">
                      {item.t}
                    </h3>
                  </div>
                  <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed pl-10">
                    {item.d}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* 🎯 Bottom Statement */}
          <FadeIn direction="up" className="mt-24">
            <div className="bg-gray-50 dark:bg-slate-900/50 p-12 rounded-[4rem] border-2 border-dashed border-gray-200 dark:border-gray-800">
              <p className="text-gray-600 dark:text-gray-400 text-lg md:text-2xl text-center font-light italic leading-relaxed max-w-4xl mx-auto">
                “Hiring a UK Facebook marketing agency isn’t just outsourcing
                tasks; it’s gaining a
                <span className="text-orange-600 font-bold">
                  {" "}
                  strategic partner
                </span>{" "}
                that helps your business grow organically, engage meaningfully,
                and achieve real results”
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 🚀 6 FINAL CTA (Keep the same) */}
      <section className="dark:bg-black py-24 dark:border-y-2 dark:border-orange-700 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-10">
          <div
            className="relative py-24 md:py-32 rounded-[3.5rem] overflow-hidden text-white text-center shadow-[0_30px_70px_rgba(0,0,0,0.5)] group"
            style={{
              backgroundImage: "url('/fb-cta.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundAttachment: "fixed",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/80 to-[#B54118]/20 z-0"></div>
            <div className="absolute inset-0 border-2 border-white/10 rounded-[3.5rem] z-10 pointer-events-none group-hover:border-[#B54118]/30 transition-all duration-500"></div>

            <div className="relative z-20 max-w-5xl mx-auto px-6 flex flex-col items-center">
              <FadeIn direction="up">
                <div className="flex flex-col items-center">
                  <span className="w-fit px-6 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 border-l-[#B54118] border-l-4 text-white text-xs md:text-sm font-black mb-8 tracking-[0.3em] uppercase">
                    Organic Social Excellence
                  </span>
                </div>
                <h2 className="text-4xl md:text-7xl font-black mb-8 leading-[1.1] tracking-tighter uppercase">
                  Stop Posting <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B54118] to-orange-400">
                    Start Growing
                  </span>
                </h2>
              </FadeIn>

              <FadeIn
                direction="up"
                delay={0.2}
                className="flex flex-col items-center"
              >
                <p className="mx-auto mb-12 text-lg md:text-2xl text-gray-300 font-light leading-relaxed max-w-3xl italic">
                  “Let’s create a Facebook strategy that delivers real growth
                  and lasting results for your UK business.”
                </p>
              </FadeIn>

              <FadeIn
                direction="up"
                delay={0.4}
                className="flex flex-col items-center"
              >
                <Link href="/contact-us">
                  <button className="relative px-8 py-4 bg-[#B54118] text-white font-black rounded-2xl overflow-hidden group transition-all duration-300 hover:scale-110 hover:shadow-[0_0_50px_rgba(181,65,24,0.6)]">
                    <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:animate-shine" />
                    <span className="relative z-10 text-lg uppercase tracking-[0.2em]">
                      Grow My Brand Now →
                    </span>
                  </button>
                </Link>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default FacebookMarketingPage;
