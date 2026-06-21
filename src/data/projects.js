// Projects are rendered in this exact order:
//   1–4  : from the primary (TechStalwarts) resume
//   5–10 : from the earlier project portfolio resume
// Each `accent` tints the card's top bar — purely cosmetic.

export const projects = [
  // ---------------- Resume 1 (4 projects) ----------------
  {
    name: 'EVJoints',
    subtitle: 'EV Charging Station Finder App',
    type: 'Mobile · Android Auto',
    accent: '#4338CA',
    tech: [
      'React Native',
      'TypeScript',
      'Redux Toolkit',
      'RTK Query',
      'Zustand',
      'Google Maps SDK',
      'Android Auto',
    ],
    points: [
      'Built a cross-platform EV station finder using Google Maps SDK for real-time station discovery and Android Auto in-car navigation via a Kotlin CarScreen.',
      'Optimized the arm64-v8a build pipeline for 75% faster builds and a 30MB APK reduction, and enforced HTTPS-only security in production.',
    ],
  },
  {
    name: 'Inxits',
    subtitle: 'Event & Invitation Management Platform',
    type: 'Mobile',
    accent: '#6366F1',
    tech: ['React Native', 'TypeScript', 'Redux Toolkit', 'RTK Query', 'Firebase Auth', 'Firestore'],
    points: [
      'Engineered event creation, configuration, and participant invitation workflows backed by Firebase Auth.',
      'Used real-time Firestore sync for seamless, instant onboarding across devices.',
    ],
  },
  {
    name: 'The Radius App',
    subtitle: 'Real-Time Workforce Coordination',
    type: 'iOS · Android',
    accent: '#06B6D4',
    tech: [
      'React Native 0.81',
      'Expo 54',
      'TypeScript',
      'Expo Router',
      'Redux Toolkit',
      'Firebase',
      'Socket.io',
      'OneSignal',
      'EAS',
    ],
    points: [
      'Shipped a production iOS & Android app coordinating 100+ field staff with GPS geofencing check-in/out and live event tracking.',
      'Developed 1:1 and group chat with typing indicators, read receipts, and offline-first Firestore persistence.',
      'Configured EAS multi-environment CI/CD and integrated OneSignal push notifications with deep-link routing.',
    ],
  },
  {
    name: 'Radius Admin Portal',
    subtitle: 'Web-Based Workforce Management Dashboard',
    type: 'Web',
    accent: '#0EA5A4',
    tech: ['React.js', 'TypeScript', 'Material UI (MUI)', 'Redux Toolkit', 'RTK Query', 'REST APIs'],
    points: [
      'Developed a responsive React.js dashboard for event configuration, staff management, and invitation workflows.',
      'Implemented real-time data sync and role-based access control across the portal.',
    ],
  },

  // ---------------- Resume 2 (6 projects) ----------------
  {
    name: 'Javis Fund Manager Portal',
    subtitle: 'Fund Management Web Portal',
    type: 'Web',
    accent: '#7C3AED',
    tech: ['React', 'Material UI', 'Redux', 'Redux Saga', 'JavaScript', 'SASS'],
    points: [
      'Developed new modules using a modern React architecture and reusable, scalable components.',
      'Fixed frontend bugs to improve UI stability and responsiveness.',
      'Ensured code quality by following React and JavaScript best practices.',
    ],
  },
  {
    name: 'Norminc',
    subtitle: 'Client: Magenta Group, Mumbai',
    type: 'Web · Maps',
    accent: '#4338CA',
    tech: ['React', 'React Leaflet', 'styled-components', 'JavaScript', 'SASS'],
    points: [
      'Built responsive UI components with React and styled-components.',
      'Implemented interactive maps using React Leaflet for real-time location tracking, with custom controls, markers, and dynamic data visualization.',
      'Delivered pixel-perfect UI across multiple screen sizes and devices.',
    ],
  },
  {
    name: 'Portfolio Health Check',
    subtitle: 'Client: Javis, Mumbai',
    type: 'Web · Fintech',
    accent: '#6366F1',
    tech: ['React', 'Material UI', 'Redux Toolkit', 'RTK Query'],
    points: [
      'Developed UI modules for portfolio health analysis and stock performance visualization.',
      'Managed application state with Redux Toolkit for efficient data handling.',
      'Integrated APIs to surface real-time portfolio insights.',
    ],
  },
  {
    name: 'Magic Bus',
    subtitle: 'Responsive Web Application',
    type: 'Web',
    accent: '#06B6D4',
    tech: ['React', 'JavaScript', 'RTK Query', 'SASS'],
    points: [
      'Developed responsive, reusable UI components in React.',
      'Performed module testing for smooth, bug-free performance.',
      'Integrated APIs and coordinated with backend teams to fetch dynamic data.',
    ],
  },
  {
    name: 'Fundsup',
    subtitle: 'Stock Management Platform',
    type: 'Web · Fintech',
    accent: '#0EA5A4',
    tech: ['React', 'React Leaflet', 'RTK Query', 'JavaScript', 'SASS'],
    points: [
      'Built UI components for a stock management platform.',
      'Designed a real-time notification system for alerts and updates.',
      'Fixed bugs in the stock history module to improve data accuracy, and integrated APIs for real-time stock visualization.',
    ],
  },
  {
    name: 'V5 Global',
    subtitle: 'Web Application',
    type: 'Web',
    accent: '#7C3AED',
    tech: ['React', 'JavaScript', 'HTML5', 'SASS'],
    points: [
      'Enhanced application security by migrating the system to HTTPS.',
      'Implemented branding updates, including new logo integration.',
      'Resolved UI bugs and maintained the local development environment for efficient testing.',
    ],
  },
]
