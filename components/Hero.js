"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import Button from "./Button";
import Link from "next/link";

export default function Hero({
  title,
  tagline,
  buttons = [],
  backgroundImage = null,
}) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleScrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "/contact";
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dynamic Video Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/90 via-green-800/80 to-teal-900/90 z-10" />
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-amber-500/20 via-transparent to-emerald-500/20"
          animate={{
            background: [
              "linear-gradient(45deg, rgba(245,158,11,0.2) 0%, transparent 50%, rgba(16,185,129,0.2) 100%)",
              "linear-gradient(225deg, rgba(16,185,129,0.2) 0%, transparent 50%, rgba(245,158,11,0.2) 100%)",
              "linear-gradient(45deg, rgba(245,158,11,0.2) 0%, transparent 50%, rgba(16,185,129,0.2) 100%)",
            ],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Animated Mesh Background */}
        <div className="absolute inset-0 opacity-30">
          <svg
            className="w-full h-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="meshGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#10b981" stopOpacity="0.3" />
                <stop offset="50%" stopColor="#f59e0b" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#059669" stopOpacity="0.3" />
              </linearGradient>
            </defs>
            <motion.path
              d="M0,50 Q25,20 50,50 T100,30 L100,100 L0,100 Z"
              fill="url(#meshGrad)"
              animate={{
                d: [
                  "M0,50 Q25,20 50,50 T100,30 L100,100 L0,100 Z",
                  "M0,30 Q25,60 50,30 T100,50 L100,100 L0,100 Z",
                  "M0,50 Q25,20 50,50 T100,30 L100,100 L0,100 Z",
                ],
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
          </svg>
        </div>

        {/* Optimized Floating Orbs */}
        <div className="absolute inset-0">
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-24 h-24 rounded-full opacity-30"
              style={{
                background: `radial-gradient(circle, ${
                  i % 2 === 0 ? "rgba(245,158,11,0.2)" : "rgba(16,185,129,0.2)"
                } 0%, transparent 70%)`,
                left: `${20 + i * 20}%`,
                top: `${30 + (i % 2) * 40}%`,
              }}
              animate={{
                y: [0, -20, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 8 + i * 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Interactive Mouse Trail */}
        <motion.div
          className="absolute w-96 h-96 rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(16,185,129,0.1) 0%, transparent 70%)",
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-20 max-w-7xl mx-auto px-4 text-center text-white"
        style={{ y, opacity }}
      >
        {/* Animated Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <motion.div
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-amber-500/20 to-emerald-500/20 backdrop-blur-md rounded-full border border-amber-400/30 shadow-2xl"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 30px rgba(245,158,11,0.3)",
            }}
            animate={{
              boxShadow: [
                "0 0 20px rgba(245,158,11,0.2)",
                "0 0 40px rgba(16,185,129,0.3)",
                "0 0 20px rgba(245,158,11,0.2)",
              ],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <motion.span
              className="text-amber-300 mr-2 text-lg"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              🏆
            </motion.span>
            <span className="text-sm font-bold text-white tracking-wide">
              PIONEERING FOOTBALL EXCELLENCE
            </span>
          </motion.div>
        </motion.div>

        {/* Animated Title */}
        <motion.div className="mb-8">
          <motion.h1
            className="text-6xl md:text-8xl lg:text-9xl font-display font-black leading-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <motion.span
              className="block text-white"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              From Indian
            </motion.span>
            <motion.span
              className="block bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 bg-clip-text text-transparent"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              whileHover={{
                scale: 1.05,
                textShadow: "0 0 30px rgba(245,158,11,0.5)",
              }}
            >
              DREAMS
            </motion.span>
            <motion.span
              className="block text-white"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              to Global Arenas
            </motion.span>
          </motion.h1>
        </motion.div>

        {/* Animated Tagline */}
        <motion.p
          className="text-xl md:text-3xl mb-12 max-w-6xl mx-auto leading-relaxed text-white/90 font-light"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.4 }}
        >
          {tagline}
        </motion.p>

        {/* Enhanced CTA Buttons */}
        {buttons.length > 0 && (
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.6 }}
          >
            {buttons.map((button, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.8 + index * 0.2 }}
              >
                {button.action === "scroll" ? (
                  <Button
                    variant={button.variant}
                    size="large"
                    onClick={handleScrollToContact}
                    className="shadow-2xl hover:shadow-amber-500/25 border-2 border-amber-400/30"
                  >
                    {button.text}
                  </Button>
                ) : (
                  <Link href={button.target}>
                    <Button
                      variant={button.variant}
                      size="large"
                      className="shadow-2xl hover:shadow-emerald-500/25"
                    >
                      {button.text}
                    </Button>
                  </Link>
                )}
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Animated Stats */}
        {/* <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2 }}
        >
          {[
            { number: '500+', label: 'Players Trained', icon: '⚽' },
            { number: '50+', label: 'Programs Conducted', icon: '🏃‍♂️' },
            { number: '15+', label: 'Partner Clubs', icon: '🤝' },
            { number: '5+', label: 'Countries Connected', icon: '🌍' }
          ].map((stat, index) => (
            <motion.div 
              key={index}
              className="text-center group cursor-pointer"
              whileHover={{ scale: 1.1, y: -10 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2.2 + index * 0.1 }}
            >
              <motion.div 
                className="text-4xl mb-3 group-hover:scale-125 transition-transform duration-300"
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
                className="text-4xl md:text-5xl font-black mb-2 bg-gradient-to-r from-amber-400 to-emerald-400 bg-clip-text text-transparent"
                whileHover={{ scale: 1.2 }}
              >
                {stat.number}
              </motion.div>
              <div className="text-sm md:text-base text-white/80 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div> */}
      </motion.div>

      

      {/* Enhanced Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.5 }}
      >
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center text-white/70 cursor-pointer hover:text-amber-400 transition-colors group"
          onClick={() =>
            window.scrollBy({ top: window.innerHeight, behavior: "smooth" })
          }
          whileHover={{ scale: 1.1 }}
        >
          <span className="text-sm mb-3 font-bold tracking-wide group-hover:text-amber-400">
            EXPLORE MORE
          </span>
          <motion.div
            className="w-8 h-12 border-2 border-white/30 group-hover:border-amber-400 rounded-full flex justify-center relative overflow-hidden"
            whileHover={{ boxShadow: "0 0 20px rgba(245,158,11,0.3)" }}
          >
            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 h-4 bg-gradient-to-b from-white/60 to-amber-400 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
