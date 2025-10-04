'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Tilt from 'react-parallax-tilt';
import { CheckCircle, Shield, Zap, Users, Heart, Star, ArrowRight } from 'lucide-react';

export default function ServicesSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const services = [
    {
      title: "Root Canal Treatment",
      description: "Advanced pain-free root canal procedures using modern techniques",
      icon: "🦷",
      color: "bg-dental-teal",
      gradient: "from-dental-teal to-teal-600"
    },
    {
      title: "Dental Implants",
      description: "Permanent tooth replacement solutions for a natural smile",
      icon: "🦷",
      color: "bg-dental-orange",
      gradient: "from-dental-orange to-orange-600"
    },
    {
      title: "Braces & Aligners",
      description: "Orthodontic treatments for perfect teeth alignment",
      icon: "🦷",
      color: "bg-dental-lightBlue",
      gradient: "from-dental-lightBlue to-blue-500"
    },
    {
      title: "Cosmetic Dentistry",
      description: "Teeth whitening, veneers, and smile makeovers",
      icon: "🦷",
      color: "bg-dental-teal",
      gradient: "from-dental-teal to-teal-600"
    },
    {
      title: "Oral Hygiene",
      description: "Professional cleaning and preventive care",
      icon: "🦷",
      color: "bg-dental-orange",
      gradient: "from-dental-orange to-orange-600"
    },
    {
      title: "Periodontology",
      description: "Gum disease treatment and periodontal care",
      icon: "🦷",
      color: "bg-dental-lightBlue",
      gradient: "from-dental-lightBlue to-blue-500"
    },
    {
      title: "Dental Surgery",
      description: "Oral surgery and wisdom tooth extraction",
      icon: "🦷",
      color: "bg-dental-teal",
      gradient: "from-dental-teal to-teal-600"
    },
    {
      title: "Emergency Care",
      description: "24/7 emergency dental services",
      icon: "🦷",
      color: "bg-dental-orange",
      gradient: "from-dental-orange to-orange-600"
    }
  ];

  const features = [
    {
      icon: Shield,
      title: "Pain-Free Treatment",
      description: "Advanced anesthesia and modern techniques ensure comfort",
      color: "text-dental-teal"
    },
    {
      icon: Zap,
      title: "Modern Equipment",
      description: "State-of-the-art dental technology for better results",
      color: "text-dental-orange"
    },
    {
      icon: Users,
      title: "Expert Specialists",
      description: "Experienced dental professionals with years of expertise",
      color: "text-dental-teal"
    },
    {
      icon: Heart,
      title: "Hygienic & Safe",
      description: "Sterilized equipment and strict hygiene protocols",
      color: "text-dental-orange"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-white via-blue-50 to-dental-cream relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-dental-orange opacity-10 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-40 h-40 bg-dental-teal opacity-10 rounded-full"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-block mb-6"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-dental-teal via-dental-orange to-dental-teal bg-clip-text text-transparent">
              DENTAL SERVICES
            </h2>
          </motion.div>
          <motion.p
            className="text-xl text-dental-darkGray max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Complete dental care for every smile. We offer comprehensive dental services 
            using modern equipment and expert care.
          </motion.p>
        </motion.div>

        {/* Key Features */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              <Tilt
                tiltMaxAngleX={15}
                tiltMaxAngleY={15}
                perspective={1000}
                scale={1.05}
                transitionSpeed={1000}
              >
                <motion.div
                  className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-100 h-full"
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="w-20 h-20 bg-gradient-to-br from-dental-lightBlue to-dental-teal rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <feature.icon className="w-10 h-10 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-dental-darkGray mb-4 group-hover:text-dental-orange transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              </Tilt>
            </motion.div>
          ))}
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              <Tilt
                tiltMaxAngleX={20}
                tiltMaxAngleY={20}
                perspective={1000}
                scale={1.02}
                transitionSpeed={1000}
              >
                <motion.div
                  className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100 h-full relative overflow-hidden"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Gradient Background on Hover */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                  />
                  
                  {/* Icon */}
                  <motion.div
                    className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <span className="text-white text-2xl">{service.icon}</span>
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-dental-darkGray mb-4 group-hover:text-dental-orange transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Status */}
                  <motion.div
                    className="flex items-center justify-between"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center text-dental-orange text-sm font-medium">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Available
                    </div>
                    <motion.div
                      className="flex items-center text-dental-teal text-sm font-medium"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </motion.div>
                  </motion.div>

                  {/* Floating Stars */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute"
                        style={{
                          top: `${i * 8}px`,
                          right: `${i * 8}px`,
                        }}
                        animate={{
                          scale: [0, 1, 0],
                          rotate: [0, 180, 360]
                        }}
                        transition={{
                          duration: 2,
                          delay: i * 0.2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        <Star className="w-3 h-3 text-dental-orange fill-current" />
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </Tilt>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <Tilt
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            perspective={1000}
            scale={1.02}
            transitionSpeed={1000}
          >
            <motion.div
              className="bg-gradient-to-r from-dental-orange via-dental-teal to-dental-orange rounded-2xl p-12 text-white shadow-2xl relative overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Animated Background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-dental-teal to-dental-orange opacity-0 hover:opacity-100 transition-opacity duration-500"
              />
              
              <div className="relative z-10">
                <motion.h3
                  className="text-3xl font-bold mb-6"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  Ready for Your Perfect Smile?
                </motion.h3>
                <motion.p
                  className="text-xl mb-8 opacity-90"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 0.9, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                >
                  Book your appointment today and experience pain-free dental care
                </motion.p>
                <motion.div
                  className="flex flex-col sm:flex-row gap-6 justify-center"
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 1.1 }}
                >
                  <motion.a
                    href="tel:9587815285"
                    className="bg-white text-dental-orange px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>Call Now: 9587815285</span>
                  </motion.a>
                  <motion.a
                    href="#contact"
                    className="border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-dental-orange transition-all duration-300 flex items-center justify-center space-x-2"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>Book Appointment</span>
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.div>
                  </motion.a>
                </motion.div>
              </div>
            </motion.div>
          </Tilt>
        </motion.div>
      </div>
    </section>
  );
}

