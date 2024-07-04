import {
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTypescript,
} from "react-icons/si";
import Link from "next/link";

import { MovingBorderButton } from "@/components/moving-border";
import { Meteors } from "@/components/meteors";

import { Title } from "./title";

const CURRENT_STACK = [
  { icon: SiTypescript },
  { icon: SiReact },
  { icon: SiNextdotjs },
  { icon: SiNodedotjs },
] as const;

export const Hero = () => {
  return (
    <div className="animate-move-up flex min-h-[60vh] flex-col items-center justify-between gap-14 lg:flex-row lg:gap-0">
      <div className="space-y-10 text-center lg:text-left">
        <h2 className="text-4xl font-bold lg:text-7xl">
          Nice to meet you! 👋
        </h2>

        <p className="text-lg text-gray-300 md:w-96">
          I&apos;m a frontend developer and software engineer passionate about
          building a modern web application that users love.
        </p>

        <Link href="mailto:dvelenyx@gmail.com" className="group inline-block">
          <Title text="Contact Me 📭" tag="p" />
        </Link>
      </div>
      <div className="relative">
        <div className="">
          <div className="relative w-full max-w-xs">
            <div className="absolute inset-0 h-full w-full scale-[0.80] transform rounded-full bg-red-500 bg-gradient-to-r from-blue-500 to-teal-500 blur-3xl" />
            <div className="relative flex h-full flex-col items-start justify-end overflow-hidden rounded-2xl border border-gray-800 bg-[#09090B] px-4 py-8 shadow-xl">
              <div className="z-10 mb-4 flex items-center justify-center gap-3">
                {CURRENT_STACK.map((current, index) => {
                  const Icon = current.icon;
                  return <Icon key={index} className="h-7 w-7" />;
                })}
              </div>

              <div className="mb-4 flex items-end justify-center gap-1">
                <p className="relative z-50 text-xl font-bold text-white">
                  I work @
                </p>
                <Link href="https://nice-bets.ru">
                  <span className="text-2xl font-bold text-white transition-colors hover:text-yellow-500">
                    nice-bets
                  </span>
                </Link>
              </div>

              <p className="relative z-50 mb-4 text-base font-normal text-slate-500">
                A premier digital media hub for sports coverage and betting
                insights.
              </p>

              <MovingBorderButton
                borderRadius="0.5rem"
                className="p-3 font-semibold"
              >
                <p>🏗️💓 Frontend Is The Best</p>
              </MovingBorderButton>

              <Meteors number={20} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
