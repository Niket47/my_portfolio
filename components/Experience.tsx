'use client';

import { motion } from 'framer-motion';

export default function Experience() {
  const technicalSkills = [
    'React Native CLI',
    'Expo',
    'Android Studio',
    'Xcode',
    'JavaScript',
    'TypeScript',
    'Firebase',
    'Supabase',
    'Inapp purchase and subscription',
    'RevenueCat',
    'iap',
    'REST API Integration',
    'Web socket',
    'Socket.io',
    'Redux Toolkit',
    'Zustand',
    'AWS SDK',
    'MMKV',
    'RNFS',
    'Vision Camera',
    'Google Ads',
    'Google ADX',
    'Google AdMob',
    'Firebase Analytics',
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
    'Google AdMob',
    'Firebase Analytics',
  ];

  const workExperience = [
    {
      company: 'Codetown Technologies',
      location: 'Remote',
      timeframe: 'November 25 - Present',
      role: 'React Native Developer',
      achievements: [
        'Managed 1 dual-flow apps, ensuring clear separation of features and smooth, reliable user experience.',
        'Upgraded 5+ apps to higher Android API levels, and fixed legacy library issues to boost performance and stability.',
        'Built a real-time public transit navigation app with live bus tracking, route planning, and map-based stop visualization using React Native.',
        'Developed POS printing functionality with Thermal Printer SDK, enabling invoice and receipt printing.',
      ],
    },
    {
      company: 'Unikwork LLP.',
      location: 'Surat, Gujarat',
      timeframe: 'May 2024 - November 2025',
      role: 'React Native Developer',
      achievements: [
        'Developing feature-rich React Native applications with a focus on performance, scalability, and clean architecture.',
        'Implementing real-time data handling, push notifications, and secure authentication using Firebase and Supabase.',
        'Integrated REST APIs, Firebase services (Authentication, Firestore, Analytics, Remote Config, Push Notifications), and Stripe payment gateway.',
      ],
    },
    {
      company: 'Vacuity Pvt Ltd',
      location: 'Surat, Gujarat',
      timeframe: 'November 2022 - April 2024',
      role: 'React Native Developer',
      achievements: [
        'Built and optimized cross-platform mobile applications using React Native, improving performance by ~30% with Redux Toolkit.',
        'Integrated Firebase (Auth, Firestore, Analytics, Push Notifications), Stripe payments, and deep linking.',
        'Released and maintained production apps via Google Play Console & App Store Connect, with API testing using Postman.',
      ],
    },
    {
      company: 'Tenacious Techies',
      location: 'Surat, Gujarat',
      timeframe: 'Dec 2021 - July 2022',
      role: 'Web designer',
      achievements: [
        'Initiated professional career as a Web Designer, mastering foundational frontend technologies including HTML5, CSS3, and JavaScript.',
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
