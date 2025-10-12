'use client'

import { motion } from 'framer-motion'

export default function Button({
  children,
  variant = 'primary',
  size = 'medium',
  onClick,
  disabled = false,
  className = '',
  icon = null,
  ...props
}) {
  const baseClasses = 'inline-flex items-center justify-center font-bold rounded-2xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 relative overflow-hidden group cursor-pointer'

  const variantClasses = {
    primary: 'bg-gradient-to-r from-amber-500 via-amber-600 to-yellow-500 text-black hover:from-amber-400 hover:via-amber-500 hover:to-yellow-400 focus:ring-amber-500 shadow-2xl hover:shadow-amber-500/40 border-2 border-amber-400/50',
    secondary: 'bg-gradient-to-r from-emerald-600 to-green-600 text-white hover:from-emerald-500 hover:to-green-500 focus:ring-emerald-500 shadow-2xl hover:shadow-emerald-500/40 border-2 border-emerald-400/50',
    outline: 'bg-transparent text-white border-2 border-amber-400/60 hover:bg-amber-400/20 hover:border-amber-400 focus:ring-amber-400 backdrop-blur-sm shadow-2xl hover:shadow-amber-500/30',
    ghost: 'bg-white/10 text-white border-2 border-white/30 hover:bg-white/20 hover:border-white/50 focus:ring-white backdrop-blur-sm shadow-xl hover:shadow-white/20'
  }

  const sizeClasses = {
    small: 'px-6 py-3 text-sm gap-2 min-w-[120px]',
    medium: 'px-8 py-4 text-base gap-3 min-w-[140px]',
    large: 'px-12 py-5 text-xl gap-4 min-w-[180px]'
  }

  const disabledClasses = 'opacity-50 cursor-not-allowed'

  const buttonClasses = `
    ${baseClasses}
    ${variantClasses[variant]}
    ${sizeClasses[size]}
    ${disabled ? disabledClasses : ''}
    ${className}
  `.trim()

  return (
    <motion.button
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
      whileHover={!disabled ? { 
        scale: 1.05, 
        y: -8,
        rotateX: 5,
      } : {}}
      whileTap={!disabled ? { scale: 0.95, y: 0 } : {}}
      transition={{ 
        type: "spring",
        stiffness: 400,
        damping: 17
      }}
      {...props}
    >
      {/* Animated Background Glow */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-r from-amber-400/0 via-amber-400/30 to-amber-400/0 rounded-2xl"
        animate={{
          x: ['-100%', '100%'],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Pulsing Border Effect */}
      <motion.div 
        className="absolute inset-0 rounded-2xl"
        animate={{
          boxShadow: [
            '0 0 0 0px rgba(245, 158, 11, 0.4)',
            '0 0 0 8px rgba(245, 158, 11, 0)',
            '0 0 0 0px rgba(245, 158, 11, 0.4)'
          ]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Shimmer Effect */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12 opacity-0 group-hover:opacity-100"
        animate={{
          x: ['-100%', '200%']
        }}
        transition={{
          duration: 0.8,
          ease: "easeOut"
        }}
      />
      
      {/* Icon with Animation */}
      {icon && (
        <motion.span 
          className="flex-shrink-0 relative z-10"
          whileHover={{ 
            rotate: [0, -10, 10, 0],
            scale: 1.2
          }}
          transition={{ duration: 0.3 }}
        >
          {icon}
        </motion.span>
      )}
      
      {/* Text with Bounce */}
      <motion.span 
        className="relative z-10 font-black tracking-wide"
        whileHover={{ 
          y: [-2, 2, -2],
        }}
        transition={{ 
          duration: 0.4,
          repeat: 2
        }}
      >
        {children}
      </motion.span>
      
      {/* Simplified Particle Effect */}
      <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${30 + i * 20}%`,
              top: `${40 + (i % 2) * 20}%`,
            }}
            animate={{
              y: [0, -15, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: 1.5,
              delay: i * 0.2,
              repeat: Infinity,
              repeatDelay: 1
            }}
          />
        ))}
      </div>
    </motion.button>
  )
}
