'use client';

import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';

export default function Education() {
  const education = [
    {
      degree: 'Bachelor of Computer Application (B.C.A)',
      university: 'Veer Narmad South Gujarat University (VNSGU)',
      location: 'Surat, Gujarat, India',
      timeframe: 'Apr 2022',
      status: 'Completed',
      cgpa: 'CGPA: 6.39',
    },
  ];

  return (
    <section id="education" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <p className="text-black/60 mb-2 text-xs sm:text-sm uppercase tracking-wider">My Academic Journey</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black font-sans">Education</h2>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={edu.university}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="border-2 border-black/20 rounded-2xl p-6 sm:p-8 relative overflow-hidden"
            >
              {/* Status Badge */}
              <div className="absolute top-3 right-3 sm:top-4 sm:right-4">
                <span
                  className={`px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs font-medium ${
                    edu.status === 'Current'
                      ? 'bg-black text-white'
                      : 'bg-black/10 text-black'
                  }`}
                >
                  {edu.status}
                </span>
              </div>

              {/* Icon */}
              <div className="flex items-start gap-3 sm:gap-4 md:gap-6 mb-4 pr-16 sm:pr-20">
                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-black/10 flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-black" />
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-black mb-2 font-sans break-words">
                    {edu.degree}
                  </h3>
                  <h4 className="text-base sm:text-lg md:text-xl font-semibold text-black/90 mb-3 font-sans break-words">
                    {edu.university}
                  </h4>

                  {/* Location and Timeframe */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-black/70 text-sm sm:text-base">
                      <MapPin className="w-4 h-4 flex-shrink-0" />
                      <span>{edu.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-black/70 text-sm sm:text-base">
                      <Calendar className="w-4 h-4 flex-shrink-0" />
                      <span>{edu.timeframe}</span>
                    </div>
                    {edu.cgpa && (
                      <div className="text-black/70 text-sm sm:text-base font-mono">
                        {edu.cgpa}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
