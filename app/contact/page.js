'use client'

import ContactForm from '../../components/ContactForm'
import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-600 via-amber-500 to-yellow-500 text-white py-32 relative overflow-hidden">
        {/* Dynamic Background */}
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
          
          {/* Animated Elements */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-16 h-16 rounded-full opacity-30"
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
                  rotate: [0, 15, -15, 0],
                  scale: [1, 1.2, 1]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                📞
              </motion.span>
              <span className="text-white font-black text-lg tracking-wide">LET&apos;S MAKE HISTORY TOGETHER</span>
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
              GET IN
            </motion.span>
            <br />
            <motion.span
              className="bg-gradient-to-r from-white via-yellow-200 to-white bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              TOUCH
            </motion.span>
          </motion.h1>
          
          <motion.p 
            className="text-2xl md:text-3xl max-w-6xl mx-auto leading-relaxed text-white/90 font-bold mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Ready to start your football journey? Contact us to learn more about our programs 
            and how we can help you achieve your goals with personalized guidance and support.
          </motion.p>

          {/* Contact Methods Preview */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            {[
              { icon: '📧', label: 'Email Us', method: 'Instant Response' },
              { icon: '📱', label: 'Call Now', method: 'Direct Line' },
              { icon: '📍', label: 'Visit Us', method: 'Mumbai Office' },
              { icon: '💬', label: 'Chat Live', method: '24/7 Support' }
            ].map((contact, index) => (
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
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity,
                    delay: index * 0.5
                  }}
                >
                  {contact.icon}
                </motion.div>
                <div className="text-lg font-black mb-1 text-yellow-300">
                  {contact.label}
                </div>
                <div className="text-sm text-white/80 font-medium">
                  {contact.method}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden" id="contact">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23059669' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100"
            >
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-8">Contact Information</h2>
              <div className="space-y-8">
                <motion.div 
                  className="flex items-start space-x-4 group"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="bg-gradient-to-br from-emerald-100 to-green-100 p-4 rounded-xl group-hover:from-emerald-500 group-hover:to-green-500 transition-all duration-300">
                    <svg className="w-6 h-6 text-emerald-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg">Address</h3>
                    <p className="text-gray-600 font-medium">Mumbai, Maharashtra, India</p>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-start space-x-4 group"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="bg-gradient-to-br from-emerald-100 to-green-100 p-4 rounded-xl group-hover:from-emerald-500 group-hover:to-green-500 transition-all duration-300">
                    <svg className="w-6 h-6 text-emerald-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg">Phone</h3>
                    <p className="text-gray-600 font-medium">+91 7028981188</p>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-start space-x-4 group"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="bg-gradient-to-br from-emerald-100 to-green-100 p-4 rounded-xl group-hover:from-emerald-500 group-hover:to-green-500 transition-all duration-300">
                    <svg className="w-6 h-6 text-emerald-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a2 2 0 002.83 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg">Email</h3>
                    <p className="text-gray-600 font-medium">info@pioneersportsconsultancy.com</p>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-start space-x-4 group"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="bg-gradient-to-br from-emerald-100 to-green-100 p-4 rounded-xl group-hover:from-emerald-500 group-hover:to-green-500 transition-all duration-300">
                    <svg className="w-6 h-6 text-emerald-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg">Office Hours</h3>
                    <p className="text-gray-600 font-medium">Mon - Fri: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-600 font-medium">Sat: 10:00 AM - 4:00 PM</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
