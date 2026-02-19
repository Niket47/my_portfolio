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
  keyFeatures?: string[];
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
    app_link: "https://play.google.com/store/apps/details?id=com.clashquiz.quiz&hl=en_IN",
    keyFeatures: [
      'Developed a gamified quiz & rewards application featuring interactive earning mechanics (Spin Wheel, Scratch Cards, Slots, Treasure Hunt) to drive user engagement and retention.',
      'Built a real-time quiz platform with category-based gameplay and coin-driven entry/reward system.',
      'Implemented a referral & leaderboard system with unique invite codes and automated reward distribution.',
      'Integrated Google Mobile Ads (Banner, Native, Interstitial, Rewarded) while maintaining a balanced user experience.',
      'Designed an automated reward & cooldown engine supporting daily, hourly, and weekly claims.',
      'Engineered a high-performance state architecture using Redux Toolkit, Redux Persist, and MMKV for fast data access and persistence.',
      'Leveraged Firebase Firestore & Supabase for real-time synchronization and backend scalability.',
      'Enhanced UI/UX using Reanimated & Lottie to deliver fluid animations and modern interactions.',
      'Implemented push notifications & feature toggling via Notifee and Firebase Remote Config.',
      'Improved app stability with Firebase Crashlytics & Analytics integration.'
    ]
  },
  {
    title: 'Free Fire Quiz',
    description: 'Free Fire game fans play games like spin, daily offerings rewards, get coins in reward and coins convert with diamonds.',
    technologies: ['React Native', 'Redux Toolkit', 'Zustand', 'Supabase', 'Firebase', 'MMKV', 'Skia', 'Reanimated', 'AdMob'],
    github: '#',
    live: '#',
    image: '/img/projects/fff/fff.webp',
    isLogo: true,
    timeframe: '2024',
    slug: 'free-fire-quiz',
    app_link: "https://play.google.com/store/apps/details?id=com.freefire.quizz.apk&pcampaignid=web_share",
    keyFeatures: [
      'Built a high-performance gamified quiz application using React Native with a hybrid state architecture Zustand and MMKV for ultra-fast persistence.',
      'Engineered real-time leaderboards & reward systems using Supabase (PostgreSQL), enabling seamless cross-device sync and sub-second UI updates.',
      'Implemented a multi-format monetization system (App Open, Interstitial, Rewarded Ads) with User Messaging Platform (UMP) for GDPR / privacy compliance.',
      'Designed and optimized a hybrid state management architecture combining Redux Toolkit and Zustand, significantly improving performance and reducing unnecessary re-renders.',
      'Integrated MMKV (C++ based storage) to achieve near-instant data access compared to AsyncStorage-based solutions.',
      'Developed real-time backend synchronization with Supabase, powering live leaderboards, reward updates, and competitive gameplay features.',
      'Built a scalable reward & engagement engine featuring Daily Tasks, Lucky Spins, Scratch Cards, and Hourly Rewards to drive user retention.',
      'Integrated Google Mobile Ads SDK with multiple ad formats while preserving a smooth user experience.',
      'Implemented privacy & compliance mechanisms using Google UMP for consent management and regulatory alignment.',
      'Enhanced platform integrity via capture protection mechanisms, preventing screenshots / recordings during gameplay.',
      'Crafted a high-fidelity UI experience using Reanimated, Lottie animations, and Skia-powered visual effects.',
      'Improved production stability through Firebase Crashlytics & Analytics, enabling proactive issue detection and behavior insights.',
      'Optimized media & asset loading using Fast Image, improving rendering efficiency and reducing UI lag.'
    ]
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
    app_link: "",
    keyFeatures: [
      'Developed an artist & singer booking platform enabling users to discover, connect, and interact with performers.',
      'Implemented real-time chat functionality with instant messaging for seamless user–artist communication.',
      'Built advanced messaging features including typing indicators and message read receipts to enhance conversational UX.',
      'Designed a low-latency communication flow ensuring smooth real-time updates and message synchronization.',
      'Engineered scalable chat state management and message handling for consistent cross-device behavior.',
      'Improved engagement and usability by delivering a responsive and intuitive messaging experience.',
      'Focused on performance optimization and UI responsiveness for real-time interactions.'
    ]
  },
  {
    title: 'Formly (Create google forms)',
    description: 'Developed a high-performance React Native form builder with real-time Google Forms API integration for seamless CRUD operations and instant previews. Integrated RevenueCat for managed premium subscription templates. Enhanced UX with Firebase Push Notifications, Deep Linking for cross-platform sharing, and CSV/Excel data export functionality.',
    technologies: ['React Native', 'Google Forms API', 'RevenueCat', 'Firebase', 'Deep Linking'],
    github: '#',
    live: '#',
    image: '/img/projects/Formly/Formly.webp',
    isLogo: true,
    timeframe: '2024',
    slug: 'formly',
    app_link: "https://play.google.com/store/apps/details?id=com.formly.formapp&hl=en_IN",
    keyFeatures: [
      'Developed a high-performance form builder application enabling users to create and manage Google Forms directly from a mobile interface.',
      'Integrated Google Forms API to support seamless CRUD operations, real-time updates, and instant form previews.',
      'Implemented RevenueCat subscription management to deliver premium templates and paid feature access.',
      'Enhanced user engagement via Firebase Push Notifications for updates, reminders, and form activity alerts.',
      'Built deep linking & cross-platform sharing to allow direct navigation and effortless form distribution.',
      'Implemented CSV / Excel export functionality for structured data extraction and reporting workflows.',
      'Focused on performance optimization and responsive UI, ensuring smooth dynamic form rendering.',
      'Designed a scalable and reusable component architecture for dynamic fields and form configurations.'
    ]
  },
  {
    title: 'Bill swipe (Voting U.S. government amendment)',
    description: 'Engineered an interactive React Native civic engagement app featuring a high-performance, gesture-driven Tinder-style swipe interface for bill voting.',
    technologies: ['React Native', 'Reanimated', 'Gesture Handler'],
    github: '#',
    live: '#',
    image: '/img/projects/live101/live.jpg',
    isLogo: true,
    timeframe: '2023',
    slug: 'bill-swipe',
    app_link: "",
    keyFeatures: [
      'Engineered an interactive civic engagement application enabling users to vote on U.S. government bills through an intuitive mobile interface.',
      'Designed and implemented a Tinder-style swipe interaction system for rapid, gesture-driven decision making.',
      'Built a high-performance gesture-based UI ensuring smooth animations and responsive touch handling.',
      'Optimized user flows for fast engagement and low-friction participation, improving usability and session duration.',
      'Developed a scalable component architecture supporting dynamic bill data and voting states.',
      'Focused on mobile UX performance and animation fluidity using modern React Native patterns.'
    ]
  },
  {
    title: 'AP ASTraM (Traffic Management)',
    description: 'Architected and developed a high-performance React Native application for the Andhra Pradesh government, enabling real-time traffic monitoring, incident reporting, and citizen safety workflows.',
    technologies: ['React Native', 'Native Modules', 'MapmyIndia', 'Google Maps', 'Redux Toolkit', 'MMKV', 'i18next', 'Sentry', 'Firebase'],
    github: '#',
    live: '#',
    image: '/img/projects/live101/live.jpg',
    isLogo: true,
    timeframe: '2023',
    slug: 'ap-astram',
    app_link: "https://play.google.com/store/apps/details?id=com.APASTraM&hl=en_IN",
    keyFeatures: [
      'Native Location Tracking: Developed a custom Android Native Module for background location sharing using Foreground Services, ensuring persistent tracking even when the app is in the background or killed.',
      'Integrated Mappls (MapmyIndia) SDK and Google Maps to implement live map visualization, congestion overlays, and location-aware features.',
      'Designed and built a Field Traffic Violation Reporting (FTVR) system with image evidence capture.',
      'Developed an offline-first data architecture using Redux Toolkit, Redux Persist, and MMKV, ensuring reliability in low-connectivity environments.',
      'Developed digital documentation & PDF generation features for incident reports, challans, and receipts.',
      'Delivered a multilingual user experience using i18next, supporting regional languages for wider accessibility.',
      'Improved application stability and production monitoring by integrating Sentry and Firebase Crashlytics.'
    ]
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
