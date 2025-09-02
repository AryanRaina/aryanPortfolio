"use client";
import React from "react";
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useMotionTemplate } from "framer-motion";
import { useMotionValue } from "framer-motion";
import { animate } from "framer-motion";
import { motion } from "framer-motion";
import BubbleText from "./BubbleText";
import { DivOrigami } from "./LogoOrigami";
import { Example } from "./ClipPathLinks";
import { FaAws, FaCloud, FaCode, FaCss3, FaDocker, FaGit, FaGithub, FaHtml5, FaJava, FaLinux, FaPython, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiJavaFill, RiTailwindCssFill } from "react-icons/ri";
import { DiGit, DiJava, DiMysql } from "react-icons/di";
import { SiDocker, SiGrafana, SiKubernetes, SiLinuxserver, SiMysql, SiNextdotjs } from "react-icons/si";

const Skill = () => {
  return (
    <div className="project relative min-h-screen pt-10 pb-10 flex flex-col items-center justify-center" id="skills">
      <div className=" canva absolute inset-0 z-0">
        <Canvas>
          <Stars radius={50} count={2500} factor={4} fade speed={2} />
        </Canvas>
      </div>
      <div className="grid md:grid-cols-4 gap-[40px] sm: grid-cols-2">
        {/* <BubbleText /> */}
        {/* <DivOrigami /> */}
        <div>
          <FaHtml5 className="bg-opacity-0 text-white h-[150px] w-[150px]" title="HTML"/>
        </div>
        <div>
          <IoLogoJavascript className="bg-opacity-0 text-white h-[150px] w-[150px]" title="JavaScript"/>
        </div>
        <div>
          <SiNextdotjs className="bg-opacity-0 text-white h-[150px] w-[150px]" title="Next.js"/>
        </div>
        <div>
          <RiTailwindCssFill className="bg-opacity-0 text-white h-[150px] w-[150px]" title="Tailwind CSS"/>
        </div>
        <div>
          <DiJava className="bg-opacity-0 text-white h-[150px] w-[150px]" title="Java"/>
        </div>
        <div>
          <SiMysql className="bg-opacity-0 text-white h-[150px] w-[150px]" title="MySQL"/>
        </div>
        <div>
          <FaCloud className="bg-opacity-0 text-white h-[150px] w-[150px]" title="Cloud Computing"/>
        </div>
        <div>
          <FaAws className="bg-opacity-0 text-white h-[150px] w-[150px]" title="AWS"/>
        </div>
        <div>
          <FaPython className="bg-opacity-0 text-white h-[150px] w-[150px]" title="Python"/>
        </div>
        <div>
          <FaCss3 className="bg-opacity-0 text-white h-[150px] w-[150px]" title="CSS"/>
        </div>
        <div>
          <SiGrafana className="bg-opacity-0 text-white h-[150px] w-[150px]" title="Grafana"/>
        </div>
        <div>
          <DiGit className="bg-opacity-0 text-white h-[150px] w-[150px]" title="Git"/>
        </div>
        <div>
          <FaGithub className="bg-opacity-0 text-white h-[150px] w-[150px]" title="Github"/>
        </div>
        <div>
          <FaDocker className="bg-opacity-0 text-white h-[150px] w-[150px]" title="Docker"/>
        </div>
        <div>
          <SiKubernetes className="bg-opacity-0 text-white h-[150px] w-[150px]" title="Kubernetes"/>
        </div>
        <div>
          <FaLinux className="bg-opacity-0 text-white h-[150px] w-[150px]" title="Linux"/>
        </div>
      </div>
      {/* <Example /> */}

    </div>
  );
};

export default Skill;
