export interface Course {
  id: string;
  title: string;
  instructor: string;
  description: string;
  duration: string;
  students: number;
  rating: number;
  level: string;
  progress?: number;
  isEnrolled?: boolean;
  image: string;
  modules?: Module[];
}

export interface Module {
  id: string;
  title: string;
  duration: string;
  completed: boolean;
  type: 'video' | 'reading' | 'assignment' | 'quiz';
}

export const courses: Course[] = [
  {
    id: "move-fundamentals",
    title: "Move Programming Fundamentals",
    instructor: "Dr. Sarah Chen",
    description: "Master the basics of Move programming language. Learn about resources, modules, and smart contract development on the Aptos blockchain.",
    duration: "6 weeks",
    students: 1247,
    rating: 4.8,
    level: "Beginner",
    progress: 65,
    isEnrolled: true,
    image: "/api/placeholder/400/300",
    modules: [
      {
        id: "intro",
        title: "Introduction to Move",
        duration: "45 min",
        completed: true,
        type: "video"
      },
      {
        id: "resources",
        title: "Understanding Resources",
        duration: "60 min",
        completed: true,
        type: "video"
      },
      {
        id: "modules",
        title: "Modules and Functions",
        duration: "90 min",
        completed: false,
        type: "video"
      }
    ]
  },
  {
    id: "aptos-defi",
    title: "DeFi Development on Aptos",
    instructor: "Prof. Michael Rodriguez",
    description: "Build decentralized finance applications using Move. Create AMMs, lending protocols, and yield farming contracts.",
    duration: "8 weeks",
    students: 892,
    rating: 4.9,
    level: "Advanced",
    progress: 30,
    isEnrolled: true,
    image: "/api/placeholder/400/300"
  },
  {
    id: "move-security",
    title: "Move Security & Best Practices",
    instructor: "Alex Thompson",
    description: "Learn security patterns, common vulnerabilities, and best practices for writing secure Move smart contracts.",
    duration: "4 weeks",
    students: 654,
    rating: 4.7,
    level: "Intermediate",
    isEnrolled: false,
    image: "/api/placeholder/400/300"
  }
];

export const assignments = [
  {
    id: "token-contract",
    title: "Create a Token Contract",
    course: "Move Programming Fundamentals",
    dueDate: "2024-02-15",
    status: "submitted",
    grade: 95
  },
  {
    id: "nft-marketplace",
    title: "NFT Marketplace Implementation",
    course: "DeFi Development on Aptos", 
    dueDate: "2024-02-20",
    status: "pending",
    grade: null
  },
  {
    id: "security-audit",
    title: "Smart Contract Security Audit",
    course: "Move Security & Best Practices",
    dueDate: "2024-02-25",
    status: "upcoming",
    grade: null
  }
];