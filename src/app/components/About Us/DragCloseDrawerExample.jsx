import React from "react";
import { useState } from 'react';
import useMeasure from "react-use-measure";
import {  useDragControls} from "framer-motion";
import {  useMotionValue} from "framer-motion";
import {  useAnimate} from "framer-motion";
import {  motion} from "framer-motion";

const DragCloseDrawerExample = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="grid h-[20px] w-[fit-content]  place-content-center bg-neutral-950">
      <button
        onClick={() => setOpen(true)}
        className="rounded bg-indigo-500 px-4 py-2 text-white transition-colors hover:bg-indigo-600"
      >
        Find Out 
      </button>

      <DragCloseDrawer open={open} setOpen={setOpen}>
        <div className="mx-auto max-w-2xl space-y-4 text-neutral-400">
          <h2 className="text-4xl font-bold text-neutral-200 text-slate-400 ">
            Always Building, Always Learning
          </h2>
          <p>
          I'm a Computer Science Engineering student with a growing passion for building things that work—cleanly, efficiently, and with purpose. I spend most of my time coding in Java and building web-based projects using HTML, CSS, and JavaScript. From developing 2D games with Java Swing to creating a student talent portal to connect peers for hackathons, I enjoy taking ideas and turning them into something real.
          </p>
          <p>
          What pulls me deeper into tech is the cloud. AWS, in particular, fascinates me—not just because it's powerful, but because it challenges me to think beyond code and consider how things scale, stay secure, and stay reliable. This interest naturally led me to explore DevSecOps, where development, security, and operations come together. I'm learning how real-world systems are deployed, monitored, and secured, and how these practices shape modern software development.
          </p>
          <p>
          While I'm still early in my machine learning journey, I find the intersection of data and intelligence exciting. It's a space I'm eager to grow into, one step (and project) at a time.
          </p>
          <p>
          I believe learning should be hands-on and curiosity-driven. I'm not just collecting skills—I'm trying to understand how they connect and how they can be applied to build better systems and solve meaningful problems. Whether I'm working on a project solo or collaborating with others, I care about writing thoughtful code, thinking through design decisions, and improving with every iteration.
          </p>
          <p>
          If you're curious about what I'm working on or have something interesting to build together—reach out. I'm always up for a good tech conversation or collaboration.
          </p>
          
        </div>
      </DragCloseDrawer>
    </div>
  );
};

const DragCloseDrawer = ({ open, setOpen, children }) => {
  const [scope, animate] = useAnimate();
  const [drawerRef, { height }] = useMeasure();

  const y = useMotionValue(0);
  const controls = useDragControls();

  const handleClose = async () => {
    animate(scope.current, {
      opacity: [1, 0],
    });

    const yStart = typeof y.get() === "number" ? y.get() : 0;

    await animate("#drawer", {
      y: [yStart, height],
    });

    setOpen(false);
  };

  return (
    <>
      {open && (
        <motion.div
          ref={scope}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={handleClose}
          className="fixed inset-0 z-50 bg-neutral-950/70"
        >
          <motion.div
            id="drawer"
            ref={drawerRef}
            onClick={(e) => e.stopPropagation()}
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{
              ease: "easeInOut",
            }}
            className="absolute bottom-0 h-[75vh] w-full overflow-hidden rounded-t-3xl bg-neutral-900"
            style={{ y }}
            drag="y"
            dragControls={controls}
            onDragEnd={() => {
              if (y.get() >= 100) {
                handleClose();
              }
            }}
            dragListener={false}
            dragConstraints={{
              top: 0,
              bottom: 0,
            }}
            dragElastic={{
              top: 0,
              bottom: 0.5,
            }}
          >
            <div className="absolute left-0 right-0 top-0 z-10 flex justify-center bg-neutral-900 p-4">
              <button
                onPointerDown={(e) => {
                  controls.start(e);
                }}
                className="h-2 w-14 cursor-grab touch-none rounded-full bg-neutral-700 active:cursor-grabbing"
              ></button>
            </div>
            <div className="relative z-0 h-full overflow-y-scroll p-4 pt-12">
              {children}
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default  DragCloseDrawerExample