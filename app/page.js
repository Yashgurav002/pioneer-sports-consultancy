/* eslint-disable react/no-unescaped-entities */

"use client";

import Hero from "../components/Hero";
import Card from "../components/Card";
import Button from "../components/Button";
import { motion } from "framer-motion";
import Link from "next/link";
    import { Trophy, Globe, Sprout } from "lucide-react";

export default function Home() {
  const heroButtons = [
    {
      text: "🚀 START YOUR JOURNEY",
      action: "scroll",
      target: "contact",
      variant: "primary",
    },
    {
      text: "⚡ EXPLORE PROGRAMS",
      action: "navigate",
      target: "/services",
      variant: "outline",
    },
  ];



const features = [
  { title: "World-Class Training", icon: <Trophy size={40} />, description:
        "European methodology adapted for Indian players with professional coaching standards.", features: [
        "Professional Coaches",
        "European Methods",
        "Performance Analysis",
        "Individual Development",
      ],},
  { title: "Global Opportunities", icon: <Globe size={40} />, description:
        "European methodology adapted for Indian players with professional coaching standards.", features: [
        "Professional Coaches",
        "European Methods",
        "Performance Analysis",
        "Individual Development",
      ],},
  { title: "Grassroots Focus", icon: <Sprout size={40} />, description:
        "European methodology adapted for Indian players with professional coaching standards.", features: [
        "Professional Coaches",
        "European Methods",
        "Performance Analysis",
        "Individual Development",
      ],},
];

  // const features = [
  //   {
  //     title: "World-Class Training",
  //     description:
  //       "European methodology adapted for Indian players with professional coaching standards.",
  //     icon: "🏆",
  //     features: [
  //       "Professional Coaches",
  //       "European Methods",
  //       "Performance Analysis",
  //       "Individual Development",
  //     ],
  //   },
  //   {
  //     title: "Global Opportunities",
  //     description:
  //       "Direct connections with European clubs, scouts, and international football networks.",
  //     icon: "🌍",
  //     features: [
  //       "European Trials",
  //       "Scout Networks",
  //       "Club Partnerships",
  //       "Career Guidance",
  //     ],
  //   },
  //   {
  //     title: "Grassroots Focus",
  //     description:
  //       "Building strong foundations at community level across India with comprehensive support.",
  //     icon: "🌱",
  //     features: [
  //       "Community Programs",
  //       "Youth Development",
  //       "Equipment Support",
  //       "Local Partnerships",
  //     ],
  //   },
  // ];

  const testimonials = [
    {
      name: "Arjun Patel",
      role: "Youth Player",
      content:
        "Pioneer Sports changed my life. From playing in local grounds to training with European coaches - it's been an incredible journey.",
      image: "👦",
    },
    {
      name: "Priya Sharma",
      role: "Parent",
      content:
        "The professional approach and genuine care for each child's development is remarkable. My daughter has grown tremendously.",
      image: "👩",
    },
    {
      name: "Coach Rajesh",
      role: "Local Coach",
      content:
        "The training methodologies and resources provided have elevated our entire coaching program to international standards.",
      image: "👨‍🏫",
    },
  ];

  const stats = [
    {
      number: "500+",
      label: "Players Trained",
      icon: "⚽",
      color: "from-amber-400 to-yellow-400",
    },
    {
      number: "50+",
      label: "Programs Conducted",
      icon: "🏃‍♂️",
      color: "from-emerald-400 to-green-400",
    },
    {
      number: "15+",
      label: "Partner Clubs",
      icon: "🤝",
      color: "from-amber-400 to-emerald-400",
    },
    {
      number: "5+",
      label: "Countries Connected",
      icon: "🌍",
      color: "from-green-400 to-teal-400",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <Hero
        title="From Indian Dreams to Global Arenas"
        tagline="Pioneering grassroots and youth football in India with world-class training, global expertise, and legendary partnerships."
        buttons={heroButtons}
        backgroundImage="https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-4.0.3&auto=format&fit=crop&w=1993&q=80"
      />

      {/* Overview / Mission Section */}
      <motion.section
        id="overview"
        className="py-24 px-4 bg-gradient-to-br from-white via-amber-50/30 to-emerald-50/30 relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-20"
          >
            <span className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-amber-500/20 to-emerald-500/20 backdrop-blur-sm rounded-full border border-amber-400/30 text-amber-700 font-bold text-sm tracking-wide mb-8">
              ⚡ TRANSFORMING FOOTBALL IN INDIA
            </span>

            <h2 className="text-6xl md:text-8xl font-display font-black mb-10 leading-none">
              Building Football
              <span className="block gradient-text-energy">EXCELLENCE</span>
            </h2>

            <p className="text-2xl md:text-3xl text-gray-700 max-w-6xl mx-auto leading-relaxed font-medium">
              At Pioneer Sports Consultancy, we bridge the gap between Indian
              talent and global opportunities. Our comprehensive programs
              nurture young footballers from grassroots to international arenas.
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-10 mb-20">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotateX: 45 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <Card
                  title={feature.title}
                  description={feature.description}
                  icon={feature.icon}
                  features={feature.features}
                  variant="featured"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section
        className="py-24 px-4 bg-gradient-to-br from-gray-900 via-emerald-900 to-amber-900 text-white relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <span className="inline-block px-6 py-3 bg-gradient-to-r from-amber-500/20 to-emerald-500/20 backdrop-blur-sm rounded-full border border-amber-400/30 text-amber-300 font-bold text-sm tracking-wide mb-8">
              📊 OUR IMPACT SPEAKS
            </span>
            <h2 className="text-6xl md:text-8xl font-display font-black mb-8 leading-none">
              <span className="gradient-text-energy">NUMBERS</span>
              <br />
              <span className="text-white">That Matter</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <div
                  className={`text-6xl md:text-7xl font-black mb-4 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
                >
                  {stat.number}
                </div>
                <div className="text-lg md:text-xl text-white/90 font-bold tracking-wide">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
              What Our Community Says
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real stories from players, parents, and coaches who have
              experienced our programs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <motion.div
                key={idx}
                className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg border border-gray-100"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: idx * 0.2 }}
              >
                <div className="text-4xl mb-4">{t.image}</div>
                <p className="text-gray-700 mb-6 italic leading-relaxed">
                  &ldquo;{t.content}&rdquo;
                </p>
                <div>
                  <div className="font-semibold text-gray-900">{t.name}</div>
                  <div className="text-emerald-600 font-medium">{t.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section className="py-32 px-4 bg-gradient-to-br from-amber-500 via-yellow-500 to-emerald-600 text-center relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-7xl md:text-9xl font-display font-black text-white mb-8 leading-none">
            READY TO DOMINATE?
          </h2>
          <p className="text-2xl md:text-3xl text-white/90 mb-16 font-bold max-w-5xl mx-auto">
            Join hundreds of players who have transformed their football dreams
            into reality.
          </p>
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
            <Link href="/contact">
              <Button
                variant="primary"
                size="large"
                className="px-16 py-6 text-2xl"
              >
                START YOUR JOURNEY
              </Button>
            </Link>
            <Link href="/services">
              <Button
                variant="ghost"
                size="large"
                className="px-16 py-6 text-2xl"
              >
                EXPLORE PROGRAMS
              </Button>
            </Link>
          </div>
        </div>
      </motion.section>
    </>
  );
}
