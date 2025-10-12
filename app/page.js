"use client";

import Hero from '../components/Hero'
import Card from '../components/Card'
import Button from '../components/Button'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Home() {
  const heroButtons = [
    {
      text: '🚀 START YOUR JOURNEY',
      action: 'scroll',
      target: 'contact',
      variant: 'primary'
    },
    {
      text: '⚡ EXPLORE PROGRAMS', 
      action: 'navigate',
      target: '/services',
      variant: 'outline'
    }
  ]

  const features = [
    {
      title: 'World-Class Training',
      description: 'European methodology adapted for Indian players with professional coaching standards.',
      icon: '🏆',
      features: ['Professional Coaches', 'European Methods', 'Performance Analysis', 'Individual Development']
    },
    {
      title: 'Global Opportunities',
      description: 'Direct connections with European clubs, scouts, and international football networks.',
      icon: '🌍',
      features: ['European Trials', 'Scout Networks', 'Club Partnerships', 'Career Guidance']
    },
    {
      title: 'Grassroots Focus',
      description: 'Building strong foundations at community level across India with comprehensive support.',
      icon: '🌱',
      features: ['Community Programs', 'Youth Development', 'Equipment Support', 'Local Partnerships']
    }
  ]

  const testimonials = [
    {
      name: 'Arjun Patel',
      role: 'Youth Player',
      content: 'Pioneer Sports changed my life. From playing in local grounds to training with European coaches - it\'s been an incredible journey.',
      image: '👦'
    },
    {
      name: 'Priya Sharma',
      role: 'Parent',
      content: 'The professional approach and genuine care for each child\'s development is remarkable. My daughter has grown tremendously.',
      image: '👩'
    },
    {
      name: 'Coach Rajesh',
      role: 'Local Coach',
      content: 'The training methodologies and resources provided have elevated our entire coaching program to international standards.',
      image: '👨‍🏫'
    }
  ]

  return (
    <>
      <Hero
        title="From Indian Dreams to Global Arenas"
        tagline="Pioneering grassroots and youth football in India with world-class training, global expertise, and legendary partnerships."
        buttons={heroButtons}
        backgroundImage="https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1993&q=80"
      />

      {/* Mission Section */}
      <motion.section 
        className="py-24 px-4 bg-gradient-to-br from-white via-amber-50/30 to-emerald-50/30 relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        id="overview"
      >
        {/* Dynamic Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Animated Mesh */}
          <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <linearGradient id="meshGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f59e0b" />
                <stop offset="100%" stopColor="#059669" />
              </linearGradient>
            </defs>
            <motion.path
              d="M0,20 Q50,5 100,20 L100,80 Q50,95 0,80 Z"
              fill="url(#meshGradient)"
              animate={{
                d: [
                  "M0,20 Q50,5 100,20 L100,80 Q50,95 0,80 Z",
                  "M0,30 Q50,15 100,30 L100,70 Q50,85 0,70 Z",
                  "M0,20 Q50,5 100,20 L100,80 Q50,95 0,80 Z"
                ]
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
          </svg>

          {/* Floating Energy Orbs */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-32 h-32 rounded-full opacity-20"
              style={{
                background: `radial-gradient(circle, ${i % 2 === 0 ? '#f59e0b' : '#059669'} 0%, transparent 70%)`,
                left: `${10 + i * 15}%`,
                top: `${20 + (i % 3) * 30}%`,
              }}
              animate={{
                y: [0, -30, 0],
                x: [0, 20, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 6 + i,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-20"
          >
            <motion.div
              className="inline-block mb-8"
              whileHover={{ scale: 1.05 }}
            >
              <span className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-amber-500/20 to-emerald-500/20 backdrop-blur-sm rounded-full border border-amber-400/30 text-amber-700 font-bold text-sm tracking-wide">
                ⚡ TRANSFORMING FOOTBALL IN INDIA
              </span>
            </motion.div>

            <motion.h2 
              className="text-6xl md:text-8xl font-display font-black text-gray-900 mb-10 leading-none"
              whileInView={{ scale: [0.8, 1] }}
              transition={{ duration: 0.8 }}
            >
              Building Football 
              <motion.span 
                className="block gradient-text-energy"
                animate={{ 
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                EXCELLENCE
              </motion.span>
            </motion.h2>
            
            <motion.p 
              className="text-2xl md:text-3xl text-gray-700 max-w-6xl mx-auto leading-relaxed font-medium"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              At Pioneer Sports Consultancy, we bridge the gap between Indian talent and global opportunities. 
              Our comprehensive programs are designed to nurture young footballers from grassroots level to 
              international arenas, combining traditional Indian passion with world-class European expertise.
            </motion.p>
          </motion.div>

          {/* Enhanced Features Grid */}
          <div className="grid md:grid-cols-3 gap-10 mb-20">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotateX: 45 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 100
                }}
                className="perspective-1000"
              >
                <Card
                  title={feature.title}
                  description={feature.description}
                  icon={feature.icon}
                  features={feature.features}
                  variant="featured"
                  className="hover-lift-intense interactive-card"
                />
              </motion.div>
            ))}
          </div>

          {/* Progress Path Animation */}
          <motion.div
            className="flex justify-center items-center space-x-8 mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {['GRASSROOTS', 'TRAINING', 'EXCELLENCE', 'GLOBAL'].map((step, index) => (
              <motion.div
                key={step}
                className="flex items-center"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
              >
                <motion.div
                  className="w-16 h-16 bg-gradient-to-r from-amber-500 to-emerald-500 rounded-full flex items-center justify-center text-white font-black text-sm shadow-2xl"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  animate={{ 
                    boxShadow: [
                      '0 0 0 0px rgba(245,158,11,0.4)',
                      '0 0 0 20px rgba(245,158,11,0)',
                      '0 0 0 0px rgba(245,158,11,0.4)'
                    ]
                  }}
                  transition={{ 
                    boxShadow: { duration: 2, repeat: Infinity, delay: index * 0.5 }
                  }}
                >
                  {index + 1}
                </motion.div>
                {index < 3 && (
                  <motion.div
                    className="w-16 h-1 bg-gradient-to-r from-amber-400 to-emerald-400 mx-4"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 1 + index * 0.2 }}
                  />
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section 
        className="py-24 px-4 bg-gradient-to-br from-gray-900 via-emerald-900 to-amber-900 text-white relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Dynamic Background */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-amber-500/20 via-transparent to-emerald-500/20"
            animate={{
              background: [
                'linear-gradient(45deg, rgba(245,158,11,0.2) 0%, transparent 50%, rgba(5,150,105,0.2) 100%)',
                'linear-gradient(225deg, rgba(5,150,105,0.2) 0%, transparent 50%, rgba(245,158,11,0.2) 100%)',
                'linear-gradient(45deg, rgba(245,158,11,0.2) 0%, transparent 50%, rgba(5,150,105,0.2) 100%)'
              ]
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          
          {/* Animated Grid */}
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              {[...Array(10)].map((_, i) => (
                <motion.line
                  key={i}
                  x1={i * 10}
                  y1="0"
                  x2={i * 10}
                  y2="100"
                  stroke="#ffffff"
                  strokeWidth="0.5"
                  animate={{ opacity: [0.1, 0.3, 0.1] }}
                  transition={{ duration: 3, repeat: Infinity, delay: i * 0.2 }}
                />
              ))}
            </svg>
          </div>
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <motion.span 
              className="inline-block px-6 py-3 bg-gradient-to-r from-amber-500/20 to-emerald-500/20 backdrop-blur-sm rounded-full border border-amber-400/30 text-amber-300 font-bold text-sm tracking-wide mb-8"
              whileHover={{ scale: 1.05 }}
            >
              📊 OUR IMPACT SPEAKS
            </motion.span>
            
            <motion.h2 
              className="text-6xl md:text-8xl font-display font-black mb-8 leading-none"
              whileInView={{ scale: [0.8, 1] }}
              transition={{ duration: 0.8 }}
            >
              <span className="gradient-text-energy">NUMBERS</span>
              <br />
              <span className="text-white">That Matter</span>
            </motion.h2>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { number: '500+', label: 'Players Trained', icon: '⚽', color: 'from-amber-400 to-yellow-400' },
              { number: '50+', label: 'Programs Conducted', icon: '🏃‍♂️', color: 'from-emerald-400 to-green-400' },
              { number: '15+', label: 'Partner Clubs', icon: '🤝', color: 'from-amber-400 to-emerald-400' },
              { number: '5+', label: 'Countries Connected', icon: '🌍', color: 'from-green-400 to-teal-400' }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                className="text-center group cursor-pointer"
                initial={{ opacity: 0, scale: 0.5, rotateY: 180 }}
                whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  scale: 1.1, 
                  y: -10,
                  rotateY: 10,
                  rotateX: 5
                }}
              >
                <motion.div 
                  className="relative mb-6"
                  animate={{ 
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity,
                    delay: index * 0.5
                  }}
                >
                  <motion.div
                    className="text-6xl mb-4 relative z-10"
                    whileHover={{ scale: 1.3, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    {stat.icon}
                  </motion.div>
                  
                  {/* Pulsing Ring */}
                  <motion.div 
                    className="absolute inset-0 w-20 h-20 mx-auto rounded-full border-4 border-amber-400/30"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.3, 0, 0.3]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.div>
                
                <motion.div 
                  className={`text-6xl md:text-7xl font-black mb-4 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
                  whileHover={{ scale: 1.2 }}
                  animate={{ 
                    textShadow: [
                      '0 0 10px rgba(245,158,11,0.5)',
                      '0 0 20px rgba(5,150,105,0.5)',
                      '0 0 10px rgba(245,158,11,0.5)'
                    ]
                  }}
                  transition={{ 
                    textShadow: { duration: 3, repeat: Infinity }
                  }}
                >
                  {stat.number}
                </motion.div>
                
                <div className="text-lg md:text-xl text-white/90 font-bold tracking-wide">
                  {stat.label}
                </div>
                
                {/* Hover Glow Effect */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-amber-500/0 via-amber-500/20 to-emerald-500/0 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl"
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section 
        className="py-20 px-4 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
              What Our Community Says
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real stories from players, parents, and coaches who have experienced our programs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ y: -5 }}
              >
                <div className="text-4xl mb-4">{testimonial.image}</div>
                <p className="text-gray-700 mb-6 italic leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-emerald-600 font-medium">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="py-32 px-4 bg-gradient-to-br from-amber-500 via-yellow-500 to-emerald-600 relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Dynamic Background Elements */}
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
            transition={{ duration: 6, repeat: Infinity }}
          />
          
          {/* Animated Shapes */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-32 h-32 rounded-full opacity-20"
              style={{
                background: `radial-gradient(circle, ${i % 2 === 0 ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.2)'} 0%, transparent 70%)`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                x: [0, Math.random() * 200 - 100, 0],
                y: [0, Math.random() * 200 - 100, 0],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 8 + Math.random() * 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="mb-12"
          >
            <motion.span 
              className="inline-block px-8 py-4 bg-black/20 backdrop-blur-sm rounded-full border border-white/30 text-white font-black text-lg tracking-wide mb-10"
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
              🚀 YOUR MOMENT IS NOW
            </motion.span>
            
            <motion.h2 
              className="text-7xl md:text-9xl font-display font-black text-white mb-8 leading-none"
              whileInView={{ 
                scale: [0.8, 1.05, 1],
                rotateX: [15, 0, 0]
              }}
              transition={{ duration: 1.2 }}
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
                READY TO
              </motion.span>
              <br />
              <motion.span
                className="bg-gradient-to-r from-white via-yellow-200 to-white bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                DOMINATE?
              </motion.span>
            </motion.h2>
            
            <motion.p 
              className="text-2xl md:text-3xl text-white/90 mb-16 leading-relaxed font-bold max-w-5xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              Join hundreds of players who have transformed their football dreams into reality. 
              Take the first step towards professional football excellence and global recognition.
            </motion.p>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-8 justify-center items-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <Link href="/contact">
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  variant="primary" 
                  size="large"
                  icon={<motion.span
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >🚀</motion.span>}
                  className="text-2xl px-16 py-6 shadow-2xl border-4 border-white/30"
                >
                  START YOUR JOURNEY
                </Button>
              </motion.div>
            </Link>
            
            <Link href="/services">
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  variant="ghost" 
                  size="large"
                  icon={<motion.span
                    animate={{ 
                      scale: [1, 1.2, 1],
                    }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >⚡</motion.span>}
                  className="text-2xl px-16 py-6 shadow-2xl border-4 border-white/50"
                >
                  EXPLORE PROGRAMS
                </Button>
              </motion.div>
            </Link>
          </motion.div>

          {/* Countdown Timer Effect */}
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <p className="text-white/80 text-lg font-bold mb-4">
              ⏰ LIMITED SPOTS AVAILABLE FOR 2024 PROGRAMS
            </p>
            <motion.div
              className="inline-flex items-center space-x-4 bg-black/30 backdrop-blur-sm rounded-2xl px-8 py-4 border border-white/20"
              animate={{
                boxShadow: [
                  '0 0 0 0px rgba(255,255,255,0.2)',
                  '0 0 0 10px rgba(255,255,255,0)',
                  '0 0 0 0px rgba(255,255,255,0.2)'
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="text-white font-black text-xl">DON'T WAIT</span>
              <motion.span
                className="text-yellow-300 text-2xl"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                ⚡
              </motion.span>
              <span className="text-white font-black text-xl">ACT NOW</span>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </>
  )
}
