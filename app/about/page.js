/* eslint-disable react/no-unescaped-entities */

"use client";

import { motion } from 'framer-motion'
import Card from '../../components/Card'

export default function About() {
  const collaborations = [
    {
      title: 'Paulo Futre',
      description: 'Portuguese Football Legend - Bringing decades of European football excellence to Indian grassroots development.',
      icon: 'â­'
    },

  ]

  return (
    <div className="pt-20 ">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-600 via-yellow-500 to-emerald-600 text-white py-32 relative overflow-hidden">
        {/* Dynamic Background */}
        <div className="max-w-7xl mx-auto ">
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
          
          {/* Floating Elements */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-20 h-20 rounded-full opacity-20"
              style={{
                background: `radial-gradient(circle, ${i % 2 === 0 ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.2)'} 0%, transparent 70%)`,
                left: `${10 + i * 15}%`,
                top: `${20 + (i % 3) * 30}%`,
              }}
              animate={{
                y: [0, -30, 0],
                x: [0, 20, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 8 + i * 2,
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
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                🏆
              </motion.span>
              <span className="text-white font-black text-lg tracking-wide">OUR LEGENDARY STORY</span>
            </motion.div>
          </motion.div>

          <motion.h1 
            className="text-6xl md:text-8xl lg:text-9xl font-display font-black mb-10 leading-none"
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
              ABOUT
            </motion.span>
            <br />
            <motion.span
              className="bg-gradient-to-r from-white via-yellow-200 to-white bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              PIONEER SPORTS
            </motion.span>
          </motion.h1>
          
          <motion.p 
            className="text-2xl md:text-3xl max-w-6xl mx-auto leading-relaxed text-white/90 font-bold mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Born from a vision to transform Indian football, we are dedicated to creating pathways 
            for talented players to achieve their global dreams through world-class training and international connections.
          </motion.p>

          {/* Animated Stats */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            {[
              { number: '2019', label: 'Founded', icon: '🚀' },
              { number: '100%', label: 'Success Rate', icon: '🎯' },
              { number: '24/7', label: 'Support', icon: '💪' },
              { number: '∞', label: 'Possibilities', icon: '⭐' }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                className="text-center group cursor-pointer"
                whileHover={{ scale: 1.1, y: -10 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
              >
                <motion.div 
                  className="text-4xl mb-3"
                  animate={{ 
                    rotate: [0, 5, -5, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity,
                    delay: index * 0.5
                  }}
                >
                  {stat.icon}
                </motion.div>
                <motion.div 
                  className="text-4xl md:text-5xl font-black mb-2 text-yellow-300"
                  whileHover={{ scale: 1.2 }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-sm md:text-base text-white/80 font-bold">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-amber-600 via-yellow-500 to-emerald-600 relative overflow-hidden">
        {/* Optimized Background */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30"
            animate={{
              background: [
                'linear-gradient(45deg, rgba(0,0,0,0.3) 0%, transparent 50%, rgba(0,0,0,0.3) 100%)',
                'linear-gradient(225deg, rgba(0,0,0,0.2) 0%, transparent 50%, rgba(0,0,0,0.2) 100%)',
                'linear-gradient(45deg, rgba(0,0,0,0.3) 0%, transparent 50%, rgba(0,0,0,0.3) 100%)'
              ]
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          
          {/* Reduced Floating Elements */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-16 h-16 rounded-full opacity-20"
              style={{
                background: `radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%)`,
                left: `${20 + i * 30}%`,
                top: `${30 + (i % 2) * 40}%`,
              }}
              animate={{
                y: [0, -20, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 8 + i * 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Compact Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2 
              className="text-5xl md:text-7xl font-display font-black text-white mb-4 leading-none"
              whileInView={{ scale: [0.9, 1] }}
              transition={{ duration: 0.8 }}
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
                MEET THE FOUNDER
              </motion.span>
            </motion.h2>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 items-start">
            {/* Compact Photo Section */}
            <motion.div
              className="lg:col-span-1"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div 
                className="relative w-full max-w-sm mx-auto"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                {/* Compact Photo Container */}
                <div className="aspect-square bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-sm rounded-2xl border-2 border-white/30 flex items-center justify-center relative overflow-hidden">
                  <div className="text-center text-white">
                    <motion.div 
                      className="text-6xl mb-3"
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 4, repeat: Infinity }}
                    >
                      👨‍💼
                    </motion.div>
                    <p className="text-lg font-bold">Hardik Sheth</p>
                    <p className="text-sm opacity-80">Founder</p>
                    <p className="text-xs opacity-60 mt-1">Photo Coming Soon</p>
                  </div>
                  
                  <motion.div 
                    className="absolute inset-0 border-2 border-amber-400/50 rounded-2xl"
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  />
                </div>
              </motion.div>

              {/* Compact Credentials */}
              <motion.div 
                className="mt-6 space-y-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <motion.div 
                  className="bg-black/20 backdrop-blur-sm rounded-lg p-3 border border-emerald-400/30 flex items-center gap-2"
                  whileHover={{ scale: 1.02 }}
                >
                  <span className="text-lg">🎓</span>
                  <div>
                    <p className="text-emerald-300 font-bold text-xs">BACHELOR'S</p>
                    <p className="text-white text-sm font-medium">Sports Management</p>
                  </div>
                </motion.div>

                {/* <motion.div 
                  className="bg-black/20 backdrop-blur-sm rounded-lg p-3 border border-amber-400/30 flex items-center gap-2"
                  whileHover={{ scale: 1.02 }}
                >
                  <span className="text-lg">👑</span>
                  <div>
                    <p className="text-amber-300 font-bold text-xs">MASTER'S</p>
                    <p className="text-white text-sm font-medium">Football Coaching & Management</p>
                    <p className="text-yellow-200 text-xs">Real Madrid Graduate School</p>
                  </div>
                </motion.div> */}

                <motion.div 
                  className="bg-black/20 backdrop-blur-sm rounded-lg p-3 border border-red-400/30 flex items-center gap-2"
                  whileHover={{ scale: 1.02 }}
                >
                  <span className="text-lg">🇪🇸</span>
                  <div>
                    <p className="text-red-300 font-bold text-xs">SPECIALIZATION</p>
                    <p className="text-white text-sm font-medium">Spanish Methodology</p>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Optimized Content Section */}
            <motion.div
              className="lg:col-span-2 space-y-6"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Founder's Dream Quote */}
              <motion.div 
                className="bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-white/20 relative overflow-hidden"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 to-emerald-400"
                  animate={{ scaleX: [0, 1, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                
                <h4 className="text-xl font-display font-bold text-amber-300 mb-3 flex items-center gap-2">
                  <span>💭</span>
                  Founder's Vision
                </h4>
                <blockquote className="text-base text-white/90 leading-relaxed italic mb-4">
                  "My dream is to create a platform where players, coaches, and enthusiasts can experience the true essence of the game — with the same technical, tactical, and mental discipline that drives success at the highest level. I want to bridge the gap between international coaching standards and Indian potential."
                </blockquote>
                <cite className="text-amber-300 font-bold text-sm">
                  — Hardik Sheth, Founder
                </cite>
              </motion.div>

              {/* Educational Background */}
              <motion.div 
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.3 }}
              >
                <h4 className="text-xl font-display font-bold text-emerald-300 mb-3 flex items-center gap-2">
                  <span>🎓</span>
                  World-Class Education
                </h4>
                <p className="text-base text-white/90 leading-relaxed mb-4">
                  At the heart of Pioneer Sports is Hardik Sheth, a passionate sports professional with a <strong className="text-amber-300">Bachelor's in Sports Management</strong> and a <strong className="text-amber-300">Master's in Football Coaching and Management</strong> from the prestigious <strong className="text-emerald-300">Real Madrid Graduate School – Universidad Europea</strong>.
                </p>
                
                <div className="bg-black/20 rounded-lg p-4 border border-amber-400/30">
                  <h5 className="text-lg font-bold text-amber-300 mb-2 flex items-center gap-2">
                    <span>⚽</span>
                    Spanish Methodology Expert
                  </h5>
                  <p className="text-white/90 text-sm leading-relaxed">
                    Deeply influenced by Spanish coaching methodology, Hardik brings a modern, tactical, and player-centered approach to developing football talent, combining European excellence with Indian passion.
                  </p>
                </div>
              </motion.div>

              {/* Mission Statement */}
              {/* <motion.div 
                className="bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-white/20"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.3 }}
              >
                <h4 className="text-xl font-display font-bold text-emerald-300 mb-3 flex items-center gap-2">
                  <span>🎯</span>
                  Our Mission
                </h4>
                <p className="text-base text-white/90 leading-relaxed mb-3">
                  At Pioneer Sports, we are driven by innovation, education, and excellence. Our mission is to develop complete athletes — individuals who understand the game deeply, think critically, and perform confidently, both on and off the field.
                </p>
                <p className="text-base text-white/90 leading-relaxed">
                  Through professional coaching programs, specialized camps, and holistic development pathways, Pioneer Sports aims to build a sustainable football ecosystem rooted in global knowledge and local passion.
                </p>
              </motion.div> */}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 px-4 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23059669' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.span 
              className="inline-block px-6 py-3 bg-gradient-to-r from-amber-500/20 to-emerald-500/20 backdrop-blur-sm rounded-full border border-amber-400/30 text-amber-700 font-bold text-sm tracking-wide mb-8"
              whileHover={{ scale: 1.05 }}
            >
              📖 OUR JOURNEY
            </motion.span>
            
            <motion.h2 
              className="text-6xl md:text-7xl font-display font-black text-gray-900 mb-8 leading-none"
              whileInView={{ scale: [0.8, 1] }}
              transition={{ duration: 0.8 }}
            >
              Our <span className="gradient-text-energy">STORY</span>
            </motion.h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-2 gap-16 items-center"
          >
            <div className="space-y-8">
              <div className="space-y-6 text-xl text-gray-700 leading-relaxed font-medium">
                <p>
                  Pioneer Sports Consultancy was founded with a simple yet powerful belief: every talented 
                  footballer in India deserves the opportunity to reach their full potential, regardless 
                  of their background or location.
                </p>
                <p>
                  We recognized that while India has immense football talent, many players lack access to 
                  professional training, international exposure, and clear pathways to global opportunities. 
                  Our mission is to bridge this gap through strategic partnerships and comprehensive development programs.
                </p>
                <p>
                  Today, we work with legendary players, established European clubs, and grassroots 
                  organizations to create a complete ecosystem for football development in India.
                </p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-white to-emerald-50 p-10 rounded-2xl shadow-xl border border-emerald-100">
              <div className="space-y-8">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-green-500 rounded-xl flex items-center justify-center">
                      <span className="text-white text-lg font-bold">M</span>
                    </div>
                    <h3 className="text-3xl font-display font-bold text-gray-900">Our Mission</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-lg font-medium">
                    To democratize access to world-class football training and international opportunities 
                    for Indian players at all levels.
                  </p>
                </div>
                
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-green-500 rounded-xl flex items-center justify-center">
                      <span className="text-white text-lg font-bold">V</span>
                    </div>
                    <h3 className="text-3xl font-display font-bold text-gray-900">Our Vision</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-lg font-medium">
                    To see Indian footballers competing at the highest levels globally, representing not 
                    just their skills, but the dreams of millions of young players across the nation.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Collaborations */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl font-display font-bold text-gray-900 mb-6">
              Our Global <span className="gradient-text bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">Partnerships</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Collaborating with football legends and international organizations to bring world-class expertise to India
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-10">
            {collaborations.map((collab, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <Card
                  title={collab.title}
                  description={collab.description}
                  icon={collab.icon}
                  variant="featured"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
