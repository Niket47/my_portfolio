'use client';

import { Award, GraduationCap } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-32 px-6 bg-black/[0.02]">
      <div className="container mx-auto max-w-4xl lg:max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 sm:mb-24"
        >
          <p className="text-black/40 mb-3 font-mono uppercase tracking-[0.3em] text-xs">Background</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-black font-sans tracking-tight">About Me</h2>
        </motion.div>

        <div className="flex flex-col md:flex-row items-start justify-center gap-12 md:gap-20 mb-20">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-shrink-0 mx-auto md:mx-0"
          >
            <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px] rounded-3xl overflow-hidden border border-black/10 relative shadow-[0_20px_50px_rgba(0,0,0,0.05)]">
              <Image
                src="/img/meimage.jpeg"
                alt="Niket Dadhaniya"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 256px, (max-width: 768px) 288px, (max-width: 1024px) 320px, 400px"
              />
            </div>
          </motion.div>

          {/* Cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6 flex-1 max-w-md w-full"
          >
            <div className="border border-black/10 bg-white rounded-3xl p-8 hover:border-black transition-colors">
              <div className="w-12 h-12 bg-black text-white rounded-xl flex items-center justify-center mb-6">
                <Award size={24} />
              </div>
              <h3 className="text-xl font-bold text-black mb-2 font-sans">Experience</h3>
              <p className="text-black/60 font-mono text-sm">3+ years</p>
              <p className="text-black/80 text-sm">React Native Development</p>
            </div>

            <div className="border border-black/10 bg-white rounded-3xl p-8 hover:border-black transition-colors">
              <div className="w-12 h-12 bg-black text-white rounded-xl flex items-center justify-center mb-6">
                <GraduationCap size={24} />
              </div>
              <h3 className="text-xl font-bold text-black mb-2 font-sans">Education</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-black/60 font-mono text-[10px] uppercase tracking-widest">B.E.</p>
                  <p className="text-black/80 text-sm font-bold">Mahavir swami college of Eng and tech - Surat, Gujarat</p>
                  <p className="text-black/60 font-mono text-xs">Apr-2019 | CGPA: 6.65</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto space-y-8"
        >
          <p className="text-black/70 text-lg sm:text-xl leading-relaxed font-mono">
            I'm a <span className="text-black font-bold">React Native Developer</span> with expertise in building cross-platform mobile applications.
            I specialize in managing dual-flow apps, native module development, and integrating real-time features using Firebase, Supabase, and REST API integration.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
