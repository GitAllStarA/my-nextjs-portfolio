import React from "react";
import { EvervaultCard, Icon } from "../app/components/ui/evervault-card";
import { TextGenerateEffectDemo } from './textGenerationEffectDemo';

export function EvervaultCardDemo() {
  return (
    <div style={{borderRadius:"5px"}} >
       <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" style={{visibility:"hidden"}} />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" /> 

      <EvervaultCard text="As always jack of all Trades, Master of none" />
      <div style={{textAlign:"center"}} >
       <TextGenerateEffectDemo words ="Hover above to view skills and hobbies"/>
       </div>
    </div>
  );
}
export default EvervaultCardDemo;