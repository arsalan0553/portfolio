// icons
import {
  FaCss3,
  FaDocker,
  FaGitAlt,
  FaHtml5,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";

import { motion } from "framer-motion";
import { useState } from "react";
import CountUp from "react-countup";
import {
  SiAmazonaws,
  SiElectron,
  SiExpress,
  SiGraphql,
  SiJira,
  SiMongodb,
  SiNestjs,
  SiNextdotjs,
  SiPostgresql,
  SiRedux,
  SiTailwindcss,
  SiMaterialdesign,
  SiChakraui,
  SiTypescript,
  SiJavascript,
} from "react-icons/si";
import Circles from "../../components/Circles";
import { fadeIn } from "../../variants";
//  data
const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Programming Languages",
        icons: [
          { icon: <SiJavascript key="javascript" /> },
          { icon: <SiTypescript key="typescript" /> },
          { icon: <SiPostgresql key="postgresql" /> },
          { icon: <SiMongodb key="mongodb" /> },
          { icon: <SiGraphql key="graphql" /> },
        ],
      },
      {
        title: "Web Technologies",
        icons: [
          { icon: <FaReact key="react" /> },
          { icon: <SiNextdotjs key="nextjs" /> },
          { icon: <FaNodeJs key="nodejs" /> },
          { icon: <SiExpress key="express" /> },
          { icon: <SiNestjs key="nestjs" /> },
          { icon: <SiRedux key="redux" /> },
          { icon: <SiElectron key="electron" /> },
        ],
      },
      {
        title: "Frontend Tools",
        icons: [
          { icon: <FaHtml5 key="html5" /> },
          { icon: <FaCss3 key="css3" /> },
          { icon: <SiTailwindcss key="tailwindcss" /> },
          { icon: <SiMaterialdesign key="material" /> },
          { icon: <SiChakraui key="chakra" /> },
        ],
      },
      {
        title: "Databases & Cloud",
        icons: [
          { icon: <SiPostgresql key="postgresql" /> },
          { icon: <SiMongodb key="mongodb" /> },
          { icon: <SiAmazonaws key="aws" /> },
        ],
      },
      {
        title: "Tools & Platforms",
        icons: [
          { icon: <FaDocker key="docker" /> },
          { icon: <FaGitAlt key="git" /> },
          { icon: <SiJira key="jira" /> },
        ],
      },
    ],
  },
  {
    title: "awards",
    info: [
      {
        title: "Webby Awards - Honoree",
        stage: "2011 - 2012",
      },
      {
        title: "Adobe Design Achievement Awards - Finalist",
        stage: "2009 - 2010",
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "UX/UI Designer - XYZ Company",
        stage: "2012 - 2023",
      },
      {
        title: "Web Developer - ABC Agency",
        stage: "2010 - 2012",
      },
      {
        title: "Intern - DEF Corporation",
        stage: "2008 - 2010",
      },
    ],
  },
  {
    title: "credentials",
    info: [
      {
        title: "Web Development - ABC University, LA, CA",
        stage: "2011",
      },
      {
        title: "Computer Science Diploma - AV Technical Institute",
        stage: "2009",
      },
      {
        title: "Certified Graphic Designer - ABC Institute, Los Angeles, CA",
        stage: "2006",
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);
  console.log(index);
  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left xl:overflow-hidden overflow-y-auto">
      <Circles />
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[120px] "
      >
        {/* <AboutAvatar /> */}
      </motion.div>
      <div className="container mx-auto h-full xl:mt-12 flex flex-col items-center xl:flex-row gap-x-6">
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            Great <span className="text-accent">Ideas</span> Transform Into
            Masterpieces.
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px] md:max-w-[700px] text-xs md:text-sm xl:text-base  mx-auto xl:mx-0 mb-6 xl:mb- px-2 xl:px-0"
          >
            Over the past two years, I’ve freelanced as a developer to build
            dynamic web applications. I’ve honed my skills in the MERN stack,
            TypeScript, and cloud technologies, delivering scalable,
            user-focused solutions with features like real-time chat, live
            video, payment integration, e-commerce functionality, authentication
            systems, and interactive dashboards.
          </motion.p>

          {/* Counters */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6">
              {/* Experience */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={2} duration={8} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Years of experience
                </div>
              </div>
              {/* Clents */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={10} duration={8} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Satisfied Clients
                </div>
              </div>
              {/* Projects */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={15} duration={8} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Finshed Projects
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] xl:mt-6 xl:h-[480px] xl:pb-0 pb-24"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${
                    index === itemIndex &&
                    "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                  } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
                >
                  <div className="font-light mb-2 md:mb-0">{item.title}</div>
                  <div className="hidden md:flex">-</div>
                  <div>{item.stage}</div>
                  <div className="flex gap-x-4">
                    {item.icons?.map((iconObj, iconIndex) => {
                      return (
                        <div
                          className="relative text-2xl text-white group hover:scale-125 transition-all duration-300"
                          key={iconIndex}
                        >
                          {iconObj.icon}
                          {/* Tooltip */}
                          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:flex justify-center items-center bg-gray-800 text-white text-xs rounded px-2 py-1">
                            {iconObj.icon.key}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
