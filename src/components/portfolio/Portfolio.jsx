import { useEffect, useRef, useState } from "react";
import "./portfolio.css";
import { motion, useInView, useScroll, useTransform } from "motion/react";

const items = [
  {
    id: 1,
    img: "/p1.png",
    title: "Traffic Controller: Smart Intersection System",
    desc: "Reimagined traffic flow with a smart 4-way intersection simulator that boosts efficiency by 35% using real-time scheduling (Round Robin & Rate Monotonic). Prioritizes emergency vehicles and pedestrians, reducing delay by 25%. Features a React-powered UI for seamless, visual control and live simulation.",
    link: "https://traffic-controll-neon.vercel.app/",
  },
  {
    id: 2,
    img: "/p2.jpg",
    title: "Data Hub: Encrypted File Sharing Platform",
    desc: "Developed a secure file-sharing app that encrypts content using a PIN-based Caesar cipher, enabling controlled access to uploaded files and summaries. Users can upload, lock, and retrieve data with confidence. Features include user authentication, PIN-protected decryption, and a lightweight Flask backend with a custom encryption engine.",
    link: "https://github.com/Paimondevil/Data-Hub",
  },
  {
    id: 3,
    img: "/p3.jpg",
    title: "VisualAlgo-Pro: Interactive Algorithm Visualizer 🚧",
    desc: "Currently building a full-stack platform that brings algorithms to life through interactive visualizations. Designed to help users understand how sorting, searching, and graph algorithms work — in real time. Features animated step-by-step logic flow, user input controls, and a clean Flask + JavaScript stack. Launching soon with support for BFS, DFS, Dijkstra, and more. (Work in Progress 🚧)",
    link: "https://github.com/Paimondevil/VisualAlgo-Pro",
  },
  {
    id: 4,
    img: "/p4.jpg",
    title: "PrintEase: Animated Website for a Family-Owned Printing Business 🚧",
    desc: "Designed and developed a sleek, animated web presence for a family-run printing company in India. Focused on bold visuals, service highlights, and smooth user interaction to build trust and accessibility. Built with performance and storytelling in mind — combining tradition with tech. (Work in Progress 🚧)",
    link: "/",
  },
  {
    id: 5,
    img: "/p5.jpg",
    title: "Face Forward: Animated Portfolio Website for a Creative Professional 🚧",
    desc: "Created a custom animated portfolio for a design-focused friend, showcasing projects, personality, and interactive flair. Balanced visual storytelling with intuitive UX to help them stand out in the creative industry. Lightweight, responsive, and built with scalable design in mind.",
    link: "https://devesh-portfolio.vercel.app/",
  },
];

const imgVariants = {
  initial: {
    x: -500,
    y: 500,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const textVariants = {
  initial: {
    x: 500,
    y: 500,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      staggerChildren: 0.05,
    },
  },
};

const ListItem = ({ item }) => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <div className="pItem" ref={ref}>
      <motion.div
        variants={imgVariants}
        animate={isInView ? "animate" : "initial"}
        className="pImg"
      >
        <img src={item.img} alt="" />
      </motion.div>
      <motion.div
        variants={textVariants}
        animate={isInView ? "animate" : "initial"}
        className="pText"
      >
        <motion.h1 variants={textVariants}>{item.title}</motion.h1>
        <motion.p variants={textVariants}>{item.desc}</motion.p>
        <motion.a variants={textVariants} href={item.link}>
          <button>View Project</button>
        </motion.a>
      </motion.div>
    </div>
  );
};

const Portfolio = () => {
  const [containerDistance, setContainerDistance] = useState(0);
  const ref = useRef(null);

  // useEffect(() => {
  //   if (ref.current) {
  //     const rect = ref.current.getBoundingClientRect();
  //     setContainerDistance(rect.left);
  //   }
  // }, []);

  // FIX: Re-calculate when screen size changes
  useEffect(() => {
    const calculateDistance = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        setContainerDistance(rect.left);
      }
    };

    calculateDistance();

    window.addEventListener("resize", calculateDistance);

    return () => {
      window.removeEventListener("resize", calculateDistance);
    };
  }, []);

  const { scrollYProgress } = useScroll({ target: ref });

  const xTranslate = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -window.innerWidth * items.length]
  );

  return (
    <div className="portfolio" ref={ref}>
      <motion.div className="pList" style={{ x: xTranslate }}>
        <div
          className="empty"
          style={{
            width: window.innerWidth - containerDistance,
            // backgroundColor: "pink",
          }}
        />
        {items.map((item) => (
          <ListItem item={item} key={item.id} />
        ))}
      </motion.div>
      <section />
      <section />
      <section />
      <section />
      <section />
      <div className="pProgress">
        <svg width="100%" height="100%" viewBox="0 0 160 160">
          <circle
            cx="80"
            cy="80"
            r="70"
            fill="none"
            stroke="#ddd"
            strokeWidth={20}
          />
          <motion.circle
            cx="80"
            cy="80"
            r="70"
            fill="none"
            stroke="#dd4c62"
            strokeWidth={20}
            style={{ pathLength: scrollYProgress }}
            transform="rotate(-90 80 80)"
          />
        </svg>
      </div>
    </div>
  );
};

export default Portfolio;