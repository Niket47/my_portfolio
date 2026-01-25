'use client';

import { motion } from 'framer-motion';

export default function Experience() {
  const technicalSkills = [
    'React Native CLI',
    'Expo',
    'JavaScript',
    'TypeScript',
    'Android Studio',
    'Xcode',
    'Firebase',
    'Supabase',
    'REST API',
    'Redux Toolkit',
    'Zustand',
    'AWS SDK',
    'DigitalOcean Spaces',
    'PostgreSQL',
    'MongoDB',
    'MMKV',
    'RNFS',
    'Vision Camera',
  ];

  const toolsSkills = [
    'Git',
    'Github Desktop',
    'Bitbucket',
    'Sourcetree',
    'Postman',
    'Google Play Console',
    'App Store Connect',
    'Google Ads',
    'Google ADX',
    'Google AdMob',
    'Firebase Analytics',
    'Agile',
  ];

  const workExperience = [
    {
      company: 'Codetown Technologies',
      location: 'Remote',
      timeframe: 'Jul 2025 - Present',
      role: 'React Native Developer',
      achievements: [
        'Managed 3 dual-flow apps, ensuring clear separation of features and smooth, reliable user experience.',
        'Built a compact Android location native module and socket-based features for real-time updates. Worked on 10+ projects, upgraded 5+ apps to higher Android API levels, and fixed legacy library issues to boost performance and stability.',
        'Led a major restructuring of the Intellipaat app—fixing outdated code, improving structure, enhancing overall performance and user experience.',
      ],
    },
    {
      company: 'Codonnier Solutions',
      location: 'Remote',
      timeframe: 'Nov 2024 - Jul 2025',
      role: 'Senior React Native Developer',
      achievements: [
        'Worked as a senior React Native developer, independently driving COR, Habit-Builder, and AutoTrak projects from scratch to deployment. Translated complex wireframes into stable cross-platform applications, leveraging Supabase, REST APIs, and DigitalOcean Spaces (AWS SDK) for secure media workflows.',
        'Handled 7+ client projects end-to-end, managing delivery, performance, and technical decisions. Strengthened client communication and ensured timely, high-quality releases across multiple projects.',
      ],
    },
    {
      company: 'Tagline Infotech LLP',
      location: 'Gujarat, India',
      timeframe: 'May 2024 - Oct 2024',
      role: 'React Native Developer',
      achievements: [
        'Improved overall code quality and performance by ~30% through optimized state management (Redux Toolkit, Zustand), contributed to 5+ production projects, and gained strong release experience using Google Play Console and App Store Connect, along with API testing and debugging using Postman.',
        'Mastered Google Ads and integrated Firebase (Auth, Firestore, Remote Config, Analytics, Push Notifications) to build scalable and real-time mobile features.',
      ],
    },
    {
      company: 'Artistry Solution',
      location: 'Gujarat, India',
      timeframe: 'May 2023 - Apr 2024',
      role: 'React Native Developer',
      achievements: [
        'Worked on my first React Native projects during a strong learning phase, contributing to 2 apps like FAX and Call Recording with OCR, PDF generation, and media handling features. Gained practical experience with Firebase, Redux, and FFMPEG while learning best practices from senior developers and improving early app stability and performance.',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 sm:py-32 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 sm:mb-24"
        >
          <p className="text-black/40 mb-3 font-mono uppercase tracking-[0.3em] text-xs">Journey</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-black font-sans tracking-tight">Experience</h2>
        </motion.div>

        {/* Skills Section - Compact Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12 sm:mb-16"
        >
          <div className="border border-black/10 rounded-3xl p-8 bg-white shadow-sm">
            <h3 className="text-xl sm:text-2xl font-bold text-black mb-8 text-center font-sans uppercase tracking-widest">Technical Arsenal</h3>
            <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {technicalSkills.map((skill) => (
                <div
                  key={skill}
                  className="text-center px-3 py-3 border border-black/5 rounded-xl bg-black/[0.02] hover:bg-black hover:text-white transition-all group"
                >
                  <span className="text-xs sm:text-sm font-mono font-medium break-words">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="border border-black/10 rounded-3xl p-8 bg-white shadow-sm mt-8">
            <h3 className="text-xl sm:text-2xl font-bold text-black mb-8 text-center font-sans uppercase tracking-widest">Tools & AI</h3>
            <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-3 md:grid-cols-6 gap-4">
              {toolsSkills.map((skill) => (
                <div
                  key={skill}
                  className="text-center px-3 py-3 border border-black/5 rounded-xl bg-black/[0.02] hover:bg-black hover:text-white transition-all group"
                >
                  <span className="text-xs sm:text-sm font-mono font-medium break-words">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Work Experience */}
        <div className="space-y-8">
          <motion.h3 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-bold text-black mb-12 text-center font-sans uppercase tracking-[0.2em]"
          >
            Work History
          </motion.h3>
          <div className="space-y-8">
            {workExperience.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="border border-black/10 rounded-[2rem] p-8 md:p-12 bg-white hover:border-black transition-colors"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-8 gap-4">
                  <div>
                    <h4 className="text-2xl sm:text-3xl font-bold text-black mb-2 font-sans tracking-tight">{exp.company}</h4>
                    <p className="text-black font-bold text-lg font-mono mb-1">{exp.role}</p>
                    <p className="text-black/40 font-mono text-sm uppercase tracking-widest">{exp.location}</p>
                  </div>
                  <div className="px-4 py-2 bg-black text-white rounded-full text-xs font-bold font-mono h-fit whitespace-nowrap self-start md:self-auto">
                    {exp.timeframe}
                  </div>
                </div>
                <ul className="space-y-4">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="text-black/70 flex items-start gap-4 text-sm sm:text-base leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-black mt-2 flex-shrink-0" />
                      <span className="font-mono">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
