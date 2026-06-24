// Central place to edit your details — change anything here and it
// updates across the whole site.

export const profile = {
  name: 'Narin Mandrawlia',
  role: 'Frontend Software Engineer',
  tagline:
    'Frontend Software Engineer with 2.5+ years building production-grade web and mobile apps in React.js, React Native, and TypeScript.',
  summary:
    'I build scalable, high-performance web and mobile applications with a focus on clean component architecture, real-time systems, and polished, responsive UI. I have shipped cross-platform apps across EV technology, workforce management, and fintech — owning the frontend lifecycle from UI development and state management through REST/Firebase integration and CI/CD release builds. I enjoy working in Agile teams and collaborating closely with backend and design.',
  location: 'Mumbai, India',
  email: 'narinmandrawlia143@gmail.com',
  phone: '+91 75064 94396',
  linkedin: 'https://linkedin.com/in/narin-mandrawlia',
  github: 'https://github.com/Narin19',
  // Drop your resume PDF into the /public folder and point this here,
  // e.g. '/Narin_Mandrawlia_Resume.pdf'. Leave null to hide the button.
  resumeUrl: '/Narin_Mandrawlia_Resume.pdf',
  portfolioUrl: 'https://narin-profolio.vercel.app',
}

export const stats = [
  { value: '2.5+', label: 'Years experience' },
  { value: '10', label: 'Projects shipped' },
  { value: '1,000+', label: 'Users served' },
  { value: '2', label: 'Platforms (Web · Mobile)' },
]

export const skills = [
  {
    group: 'Languages',
    items: [
      { label: 'JavaScript (ES6+)', icon: 'SiJavascript' },
      { label: 'TypeScript', icon: 'SiTypescript' },
      { label: 'HTML5', icon: 'SiHtml5' },
      { label: 'CSS3', icon: 'SiCss3' },
      { label: 'JSX', icon: 'SiReact' },
    ],
  },
  {
    group: 'Frontend',
    items: [
      { label: 'React.js', icon: 'SiReact' },
      { label: 'React Native', icon: 'SiReact' },
      { label: 'Material UI (MUI)', icon: 'SiMui' },
      { label: 'Expo Router', icon: 'SiExpo' },
      { label: 'React Leaflet', icon: 'SiLeaflet' },
      { label: 'Responsive Design', icon: null },
    ],
  },
  {
    group: 'State Management',
    items: [
      { label: 'Redux Toolkit', icon: 'SiRedux' },
      { label: 'RTK Query', icon: 'SiRedux' },
      { label: 'Redux Saga', icon: 'SiRedux' },
      { label: 'Zustand', icon: null },
      { label: 'Redux Persist', icon: 'SiRedux' },
      { label: 'Context API', icon: 'SiReact' },
    ],
  },
  {
    group: 'Mobile & Real-Time',
    items: [
      { label: 'Expo', icon: 'SiExpo' },
      { label: 'EAS Build', icon: 'SiExpo' },
      { label: 'CI/CD', icon: 'SiGithubactions' },
      { label: 'Firebase', icon: 'SiFirebase' },
      { label: 'Socket.io', icon: 'SiSocketdotio' },
      { label: 'OneSignal', icon: null },
      { label: 'Google Maps SDK', icon: 'SiGooglemaps' },
      { label: 'Geofencing', icon: null },
    ],
  },
  {
    group: 'Backend & APIs',
    items: [
      { label: 'REST APIs', icon: null },
      { label: 'Node.js', icon: 'SiNodedotjs' },
      { label: 'Axios', icon: 'SiAxios' },
      { label: 'JWT Auth', icon: null },
      { label: 'React Hook Form', icon: 'SiReacthookform' },
    ],
  },
  {
    group: 'Reporting & Data',
    items: [
      { label: 'jsPDF', icon: null },
      { label: 'html2canvas', icon: null },
      { label: 'XLSX', icon: null },
      { label: 'Highcharts', icon: 'SiHighcharts' },
      { label: 'MUI X Data Grid', icon: 'SiMui' },
    ],
  },
  {
    group: 'Tools & Quality',
    items: [
      { label: 'Git', icon: 'SiGit' },
      { label: 'GitHub', icon: 'SiGithub' },
      { label: 'Jest', icon: 'SiJest' },
      { label: 'ESLint', icon: 'SiEslint' },
      { label: 'Postman', icon: 'SiPostman' },
      { label: 'Figma', icon: 'SiFigma' },
      { label: 'JIRA', icon: 'SiJira' },
      { label: 'Agile/Scrum', icon: null },
      { label: 'Vite', icon: 'SiVite' },
    ],
  },
]
