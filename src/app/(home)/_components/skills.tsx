"use client";

import React from "react";
import {
  SiJest,
  SiMongodb,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

import { HoverEffect } from "@/components/card-hover-effect";

import { Title } from "./title";

const SKILLS = [
  { text: "React", Icon: SiReact },
  { text: "NextJS", Icon: SiNextdotjs },
  { text: "Tailwind", Icon: SiTailwindcss },
  { text: "TypeScript", Icon: SiTypescript },
  { text: "NodeJS", Icon: SiNodedotjs },
  { text: "NestJS", Icon: SiNestjs },
  { text: "PostgreSQL", Icon: SiPostgresql },
  { text: "Mongo", Icon: SiMongodb },
  { text: "Jest", Icon: SiJest },
];

export const Skills = () => (
  <section className="mx-auto mt-20 max-w-5xl px-8">
    <Title
      tag="h4"
      text="Skills 🧠"
      className="flex -rotate-6 flex-col items-center justify-center"
    />
    <HoverEffect items={SKILLS}></HoverEffect>
  </section>
);
