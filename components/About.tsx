"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

import { useSectionInView } from "@/lib/Hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
      ref={ref}
    >
      <SectionHeading>About me</SectionHeading>
      <p className="">
        I am a frontend developer working as freelancer and I am constantly
        looking for ground-breaking solutions to issues that arise in daily
        life. In my work, I spend most of my time coming up with innovative
        solutions to development problems. (That's not entirely true, I just
        enjoy creating fun experiences on the web but let's keep it
        professional🙂).
      </p>
      <p className="mb-5 text-xl space-x-3 font-extrabold">
        <span>.</span>
        <span>.</span>
        <span>.</span>
        <span>.</span>
        <span>.</span>
      </p>

      {/* 2 section */}
      <p className="">
        I've been a part of this industry for over two years and within those
        years, I've honed my analytic and collaboration skills which makes
        working with a team easier. I've also had the opportunity to serve as
        lead software engineer for different projects.
      </p>
      <p className="mb-5 text-xl space-x-3 font-extrabold">
        <span>.</span>
        <span>.</span>
        <span>.</span>
        <span>.</span>
        <span>.</span>
      </p>

      {/* 3 section */}
      <p className="">
        I enjoy watching anime and I am very into the Marvel franchise. I listen
        to lots of music, James Blake, Fujii Kaze and Isak Danielson are some of
        my favourite artists (for now). I spend most of my free time with my
        family and my dog 🐕 or watching movies.
      </p>
      <p className="mb-5 text-xl space-x-3 font-extrabold">
        <span>.</span>
        <span>.</span>
        <span>.</span>
        <span>.</span>
        <span>.</span>
      </p>

      {/* 4section */}
      <p className="font-extrabold font-acorn">
        I'm surprised you actually read all of that, well thanks for your
        patience😅
      </p>
      <p className="mb-5 text-xl space-x-3 font-extrabold">
        <span>.</span>
        <span>.</span>
        <span>.</span>
        <span>.</span>
        <span>.</span>
      </p>

      {/* 6 section */}
      <p className="mb-1">
        I'm available for full-time roles and freelance projects worldwide. As
        long as you don't mind watching me work from millions of screens away.
        That might be an exaggeration, or not. Cheers 🥂🥂
      </p>
      <p>❤️ & 💡</p>
    </motion.section>
  );
}
