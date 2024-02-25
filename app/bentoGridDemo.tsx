import React from "react";
import { BentoGrid, BentoGridItem } from "../app/components/ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import Link from "next/link";
import Image from "next/image";


export function BentoGridDemo() {
  return (
    <BentoGrid className="max-w-4xl mx-auto">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
</div>
);

// const Badge = ({className}: {className?: string}) => {
//     return(

//     )
// }

const items = [
  {
    title: "Java Application Developer",
    description: "Kicked off an awesome venture with Accenture, teaming up with end clients to tackle cool projects and roll out fresh features. Excited to dive into new tech and keep the learning vibes going strong!",
    header: 
    <div className="flex flex-1 justify-center w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
    <div className="flex items-center justify-center"> {/* Center the content */}
      <div className="flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"> {/* Circular shape */}
        <img  style={{ maxWidth: "100%", maxHeight: "100%" }} className="object-center" src="/accenture5.svg"/> {/* Center the image */}
      </div>
    </div>
  </div>
  
  ,
    // badge: <Link href="accenture.svg"/>,
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
  },
 
  {
    title: "Application Support Analyst",
    description: "During my time at BNY Mellon, I worked on a vital in-house project: a User Access Management Application. The application, integral to identity governance, ...",
    header:
    <div className="flex flex-1 justify-center w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
    <div className="flex items-center justify-center"> {/* Center the content */}
      <div className="flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"> {/* Circular shape */}
       <img src="/bnym6clea.svg"  style={{ maxWidth: "100%", maxHeight: "100%" }} className="object-center" /> {/* Center the image */}
  </div>
</div>
</div>
,
    // badge: <Image src="/bnym.svg"/>,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Software Engineer",
    description: "At Cerner Corp, I was in the development of an application called Camera Capture. This project was a fusion of Ruby for scripting, Docker for isolated testing environments, ...",
    header: 
    <div className="flex flex-1 justify-center w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
    <div className="flex items-center justify-center"> {/* Center the content */}
      <div className="flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"> {/* Circular shape */}
         <img src="/cerner1.svg" style={{ maxWidth: "100%", maxHeight: "100%" }} className="object-center"  /> {/* Center the image */}
    </div>
  </div>
  </div>
  ,
    // badge: <Link href="cerner.svg"/>,
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Masters in Computer and Information Sciences",
    description:
      "Obtained a Master's degree in Computer and Information Sciences from Texas A&M University Kingsville, specializing in advanced topics and technologies in the field of computer science",
    header: 
    <div className="flex flex-1 justify-center w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
    <div className="flex items-center justify-center"> {/* Center the content */}
      <div className="flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"> {/* Circular shape */}
        <img src="/tamuk2.svg" style={{ maxWidth: "100%", maxHeight: "100%" }} className="object-center"  /> {/* Center the image */}
    </div>
    </div>
  </div>
  ,
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Java Software Developer",
    description: "As a Software Developer at M9 Consulting Inc, I handle various facets of application development. My work revolves on using REST for creating lightweight services, ...",
    header: 
    <div className="flex flex-1 justify-center w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
    <div className="flex items-center justify-center"> {/* Center the content */}
      <div className="flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"> {/* Circular shape */}
        <img src="/m9.svg" style={{ maxWidth: "100%", maxHeight: "100%" }} className="object-center" /> {/* Center the image */}
    </div>
  </div>
  </div>
  ,
    // badge: <Link href="m9.svg"/>,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },

  {
    title: "Software Intern",
    description: "Developed a Web based application, to rent a vehicle, and vehicle tracking using Google Maps API. Used HTML, CSS, Bootstrap, JavaScript, Java Springboot,MySQL Database, ...",
    header: 

    <div className="flex flex-1 justify-center w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
    <div className="flex items-center justify-center"> {/* Center the content */}
      <div className="flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"> {/* Circular shape */}
        <img src="/allit1.svg" style={{ maxWidth: "100%", maxHeight: "100%" }} className="object-center"  /> {/* Center the image */}
    </div>
  </div>
  </div>
  ,
    // badge: <Link href="allit_sro_logo.svg"/>,
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Bachelors in Information Technology and Engineering",
    description: "Earned a Bachelor's degree in Information Technology and Engineering from Jawaharlal Nehru Technological University, gaining comprehensive knowledge and skills in IT and engineering disciplines",
    header: 
    <div className="flex flex-1 justify-center w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
    <div className="flex items-center justify-center"> {/* Center the content */}
      <div className="flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"> {/* Circular shape */}
         <img src="/jntuh2.svg" style={{ maxWidth: "100%", maxHeight: "100%" }} className="object-center"  /> {/* Center the image */}
    </div>
  </div>
  </div>
  ,
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
];

export default BentoGridDemo;