import React from "react";
import { MacbookScroll } from "../app/components/ui/macbook-scroll";
import { MeteorsDemo } from "./meteorsDemo";
import Link from "next/link";
import { BentoGridDemo } from "./bentoGridDemo";
import { TextGenerateEffectDemo } from "./textGenerationEffectDemo";
import { WavyBackgroundDemo } from "./wavyBackgroundDemo";
import { ParallaxScrollDemo } from "./parallaxScrollDemoo";
import { LayoutGridDemo }from "./layoutGridDemo";
import {ImageLoop} from "./imageLoop";


export const MacbookScrollDemo = () => {
  let myImages = ImageLoop();
  let imageObjects = [];

  const SkeletonOne = () => {
    return (
      <div>
        <p className="font-bold text-4xl text-white">House in the woods</p>
        <p className="font-normal text-base text-white"></p>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
          A serene and tranquil retreat, this house in the woods offers a peaceful
          escape from the hustle and bustle of city life.
        </p>
      </div>
    );
  };

  let count:number = 0;
  let style: string = "";
  imageObjects = myImages.map((img, index) => {
    if (index === count){
      style = "md:col-span-2";
      count += 3;
    } else {
      style = "col-span-1";
    }
    let x = {
      id: index,
      className: style,
      thumbnail: img,
      content: <SkeletonOne/>
    };
    return x;
  });

  imageObjects = imageObjects.slice(0, 10);



  const words= ` Hello there! I'm a Motivated Software Engineer and AI/ML Enthusiast with over 5+ years of experience in React, Angular, Lightning Web Components, and Java Springboot. I'm also passionate about photography. Currently, I'm seeking a challenging role to leverage my expertise in Web services, software design, cloud computing, and troubleshooting within a dynamic and collaborative team`;
   return (
    <div>
      <div className="overflow-hidden dark:bg-[rgba(11, 11, 15, 0.5)] bg-[rgba(255, 255, 255, 0.5)] w-full">
        <MacbookScroll title={ <TextGenerateEffectDemo words={words}/> }/>
      </div>
      <div className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
          <a
            href="https://www.linkedin.com/in/vikranth-a-5898281b2/"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              LinkedIn{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Software Engineer | AI/ML Enthusiast
            </p>
          </a>
          <a
            href="https://open.spotify.com/user/31kkf3qyprjjmhecrp2zkgcqysda"
            className="group rounded-lg border border-transparent px-5 py-4 
               transition-colors hover:border-gray-300 hover:bg-gray-100 
               hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Spotify{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance`}>
              My spotify playlist
            </p>
          </a>
          <a
            href="https://github.com/GitAllStarA"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              GitHub{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>

              GitHub, where you can find all my trades
            </p>
          </a>

          <a
            href="https://ui.aceternity.com/components"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Components {" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Copy paste the most trending components and use them in your websites.
            </p>
          </a>
        </div>
        <div>
        <p style={{paddingTop:"20px",paddingBottom:"40px",fontSize: "2rem", fontWeight: "600", textAlign:"center" }} >Career history</p>
          <BentoGridDemo/>    
          <br/>
          <p style={{ paddingTop:"20px",fontSize: "2rem", fontWeight: "600", textAlign:"center" }}>Photo Journalism</p>
          <div style={{position:"relative"}}>
            <LayoutGridDemo cards={imageObjects}/>
          </div>
        </div>
      </div>
    </div>
  );
};

