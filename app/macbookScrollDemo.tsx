import React from "react";
import { MacbookScroll } from "../app/components/ui/macbook-scroll";
import { MeteorsDemo } from "./meteorsDemo";
import Link from "next/link";
import { BentoGridDemo } from "./bentoGridDemo";
import { TextGenerateEffectDemo } from "./textGenerationEffectDemo";
import { WavyBackgroundDemo } from "./wavyBackgroundDemo";
import { ParallaxScrollDemo } from "./parallaxScrollDemoo";
import { LayoutGridDemo } from "./layoutGridDemo";
//import { ImageLoop } from "./imageLoop";
import { unstable_noStore as noStore } from 'next/cache';


export const MacbookScrollDemo = () => {
  let myImages: any[] = [];
  let imageObjects = [];

  const SkeletonOne = () => {
    return (
      <div>
        <p className="text-4xl font-bold text-white">House in the woods</p>
        <p className="text-base font-normal text-white"></p>
        <p className="my-4 max-w-lg text-base font-normal text-neutral-200">
          A serene and tranquil retreat, this house in the woods offers a
          peaceful escape from the hustle and bustle of city life.
        </p>
      </div>
    );
  };

  let count: number = 3;
  let nextCount: number = 0;
  let style: string = "";
  if (myImages.length > 0) {
    imageObjects = myImages.map((img, index) => {
      if (index === count) {
        style = "col-span-2";
        nextCount = count + 1;
      } else if (index === nextCount) {
        count = nextCount + 3;
        style = "col-span-2";
      } else {
        style = "col-span-1";
      }
      let x = {
        id: index,
        className: style,
        thumbnail: img.src,
        width: img.width,
        height: img.height,
        content: <SkeletonOne />,
      };
      // console.log(`count: `, count);
      // console.log(`nextc `,nextCount);
      // console.log(img.src, img.width, img.height)
      return x;
    })
  };

  //imageObjects = imageObjects.slice(0, 10);

  const words = ` Hello there! I'm a Motivated Software Engineer and AI/ML Enthusiast and I work on React, Angular, Lightning Web Components, MuleSoft, Spring and Java Programming Technologies. I'm also passionate about photography. Currently, I'm seeking a challenging role to leverage my expertise in Web services, software design, cloud computing, and troubleshooting within a dynamic and collaborative team`;

  async function get() {
    noStore(); // <--- Forces this to run dynamically on the server!
    return {
      data: {
        envFavTeam: process.env.FAV_TEAM === 'true', // Reads from the mounted .env.local file
      }
    };
  }

  async function envVar() {
    const response = await get();
    const words2 = response.data.envFavTeam;

    return <div>{String(words2)}</div>;
  }
  
  const val = envVar();
  console.log(val);

  return (
    <div>
      <div className="dark:bg-[rgba(11, 11, 15, 0.5)] bg-[rgba(255, 255, 255, 0.5)] w-full overflow-hidden">
        <MacbookScroll
          title={
            <div
              style={{
                width: "100vh",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              <TextGenerateEffectDemo words={words} />
            </div>
          }
        />
      </div>
      <div className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
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
            href="https://open.spotify.com/user/31s34uu4alcnqjeerj7ardsu2zt4"
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
            <p className={`m-0 max-w-[30ch] text-balance text-sm opacity-50`}>
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
              Components{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Copy paste the most trending components and use them in your
              websites.
            </p>
          </a>
        </div>
        <div>
          <p
            style={{
              paddingTop: "20px",
              paddingBottom: "40px",
              fontSize: "2rem",
              fontWeight: "600",
              textAlign: "center",
            }}
          >
            Career history
          </p>
          <BentoGridDemo />
          <br />
          {/* <p
            style={{
              paddingTop: "20px",
              fontSize: "2rem",
              fontWeight: "600",
              textAlign: "center",
            }}
          >
            Photo Journalism
          </p>
          <div style={{ position: "relative" }}>
            <LayoutGridDemo cards={imageObjects} />
          </div> */}
        </div>
      </div>
    </div>
  );
};
