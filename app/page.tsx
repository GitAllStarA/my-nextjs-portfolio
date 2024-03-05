import Image from "next/image";
import { MacbookScrollDemo } from "./macbookScrollDemo";
import { WavyBackgroundDemo } from "./wavyBackgroundDemo";
// import { MovingBorderDemo } from "./movingBorderDemo";
import Link from "next/link";
import { WavyBackgroundDisplay } from "./wavyBackgroundDisplay";
import { TracingBeamDemo } from "./TracingBeamDemo";

export default function Home() {
  return (
    <div>
      <div>
        <div
          style={{
            position: "absolute",
            top: "59%",
            transform: "translateY(-290%)",
            width: "300px",
            height: "100px",
          }}
        >
          <WavyBackgroundDisplay />
        </div>
      </div>
      <main className="flex flex-col items-center justify-between p-24">
        <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
          <div className="mb-20 text-center text-3xl font-bold text-neutral-800 dark:text-white">
            <a
              className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
              href="https://www.linkedin.com/in/vikranth-a-5898281b2/"
            >
              &nbsp; VkxtR &nbsp;
            </a>
          </div>
          <div className="mb-20 text-center text-3xl font-bold text-neutral-800 dark:text-white">
            <Link href="/tracingBeamDemo">photojournalism</Link>
          </div>

          <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white lg:static lg:h-auto lg:w-auto lg:bg-none dark:from-black dark:via-black">
            <a
              className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
              href="https://vercel.com/"
            >
              <div className="mb-20 text-center text-3xl font-bold text-neutral-800 dark:text-white">
                <Image
                  src="/vercel.svg"
                  alt="Vercel Logo"
                  className="dark:invert"
                  width={100}
                  height={24}
                  priority
                />
              </div>
            </a>
          </div>
        </div>
        <div className="before:bg-gradient-radial after:bg-gradient-conic relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40">
          {/* Your content here */}
        </div>
        <MacbookScrollDemo></MacbookScrollDemo>
      </main>
    </div>
  );
}
