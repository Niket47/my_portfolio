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
  app_link: string;
}

export const allProjects: Project[] = [
  {
    title: 'CoC Gems - Earn Gems Reward',
    description: 'Clash of clans game fans play games like spin, mining, quiz, slot play, daily offerings rewards, get coins in reward and coins convert with gems.',
    technologies: ['React Native', 'Game Development', 'Rewards'],
    github: '#',
    live: '#',
    image: '/img/projects/cocgems/coc1.webp',
    isLogo: true,
    timeframe: '2024',
    slug: 'coc-gems',
    app_link: "https://play.google.com/store/apps/details?id=com.clashquiz.quiz&hl=en_IN"
  },
  {
    title: 'Free Fire Quiz',
    description: 'Free Fire game fans play games like spin, daily offerings rewards, get coins in reward and coins convert with diamonds.',
    technologies: ['Game Development', 'Admob', "Adx", 'Rewards'],
    github: '#',
    live: '#',
    image: '/img/projects/fff/fff.webp',
    isLogo: true,
    timeframe: '2024',
    slug: 'free-fire-quiz',
    app_link: "https://play.google.com/store/apps/details?id=com.freefire.quizz.apk&pcampaignid=web_share"
  },
  {
    title: 'Live 101 (Artiest Booking Project)',
    description: 'Project is based on an artists and singers\' booking system. Implement real-time chat functionality with typing indicators and message read receipts, providing a seamless communication experience.',
    technologies: ['React Native', 'Real-time Chat', 'Booking System'],
    github: '#',
    live: '#',
    image: '/img/projects/live101/live.jpg',
    isLogo: true,
    timeframe: '2023',
    slug: 'live-101',
    app_link: ""
  },
  {
    title: 'Formly (Create google forms)',
    description: 'Developed a high-performance React Native form builder with real-time Google Forms API integration for seamless CRUD operations and instant previews. Integrated RevenueCat for managed premium subscription templates. Enhanced UX with Firebase Push Notifications, Deep Linking for cross-platform sharing, and CSV/Excel data export functionality.',
    technologies: ['React Native', 'Google Forms API', 'RevenueCat', 'Firebase'],
    github: '#',
    live: '#',
    image: '/img/projects/Formly/Formly.webp',
    isLogo: true,
    timeframe: '2024',
    slug: 'formly',
    app_link: "https://play.google.com/store/apps/details?id=com.formly.formapp&hl=en_IN"
  },
  {
    title: 'Bill swipe (Voting U.S. government amendment)',
    description: 'Engineered an interactive React Native civic engagement app featuring a high-performance, gesture-driven Tinder-style swipe interface for bill voting.',
    technologies: ['React Native', 'Gestures', 'Civic Tech'],
    github: '#',
    live: '#',
    image: '/img/projects/live101/live.jpg',
    isLogo: true,
    timeframe: '2023',
    slug: 'bill-swipe',
    app_link: ""
  },
  {
    title: 'AP ASTraM (Traffic Management)',
    description: 'AP ASTraM (Andhra Pradesh Advanced Smart Traffic Management) is a robust React Native mobile application developed for the Andhra Pradesh government to streamline traffic management, enhance road safety, and digitize services for both citizens and law enforcement officers.',
    technologies: ['React Native'],
    github: '#',
    live: '#',
    image: '/img/projects/live101/live.jpg',
    isLogo: true,
    timeframe: '2023',
    slug: 'ap-astram',
    app_link: "https://play.google.com/store/apps/details?id=com.APASTraM&hl=en_IN"
  },
  {
    title: 'Bum App',
    description: 'A mobile application project.',
    technologies: ['React Native'],
    github: '#',
    live: '#',
    image: '/img/projects/live101/live.jpg',
    isLogo: true,
    timeframe: '2023',
    slug: 'bum-app',
    app_link: "https://play.google.com/store/apps/details?id=com.bumie.app&hl=en_IN"
  },
];
