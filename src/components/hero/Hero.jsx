import { Canvas } from "@react-three/fiber";
import "./hero.css";
import Speech from "./Speech";
import { motion } from "motion/react";
import Shape from "./Shape";
import { Suspense } from "react";

const awardVariants = {
  initial: {
    x: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.2,
    },
  },
};

const followVariants = {
  initial: {
    y: -100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.2,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="hSection left">
        {/* TITLE */}
        <motion.h1
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="hTitle"
        >
          Hey There,
          <br />
          <span>I'm Devesh!</span>
        </motion.h1>
        {/* AWARDS */}
        <motion.div
          variants={awardVariants}
          initial="initial"
          animate="animate"
          className="awards"
        >
          <motion.h2 variants={awardVariants}>Data Engineer / Software Developer</motion.h2>
          <motion.p variants={awardVariants}>
            Check out my work & skills:
          </motion.p>
          <motion.div variants={awardVariants} className="awardList">
  <motion.a 
    variants={awardVariants} 
    href="https://github.com/Paimondevil" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    <motion.img variants={awardVariants} src="/award1.png" alt="Award 1" />
  </motion.a>

        <motion.a 
          variants={awardVariants} 
          href="https://hackerrank.com/GAUTAMDEVESH140?hr_r=1" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <motion.img variants={awardVariants} src="/award2.png" alt="Award 2" />
        </motion.a>

        <motion.a 
          variants={awardVariants} 
          href="https://leetcode.com/Devesh_Gautam" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <motion.img variants={awardVariants} src="/award3.png" alt="Award 3" />
        </motion.a>
      </motion.div>

      <motion.a
        variants={awardVariants}
        href="/Devesh_Resume.pdf"
        download
        className="resumeButton"
      >
        My Resume 🛰️
      </motion.a>

        </motion.div>
        {/* SCROLL SVG */}
        <motion.a
          animate={{ y: [0, 5], opacity: [0, 1, 0] }}
          transition={{
            repeat: Infinity,
            duration: 4,
            ease: "easeInOut",
          }}
          href="#services"
          className="scroll"
        >
          <svg
            width="50px"
            height="50px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9V15C19 18.866 15.866 22 12 22C8.13401 22 5 18.866 5 15V9Z"
              stroke="white"
              strokeWidth="1"
            />
            <motion.path
              animate={{ y: [0, 5] }}
              transition={{
                repeat: Infinity,
                duration: 4,
                ease: "easeInOut",
              }}
              d="M12 5V8"
              stroke="white"
              strokeWidth="1"
              strokeLinecap="round"
            />
          </svg>
        </motion.a>
      </div>
      <div className="hSection right">
        {/* FOLLOW */}
        <motion.div
          variants={followVariants}
          initial="initial"
          animate="animate"
          className="follow"
        >
          <motion.a variants={followVariants} href="https://instagram.com/devesh._.gautam">
            <img src="/instagram.png" alt="" />
          </motion.a>
          <motion.a variants={followVariants} href="mailto:29deveshgautam@gmail.com">
            <img src="/email.png" alt="" />
          </motion.a>
          <motion.a variants={followVariants} href="tel:+19023382913">
            <img src="/phone.png" alt="" />
          </motion.a>
          <motion.div variants={followVariants} className="followTextContainer">
            <div className="followText">Find Me Online.</div>
          </motion.div>
        </motion.div>
        {/* BUBBLE */}
        <Speech />
        {/* CERTIFICATE */}
        <motion.div
          animate={{ opacity: [0, 1] }}
          transition={{ duration: 1 }}
          className="certificate"
        >
          <img src="/rating.png" alt="" />
          HackerRank
          <br />
          5-Star Gold Badge
          <br />
          Problem Solving
        </motion.div>
        {/* CONTACT BUTTON */}
        <motion.a
          href="#contact"
          className="contactLink"
          animate={{
            x: [200, 0],
            opacity: [0, 1],
          }}
          transition={{
            duration: 2,
          }}
        >
          <motion.div
            className="contactButton"
            animate={{ rotate: [0, 360] }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <svg viewBox="0 0 200 200" width="150" height="150">
              <circle cx="100" cy="100" r="90" fill="#2f204e" />
              <path
                id="innerCirclePath"
                fill="none"
                d="M 100,100 m -60,0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
              />
              <text className="circleText" fill="#ffff">
                <textPath href="#innerCirclePath">Get in Touch •</textPath>
              </text>
              <text className="circleText" fill="#ffff">
                <textPath href="#innerCirclePath" startOffset="53%">
                  Reach Out •
                </textPath>
              </text>
            </svg>
            <div className="arrow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="50"
                height="50"
                fill="none"
                stroke="white"
                strokeWidth="2"
              >
                <line x1="6" y1="18" x2="18" y2="6" />
                <polyline points="9 6 18 6 18 15" />
              </svg>
            </div>
          </motion.div>
        </motion.a>
      </div>
      <div className="bg">
        {/* 3d */}
        <Canvas>
          <Suspense fallback="loading...">
            <Shape />
          </Suspense>
        </Canvas>
        <div className="hImg">
          <img src="/hero.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
