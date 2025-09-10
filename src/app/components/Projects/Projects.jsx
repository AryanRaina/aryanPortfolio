import React from "react";
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Card from "./Card";
import { motion } from "framer-motion";

const Projects = () => {
  const data = [
    {
      image: "/boy_down_1.png",
      link: "https://github.com/AryanRaina/2D-Adventure",
      name: "Adventure 2D",
      para: "Developed a 2D adventure game in Java using the Swing library, featuring tile-based navigation, item collection, and enemy encounters. Built custom GUI elements like menus, health bars, and dialog boxes, with smooth controls and pixel-art-style visuals. Implemented modular game logic for collision detection, level transitions, and scalable gameplay mechanics."
    },
    {
      image: "https://storage.googleapis.com/homes28images/properties/sample/landingPage/ChatGPT_Image_Aug_27__2025__03_00_22_PM-removebg-preview3.png",
      link: "https://homes28-403875145211.asia-south1.run.app/",
      name: "Homes 28",
      para: "Built Homes28, a property listing platform for buying, selling, and renting real estate using Next.js. Developed listing forms, search filters, and contact features with a responsive UI. Enabled smooth property uploads with images and descriptions. Focused on clear navigation, intuitive layout, and a straightforward listing-to-contact experience."
    },
    {
      image: "/unicolab_logo.png",
      link: "https://uni-colab.vercel.app/",
      name: "UniCoLab",
      para: "Built UniCoLab, a collaboration platform connecting student talent with seekers for projects, startups, and hackathons. Developed using Next.js, Tailwind CSS, Express.js, and MongoDB. Designed searchable talent profiles and a connect feature to enable seamless outreach. Focused on clean UI, practical functionality, and empowering meaningful collaborations."
    }
  ];

  return (
    <div className="project relative min-h-screen" id="project">
      <div className="absolute inset-0 z-0">
        <Canvas>
          <Stars radius={50} count={2500} factor={4} fade speed={2} />
        </Canvas>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 1 }}
        className="relative z-10 mx-auto w-[85%] py-12"
      >
        {data.map((x, index) => (
          <Card key={index} heading={x.name} detail={x.para} image={x.image} link={x.link} />
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;
