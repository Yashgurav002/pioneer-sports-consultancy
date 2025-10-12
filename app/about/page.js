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
    {
      title: 'Legendas EspaÃ±ol',
      description: 'Spanish Football Expertise - Connecting Indian players with Spanish football methodology and opportunities.',
      icon: 'ðŸ‡ªðŸ‡¸'
    },
    {
      title: 'Legendas em Portugues',
      description: 'Portuguese Football Network - Opening doors to Portuguese football academies and professional clubs.',
      icon: 'ðŸ‡µðŸ‡¹'
    }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-600 via-yellow-500 to-emerald-600 text-white py-32 relative overflow-hidden">
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
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-2 gap-16 items-center"
          >
            <div className="space-y-8">
              <h2 className="text-5xl font-display font-bold text-gray-900 mb-8">Our Story</h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
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
                    <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-green-500 rounded-lg flex items-center justify-center">
                      <span className="text-white text-sm font-bold">M</span>
                    </div>
                    <h3 className="text-2xl font-display font-bold text-gray-900">Our Mission</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    To democratize access to world-class football training and international opportunities 
                    for Indian players at all levels.
                  </p>
                </div>
                
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-green-500 rounded-lg flex items-center justify-center">
                      <span className="text-white text-sm font-bold">V</span>
                    </div>
                    <h3 className="text-2xl font-display font-bold text-gray-900">Our Vision</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
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
