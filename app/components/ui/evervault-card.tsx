"use client";
import { useMotionValue } from "framer-motion";
import React, { useState, useEffect } from "react";
import { useMotionTemplate, motion } from "framer-motion";
import { cn } from "../../utils/cn";
import { TextGenerateEffectDemo } from "../../textGenerationEffectDemo";
import { MovingBorderDemo } from "@/app/movingBorderDemo";

export const EvervaultCard = ({
  text,
  className,
}: {
  text?: string;
  className?: string;
}) => {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  const [randomString, setRandomString] = useState<string[]>([]);

  useEffect(() => {
    //let str = generateRandomString(1500);
    let str2 = generateRandomSkillString(1500);
    setRandomString(str2);
  }, []);

  function onMouseMove({ currentTarget, clientX, clientY }: any) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
    const str2 = generateRandomSkillString(1500);
    setRandomString(str2);
  }

  return (
    <div
      style={{
        width: "150vh",
        height: "35vh",
      }}
      className={cn(
        "aspect-rectangle relative  flex max-w-full items-center justify-center  bg-transparent",
        className,
      )}
    >
      <div
        onMouseMove={onMouseMove}
        className="group/card relative flex h-full w-full items-center justify-center overflow-hidden rounded-3xl bg-transparent"
      >
        <div
          style={{
            textAlign: "center",
            position: "absolute",
          }}
        >
          <TextGenerateEffectDemo words="Hover to view skills" />
        </div>
        <CardPattern
          mouseX={mouseX}
          mouseY={mouseY}
          randomString={randomString}
        />
        {/* <div className="relative z-10 flex items-center justify-center">
  <div className="relative h-44 w-44 rounded-lg flex items-center justify-center text-white font-bold text-4xl">
    <div className="absolute w-full h-full bg-white/[0.8] dark:bg-black/[0.8] blur-sm rounded-lg" />
    <span className="dark:text-white text-black z-20">{text}</span>
  </div>
</div> */}
      </div>
    </div>
  );
};

export function CardPattern({ mouseX, mouseY, randomString }: any) {
  let maskImage = useMotionTemplate`radial-gradient(550px at ${mouseX}px ${mouseY}px, white, transparent)`;
  let style = { maskImage, WebkitMaskImage: maskImage };

  return (
    <div className="pointer-events-none">
      <div className="absolute inset-0 rounded-2xl  [mask-image:linear-gradient(white,transparent)] group-hover/card:opacity-50"></div>
      <motion.div
        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-500 to-blue-700 opacity-0  backdrop-blur-xl transition duration-500 group-hover/card:opacity-100"
        style={style}
      />
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 mix-blend-overlay  group-hover/card:opacity-100"
        style={style}
      >
        <p className="absolute inset-x-0 h-full whitespace-pre-wrap break-words font-mono text-xs font-bold text-white transition duration-500">
          {randomString}
        </p>
      </motion.div>
    </div>
  );
}

const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
export const generateRandomString = (length: number) => {
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};

const skillsString: string[] = [
  "Hi Mom",
  "Hi Dad",
  "Jai Shri Raam",
  "Jai Hanuman",
  "Jai Limbadri Narasimha Swami",
  "Om Namah Shivaya",
  "Jai Shri Krishna",
  "Om Sham Shanischarya Namaha",
  "Jai Matadi",
  "Plan C is for Commit",
  "Formula 1",
  "Java",
  "Gaming",
  "Volley Ball",
  "Artificial Intelligence",
  "Xbox",
  "Red Dead Redemption 2",
  "Nvidia GForce",
  "Black Myth Wukong",
  "Lightning web components",
  "Agentforce",
  "Retrieval-augmented generation (RAG)",
  "VectorDB",
  "LangChain",
  "Forza 5",
  "GTA V",
  "React",
  "Angular",
  "Machine Learning",
  "Cloud Computing",
  "AWS",
  "Azure",
  "GCP",
  "JavaScript",
  "TypeScript",
  "CSS",
  "HTML",
  "Tailwindcss",
  "Xcode",
  "Spring boot",
  "Spring",
  "Hibernate",
  "Docker",
  "Kubernetes",
  "Redis",
  "Mongo",
  "Mysql",
  "Git",
  "Gihub",
  "SpaCy3.0",
  "Postman",
  "VScode",
  "IntelliJ",
  "Jupyter",
  "Python",
  "Shell",
  "PowerShell",
  "Nginix",
  "kafka",
  "Agile",
  "MySQL",
  "JUnit",
  "LWC",
  "Apex",
  "Netflix Zuul",
  "Spring Cloud",
  "Ruby on Rails",
  "Jenkins",
  "Splunk",
  "Mockito",
  "Core Java",
  "Tomcat",
  "Vercel",
  "Netlify",
  "Singleton",
  "Builder",
  "Factory",
  "DSA",
  "Leetcode",
  "JSON",
  "Rest",
  "XML",
  "TDD",
  "BDD",
  "Windows",
  "MacOS",
  "Linux",
  "Ubuntu",
  "SailPoint",
  "SalesForce",
  "Saviynt",
  "Kaggle",
  "Whisper OpenAI",
  "Hugging Face",
  "LLMS",
  "GPT",
  "Prompt Engineering",
  "Kanban",
  "SDLC",
  "Photography",
  "Smart Phone Photography",
  "Running",
  "The Office",
  "Friends",
  "Game of Thrones",
  "Breaking Bad",
  "Biryani",
  "Pani Puri",
  "Samosa Chat",
  "Shrimp Scampi",
  "Stonks",
  "DogeCoin",
  "Shiba Inu",
  "BitCoin",
  "S&P 500",
  "QQQ",
  "AMC",
  "GameStop",
  "BigShot",
  "Chistane Bale",
  "Batman",
  "Ironman",
  "Driving",
  "Making Donuts",
  "Burnouts",
  "Mustang GT",
  "Ford",
  "Toyota",
  "Asus",
  "Jack of All Trades, Master of none",
  //  "💻","🚶🏻","🏐","🙏🏻","👓","🥦","🥃","🍺","⛅️"
];
const generateRandomSkillString = (length: number) => {
  let result = [];
  for (let i = 0; i < length; i++) {
    let str = skillsString[Math.floor(Math.random() * skillsString.length)];
    if (str === "Jack of All Trades, Master of none") {
      result.push(">>>>> " + str.toLocaleUpperCase() + " <<<<<");
    } else {
      result.push(" " + str + " ");
    }
  }
  return result;
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
