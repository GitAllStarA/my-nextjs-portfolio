import React from "react";
import { EvervaultCard, Icon } from "../app/components/ui/evervault-card";

export function EvervaultCardDemo() {
  return (
    <div>
    <div style={{borderRadius:"5px"}} >
      {/* <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" style={{visibility:"hidden"}} />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" /> */}

      <EvervaultCard text="As always jack of all Trades, Master of none" />

      
      {/* <p className="text-sm border font-light dark:border-white/[0.2] border-black/[0.2] rounded-full mt-4 text-black dark:text-white px-2 py-0.5">
      Watch me hover
      </p> */}
    </div>
    <div>
      <h2 className="dark:text-white text-black  mt-1 text-sm font-light" style={{textAlign:"center"}}>
        Hover over this card to reveal my skills
      </h2>
      </div>
      </div>
  );
}
export default EvervaultCardDemo;