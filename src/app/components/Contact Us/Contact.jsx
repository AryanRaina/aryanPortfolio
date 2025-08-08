"use client";
import React from "react";
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { FiArrowRight, FiMapPin, FiMail } from "react-icons/fi";
import { SiGithub, SiLeetcode, SiTwitter, SiYoutube } from "react-icons/si";
import Link from "next/link";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";

export const Contact = () => {
  return (
    <div
      name="contact"
      id="contact"
      className="contact relative flex flex-col justify-center items-center min-h-screen px-8 py-12 text-zinc-50"
    >
      <div className="absolute inset-0 z-0">
        <Canvas>
          <Stars radius={50} count={2500} factor={4} fade speed={2} />
        </Canvas>
      </div>
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        transition={{
          staggerChildren: 0.05,
        }}
        className="contact-detail relative z-10 mx-auto grid max-w-4xl grid-flow-dense grid-cols-12 gap-8"
      >
        <HeaderBlock />
        <SocialsBlock />
        <LocationBlock />
        <EmailListBlock />
      </motion.div>
      <Footer />
      <div className="footer-heading absolute bottom-0 w-full text-center">
        Copyright @ 2025 Aryan Raina | All rights reserved
      </div>
    </div>

  );
};

const Block = ({ className, ...rest }) => {
  return (
    <motion.div
      variants={{
        initial: {
          scale: 0.5,
          y: 50,
          opacity: 0,
        },
        animate: {
          scale: 1,
          y: 0,
          opacity: 1,
        },
      }}
      transition={{
        type: "spring",
        mass: 3,
        stiffness: 400,
        damping: 50,
      }}
      whileHover={{
        scale: 1.05,
      }}
      className={twMerge(
        "contact-all col-span-4 rounded-lg bg-[rgb(3,7,18)] p-6",
        className
      )}
      {...rest}
    />
  );
};

const HeaderBlock = () => (
  <Block className="contact-connect col-span-12 row-span-2 md:col-span-6">
    <h1 className="mb-12 text-4xl font-medium leading-tight">
      <span className="text-zinc-400">
        Let's connect to collaborate on new opportunities and projects.
      </span>
    </h1>
    <Link
      href="https://www.linkedin.com/in/aryanraina1/"
      target="_blank"
      className="flex items-center gap-1 text-red-300 hover:underline"
    >
      Contact me <FiArrowRight />
    </Link>
  </Block>
);

const SocialsBlock = () => (
  <>
    <Block
      className="leetcode col-span-6 bg-green-600 md:col-span-3"
      whileHover={{
        rotate: "-2.5deg",
        scale: 1.1,
      }}
    >
      <Link
        href="https://leetcode.com/u/AryanRaina/"
        target="_blank"
        className="grid h-full place-content-center text-3xl text-white"
      >
        <SiLeetcode />
      </Link>
    </Block>
    <Block
      className="twitter col-span-6 bg-blue-500 md:col-span-3"
      whileHover={{
        rotate: "2.5deg",
        scale: 1.1,
      }}
    >
      <Link
        href="https://x.com/AryanRaina12"
        target="_blank"
        className="grid h-full place-content-center text-3xl text-white"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-twitter-x" viewBox="0 0 16 16">
          <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
        </svg>
      </Link>
    </Block>
    <Block
      className="github col-span-6 bg-blue-500 md:col-span-3"
      whileHover={{
        rotate: "2.5deg",
        scale: 1.1,
      }}
    >
      <Link
        href="https://github.com/AryanRaina"
        target="_blank"
        className="grid h-full place-content-center text-3xl text-white"
      >
        <SiGithub />
      </Link>
    </Block>
    <Block
      className="linkedin col-span-6 bg-zinc-50 md:col-span-3"
      whileHover={{
        rotate: "-2.5deg",
        scale: 1.1,
      }}
    >
      <Link
        href="https://www.linkedin.com/in/aryanraina1/"
        target="_blank"
        className="grid h-full place-content-center text-3xl text-black"
      >
        <FaLinkedinIn />
      </Link>
    </Block>
  </>
);

const LocationBlock = () => (
  <Block className="col-span-12 flex flex-col items-center gap-4 md:col-span-3">
    <FiMapPin className="text-3xl" />
    <p className="text-center text-lg text-zinc-400">India</p>
  </Block>
);

const EmailListBlock = () => (
  <Block className="col-span-12 md:col-span-9">
    <p className="mb-3 text-lg">Join my mailing list</p>
    <form
      onSubmit={(e) => e.preventDefault()}
      className="flex items-center gap-2"
    >
      <input
        type="email"
        placeholder="Enter your email"
        className="w-full rounded border border-zinc-700 bg-zinc-800 px-3 py-1.5 transition-colors focus:border-red-300 focus:outline-0"
      />
      <button
        type="submit"
        className="flex items-center gap-2 whitespace-nowrap rounded bg-zinc-50 px-3 py-2 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-300"
      >
        <FiMail /> Join the list
      </button>
    </form>
  </Block>
);

const Footer = () => {
  return (
    <footer className="relative z-10 mt-12">
      <p className="text-center text-zinc-400">
        Made with ❤️ by{" "}
        <Link href="https://www.linkedin.com/in/aryanraina1/" target="_blank" className="text-red-300 hover:underline">
          Aryan Raina
        </Link>
      </p>
    </footer>
  );
};

export default Contact;
