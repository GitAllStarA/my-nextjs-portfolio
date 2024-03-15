import React from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "../app/components/ui/tracing-beam";

//fix image fetch from directory Server Side Render to Client Side Render
//import ImageLoop from "./imageLoop";

const TracingBeamDemo: React.FC = () => {
  // let myImages = ImageLoop();
  // let images = [];

  // images = myImages.map((img, idx)=>{
  //     let x = {
  //       id: idx,
  //       image: img.src,
  //       title: image.width + image.height,
  //       badge: "React",
  //       description: <p>need to update</p>
  //     };
  //     return x;
  // })

  // console.log(myImages);

  return (
    <div className="flex flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <TracingBeam className="px-6">
          <div className="relative mx-auto max-w-2xl pt-4 antialiased">
            {dummyContent.map((item, index) => (
              <div key={`content-${index}`} className="mb-10">
                <h2 className="mb-4 w-fit rounded-full bg-black px-4 py-1 text-sm text-white">
                  {item.badge}
                </h2>

                <p className="mb-4 text-xl">{item.title}</p>

                <div className="prose  prose-sm dark:prose-invert text-sm">
                  {item?.image && (
                    <Image
                      src={item.image}
                      alt="blog thumbnail"
                      height="1000"
                      width="1000"
                      className="mb-10 rounded-lg object-cover"
                    />
                  )}
                  {item.description}
                </div>
              </div>
            ))}
          </div>
        </TracingBeam>
      </div>
    </div>
  );
};

const dummyContent = [
  {
    title: "Rockfeller Center Top",
    description: (
      <>
        <p>
          New York City Downtown
        </p>
      </>
    ),
    badge: "",
    image:"/ny.jpg"
  },
  {
    title: "ooh aah point",
    description: (
      <>
        <p>
          South Rim Grand Canyon
        </p>
      </>
    ),
    badge: "",
    image:"/agcsr.jpg"  },
    {
      title: "Twin Peaks",
      description: (
        <>
          <p>
           San Fransisco Downtown
          </p>
        </>
      ),
      badge: "",
      image:"/sfo.jpg"
    },
    {
      title: "Griffith Observatory",
      description: (
        <>
          <p>
            Los Angeles Downtown
          </p>
        </>
      ),
      badge: "",
      image:"/la.jpg"  },
];

export default TracingBeamDemo;
