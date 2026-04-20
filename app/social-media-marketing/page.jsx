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
export const metadata = {
  title:"Social Media Marketing Services UK | BizGrow Digital",
  description:"Not getting results from social media in the UK? BizGrow Digital helps you reach the right audience, boost engagement, and grow your business ",
}
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
              <Link
                href="https://bizgrow-digital.co.uk/about-us/"
                className="text-[#B54118] font-bold"
              >
                BizGrow Digital
              </Link>{" "}
              helps UK businesses grow their audience, increase engagement, and
              generate meaningful leads through strategic{" "}
              <Link
                href="https://bizgrow-digital.co.uk/social-media-marketing-advantages-and-disadvantages/"
                className="text-[#B54118] font-bold"
              >
                social media marketing
              </Link>
              .
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
                d: (
                  <>
                    Connect with customers, build communities, and promote
                    services through targeted{" "}
                    <Link
                      href="https://bizgrow-digital.co.uk/facebook-marketing-services/"
                      className="text-[#B54118] font-bold"
                    >
                      Facebook
                    </Link>{" "}
                    strategies.
                  </>
                ),
                icon: <Facebook />,
              },
              {
                p: "Instagram",
                d: (
                  <>
                    Showcase your brand visually and engage audiences through{" "}
                    <Link
                      href="https://bizgrow-digital.co.uk/creative-content/"
                      className="text-[#B54118] font-bold"
                    >
                      creative content
                    </Link>{" "}
                    and storytelling.
                  </>
                ),
                icon: <Instagram />,
              },
              {
                p: "LinkedIn",
                d: (
                  <>
                    Reach professionals, decision-makers, and{" "}
                    <Link
                      href="https://bizgrow-digital.co.uk/b2b-content-marketing-agency-uk/"
                      className="text-[#B54118] font-bold"
                    >
                      B2B
                    </Link>{" "}
                    audiences through strategic LinkedIn marketing.
                  </>
                ),
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
            <h3 className="text-xl font-bold mb-6 text-blue-200">
              Built for Long-Term Growth, Not Temporary Spikes
            </h3>
            <p className="text-blue-100/70 text-lg mb-6 leading-relaxed">
              At{" "}
              <Link
                href="https://bizgrow-digital.co.uk/our-digital-services/"
                className="text-[#B54118] font-bold"
              >
                BizGrow Digital
              </Link>
              , we believe sustainable digital growth comes from building real
              audience trust and consistent brand visibility.
            </p>
            <p className="text-blue-100/60 mb-10 leading-relaxed">
              While paid advertising can deliver quick results, those results
              often disappear once the campaign stops. That’s why our primary
              focus is on organic{" "}
              <Link
                href="https://bizgrow-digital.co.uk/social-media-for-uk-consultants/"
                className="text-[#B54118] font-bold"
              >
                social media
              </Link>{" "}
              growth strategies designed to create long-lasting brand presence
              and meaningful audience engagement.
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
              alt="Social Media Strategy - BizGrow Digital"
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
              We focus on building strategic social media systems that deliver
              long-term growth and consistent brand visibility.
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
                d: (
                  <>
                    Developing a{" "}
                    <Link
                      href="https://bizgrow-digital.co.uk/what-is-content-marketing-types-benefits-of-content-marketing/"
                      className="text-[#B54118] font-bold"
                    >
                      content
                    </Link>{" "}
                    strategy that reflects your brand voice and communicates
                    your value clearly.
                  </>
                ),
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
                <h3 className="font-black dark:text-white uppercase text-xs mb-3 tracking-tight">
                  {item.t}
                </h3>
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
                Content That Builds{" "}
                <span className="text-white">Authority.</span>
              </h2>
              <p className="text-white/90 text-lg mb-8 font-medium">
                <Link
                  href="https://bizgrow-digital.co.uk/what-are-the-4-stages-of-social-media-marketing/"
                  className="text-[#B54118] font-bold"
                >
                  Social media
                </Link>{" "}
                is no longer just about posting; it’s about positioning your
                brand as a trusted voice within your industry.
              </p>
              <p className="text-white/80 mb-10 leading-relaxed">
                BizGrow Digital develops strategic content that reflects your
                expertise, communicates your value, and strengthens your
                authority in the market.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Brand Credibility",
                  "Audience Trust",
                  "Industry Visibility",
                  "Digital Presence",
                ].map((tag, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-black/40" />
                    <span className="text-xs font-black uppercase tracking-widest">
                      {tag}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 relative w-full aspect-square md:aspect-video lg:aspect-square">
              <Image
                src="/Content Creation.jpg"
                alt="Content creation strategy - BizGrow Digital "
                fill
                className="object-cover rounded-[2.5rem]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 NEW SECTION: HOW WE TURN ENGAGEMENT INTO MEASURABLE RESULTS */}
      <section className="py-24 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Left Side: Image Card with Rounded Corners (As per Screenshot) */}
            <div className="w-full lg:w-1/2">
              <div className="relative aspect-square md:aspect-[4/3] lg:aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
                <Image
                  src="/smm-strategy.jpg" // Image path updated to match your screenshot visual
                  alt="Turning engagement into growth - BizGrow Digital "
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right Side: Content & Points */}
            <div className="w-full lg:w-1/2">
              <h2 className="text-[#000B25] dark:text-white text-4xl md:text-5xl font-black uppercase leading-tight tracking-tighter mb-6">
                How We Turn <br />
                <span className="text-orange-500 italic">
                  Engagement Into{" "}
                </span>{" "}
                <br />
                Measurable Results
              </h2>
              <p className="text-zinc-500 dark:text-zinc-400 text-lg mb-8 leading-relaxed">
                At BizGrow Digital, we use strategic research and content
                planning to help UK businesses turn social engagement into
                meaningful opportunities.
              </p>

              {/* List Points */}
              <div className="space-y-6">
                {[
                  {
                    t: "Strategic UK Audience Research",
                    d: "We analyse your target audience, market behaviour, and competitors to understand what content drives real engagement.",
                  },
                  {
                    t: "High-Value Content Strategy",
                    d: (
                      <>
                        Our team develops{" "}
                        <Link
                          href="https://bizgrow-digital.co.uk/10-creative-content-techniques-to-improve-seo-results/"
                          className="text-[#B54118] font-bold"
                        >
                          content
                        </Link>{" "}
                        designed to capture attention, encourage interaction,
                        and strengthen your brand presence.
                      </>
                    ),
                  },
                  {
                    t: "Market & Competitor Analysis",
                    d: "We identify opportunities within your industry to position your business ahead of competitors.",
                  },
                  {
                    t: "Consistent Multi-Platform Brand Presence",
                    d: "We ensure your brand message stays consistent across Facebook, Instagram, LinkedIn, and TikTok.",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 group">
                    <div className="mt-1">
                      <CheckCircle2 className="w-6 h-6 text-orange-500 group-hover:scale-110 transition-transform" />
                    </div>
                    <div>
                      <h3 className="font-black text-[#000B25] dark:text-white uppercase text-xs tracking-tight mb-1">
                        {item.t}
                      </h3>
                      <p className="text-zinc-500 dark:text-zinc-400 text-xs leading-relaxed">
                        {item.d}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 6. FINAL CTA */}
      <section className="dark:bg-black py-24 dark:border-y-2 dark:border-orange-700 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-10">
          <div
            className="relative py-24 md:py-32 rounded-[3.5rem] overflow-hidden text-white text-center shadow-[0_30px_70px_rgba(0,0,0,0.5)] group"
            style={{
              backgroundImage: "url('/smm-cta.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundAttachment: "fixed", // Parallax Effect
            }}
          >
            {/* 🔹 Depth Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/80 to-[#B54118]/20 z-0"></div>

            {/* 🔹 Glass Border Identity */}
            <div className="absolute inset-0 border-2 border-white/10 rounded-[3.5rem] z-10 pointer-events-none group-hover:border-[#B54118]/30 transition-all duration-500"></div>

            <div className="relative z-20 max-w-5xl mx-auto px-6 flex flex-col items-center">
              {/* Top Growth Badge */}
              <FadeIn direction="up" className="flex flex-col items-center">
                <span className="px-6 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 border-l-[#B54118] border-l-4 text-white text-xs md:text-sm font-black tracking-[0.3em] uppercase">
                  SOCIAL INFLUENCE
                </span>

                <h2 className="text-4xl mt-4 md:text-7xl font-black mb-8 leading-[1.1] tracking-tighter uppercase">
                  READY TO STAND OUT IN THE
                  <span className="text-transparent ml-2 bg-clip-text bg-gradient-to-r from-[#B54118] to-orange-400">
                    NEWS FEED?
                  </span>
                </h2>
              </FadeIn>

              <FadeIn
                direction="up"
                delay={0.2}
                className="flex flex-col items-center"
              >
                <p className="mx-auto mb-12 text-lg md:text-2xl text-gray-300 font-light leading-relaxed max-w-3xl italic">
                  "At BizGrow Digital, we create strategic{" "}
                  <Link
                    href="https://bizgrow-digital.co.uk/experts-guide-to-social-media-marketing-for-business/"
                    className="text-[#B54118] font-bold"
                  >
                    social media marketing
                  </Link>{" "}
                  that helps UK businesses increase visibility, build trust, and
                  turn engagement into real growth."
                </p>
              </FadeIn>

              <FadeIn
                direction="up"
                delay={0.4}
                className="flex flex-col items-center"
              >
                <Link href="/contact-us">
                  {/* 🎯 FIXED PREMIUM BUTTON WITH SHINE */}
                  <button className="relative px-8 py-4 bg-[#B54118] text-white font-black rounded-2xl overflow-hidden group transition-all duration-300 hover:scale-110 hover:shadow-[0_0_50px_rgba(181,65,24,0.6)]">
                    {/* Shine Animation */}
                    <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:animate-shine" />
                    <span className="relative z-10 text-lg uppercase tracking-[0.2em]">
                      START GROWING YOUR SOCIAL PRESENCE →
                    </span>
                  </button>
                </Link>
              </FadeIn>
            </div>

            {/* Glowing Accents */}
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#B54118]/10 blur-[130px] rounded-full -z-10"></div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SocialMediaMarketingPage;
