'use client'

import { motion, useMotionValue, useTransform } from 'framer-motion'
import { useState } from 'react'

export default function Card({ 
  title, 
  description, 
  icon, 
  features = [],
  buttonText = null,
  onButtonClick = null,
  className = '',
  variant = 'default'
}) {
  const [isHovered, setIsHovered] = useState(false)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useTransform(y, [-100, 100], [30, -30])
  const rotateY = useTransform(x, [-100, 100], [-30, 30])

  const variantClasses = {
    default: 'bg-gradient-to-br from-white via-gray-50 to-white border-gray-200',
    gradient: 'bg-gradient-to-br from-white via-emerald-50 to-white border-emerald-200',
    featured: 'bg-gradient-to-br from-amber-50 via-yellow-50 to-amber-50 border-amber-300',
    glass: 'bg-white/90 backdrop-blur-xl border-white/30'
  }

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    x.set(event.clientX - centerX)
    y.set(event.clientY - centerY)
  }

  return (
    <motion.div 
      className={`rounded-3xl shadow-xl hover:shadow-2xl p-8 border-2 transition-all duration-500 group relative overflow-hidden ${variantClasses[variant]} ${className}`}
      style={{
        rotateX: isHovered ? rotateX : 0,
        rotateY: isHovered ? rotateY : 0,
        transformStyle: "preserve-3d",
      }}
      whileHover={{ 
        y: -15,
        scale: 1.02,
      }}
      transition={{ 
        type: "spring",
        stiffness: 300,
        damping: 20
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false)
        x.set(0)
        y.set(0)
      }}
    >
      {/* Animated Background Gradient */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-amber-400/10 via-transparent to-emerald-400/10 rounded-3xl opacity-0 group-hover:opacity-100"
        animate={{
          background: [
            'linear-gradient(135deg, rgba(245,158,11,0.1) 0%, transparent 50%, rgba(16,185,129,0.1) 100%)',
            'linear-gradient(225deg, rgba(16,185,129,0.1) 0%, transparent 50%, rgba(245,158,11,0.1) 100%)',
            'linear-gradient(135deg, rgba(245,158,11,0.1) 0%, transparent 50%, rgba(16,185,129,0.1) 100%)'
          ]
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />

      {/* Simplified Floating Particles */}
      <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-amber-400 to-emerald-400 rounded-full"
            style={{
              left: `${25 + i * 25}%`,
              top: `${30 + (i % 2) * 40}%`,
            }}
            animate={{
              y: [0, -20, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              delay: i * 0.3,
              repeat: Infinity,
              repeatDelay: 2
            }}
          />
        ))}
      </div>

      {/* Enhanced Icon */}
      {icon && (
        <motion.div 
          className="mb-8 relative z-10"
          whileHover={{ 
            scale: 1.2, 
            rotate: [0, -5, 5, 0],
            y: -5
          }}
          transition={{ duration: 0.4 }}
        >
          <motion.div 
            className="w-20 h-20 bg-gradient-to-br from-amber-500 via-yellow-500 to-amber-600 rounded-3xl flex items-center justify-center shadow-2xl relative overflow-hidden"
            animate={{
              boxShadow: [
                '0 10px 30px rgba(245,158,11,0.3)',
                '0 15px 40px rgba(16,185,129,0.4)',
                '0 10px 30px rgba(245,158,11,0.3)'
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            {/* Icon Glow Effect */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent rounded-3xl"
              animate={{
                opacity: [0.3, 0.6, 0.3],
                scale: [1, 1.1, 1]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            
            {typeof icon === 'string' ? (
              <motion.img 
                src={icon} 
                alt={title} 
                className="w-10 h-10 object-contain relative z-10 filter brightness-0 invert"
                whileHover={{ scale: 1.1 }}
              />
            ) : (
              <motion.div 
                className="text-3xl text-white relative z-10"
                whileHover={{ scale: 1.1 }}
              >
                {icon}
              </motion.div>
            )}
          </motion.div>
          
          {/* Pulsing Ring */}
          <motion.div 
            className="absolute inset-0 border-4 border-amber-400/30 rounded-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0, 0.3]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      )}

      {/* Enhanced Title */}
      <motion.h3 
        className="text-3xl font-black text-gray-900 mb-6 font-display relative z-10"
        whileHover={{ 
          scale: 1.05,
          color: '#f59e0b'
        }}
        transition={{ duration: 0.2 }}
      >
        {title}
      </motion.h3>

      {/* Enhanced Description */}
      <motion.p 
        className="text-gray-700 mb-8 leading-relaxed text-lg font-medium relative z-10"
        initial={{ opacity: 0.8 }}
        whileHover={{ opacity: 1 }}
      >
        {description}
      </motion.p>

      {/* Enhanced Features */}
      {features.length > 0 && (
        <div className="mb-10 relative z-10">
          <ul className="space-y-4">
            {features.map((feature, index) => (
              <motion.li 
                key={index}
                className="flex items-start gap-4 text-gray-800"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                whileHover={{ x: 5, scale: 1.02 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <motion.div 
                  className="w-3 h-3 bg-gradient-to-r from-amber-500 to-emerald-500 rounded-full mt-1.5 flex-shrink-0"
                  animate={{
                    scale: [1, 1.2, 1],
                    boxShadow: [
                      '0 0 0 0px rgba(245,158,11,0.4)',
                      '0 0 0 4px rgba(245,158,11,0)',
                      '0 0 0 0px rgba(245,158,11,0.4)'
                    ]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    delay: index * 0.3
                  }}
                />
                <span className="font-semibold text-lg">{feature}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      )}

      {/* Enhanced Button */}
      {buttonText && onButtonClick && (
        <motion.button
          className="w-full bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 text-black px-8 py-4 rounded-2xl font-black text-lg hover:from-amber-400 hover:via-yellow-400 hover:to-amber-500 transition-all duration-300 shadow-2xl hover:shadow-amber-500/40 relative overflow-hidden group/btn border-2 border-amber-400/50"
          whileHover={{ 
            scale: 1.05, 
            y: -3,
            boxShadow: "0 20px 40px rgba(245,158,11,0.4)"
          }}
          whileTap={{ scale: 0.95 }}
          onClick={onButtonClick}
        >
          {/* Button Shimmer */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12"
            animate={{
              x: ['-100%', '200%']
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 1
            }}
          />
          
          <span className="flex items-center justify-center gap-3 relative z-10">
            {buttonText}
            <motion.svg 
              className="w-5 h-5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              whileHover={{ 
                x: 5,
                rotate: 15
              }}
              transition={{ duration: 0.2 }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
            </motion.svg>
          </span>
        </motion.button>
      )}
    </motion.div>
  )
}
