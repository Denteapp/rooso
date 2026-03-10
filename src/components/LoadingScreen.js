'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const messages = [
  { text: 'Roofing Excellence', subtitle: 'Quality you can trust' },
  { text: 'Building Your Dreams', subtitle: 'Professional construction services' },
  { text: 'Commercial Solutions', subtitle: 'Your project, our expertise' }
];

export default function LoadingScreen({ isLoading }) {
  const [currentMessage, setCurrentMessage] = useState(0);

  useEffect(() => {
    if (!isLoading) return;

    const interval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % messages.length);
    }, 800); // Cambiar mensaje cada 800ms

    return () => clearInterval(interval);
  }, [isLoading]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#010a03]"
        >
          <div className="text-center">
            {/* Logo */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <Image
                src="/logo2.png"
                alt="ROOSO"
                width={280}
                height={180}
                className="w-56 sm:w-72 h-auto mx-auto"
                priority
              />
            </motion.div>

            {/* Mensajes rotativos */}
            <div className="h-24 relative overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentMessage}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 flex flex-col items-center justify-center"
                >
                  <p className="text-2xl font-semibold text-white mb-2">
                    {messages[currentMessage].text}
                  </p>
                  <p className="text-sm text-gray-300">
                    {messages[currentMessage].subtitle}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Barra de progreso animada */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 2, ease: 'easeInOut' }}
              className="mt-8 h-1 bg-green-500 rounded-full max-w-xs mx-auto"
            />

            {/* Puntos de carga */}
            <div className="flex justify-center gap-2 mt-6">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 1, 0.3]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.2
                  }}
                  className="w-2 h-2 bg-white rounded-full"
                />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
