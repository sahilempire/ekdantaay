'use client';

import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Cosmic Background Particles */}
      <div className="absolute inset-0 z-0">
        {/* Floating particles */}
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
        
        {/* Larger glowing particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`glow-${i}`}
            className="absolute w-2 h-2 bg-pink-300 rounded-full opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      {/* Central Glowing Tooth */}
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <motion.div
          className="relative"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          {/* Glow effect around tooth */}
          <div className="absolute inset-0 bg-white/20 rounded-full blur-3xl scale-150"></div>
          <div className="absolute inset-0 bg-blue-400/30 rounded-full blur-2xl scale-125"></div>
          
          {/* Main tooth image */}
          <div className="relative z-10">
            <Image
              src="/tooth.png"
              alt="3D Glowing Dental Tooth"
              width={500}
              height={500}
              className="drop-shadow-2xl filter brightness-110 contrast-110"
              priority
            />
          </div>
        </motion.div>
      </div>

      {/* Left Content Block */}
      <motion.div
        className="absolute top-20 left-8 lg:left-16 z-20 max-w-md"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight mb-6">
          <span className="block">Not all smiles</span>
          <span className="block">need fixing,</span>
          <span className="block">some need vision</span>
        </h1>
        
        <p className="text-lg text-gray-200 leading-relaxed">
          We&apos;re a premium orthodontic and aesthetic clinic crafting confident smiles for those who settle for nothing ordinary.
        </p>
      </motion.div>

      {/* Right Content Block */}
      <motion.div
        className="absolute top-1/2 right-8 lg:right-16 z-20 max-w-sm"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        <h2 className="text-3xl lg:text-5xl font-bold text-white leading-tight mb-8">
          <span className="block">Luxury care</span>
          <span className="block">made personal</span>
        </h2>
        
        <motion.button
          className="bg-white text-blue-900 px-8 py-4 rounded-xl font-semibold flex items-center space-x-3 shadow-lg hover:shadow-xl transition-all duration-300"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          <Calendar className="w-5 h-5" />
          <span>Schedule a visit</span>
        </motion.button>
      </motion.div>

      {/* Bottom Tagline */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        <p className="text-2xl font-light text-gray-300 text-center">
          एकदंताय - Soft. Defined.
        </p>
      </motion.div>
    </section>
  );
}