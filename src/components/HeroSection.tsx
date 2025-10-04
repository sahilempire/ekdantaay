'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Phone, MapPin, Clock, CheckCircle, ArrowRight, Play } from 'lucide-react';
import ParticleBackground from './ParticleBackground';
import AnimatedCounter from './AnimatedCounter';

export default function HeroSection() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section id="home" className="relative min-h-screen bg-white overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,107,53,0.15)_1px,transparent_0)] bg-[length:24px_24px]" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-screen py-20">
          
          {/* Left Content - NeuralHive Style */}
          <div className="space-y-12">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-dental-orange/10 border border-dental-orange/20"
            >
              <div className="w-2 h-2 bg-dental-orange rounded-full mr-3" />
              <span className="text-sm font-medium text-dental-orange">Trusted Dental Care</span>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
                <span className="block font-hindi text-dental-orange text-6xl md:text-8xl">एकदंताय</span>
                <span className="block text-gray-800">Your Smile</span>
                <span className="block bg-gradient-to-r from-dental-teal to-dental-orange bg-clip-text text-transparent">
                  Our Priority
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 max-w-lg leading-relaxed">
                Complete dental care for every smile. Experience pain-free treatment with modern equipment and expert dental specialists.
              </p>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-3 gap-8"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-dental-orange mb-2">
                  <AnimatedCounter end={500} suffix="+" />
                </div>
                <div className="text-sm text-gray-600">Happy Patients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-dental-teal mb-2">
                  <AnimatedCounter end={8} suffix="+" />
                </div>
                <div className="text-sm text-gray-600">Services</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-dental-orange mb-2">
                  <AnimatedCounter end={5} suffix="+" />
                </div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.a
                href="#contact"
                className="group relative bg-dental-orange text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Book Appointment</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              
              <motion.a
                href="tel:9587815285"
                className="group border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 hover:border-dental-orange hover:text-dental-orange transition-all duration-300"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Phone className="w-5 h-5" />
                <span>Call Now</span>
              </motion.a>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex items-center space-x-8 text-sm text-gray-500"
            >
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Pain-Free Treatment</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Modern Equipment</span>
              </div>
            </motion.div>
          </div>

          {/* Right Content - Visual Element */}
          <motion.div
            style={{ y, opacity }}
            className="relative flex justify-center items-center"
          >
            {/* Main Visual Container */}
            <div className="relative w-full max-w-lg">
              
              {/* Background Circles */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-dental-orange/20 to-dental-teal/20 rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              
              {/* Main Card */}
              <motion.div
                className="relative bg-white rounded-3xl shadow-2xl p-12 border border-gray-100"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                {/* Tooth Icon */}
                <motion.div
                  className="w-32 h-32 bg-gradient-to-br from-dental-orange to-dental-teal rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg"
                  animate={{
                    rotate: [0, 5, -5, 0],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <span className="text-white text-6xl">🦷</span>
                </motion.div>

                {/* Services Grid */}
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { icon: "🦷", label: "Root Canal", color: "bg-dental-teal" },
                    { icon: "🦷", label: "Implants", color: "bg-dental-orange" },
                    { icon: "🦷", label: "Braces", color: "bg-dental-lightBlue" },
                    { icon: "🦷", label: "Cosmetic", color: "bg-dental-teal" }
                  ].map((service, index) => (
                    <motion.div
                      key={index}
                      className="text-center group cursor-pointer"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                      whileHover={{ y: -5 }}
                    >
                      <motion.div
                        className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg group-hover:shadow-xl transition-shadow`}
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      >
                        <span className="text-white text-2xl">{service.icon}</span>
                      </motion.div>
                      <p className="text-sm font-medium text-gray-700 group-hover:text-dental-orange transition-colors">
                        {service.label}
                      </p>
                    </motion.div>
                  ))}
                </div>

                {/* Bottom Text */}
                <motion.div
                  className="text-center mt-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                >
                  <p className="text-gray-600 font-medium">
                    Complete dental care for every smile
                  </p>
                </motion.div>
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 bg-dental-orange rounded-full shadow-lg"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 180, 360]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-dental-teal rounded-full shadow-lg"
                animate={{
                  y: [0, 10, 0],
                  rotate: [360, 180, 0]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-3 bg-gray-400 rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

