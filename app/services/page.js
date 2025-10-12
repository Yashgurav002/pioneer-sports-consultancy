"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Services() {
  const services = [
    {
      title: "Training Camps",
      description:
        "Intensive football training camps with world-class coaches and facilities. Experience European training methodologies adapted for Indian players.",
      icon: "/icons8-training-50.png",
      features: [
        "Professional Coaching",
        "European Methodology",
        "Skill Development",
        "Performance Analysis",
      ],
    },
    {
      title: "Grassroots Development",
      description:
        "Building football foundation at community level across India. We work with local schools and clubs to identify and nurture young talent.",
      icon: "/icons8-training-50.png",
      features: [
        "Community Programs",
        "Talent Identification",
        "Youth Coaching",
        "Equipment Support",
      ],
    },
    {
      title: "Youth Programs",
      description:
        "Specialized programs for young talents to develop professional skills. Comprehensive development covering technical, tactical, and mental aspects.",
      icon: "/icons8-training-50.png",
      features: [
        "Age-specific Training",
        "Mental Coaching",
        "Nutrition Guidance",
        "Educational Support",
      ],
    },
    {
      title: "Player Exposure",
      description:
        "International exposure opportunities and global networking. Connect with European clubs, scouts, and professional opportunities.",
      icon: "/icons8-training-50.png",
      features: [
        "European Trials",
        "Scout Networks",
        "Club Connections",
        "Career Guidance",
      ],
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-600 via-emerald-500 to-yellow-500 text-white py-32 relative overflow-hidden">
        {/* Dynamic Background */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20"
            animate={{
              background: [
                'linear-gradient(45deg, rgba(0,0,0,0.2) 0%, transparent 50%, rgba(0,0,0,0.2) 100%)',
                'linear-gradient(225deg, rgba(0,0,0,0.1) 0%, transparent 50%, rgba(0,0,0,0.1) 100%)',
                'linear-gradient(45deg, rgba(0,0,0,0.2) 0%, transparent 50%, rgba(0,0,0,0.2) 100%)'
              ]
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          
          {/* Floating Elements */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-16 h-16 rounded-full opacity-20"
              style={{
                background: `radial-gradient(circle, rgba(255,255,255,0.4) 0%, transparent 70%)`,
                left: `${15 + i * 18}%`,
                top: `${25 + (i % 2) * 50}%`,
              }}
              animate={{
                y: [0, -25, 0],
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: 6 + i,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="mb-12"
          >
            <motion.div 
              className="inline-flex items-center px-8 py-4 bg-black/20 backdrop-blur-sm rounded-full border border-white/30 mb-10"
              whileHover={{ scale: 1.05 }}
              animate={{
                boxShadow: [
                  '0 0 0 0px rgba(255,255,255,0.4)',
                  '0 0 0 20px rgba(255,255,255,0)',
                  '0 0 0 0px rgba(255,255,255,0.4)'
                ]
              }}
              transition={{ 
                boxShadow: { duration: 2, repeat: Infinity }
              }}
            >
              <motion.span 
                className="text-white font-black text-lg tracking-wide mr-3"
                animate={{ 
                  rotate: [0, 360],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                🏆
              </motion.span>
              <span className="text-white font-black text-lg tracking-wide">ELITE TRAINING PROGRAMS</span>
            </motion.div>
          </motion.div>

          <motion.h1 
            className="text-7xl md:text-9xl font-display font-black mb-10 leading-none"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <motion.span
              animate={{ 
                textShadow: [
                  '0 0 20px rgba(255,255,255,0.5)',
                  '0 0 40px rgba(255,255,255,0.8)',
                  '0 0 20px rgba(255,255,255,0.5)'
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              OUR
            </motion.span>
            <br />
            <motion.span
              className="bg-gradient-to-r from-white via-yellow-200 to-white bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              SERVICES
            </motion.span>
          </motion.h1>
          
          <motion.p 
            className="text-2xl md:text-3xl max-w-6xl mx-auto leading-relaxed text-white/90 font-bold mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Comprehensive football development programs designed to take players from grassroots 
            level to international opportunities with world-class training and global connections.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-4 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23059669' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.span 
              className="inline-block px-6 py-3 bg-gradient-to-r from-amber-500/20 to-emerald-500/20 backdrop-blur-sm rounded-full border border-amber-400/30 text-amber-700 font-bold text-sm tracking-wide mb-8"
              whileHover={{ scale: 1.05 }}
            >
              ⚡ CHOOSE YOUR PATH TO GREATNESS
            </motion.span>
            
            <motion.h2 
              className="text-6xl md:text-8xl font-display font-black text-gray-900 mb-8 leading-none"
              whileInView={{ scale: [0.8, 1] }}
              transition={{ duration: 0.8 }}
            >
              Transform Your 
              <motion.span 
                className="block gradient-text-energy"
                animate={{ 
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                FOOTBALL JOURNEY
              </motion.span>
            </motion.h2>
            
            <motion.p 
              className="text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              Choose from our comprehensive range of programs designed for every level of player - 
              from grassroots beginners to elite professionals seeking global opportunities.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-10">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-2xl shadow-xl hover:shadow-2xl p-10 border border-gray-100 group hover-lift relative overflow-hidden"
              >
                {/* Gradient Overlay */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-500/10 to-green-500/10 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500" />

                {/* Icon */}
                <motion.div
                  className="mb-6 relative z-10"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-emerald-500/25 transition-shadow duration-300">
                    <Image
                      src={service.icon}
                      alt={`${service.title} Icon`}
                      width={40}
                      height={40}
                      className="object-contain filter brightness-0 invert"
                    />
                  </div>
                </motion.div>

                <h3 className="text-3xl font-display font-bold text-gray-900 mb-4 group-hover:text-emerald-700 transition-colors duration-300 relative z-10">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-8 leading-relaxed text-lg relative z-10">
                  {service.description}
                </p>

                <div className="mb-8 relative z-10">
                  <h4 className="font-semibold text-gray-900 mb-4 text-lg">
                    Key Features:
                  </h4>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        className="flex items-start gap-3 text-gray-700"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.3,
                          delay: featureIndex * 0.1,
                        }}
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="font-medium">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <motion.button
                  className="w-full bg-gradient-to-r from-emerald-600 to-green-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-emerald-700 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-emerald-500/25 relative z-10 group/btn"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => (window.location.href = "/contact")}
                >
                  <span className="flex items-center justify-center gap-2">
                    Learn More
                    <motion.svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      whileHover={{ x: 3 }}
                      transition={{ duration: 0.2 }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </motion.svg>
                  </span>
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-emerald-600 to-green-700 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 50m-40 0a40,40 0 1,1 80,0a40,40 0 1,1 -80,0' stroke='%23ffffff' stroke-width='1' fill='none'/%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.h2
            className="text-5xl md:text-6xl font-display font-bold mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Ready to Begin Your Journey?
          </motion.h2>
          <motion.p
            className="text-xl md:text-2xl mb-12 leading-relaxed text-white/90 font-light max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Contact us today to learn more about our programs and how we can
            help you or your child achieve football excellence with world-class
            training and global opportunities.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.button
              className="bg-white text-emerald-600 px-10 py-4 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 flex items-center gap-3"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => (window.location.href = "/contact")}
            >
              <span>⚽</span>
              Get Started Today
            </motion.button>

            <motion.button
              className="bg-transparent text-white border-2 border-white/30 px-10 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm flex items-center gap-3"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => (window.location.href = "/about")}
            >
              <span>📖</span>
              Learn More
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
