'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Tilt from 'react-parallax-tilt';
import { Award, GraduationCap, User, Calendar, Clock, MapPin, Star, Heart } from 'lucide-react';
import AnimatedCounter from './AnimatedCounter';

export default function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const achievements = [
    {
      icon: Award,
      title: "BDS Qualified",
      description: "Bachelor of Dental Surgery from recognized institution",
      color: "bg-dental-orange"
    },
    {
      icon: GraduationCap,
      title: "Registered Practitioner",
      description: "Registered with Dental Council of India",
      color: "bg-dental-teal"
    },
    {
      icon: User,
      title: "Experienced Professional",
      description: "Years of experience in comprehensive dental care",
      color: "bg-dental-lightBlue"
    },
    {
      icon: Calendar,
      title: "Regular Practice",
      description: "Consistent availability for patient care",
      color: "bg-dental-orange"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
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
    <section id="about" className="py-20 bg-gradient-to-br from-dental-cream via-white to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-dental-orange opacity-5 rounded-full"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-dental-teal opacity-5 rounded-full"
          animate={{
            scale: [1.3, 1, 1.3],
            rotate: [360, 180, 0]
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left Content - Doctor Info */}
          <div className="space-y-8">
            <motion.div variants={itemVariants} className="text-center lg:text-left">
              <motion.h2 
                className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-dental-teal to-dental-orange bg-clip-text text-transparent mb-6"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                Meet Our Doctor
              </motion.h2>
              <motion.p 
                className="text-xl text-dental-darkGray mb-8"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Expert dental care from a qualified professional
              </motion.p>
            </motion.div>

            {/* Doctor Card */}
            <motion.div variants={itemVariants}>
              <Tilt
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                perspective={1000}
                scale={1.02}
                transitionSpeed={1000}
              >
                <motion.div
                  className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-10 border border-gray-100 relative overflow-hidden"
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Floating Elements */}
                  <motion.div
                    className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    animate={{
                      rotate: [0, 360],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <Star className="w-6 h-6 text-dental-orange fill-current" />
                  </motion.div>

                  <div className="flex items-center space-x-8 mb-8">
                    <motion.div 
                      className="w-24 h-24 bg-gradient-to-br from-dental-orange to-dental-teal rounded-full flex items-center justify-center shadow-xl"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <User className="w-12 h-12 text-white" />
                    </motion.div>
                    <div>
                      <motion.h3 
                        className="text-3xl font-bold text-dental-darkGray"
                        whileHover={{ color: "#FF6B35" }}
                        transition={{ duration: 0.3 }}
                      >
                        Dr. Divya Bharti
                      </motion.h3>
                      <motion.p 
                        className="text-xl text-dental-orange font-semibold"
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                      >
                        BDS (Dental Surgeon)
                      </motion.p>
                      <motion.p 
                        className="text-sm text-gray-600"
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ duration: 0.6, delay: 0.7 }}
                      >
                        Reg No. A-8956
                      </motion.p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <motion.p 
                      className="text-gray-700 leading-relaxed text-lg"
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.6, delay: 0.9 }}
                    >
                      Dr. Divya Bharti is a qualified Dental Surgeon with extensive experience 
                      in providing comprehensive dental care. She specializes in pain-free 
                      treatments using modern equipment and techniques.
                    </motion.p>
                    
                    <motion.div
                      className="bg-gradient-to-r from-dental-orange/10 to-dental-teal/10 rounded-2xl p-6"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.6, delay: 1.1 }}
                    >
                      <h4 className="font-bold text-dental-darkGray mb-4 text-lg">Specializations:</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {["Root Canal Treatment", "Dental Implants", "Orthodontics & Braces", "Cosmetic Dentistry", "Oral Surgery"].map((specialization, index) => (
                          <motion.div
                            key={index}
                            className="flex items-center space-x-2"
                            initial={{ opacity: 0, x: -20 }}
                            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                            transition={{ duration: 0.4, delay: 1.3 + index * 0.1 }}
                          >
                            <motion.div
                              whileHover={{ scale: 1.2, rotate: 180 }}
                              transition={{ duration: 0.3 }}
                            >
                              <Heart className="w-4 h-4 text-dental-orange" />
                            </motion.div>
                            <span className="text-sm text-gray-700">{specialization}</span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </Tilt>
            </motion.div>

            {/* Achievements Grid */}
            <motion.div 
              variants={containerVariants}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {achievements.map((achievement, index) => (
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
                      className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-100 h-full"
                      whileHover={{ y: -5, scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="flex items-center space-x-4">
                        <motion.div
                          className={`w-12 h-12 ${achievement.color} rounded-full flex items-center justify-center shadow-lg`}
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.6 }}
                        >
                          <achievement.icon className="w-6 h-6 text-white" />
                        </motion.div>
                        <div>
                          <h4 className="font-bold text-dental-darkGray text-lg group-hover:text-dental-orange transition-colors">
                            {achievement.title}
                          </h4>
                          <p className="text-sm text-gray-600 leading-relaxed">
                            {achievement.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </Tilt>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Content - Clinic Info & Timings */}
          <div className="space-y-8">
            {/* Clinic Information */}
            <motion.div variants={itemVariants}>
              <Tilt
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                perspective={1000}
                scale={1.02}
                transitionSpeed={1000}
              >
                <motion.div
                  className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-10 border border-gray-100 relative overflow-hidden"
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.h3 
                    className="text-3xl font-bold text-dental-darkGray mb-8 text-center"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    Clinic Information
                  </motion.h3>
                  
                  <div className="space-y-8">
                    <motion.div 
                      className="flex items-start space-x-6"
                      initial={{ opacity: 0, x: -30 }}
                      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                    >
                      <motion.div 
                        className="w-16 h-16 bg-gradient-to-br from-dental-orange to-dental-teal rounded-full flex items-center justify-center flex-shrink-0 shadow-lg"
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      >
                        <span className="text-white font-bold text-2xl">ए</span>
                      </motion.div>
                      <div>
                        <motion.h4 
                          className="font-bold text-dental-darkGray text-2xl font-hindi mb-2"
                          whileHover={{ color: "#FF6B35" }}
                          transition={{ duration: 0.3 }}
                        >
                          एकदंताय
                        </motion.h4>
                        <p className="text-gray-600 italic text-lg mb-3">Smile & Dental care</p>
                        <motion.p 
                          className="text-gray-700 leading-relaxed"
                          initial={{ opacity: 0 }}
                          animate={inView ? { opacity: 1 } : { opacity: 0 }}
                          transition={{ duration: 0.6, delay: 0.7 }}
                        >
                          Your Smile Our Priority! Complete dental care for every smile.
                        </motion.p>
                      </div>
                    </motion.div>

                    <motion.div 
                      className="border-t border-gray-200 pt-8"
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.6, delay: 0.9 }}
                    >
                      <h4 className="font-bold text-dental-darkGray mb-6 text-lg">Key Features:</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {[
                          { icon: "🦷", text: "Pain-Free Treatment", color: "bg-dental-lightBlue" },
                          { icon: "🦷", text: "Modern Equipment", color: "bg-dental-teal" },
                          { icon: "🦷", text: "Expert Specialists", color: "bg-dental-orange" },
                          { icon: "🦷", text: "Hygienic & Safe", color: "bg-dental-lightBlue" }
                        ].map((feature, index) => (
                          <motion.div
                            key={index}
                            className="flex items-center space-x-3"
                            initial={{ opacity: 0, x: -20 }}
                            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                            transition={{ duration: 0.4, delay: 1.1 + index * 0.1 }}
                            whileHover={{ x: 5, scale: 1.02 }}
                          >
                            <motion.div 
                              className={`w-8 h-8 ${feature.color} rounded-full flex items-center justify-center shadow-md`}
                              whileHover={{ rotate: 360 }}
                              transition={{ duration: 0.6 }}
                            >
                              <span className="text-white text-sm">{feature.icon}</span>
                            </motion.div>
                            <span className="text-gray-700 font-medium">{feature.text}</span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </Tilt>
            </motion.div>

            {/* OPD Timings */}
            <motion.div variants={itemVariants}>
              <Tilt
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                perspective={1000}
                scale={1.02}
                transitionSpeed={1000}
              >
                <motion.div
                  className="bg-gradient-to-br from-dental-teal to-dental-orange rounded-3xl shadow-2xl p-10 text-white relative overflow-hidden"
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Animated Background Elements */}
                  <motion.div
                    className="absolute top-4 right-4 w-8 h-8 border-2 border-white/30 rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  />
                  <motion.div
                    className="absolute bottom-4 left-4 w-6 h-6 border-2 border-white/30 rounded-full"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  />

                  <motion.h3 
                    className="text-3xl font-bold mb-8 text-center"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    OPD Timings
                  </motion.h3>
                  
                  <div className="space-y-6">
                    <motion.div 
                      className="flex items-center space-x-6"
                      initial={{ opacity: 0, x: -30 }}
                      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                    >
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Clock className="w-8 h-8 text-dental-orange" />
                      </motion.div>
                      <div>
                        <h4 className="font-bold text-xl">Regular Hours</h4>
                        <p className="text-lg opacity-90">10:30am - 6:00pm</p>
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      className="border-t border-dental-orange/30 pt-6"
                      initial={{ opacity: 0, x: -30 }}
                      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                      transition={{ duration: 0.6, delay: 0.7 }}
                    >
                      <div className="flex items-center space-x-6">
                        <motion.div
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.6 }}
                        >
                          <Calendar className="w-8 h-8 text-dental-orange" />
                        </motion.div>
                        <div>
                          <h4 className="font-bold text-xl">Monday & Thursday</h4>
                          <p className="text-lg opacity-90">Barwada visiting: 10:30am - 2:30pm</p>
                        </div>
                      </div>
                    </motion.div>

                    <motion.div
                      className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 mt-8"
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.6, delay: 0.9 }}
                    >
                      <div className="flex items-start space-x-4">
                        <motion.div
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.6 }}
                        >
                          <MapPin className="w-6 h-6 text-dental-orange" />
                        </motion.div>
                        <div>
                          <p className="font-bold text-lg mb-2">Location:</p>
                          <p className="text-sm opacity-90 leading-relaxed">
                            8 जनता धर्मशाला, महिला थाने के पास<br />
                            सवाई माधोपुर (राजस्थान)
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </Tilt>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}