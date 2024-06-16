import React from "react";
import {
  SiAstro,
  SiGo,
  SiNestjs,
  SiNextdotjs,
  SiReact,
  SiReactquery,
  SiTailwindcss,
  SiTurborepo,
  SiTypescript,
} from "react-icons/si";
import Link from "next/link";

import { DirectionAwareHover } from "@/components/direction-aware-hover";
import { cn } from "@/shared/lib/utils";

import { Title } from "./title";

const PROJECTS = [
  {
    title: "Teameights",
    tech: [SiTypescript, SiReact, SiNextdotjs, SiNestjs],
    link: "https://teameights.com",
    cover: "/images/teameights.png",
    background: "bg-green-500",
  },
  {
    title: "Streamdal (Landing)",
    tech: [SiAstro, SiTailwindcss, SiReact],
    link: "https://streamdal.com",
    cover: "/images/streamdal.png",
    background: "bg-purple-500",
  },
  {
    title: "OneTraf",
    tech: [
      SiTypescript,
      SiNextdotjs,
      SiTailwindcss,
      SiReactquery,
      SiTurborepo,
      SiGo,
    ],
    link: "https://onetraf.com",
    cover: "/images/onetraf.png",
    background: "bg-sky-600",
  },
  {
    title: "Supervisord Monitor",
    tech: [SiTypescript, SiReact, SiTailwindcss, SiReactquery],
    link: "https://github.com/KoNekoD/supervisord-monitor",
    cover: "/images/supervisord-monitor.png",
    background: "bg-neutral-500",
  },
] as const;

export const Projects = () => (
  <section className="p-5 py-10 sm:p-0">
    <Title
      tag="h2"
      text="Projects 📦"
      className="flex rotate-6 flex-col items-center justify-center"
    />
    <div className="grid grid-cols-1 gap-5 pt-20 md:grid-cols-2">
      {PROJECTS.map((project, index) => (
        <Link href={project.link} key={index}>
          <div className={cn("rounded-md p-3", project.background)}>
            <DirectionAwareHover
              imageUrl={project.cover}
              className="w-full cursor-pointer space-y-5"
            >
              <div className="space-y-5 rounded-xl bg-black p-5">
                <h1 className="text-2xl font-bold">{project.title}</h1>
                <div className="flex items-center gap-5">
                  {project.tech.map((Icon, index) => (
                    <Icon key={index} className="h-8 w-8" />
                  ))}
                </div>
              </div>
            </DirectionAwareHover>
          </div>
        </Link>
      ))}
    </div>
  </section>
);
