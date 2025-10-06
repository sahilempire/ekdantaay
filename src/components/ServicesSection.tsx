'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar } from 'lucide-react';

export default function ServicesSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      title: "Aesthetic dentistry",
      icon: "🦷",
      description: "Transform your smile with beautiful, natural-looking results"
    },
    {
      title: "Orthodontics", 
      icon: "🦷",
      description: "Straighten teeth with modern aligners and braces"
    },
    {
      title: "Implantology",
      icon: "🦷", 
      description: "Permanent tooth replacement with dental implants"
    },
    {
      title: "Whitening",
      icon: "🦷",
      description: "Brighten your smile with professional whitening treatments"
    },
    {
      title: "Surgical dentistry",
      icon: "🦷",
      description: "Advanced surgical procedures for complex dental issues"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-wider text-blue-600 mb-4">SERVICES</p>
          <h2 className="text-4xl md:text-6xl font-bold text-blue-900 mb-6">
            Expert care for every smile
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We offer a full spectrum of treatments – each tailored to elevate your health, confidence, and natural beauty.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-12"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="group cursor-pointer"
            >
              <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl p-8 h-64 flex flex-col items-center justify-center text-center hover:shadow-2xl transition-all duration-500">
                {/* 3D Dental Icon */}
                <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">{service.icon}</span>
                </div>
                
                <h3 className="text-white font-bold text-lg mb-2">
                  {service.title}
                </h3>
                
                <p className="text-blue-200 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mb-16"
        >
          <motion.button
            className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold flex items-center space-x-3 mx-auto shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Calendar className="w-5 h-5" />
            <span>Schedule a visit</span>
          </motion.button>
        </motion.div>

        {/* Glassmorphism Overlay Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative"
        >
          <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              
              {/* Left - 3D Graphic */}
              <div className="flex justify-center">
                <div className="w-48 h-48 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center shadow-2xl">
                  <div className="w-36 h-36 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <span className="text-4xl">🦷</span>
                  </div>
                </div>
              </div>

              {/* Right - Content */}
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-blue-900 mb-4">
                  Smile restoration, built to last
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  Permanent, natural-looking tooth replacements. Using 3D-guided surgery, our implants restore full chewing function and aesthetics with precise fit, bone integration, and lifelike ceramic crowns.
                </p>

                <div className="flex items-center space-x-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                    <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-blue-200 rounded-full"></div>
                  </div>
                  <span className="text-sm text-gray-500">3D-guided precision</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}