"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "../../utils/cn";
import Image from "next/image";

type Card = {
  id: number;
  content: JSX.Element | React.ReactNode | string;
  className: string;
  thumbnail: string;
  width: number;
  height: number;
};

export const LayoutGrid = ({ cards }: { cards: Card[] }) => {
  const [selected, setSelected] = useState<Card | null>(null);
  const [lastSelected, setLastSelected] = useState<Card | null>(null);
  const [selectedDimensions, setSelectedDimensions] = useState({ h: 0, w: 0 });

  const handleClick = (card: Card, event: Event) => {
    setSelectedDimensions({ h: card.height, w: card.width });
    setLastSelected(selected);
    setSelected(card);
  };

  const handleOutsideClick = () => {
    setLastSelected(selected);
    setSelected(null);
  };

  return (
    <div
      style={{ height: "100vh", width: "90vh" }}
      className="mx-auto grid grid-cols-1 gap-4  p-10 md:grid-cols-3"
    >
      {cards.map((card, i) => (
        <div key={i} className={cn(card.className, "")}>
          <motion.div
            onClick={(event) => handleClick(card, event)}
            className={cn(
              card.className,
              "relative overflow-hidden",
              selected?.id === card.id
                ? "absolute inset-0 z-50 m-auto flex h-1/2 cursor-pointer flex-col flex-wrap items-center justify-center rounded-lg md:w-1/2"
                : lastSelected?.id === card.id
                  ? "z-40 h-full w-full rounded-xl bg-white"
                  : "h-full w-full rounded-xl bg-white",
            )}
            layout
          >
            {selected?.id === card.id && <SelectedCard selected={selected} />}
            <div style={{ height: "max-content", width: "max-content" }}>
              <BlurImage card={card} />
            </div>
          </motion.div>
        </div>
      ))}
      <motion.div
        onClick={handleOutsideClick}
        className={cn(
          "absolute left-0 top-0 z-10 h-full w-full bg-black opacity-0",
          selected?.id ? "pointer-events-auto" : "pointer-events-none",
        )}
        animate={{ opacity: selected?.id ? 0.3 : 0 }}
      />
    </div>
  );
};

const BlurImage = ({ card }: { card: Card }) => {
  console.log(`blur`, card.thumbnail, card.height, card.width);
  const [loaded, setLoaded] = useState(false);
  return (
    <Image
      src={card.thumbnail}
      height={Number(card.height)} // Convert height to number
      width={Number(card.width)} // Convert width to number
      onLoad={() => setLoaded(true)}
      className={cn(
        "absolute inset-0 h-full w-full object-cover object-top transition duration-200",
        loaded ? "blur-none" : "blur-md",
      )}
      alt="thumbnail"
    />
  );
};

const SelectedCard = ({ selected }: { selected: Card | null }) => {
  return (
    <div className="relative z-[60] flex h-full w-full flex-col justify-end rounded-lg bg-transparent shadow-2xl">
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 0.6,
        }}
        className="absolute inset-0 z-10 bg-black opacity-60"
      />
      <motion.div
        initial={{
          opacity: 0,
          y: 100,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        className="relative z-[70] px-8 pb-4"
      >
        {selected?.content}
      </motion.div>
    </div>
  );
};
