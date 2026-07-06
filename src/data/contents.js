const contents = [
  {
    id: 1,
    title: "React Router DOM",
    category: "React",
    description: "Complete React Router tutorial",
    youtubeId: "Ul3y1LXxzdU"
  },
  {
    id: 2,
    title: "Axios API",
    category: "API",
    description: "Axios GET POST PUT DELETE",
    youtubeId: "LlvBzyy-558"
  },
  {
    id: 3,
    title: "Tailwind CSS",
    category: "CSS",
    description: "Tailwind Complete Course",
    youtubeId: "ft30zcMlFao"
  },
  {
    id: 4,
    title: "React Hook Form",
    category: "Forms",
    description: "Complete React Hook Form",
    youtubeId: "bU_eq8qyjic"
  },

  {
    id: 5,
    title: "Redux Toolkit Basics",
    category: "Redux",
    description: "Learn Redux Toolkit from scratch",
    youtubeId: "9zySeP5vH9c"
  },

  {
    id: 6,
    title: "Redux Toolkit CRUD",
    category: "Redux",
    description: "Complete CRUD application using RTK",
    youtubeId: "DOkSU3yg4vQ"
  },

  {
    id: 7,
    title: "Redux Toolkit Authentication",
    category: "Redux",
    description: "JWT Authentication with Redux Toolkit",
    youtubeId: "bk7McNUjWgw"
  },

  {
    id: 8,
    title: "React Context API",
    category: "React",
    description: "Global state using Context API",
    youtubeId: "HYKDUF8X3qI"
  },

  {
    id: 9,
    title: "React useEffect",
    category: "React Hooks",
    description: "Understanding useEffect hook",
    youtubeId: "0ZJgIjIuY7U"
  },

  {
    id: 10,
    title: "React useState",
    category: "React Hooks",
    description: "Learn useState from beginner level",
    youtubeId: "O6P86uwfdR0"
  },

  {
    id: 11,
    title: "React useRef",
    category: "React Hooks",
    description: "Master useRef hook",
    youtubeId: "t2ypzz6gJm0"
  },

  {
    id: 12,
    title: "React useMemo",
    category: "React Hooks",
    description: "Performance optimization with useMemo",
    youtubeId: "THL1OPn72vo"
  },

  {
    id: 13,
    title: "React useCallback",
    category: "React Hooks",
    description: "Optimize React with useCallback",
    youtubeId: "IL82CzlaCys"
  },

  {
    id: 14,
    title: "React Query Basics",
    category: "TanStack Query",
    description: "Server state management",
    youtubeId: "novnyCaa7To"
  },

  {
    id: 15,
    title: "React Query CRUD",
    category: "TanStack Query",
    description: "CRUD using React Query",
    youtubeId: "AAMBoENvfnE"
  },

  {
    id: 16,
    title: "React Toastify",
    category: "Notification",
    description: "Beautiful notifications",
    youtubeId: "NHlExjLI-d0"
  },

  {
    id: 17,
    title: "React Hot Toast",
    category: "Notification",
    description: "Modern toast notifications",
    youtubeId: "7L7MhxjI4PE"
  },

  {
    id: 18,
    title: "Firebase Authentication",
    category: "Firebase",
    description: "Login & Register with Firebase",
    youtubeId: "PKwu15ldZ7k"
  },

  {
    id: 19,
    title: "Firebase Firestore",
    category: "Firebase",
    description: "Cloud Firestore CRUD",
    youtubeId: "Tm7MAOm6OeY"
  },

  {
    id: 20,
    title: "Firebase Hosting",
    category: "Firebase",
    description: "Deploy React project",
    youtubeId: "LOeioOKUKI8"
  },

  {
    id: 21,
    title: "Node.js REST API",
    category: "Backend",
    description: "Build REST API using Express",
    youtubeId: "fgTGADljAeg"
  },

  {
    id: 22,
    title: "Express.js Crash Course",
    category: "Backend",
    description: "Express for beginners",
    youtubeId: "L72fhGm1tfE"
  },

  {
    id: 23,
    title: "MongoDB CRUD",
    category: "Database",
    description: "MongoDB Complete CRUD",
    youtubeId: "ExcRbA7fy_A"
  },

  {
    id: 24,
    title: "Mongoose Tutorial",
    category: "Database",
    description: "Learn Mongoose ODM",
    youtubeId: "DZBGEVgL2eE"
  },

  {
    id: 25,
    title: "JWT Authentication",
    category: "Authentication",
    description: "JWT Login System",
    youtubeId: "mbsmsi7l3r4"
  },

  {
    id: 26,
    title: "bcrypt Password Hashing",
    category: "Authentication",
    description: "Hash passwords securely",
    youtubeId: "O6cmuiTBZVs"
  },

  {
    id: 27,
    title: "Socket.io Chat App",
    category: "Realtime",
    description: "Realtime chat using Socket.io",
    youtubeId: "ZwFA3YMfkoc"
  },

  {
    id: 28,
    title: "Framer Motion",
    category: "Animation",
    description: "Modern React animations",
    youtubeId: "GOuwOI-WSkE"
  },

  {
    id: 29,
    title: "React Icons",
    category: "UI",
    description: "Using React Icons",
    youtubeId: "aor9hlcODUE"
  },

  {
    id: 30,
    title: "Vite React Project",
    category: "Vite",
    description: "Create React App with Vite",
    youtubeId: "89NJdbYTgJ8"
  },

  {
    id: 31,
    title: "Next.js App Router",
    category: "Next.js",
    description: "Next.js 15 App Router",
    youtubeId: "wm5gMKuwSYk"
  },

  {
    id: 32,
    title: "Next.js Authentication",
    category: "Next.js",
    description: "Authentication in Next.js",
    youtubeId: "fZPgBnL2x-Q"
  },

  {
    id: 33,
    title: "TypeScript Basics",
    category: "TypeScript",
    description: "TypeScript Complete Beginner",
    youtubeId: "30LWjhZzg50"
  },

  {
    id: 34,
    title: "JavaScript ES6",
    category: "JavaScript",
    description: "Modern JavaScript Features",
    youtubeId: "NCwa_xi0Uuc"
  },

  {
    id: 35,
    title: "CSS Grid",
    category: "CSS",
    description: "Responsive layouts with Grid",
    youtubeId: "9zBsdzdE4sM"
  },

  {
    id: 36,
    title: "Flexbox Complete Guide",
    category: "CSS",
    description: "Master CSS Flexbox",
    youtubeId: "JJSoEo8JSnc"
  },

  {
    id: 37,
    title: "Git & GitHub",
    category: "Git",
    description: "Complete Git tutorial",
    youtubeId: "RGOj5yH7evk"
  },

  {
    id: 38,
    title: "Deploy React to Vercel",
    category: "Deployment",
    description: "Deploy React in minutes",
    youtubeId: "hAuyNf0Uk-w"
  },

  {
    id: 39,
    title: "Deploy MERN App",
    category: "Deployment",
    description: "Full MERN deployment",
    youtubeId: "cVEOhgPziO8"
  },

  {
    id: 40,
    title: "Full MERN Stack Course",
    category: "MERN",
    description: "Complete MERN Stack Project",
    youtubeId: "7CqJlxBYj-M"
  },

  {
  id: 41,
  title: "React Login Form",
  category: "React",
  description: "Create beautiful login form using React",
  youtubeId: "8QgQKRcAUvM"
},

{
  id: 42,
  title: "React Registration Form",
  category: "React",
  description: "Registration page with validation",
  youtubeId: "Y-XW9m8qOis"
},

{
  id: 43,
  title: "React Dashboard UI",
  category: "React",
  description: "Modern admin dashboard",
  youtubeId: "pWd29MtFGJA"
},

{
  id: 44,
  title: "React CRUD Project",
  category: "React",
  description: "CRUD application using React",
  youtubeId: "SYv61aPSiOo"
},

{
  id: 45,
  title: "React Authentication",
  category: "React",
  description: "Authentication with JWT",
  youtubeId: "AcYF18oGn6Y"
},

{
  id: 46,
  title: "React Protected Routes",
  category: "React Router",
  description: "Private Route example",
  youtubeId: "pyfwQUc5Ssk"
},

{
  id: 47,
  title: "React Pagination",
  category: "React",
  description: "Pagination from API",
  youtubeId: "wAGIOCqS8tk"
},

{
  id: 48,
  title: "React Search Filter",
  category: "React",
  description: "Search and filter example",
  youtubeId: "xAqCEBFGdYk"
},

{
  id: 49,
  title: "React Modal",
  category: "React",
  description: "Reusable modal component",
  youtubeId: "9DwGahSqcEc"
},

{
  id: 50,
  title: "React Dark Mode",
  category: "React",
  description: "Dark / Light theme switcher",
  youtubeId: "Uz35Qiia84g"
},

{
  id: 51,
  title: "React Todo App",
  category: "React Project",
  description: "Complete Todo application",
  youtubeId: "9wiWzu_tRB0"
},

{
  id: 52,
  title: "React Weather App",
  category: "React Project",
  description: "Weather app using API",
  youtubeId: "UjeXpct3p7M"
},

{
  id: 53,
  title: "React Ecommerce UI",
  category: "React Project",
  description: "Responsive ecommerce design",
  youtubeId: "PsIA2w6eiPg"
},

{
  id: 54,
  title: "React Movie App",
  category: "React Project",
  description: "Movie database project",
  youtubeId: "4wF3uS6BY90"
},

{
  id: 55,
  title: "React Notes App",
  category: "React Project",
  description: "Notes application",
  youtubeId: "O2DAy4AkFo4"
},

{
  id: 56,
  title: "Next.js Blog Website",
  category: "Next.js",
  description: "Build a modern blog",
  youtubeId: "ahX4mVgM8AE"
},

{
  id: 57,
  title: "Next.js Ecommerce",
  category: "Next.js",
  description: "Ecommerce with App Router",
  youtubeId: "nxK_TCt2pKw"
},

{
  id: 58,
  title: "Next.js Server Components",
  category: "Next.js",
  description: "Understanding Server Components",
  youtubeId: "Nnr6w8vamUo"
},

{
  id: 59,
  title: "Next.js Dynamic Routes",
  category: "Next.js",
  description: "Dynamic routing tutorial",
  youtubeId: "k9g6aVLH3p4"
},

{
  id: 60,
  title: "Next.js Metadata API",
  category: "Next.js",
  description: "SEO with Metadata API",
  youtubeId: "OldUurB0Wx8"
},

{
  id: 61,
  title: "React Lazy Loading",
  category: "React",
  description: "Improve performance with lazy loading",
  youtubeId: "T5vK5QkJwL8"
},

{
  id: 62,
  title: "React Suspense",
  category: "React",
  description: "Loading UI using Suspense",
  youtubeId: "HPoC-k7Rxwo"
},

{
  id: 63,
  title: "React Custom Hooks",
  category: "React Hooks",
  description: "Create reusable custom hooks",
  youtubeId: "Jl4q2cccwf0"
},

{
  id: 64,
  title: "React useReducer",
  category: "React Hooks",
  description: "Manage complex state",
  youtubeId: "kK_Wqx3RnHk"
},

{
  id: 65,
  title: "React Portals",
  category: "React",
  description: "Create modals using portals",
  youtubeId: "LyLa7dU5tp8"
},

{
  id: 66,
  title: "React Error Boundary",
  category: "React",
  description: "Handle runtime errors",
  youtubeId: "b6tQ3B4q4u8"
},

{
  id: 67,
  title: "React Memo",
  category: "Optimization",
  description: "Optimize rendering",
  youtubeId: "JIQ0Dx-4peE"
},

{
  id: 68,
  title: "React Performance",
  category: "Optimization",
  description: "Performance optimization guide",
  youtubeId: "CUxH_rWSI1k"
},

{
  id: 69,
  title: "Redux Persist",
  category: "Redux",
  description: "Save Redux state",
  youtubeId: "0W6i5LYKCSI"
},

{
  id: 70,
  title: "Redux Toolkit Query",
  category: "Redux",
  description: "RTK Query Crash Course",
  youtubeId: "fIRg8rKk9_w"
},

{
  id: 71,
  title: "React Helmet",
  category: "SEO",
  description: "SEO in React",
  youtubeId: "0h2b4ftbZcU"
},

{
  id: 72,
  title: "React Loading Skeleton",
  category: "UI",
  description: "Skeleton loading UI",
  youtubeId: "m8GJ8J8L1tQ"
},

{
  id: 73,
  title: "Material UI",
  category: "UI Library",
  description: "Material UI Complete Guide",
  youtubeId: "vyJU9efvUtQ"
},

{
  id: 74,
  title: "Chakra UI",
  category: "UI Library",
  description: "Modern React UI",
  youtubeId: "jM0cM4M8jVw"
},

{
  id: 75,
  title: "Shadcn UI",
  category: "UI Library",
  description: "Build beautiful interfaces",
  youtubeId: "20Qb7pNMv-4"
},

{
  id: 76,
  title: "Bootstrap React",
  category: "Bootstrap",
  description: "React Bootstrap Tutorial",
  youtubeId: "1SnPKhCdlsU"
},

{
  id: 77,
  title: "SCSS Complete Guide",
  category: "CSS",
  description: "Learn SCSS",
  youtubeId: "Zz6eOVaaelI"
},

{
  id: 78,
  title: "Styled Components",
  category: "CSS",
  description: "CSS in JS",
  youtubeId: "02zO0hZmwnw"
},

{
  id: 79,
  title: "CSS Animation",
  category: "CSS",
  description: "Modern animations",
  youtubeId: "YszONjKpgg4"
},

{
  id: 80,
  title: "Responsive Website",
  category: "CSS",
  description: "Responsive web design",
  youtubeId: "3-2Pj5hxwrw"
},

{
  id: 81,
  title: "JavaScript DOM",
  category: "JavaScript",
  description: "Master DOM manipulation",
  youtubeId: "5fb2aPlgoys"
},

{
  id: 82,
  title: "JavaScript Fetch API",
  category: "JavaScript",
  description: "Working with APIs",
  youtubeId: "cuEtnrL9-H0"
},

{
  id: 83,
  title: "JavaScript Async Await",
  category: "JavaScript",
  description: "Async programming",
  youtubeId: "V_Kr9OSfDeU"
},

{
  id: 84,
  title: "JavaScript Promises",
  category: "JavaScript",
  description: "Understanding promises",
  youtubeId: "DHvZLI7Db8E"
},

{
  id: 85,
  title: "JavaScript Array Methods",
  category: "JavaScript",
  description: "map filter reduce",
  youtubeId: "R8rmfD9Y5-c"
},

{
  id: 86,
  title: "JavaScript Objects",
  category: "JavaScript",
  description: "Objects explained",
  youtubeId: "Bv_5Zv5c-Ts"
},

{
  id: 87,
  title: "Git Branches",
  category: "Git",
  description: "Working with branches",
  youtubeId: "e2IbNHi4uCI"
},

{
  id: 88,
  title: "Git Merge",
  category: "Git",
  description: "Merge and conflicts",
  youtubeId: "XX-Kct0PfFc"
},

{
  id: 89,
  title: "GitHub Pull Request",
  category: "GitHub",
  description: "Create Pull Requests",
  youtubeId: "rgbCcBNZcdQ"
},

{
  id: 90,
  title: "GitHub Actions",
  category: "GitHub",
  description: "CI/CD with GitHub",
  youtubeId: "R8_veQiYBjI"
},

{
  id: 91,
  title: "VS Code Extensions",
  category: "Tools",
  description: "Useful extensions",
  youtubeId: "ifTF3ags0XI"
},

{
  id: 92,
  title: "ESLint Setup",
  category: "Tools",
  description: "Code quality",
  youtubeId: "v4xMcYgV5Yc"
},

{
  id: 93,
  title: "Prettier Setup",
  category: "Tools",
  description: "Automatic formatting",
  youtubeId: "hkfBvpEfWdA"
},

{
  id: 94,
  title: "REST API Fundamentals",
  category: "API",
  description: "REST explained",
  youtubeId: "Q-BpqyOT3a8"
},

{
  id: 95,
  title: "Postman Tutorial",
  category: "API",
  description: "Testing APIs",
  youtubeId: "VywxIQ2ZXw4"
},

{
  id: 96,
  title: "JSON Server",
  category: "API",
  description: "Fake REST API",
  youtubeId: "1zkgdLZEdwM"
},

{
  id: 97,
  title: "React File Upload",
  category: "React",
  description: "Upload files",
  youtubeId: "b6Oe2puTdMQ"
},

{
  id: 98,
  title: "React Drag and Drop",
  category: "React",
  description: "Drag and Drop UI",
  youtubeId: "Q1PYQPK9TaM"
},

{
  id: 99,
  title: "React Infinite Scroll",
  category: "React",
  description: "Infinite scrolling list",
  youtubeId: "NZKUirTtxcg"
},

{
  id: 100,
  title: "Complete Frontend Roadmap",
  category: "Frontend",
  description: "Frontend Developer Roadmap",
  youtubeId: "zJSY8tbf_ys"
}
];

export default contents;