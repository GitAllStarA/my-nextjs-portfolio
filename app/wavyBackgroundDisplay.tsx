"use client"
import { useState, useEffect } from "react";
import { WavyBackgroundDemo } from "./wavyBackgroundDemo";



export const WavyBackgroundDisplay = () => {

const [showComp, setShowComp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const midPosition = windowHeight / 2;

      const scrollThreshold = 100;
      setShowComp(scrollPosition > midPosition - scrollThreshold && scrollThreshold < midPosition + scrollThreshold);

    };
    window.addEventListener('scroll',handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);


  return(<div>
        {showComp && <WavyBackgroundDemo/>}
  </div>)


}