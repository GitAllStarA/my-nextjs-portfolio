"use client";
import { useState } from "react";
// import { MovingBorderDemo } from "./movingBorderDemo";
import Portfolio from "./portfolio";
import TracingBeamDemo from "./TracingBeamDemo";

export default function Home() {
  const [toggleTracingBeam, setToggleTracingBeam] = useState(false);

  function toggleClick() {
    setToggleTracingBeam(!toggleTracingBeam);
    console.log(toggleTracingBeam);
  }

  return (
    <div>
      <div>
        <div>
          {/* <div
            style={{
              position: "absolute",
              top: "59%",
              transform: "translateY(-290%)",
              width: "300px",
              height: "100px",
            }}
          >
            <WavyBackgroundDisplay />
          </div> */}
        </div>
        {/* <main className="flex flex-col items-center justify-between p-24"> */}
        <main>
          <div onClick={toggleClick}>
            {toggleTracingBeam ? <TracingBeamDemo /> : <Portfolio />}
          </div>
        </main>
      </div>
    </div>
  );
}
