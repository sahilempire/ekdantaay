'use client';

import { motion } from 'framer-motion';

export default function FloatingTooth() {
  return (
    <div className="relative w-80 h-80 mx-auto">
      {/* Main Tooth */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <motion.div
          className="w-64 h-80 bg-gradient-to-br from-white via-blue-50 to-orange-50 rounded-full shadow-2xl flex items-center justify-center relative overflow-hidden"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          {/* Tooth Crown */}
          <div className="absolute top-8 w-32 h-32 bg-gradient-to-br from-white to-yellow-100 rounded-full shadow-lg flex items-center justify-center">
            <motion.div
              className="text-6xl"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              🦷
            </motion.div>
          </div>
          
          {/* Tooth Root */}
          <div className="absolute bottom-8 w-24 h-32 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full shadow-lg"></div>
          
          {/* Shine Effect */}
          <motion.div
            className="absolute top-4 left-4 w-8 h-8 bg-white rounded-full opacity-60"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.6, 0.8, 0.6]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      </motion.div>

      {/* Floating Elements */}
      <motion.div
        className="absolute -top-4 -left-4 w-16 h-16 bg-dental-teal rounded-full opacity-20"
        animate={{
          y: [0, -30, 0],
          x: [0, 10, 0],
          rotate: [0, 180, 360]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute -bottom-4 -right-4 w-20 h-20 bg-dental-orange rounded-full opacity-20"
        animate={{
          y: [0, 30, 0],
          x: [0, -15, 0],
          rotate: [0, -180, -360]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Swirling Ribbons */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-32 h-32 border-2 border-dental-teal border-opacity-30 rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: 'center' }}
      />
      
      <motion.div
        className="absolute top-1/2 left-1/2 w-40 h-40 border-2 border-dental-orange border-opacity-30 rounded-full"
        animate={{ rotate: -360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: 'center' }}
      />

      {/* Sparkle Effects */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-dental-orange rounded-full"
          style={{
            top: `${20 + (i * 10)}%`,
            left: `${15 + (i * 15)}%`,
          }}
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 2,
            delay: i * 0.3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
}
