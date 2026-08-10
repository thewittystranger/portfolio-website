export const profile = {
  name: "Ankit Kumar Choudhary",
  role: "Software Developer II",
  tagline:
    "Scalable Distributed Systems & High-Throughput Microservices",
  location: "Bengaluru, Karnataka",
  phone: "+91-7067423108",
  email: "ankitchoudhary.sde@gmail.com",
  linkedin: "https://linkedin.com/in/ankitchoudharysde",
  github: "https://github.com/thewittystranger",
  instagram: "https://instagram.com/sukoonkimehfil",
};

export const summary = {
  text: `I am a Software Developer who enjoys solving complex backend challenges and building systems that scale seamlessly. My work sits at the intersection of robust architecture and high-throughput engineering—turning messy product requirements into clean, high-performance, and cost-effective technical solutions.

Over the years, I've specialized in designing distributed microservices, optimizing backend infrastructure, and ensuring high availability. Whether I'm architecting scalable workflows using Python, Django, Java, and Spring Boot, or diving into data analytics for anomaly detection—like building systems that successfully reduced operational leakage and saved ₹1.3 Cr quarterly—I focus on measurable, high-impact outcomes.

Beyond writing code, I care deeply about engineering standards. I’m heavily involved in rigorous PR reviews, automated workflows, and comprehensive QA testing, while working closely with Product and Frontend teams to deliver end-to-end features smoothly.

If you're looking for someone who treats system reliability, performance optimization, and clean code as first-class citizens, let's connect!`,
  highlights: [
    {
      metric: "1.3 Cr",
      label: "Saved quarterly via anomaly detection",
    },
    {
      metric: "22%",
      label: "Lead leakage reduced",
    },
    {
      metric: "120 TPS",
      label: "Handled at P99 70ms",
    },
    {
      metric: "50+",
      label: "Releases/month zero downtime",
    },
  ],
};

export const experiences = [
  {
    company: "Spinny",
    role: "Software Developer II",
    duration: "Dec 2024 – May 2025",
    location: "Gurugram, Haryana",
    projects: [
      {
        title: "Lead Leakage",
        description:
          "Designed a distributed system analysing call logs from 2,500 inspectors for anomaly detection, preventing unauthorized transfers.",
        tech: ["Python", "Django", "MongoDB", "Redis Caching", "Firebase"],
        outcomes: [
          "Detected 300+ activities monthly",
          "Reduced leakage by 22%",
          "Saved ₹1.3 Cr quarterly",
        ],
      },
      {
        title: "Cost Prediction",
        description:
          "Engineered an automated cost computation system to calculate part and labour costs for 5,000+ daily inspections using a Camunda-provided issue-probability matrix.",
        tech: ["Python", "Django", "Pandas", "Redis Cache"],
        outcomes: [
          "Reduced manual effort by 85%",
          "Improved pricing consistency",
          "Directly impacted lead closure",
        ],
      },
    ],
  },
  {
    company: "Goldman Sachs",
    role: "Software Developer",
    duration: "Jun 2022 – Aug 2024",
    location: "Bengaluru, Karnataka",
    projects: [
      {
        title: "Bundle Management System",
        description:
          "Designed and developed a secure internal APK distribution system to serve on-ground banking employees post migration from Google Workspace to Zoho, enabling APK access without Play Store dependency.",
        tech: ["Java", "Spring Boot", "SQL", "AWS S3"],
        outcomes: [
          "50+ APK releases/month",
          "Zero deployment downtime",
          "200ms response time for version-check APIs",
        ],
      },
      {
        title: "Prospect Capture",
        description:
          "Increased customer engagement by 23% by collaborating in design and implementing an end-to-end prospect capture form for targeted marketing emails.",
        tech: ["Java", "Spring Boot", "SQL", "Kafka"],
        outcomes: [
          "120 transactions per second",
          "P99 latency of 70ms",
          "Reliable Kafka ingestion pipeline",
        ],
      },
    ],
  },
];

export const skills = [
  {
    category: "Programming",
    items: ["Java", "Python", "C++"],
  },
  {
    category: "Technologies / Frameworks / Dev Tools",
    items: [
      "Spring Boot",
      "Django",
      "React.js",
      "MongoDB",
      "Kafka",
      "Git",
      "SQL",
      "PostgreSQL",
      "Redis",
    ],
  },
  {
    category: "Core Competencies",
    items: [
      "Data Structures & Algorithms",
      "System Design",
      "High-Throughput Microservices",
    ],
  },
];

export const education = {
  degree: "B.Tech - Computer Science and Engineering",
  school: "National Institute Of Technology, Patna",
  duration: "2018 – 2022",
  location: "Patna, Bihar",
  cgpa: "7.51/10.00",
};

export const achievements = [
  "Saved ₹1.3 Cr quarterly by engineering an anomaly detection system that reduced lead leakage by 22%",
  "Expert (1800+) on CodeForces",
  "Reduced manual effort by 85% with an automated cost prediction system for 5,000+ daily inspections",
  "Scaled an internal APK distribution system to 50+ releases/month with zero deployment downtime",
  "Built a prospect capture pipeline handling 120 TPS at a P99 latency of 70ms, increasing customer engagement by 23%",
];

export const hobbies = {
  music: {
    title: "Guitarist · Pianist · Ukulele Player · Cajon Player · Vocalist",
    description:
      "Music is my favourite escape. I play guitar, piano, ukulele and cajon, but singing is where I truly express myself. From acoustic jams to soulful stage performances, I love creating moments that resonate.",
    tags: ["Singing", "Guitar", "Piano", "Ukulele", "Cajon", "Live Jamming", "Stage Energy"],
    link: "https://instagram.com/sukoonkimehfil",
    linkLabel: "Follow on Instagram",
  },
  audio: {
    title: "Retro, Hi-Fi & The Written Word",
    description:
      "A devoted listener of classic retro tracks and an enthusiast for high-fidelity gear — from precision-tuned IEMs to dedicated DAC setups. I also write Urdu poetries and ghazals, lose myself in books, and experiment in the kitchen whenever I need a creative reset.",
    artists: ["Mohammed Rafi", "Kishore Kumar", "Lata Mangeshkar", "Mukesh"],
    link: "https://open.spotify.com/playlist/75jiwp9Aoz5l7R2VzmwQSr?si=8512948f50bd4903",
    linkLabel: "Listen on Spotify",
  },
};
