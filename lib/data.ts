import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import Filmpire from "@/public/Filmpire.png";
import Disney from "@/public/Disney.webp";
import Twitter from "@/public/Twitter.webp";
import Ai_Image from "@/public/Ai_Image.webp";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "AI Image Generation",
    description:
      "AI image generator application according to the input prompt given by the user by using the dalle API of OpenAi. Also having community share feature.",
    tags: ["Node", "Next.js", "MongoDB", "Tailwind", "Express"],
    imageUrl: Ai_Image,
  },
  {
    title: "Filmpire",
    description:
      "A fullstack netflix clone project named Filmpire. It combines the desire to unleash powerful creativity with the industry's most advanced JavaScript tools including React.js, Material UI, Alan AI, and more.",
    tags: ["React", "Material-Ui", "Alan-Ai"],
    imageUrl: Filmpire,
  },
  {
    title: "Twitter Clone",
    description:
      "A full stack twitter-clone app having signin/signout functionality. User can post a tweet and comment on a tweet.",
    tags: ["React", "TypeScript", "Tailwind", "Sanity"],
    imageUrl: Twitter,
  },
  {
    title: "Disney Hotstar Clone",
    description:
      "Disney+ Hotstar Clone having signin/signUp functionality with modern web design.",
    tags: ["React", "Next.js", "Redux", "Tailwind", "Firebase", "Framer"],
    imageUrl: Disney,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;
