"use client";
import { TextGenerateEffect } from "../app/components/ui/text-generate-effect";

// const words = `Hello there! I'm a Motivated Software Engineer and AI/ML Enthusiast with over 5+ years of experience in React, Angular, Lightning Web Components and Java Springboot, seeking a challenging role to leverage my expertise in Web services, software design, cloud computing, and troubleshooting within a dynamic and collaborative team.`;
// const word2 = `As always Jack of all trades, Master of none`;

export function TextGenerateEffectDemo({ words }: { words: string }) {
  return (
    <div>
      <TextGenerateEffect words={words} />
    </div>
  );
}

export default TextGenerateEffectDemo;
