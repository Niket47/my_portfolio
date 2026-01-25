export interface Project {
  title: string;
  description: string;
  technologies: string[];
  github: string;
  live: string;
  image: string;
  isLogo?: boolean;
  timeframe?: string;
  slug: string;
}

export const allProjects: Project[] = [
  {
    title: 'IntelliPaat',
    description: 'Restructured the app by upgrading to the latest React Native version, updating Android API levels, fixing major bugs, and improving code quality. Improved app launch speed by ~20% through code clean-up and dependency optimization, reduced crashes, enhanced load time, and boosted overall performance. Online education platform with 50k+ downloads.',
    technologies: ['React Native', 'Android', 'Performance Optimization'],
    github: '#',
    live: 'https://play.google.com/store/apps/details?id=com.intellipaat',
    image: '/img/projects/Intellipaat/logo.png',
    isLogo: true,
    timeframe: 'Jul 2025 - Present',
    slug: 'intellipaat',
  },
  {
    title: 'Flockify',
    description: 'Built a location-based social platform connecting communities with real-time audio/video calls and interactive communication via Firebase and Agora SDK.',
    technologies: ['Expo', 'Firebase', 'Agora SDK', 'OpenStreetMap', 'Axios'],
    github: '#',
    live: '#',
    image: '/img/projects/refenext/logo.png',
    isLogo: true,
    timeframe: '2024',
    slug: 'flockify',
  },
  {
    title: 'COR',
    description: 'Built a construction management app with a paperless workflow using AWS SDK and DigitalOcean Spaces. Technology used - RNFS, AWS SDK, Vision Camera, Document Picker, MMKV, Signature Canvas, Zustand, WebView, Axios.',
    technologies: ['React Native', 'AWS SDK', 'DigitalOcean Spaces', 'Zustand', 'Vision Camera'],
    github: '#',
    live: '#',
    image: '/img/projects/refenext/logo.png',
    isLogo: true,
    timeframe: 'Nov 2024 - Jul 2025',
    slug: 'cor',
  },
  {
    title: 'BGMI UC Challenge – Earn UC',
    description: 'A dynamic app with 35k+ downloads, offering daily quizzes and UC rewards for BGMI fans—using Supabase for reliable user data storage.',
    technologies: ['React Native', 'Supabase', 'Quiz App'],
    github: '#',
    live: '#',
    image: '/img/projects/refenext/logo.png',
    isLogo: true,
    timeframe: '2024',
    slug: 'bgmi-uc-challenge',
  },
  {
    title: 'Habit-Builder',
    description: 'Independently drove Habit-Builder project from scratch to deployment. Translated complex wireframes into stable cross-platform application.',
    technologies: ['React Native', 'Supabase', 'REST API'],
    github: '#',
    live: '#',
    image: '/img/projects/refenext/logo.png',
    isLogo: true,
    timeframe: 'Nov 2024 - Jul 2025',
    slug: 'habit-builder',
  },
  {
    title: 'AutoTrak',
    description: 'Independently drove AutoTrak project from scratch to deployment. Built with React Native, leveraging Supabase and REST APIs.',
    technologies: ['React Native', 'Supabase', 'REST API'],
    github: '#',
    live: '#',
    image: '/img/projects/refenext/logo.png',
    isLogo: true,
    timeframe: 'Nov 2024 - Jul 2025',
    slug: 'autotrak',
  },
];
