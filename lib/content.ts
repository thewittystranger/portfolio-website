export const site = {
  url: "https://thewittystranger.github.io/portfolio-website/",
  title: "Ankit Kumar Choudhary · LLM Coding-Agent Evaluation Engineer",
  description:
    "Ankit Kumar Choudhary builds and grades SWE-bench-style evaluation tasks for frontier LLM coding agents, backed by 3 years of backend engineering at Goldman Sachs and Spinny.",
  resume: "Ankit_Kumar_Choudhary_Resume.pdf",
};

export const profile = {
  name: "Ankit Kumar Choudhary",
  firstName: "Ankit",
  headline: "LLM Coding-Agent Evaluation Engineer",
  subheadline: "Backend & Distributed Systems (SDE-2)",
  valueProp:
    "I build and grade evaluation tasks for frontier LLM coding agents, backed by 3 years shipping high-throughput microservices at Goldman Sachs and Spinny.",
  openTo: "Open to AI evaluation, forward-deployed and SDE-2 backend roles",
  workLocations: "Remote · Bengaluru · Gurugram · Hyderabad",
  location: "Bengaluru, India",
  phone: "+91-7067423108",
  email: "ankitchoudhary.sde@gmail.com",
  linkedin: "https://linkedin.com/in/ankitchoudharysde",
  github: "https://github.com/thewittystranger",
  instagram: "https://instagram.com/sukoonkimehfil",
  previously: ["Goldman Sachs", "Spinny"],
};

export const metrics = [
  { value: "~30", label: "Verified SWE-bench-style tasks, ~70 agent trials" },
  { value: "120 TPS", label: "Sustained at 70 ms P99 in production" },
  { value: "~$150K", label: "Saved per quarter (₹1.3 Cr) via anomaly detection" },
  { value: "1800+", label: "Codeforces Expert rating" },
];

export const about = {
  paragraphs: [
    "I author SWE-bench-style tasks on real open-source codebases: reproducible Docker environments, hidden fail-to-pass and regression tests, and rubrics that catch reward hacking and fabricated claims. Every task is verified three ways — the starting code fails, the reference passes, and plausible wrong fixes fail.",
    "Before evaluation work, I spent three years building Java/Spring Boot and Python/Django microservices at Goldman Sachs and Spinny: event-driven pipelines, distributed caching and anomaly detection that moved real business numbers. That production background is why my tasks test what actually breaks in real systems.",
  ],
  focus: [
    {
      title: "Agent evaluation tasks",
      text: "SWE-bench-style tasks on Python and Java codebases up to 355k lines, in Docker sandboxes that build in under 15 minutes.",
    },
    {
      title: "Graders that can't be gamed",
      text: "Hidden tests and 8-dimension rubrics with fabrication checks; closed a skip-every-test exploit the old grader missed.",
    },
    {
      title: "Backend & distributed systems",
      text: "Event-driven microservices, CDC with Kafka, Hazelcast and Redis — 120 TPS at 70 ms P99 and 280 PDFs/s across 10 nodes.",
    },
  ],
};

export type Experience = {
  role: string;
  org: string;
  type?: string;
  location: string;
  period: string;
  kind?: "break";
  highlights: { label?: string; text: string }[];
  tech?: string[];
};

export const experiences: Experience[] = [
  {
    role: "LLM Coding-Agent Evaluation Engineer",
    org: "Freelance",
    type: "Contract",
    location: "Remote",
    period: "Oct 2026 – Present",
    highlights: [
      {
        label: "Task authoring",
        text: "Authored ~30 verified SWE-bench-style tasks on real open-source Python and Java codebases (up to 355k lines), validated across ~70 agent trials.",
      },
      {
        label: "Reproducible environments",
        text: "Built Docker sandboxes with pinned commits, PostgreSQL and Redis; every environment builds in under 15 minutes.",
      },
      {
        label: "Deterministic grading",
        text: "Wrote hidden fail-to-pass and regression tests (pytest), each verified three ways: starting code fails, reference solution passes, plausible wrong fixes fail.",
      },
      {
        label: "Distributed-systems tasks",
        text: "Ported a 33-commit Redis Cluster PR onto a newer master and graded it on a 3-node Docker cluster; built lock-ownership, shutdown-race and monotonic-clock migration tasks.",
      },
      {
        label: "Anti-reward-hacking",
        text: "Hardened graders so a skip-every-test exploit that passed the old grader now fails; fixed OpenBLAS oversubscription in emulated containers, cutting test time from 7.5 s to 0.45 s.",
      },
      {
        label: "Trajectory review & QA",
        text: "Graded agent trajectories on 8-dimension rubrics with fabrication checks; as QA reviewer, caught errors in 7 of 12 rubrics on a peer submission and wrote a source-verified review checklist.",
      },
    ],
    tech: ["Docker", "pytest", "Python", "Java", "Redis Cluster", "PostgreSQL", "Harbor", "OpenCode", "mini-swe-agent"],
  },
  {
    role: "Career Break",
    org: "Planned time off",
    location: "",
    period: "May 2025 – Oct 2026",
    kind: "break",
    highlights: [
      { text: "Took planned time off for a personal health matter, now back at work full-time." },
      {
        text: "Upskilled in LLM coding agents, agent evaluation tooling and system design, which led directly to my current evaluation contract work.",
      },
    ],
  },
  {
    role: "Software Developer II (SDE-2)",
    org: "Spinny",
    location: "Gurugram",
    period: "Dec 2024 – May 2025",
    highlights: [
      {
        label: "Anomaly detection",
        text: "Designed a distributed pipeline over call and activity logs from 2,500+ field inspectors, with Redis deduplication and real-time fraud alerts.",
      },
      {
        label: "Impact",
        text: "Flagged 300+ anomalies a month, cut lead leakage by 22% and saved ₹1.3 Cr (~$150K) per quarter.",
      },
      {
        label: "Cost prediction",
        text: "Built a parts and labor cost engine for 5,000+ daily inspections using a Camunda BPM issue-probability matrix, cutting manual effort by 85%.",
      },
    ],
    tech: ["Python", "Django", "MongoDB", "Redis", "Firebase", "Pandas", "Camunda BPM"],
  },
  {
    role: "Software Developer",
    org: "Goldman Sachs",
    location: "Bengaluru",
    period: "Jun 2022 – Aug 2024",
    highlights: [
      {
        label: "Event-driven capture",
        text: "Designed a prospect-capture microservice on MongoDB Change Streams (CDC) and Kafka, raising customer engagement by 23%.",
      },
      {
        label: "Performance & security",
        text: "Sustained 120 TPS at 70 ms P99 through connection pooling, indexing and @Async, with AES-256 PII encryption and Resilience4j.",
      },
      {
        label: "Distributed rendering",
        text: "Scaled a statement-generation service across 10 Hazelcast nodes to 280 PDFs per second.",
      },
      {
        label: "Release platform",
        text: "Built an internal APK distribution system on AWS S3 handling 50+ releases a month with zero downtime and 200 ms version checks.",
      },
    ],
    tech: ["Java", "Spring Boot", "MongoDB", "Kafka", "Redis", "Hazelcast", "Resilience4j", "AWS S3"],
  },
];

export const skills = [
  {
    category: "AI Evaluation",
    items: [
      "LLM coding-agent evaluation",
      "SWE-bench-style task authoring",
      "RLHF data",
      "Agent trajectory analysis",
      "Rubric design",
      "Reward-hacking detection",
      "Code review",
      "Prompt design",
      "Harbor",
      "OpenCode",
      "mini-swe-agent",
    ],
  },
  {
    category: "Languages",
    items: ["Python", "Java", "C++", "SQL"],
  },
  {
    category: "Backend",
    items: [
      "Spring Boot",
      "Django",
      "Flask",
      "Microservices",
      "REST APIs",
      "Event-driven architecture",
      "Concurrency",
      "System design",
    ],
  },
  {
    category: "Data & Infrastructure",
    items: ["Docker", "PostgreSQL", "MongoDB", "Redis", "Kafka", "Hazelcast", "Firebase", "AWS S3", "Git", "pytest"],
  },
];

export const education = {
  degree: "B.Tech, Computer Science and Engineering",
  school: "National Institute of Technology, Patna",
  period: "2018 – 2022",
};

export const recognition = [
  {
    title: "Codeforces Expert",
    text: "Competitive programming rating of 1800+.",
  },
  {
    title: "₹1.3 Cr saved per quarter",
    text: "Anomaly-detection system at Spinny that cut lead leakage by 22%.",
  },
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
      "A devoted listener of classic retro tracks and an enthusiast for high-fidelity gear — from precision-tuned IEMs to dedicated DAC setups. I also write Urdu poetry and ghazals, lose myself in books, and experiment in the kitchen whenever I need a creative reset.",
    artists: ["Mohammed Rafi", "Kishore Kumar", "Lata Mangeshkar", "Mukesh"],
    link: "https://open.spotify.com/playlist/75jiwp9Aoz5l7R2VzmwQSr?si=8512948f50bd4903",
    linkLabel: "Listen on Spotify",
  },
};
