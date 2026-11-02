export const profile = {
  name: "Ankit Kumar Choudhary",
  role: "Software Developer II (SDE-2) | Distributed Systems & Microservices | LLM Coding-Agent Evaluation",
  tagline:
    "Scalable Distributed Systems, Low-Latency Microservices & LLM Coding-Agent Evaluation",
  location: "Bengaluru, Karnataka",
  phone: "+91-7067423108",
  email: "ankitchoudhary.sde@gmail.com",
  linkedin: "https://linkedin.com/in/ankitchoudharysde",
  github: "https://github.com/thewittystranger",
  instagram: "https://instagram.com/sukoonkimehfil",
};

export const summary = {
  text: `I am an SDE-2 and Codeforces Expert (1800+) who enjoys solving complex backend challenges and building distributed systems and low-latency microservices that scale seamlessly. My work sits at the intersection of robust architecture and high-throughput engineering—turning messy product requirements into clean, high-performance, and cost-effective technical solutions.

At Goldman Sachs and Spinny, I designed event-driven microservices and data pipelines with Java, Spring Boot, Python, and Django—running services at 120 TPS with a 70 ms P99, and building an anomaly-detection system that cut lead leakage by 22% and saved ₹1.3 Cr every quarter.

Today I also work on the frontier of AI: building Docker evaluation environments, hidden fail-to-pass tests, and grading rubrics for frontier LLM coding agents on real open-source Python and Java codebases—including distributed-systems tasks like merging a 33-commit Redis Cluster PR graded on a live 3-node cluster.

Beyond writing code, I care deeply about engineering standards: rigorous reviews, deterministic tests, and graders that can't be gamed. If you're looking for someone who treats system reliability, performance, and correctness as first-class citizens, let's connect!`,
  highlights: [
    {
      metric: "₹1.3 Cr",
      label: "Saved quarterly via anomaly detection",
    },
    {
      metric: "120 TPS",
      label: "Sustained at 70 ms P99",
    },
    {
      metric: "280/s",
      label: "PDFs rendered across 10 nodes",
    },
    {
      metric: "1800+",
      label: "Codeforces Expert rating",
    },
  ],
};

export const experiences = [
  {
    company: "Freelance",
    role: "AI Engineer — LLM Coding-Agent Evaluation & Task Author",
    duration: "Oct 2026 – Present",
    location: "Remote",
    projects: [
      {
        title: "Containerised AI Sandboxes",
        description:
          "Built reproducible Docker evaluation environments (pinned commits, PostgreSQL, Redis) on real open-source Python and Java codebases of up to 355k lines.",
        tech: ["Docker", "Python", "Java", "PostgreSQL", "Redis"],
        outcomes: [
          "Codebases up to 355k lines",
          "Environment builds under 15 minutes",
          "Fully pinned, reproducible setups",
        ],
      },
      {
        title: "Deterministic Verification & Grader Hardening",
        description:
          "Authored ~30 task versions over 7 rounds (~70 agent trials) with hidden fail-to-pass and regression tests, each verified so that starting code fails, the reference passes, and wrong fixes fail.",
        tech: ["pytest", "Harbor", "OpenCode", "mini-swe-agent"],
        outcomes: [
          "Hardened graders: a skip-every-test hack that passed the old grader now fails",
          "Fixed OpenBLAS oversubscription in emulated containers (7.5 s → 0.45 s)",
          "Every task verified against wrong fixes before release",
        ],
      },
      {
        title: "Distributed-Systems Tasks",
        description:
          "Merged a real 33-commit Redis Cluster PR into a newer master, graded on a 3-node Docker cluster, and built lock-ownership, shutdown-race and monotonic-clock migration tasks.",
        tech: ["Redis Cluster", "Docker", "Concurrency"],
        outcomes: [
          "33-commit PR merged onto newer master",
          "Graded on a live 3-node cluster",
          "Concurrency and clock-safety task suite",
        ],
      },
      {
        title: "Trajectory Analysis & Review",
        description:
          "Graded agent trajectories with 8-dimension rubrics and fabrication checks, and reviewed peer submissions for rubric accuracy.",
        tech: ["Rubric Design", "Trajectory Analysis", "Prompt Design"],
        outcomes: [
          "Corrected 7 of 12 rubrics in a peer review",
          "Wrote a 35-line source-verified review checklist",
        ],
      },
    ],
  },
  {
    company: "Spinny",
    role: "Software Developer II (SDE-2)",
    duration: "Dec 2024 – May 2025",
    location: "Gurugram, Haryana",
    projects: [
      {
        title: "Distributed Lead Leakage & Anomaly Detection",
        description:
          "Designed a distributed anomaly-detection pipeline over call and activity logs from 2,500+ field inspectors, with Redis caching for state deduplication and Firebase for instant fraud alerts.",
        tech: ["Python", "Django", "MongoDB", "Redis", "Firebase"],
        outcomes: [
          "Flagged 300+ anomalous activities monthly",
          "Reduced leakage by 22%",
          "Saved ₹1.3 Cr quarterly",
        ],
      },
      {
        title: "Automated Inspection Cost Prediction",
        description:
          "Built a part and labour cost engine for 5,000+ daily inspections using a Camunda issue-probability matrix.",
        tech: ["Python", "Django", "Pandas", "Redis", "Camunda BPM"],
        outcomes: [
          "Reduced manual effort by 85%",
          "5,000+ inspections priced daily",
          "Improved pricing consistency",
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
        title: "High-Throughput Prospect Capture",
        description:
          "Designed a prospect-capture microservice on MongoDB Change Streams (CDC) and Kafka, tuning connection pooling, indexing and @Async, with AES-256 PII encryption and Resilience4j.",
        tech: ["Java", "Spring Boot", "MongoDB Change Streams", "Kafka", "Redis"],
        outcomes: [
          "Raised customer engagement by 23%",
          "120 transactions per second at 70 ms P99",
          "AES-256 encryption for PII",
        ],
      },
      {
        title: "Distributed Statement Generation",
        description:
          "Scaled a statement-rendering microservice across 10 nodes using Hazelcast distributed caching.",
        tech: ["Java", "Spring Boot", "Hazelcast", "iText", "PhantomJS"],
        outcomes: [
          "280 PDFs per second",
          "Scaled across 10 nodes",
          "+30% rendering efficiency",
        ],
      },
      {
        title: "Enterprise Bundle Management System",
        description:
          "Built a secure internal APK distribution platform for on-ground banking employees, enabling APK access without Play Store dependency.",
        tech: ["Java", "Spring Boot", "AWS S3"],
        outcomes: [
          "50+ APK releases/month",
          "Zero deployment downtime",
          "200 ms version-check APIs",
        ],
      },
    ],
  },
];

export const skills = [
  {
    category: "Languages & Core CS",
    items: [
      "Java",
      "Python",
      "C++",
      "SQL",
      "Data Structures & Algorithms",
      "System Design",
      "OOP",
      "Concurrency",
    ],
  },
  {
    category: "Backend & Architecture",
    items: [
      "Spring Boot",
      "Django",
      "Flask",
      "Microservices",
      "REST APIs",
      "Event-Driven Architecture",
    ],
  },
  {
    category: "Data & Infrastructure",
    items: [
      "MongoDB",
      "PostgreSQL",
      "Redis",
      "Kafka",
      "Hazelcast",
      "Firebase",
      "AWS S3",
      "Docker",
      "Git",
    ],
  },
  {
    category: "AI & Evaluation",
    items: [
      "LLM Agent Evaluation",
      "Prompt Design",
      "Rubric Design",
      "Trajectory Analysis",
      "Harbor",
      "OpenCode",
      "mini-swe-agent",
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
  "Saved ₹1.3 Cr quarterly by engineering an anomaly-detection system that reduced lead leakage by 22%",
  "Expert (1800+) on Codeforces",
  "Reduced manual effort by 85% with an automated cost-prediction engine for 5,000+ daily inspections",
  "Built a CDC + Kafka prospect-capture service sustaining 120 TPS at 70 ms P99, raising customer engagement by 23%",
  "Scaled distributed statement generation to 280 PDFs per second across 10 nodes",
  "Hardened LLM coding-agent graders so a skip-every-test hack that passed the old grader now fails",
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
