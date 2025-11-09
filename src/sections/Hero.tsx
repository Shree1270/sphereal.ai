import { useEffect, useRef, useState } from "react";
import { Button } from "../components/Button";
import { Orbit } from "../components/Orbit";
import { Planets } from "../components/Planets";
import { SectionBorder } from "../components/SectionBorder";
import { SectionContent } from "../components/SectionContent";
import { motion, useMotionValue, useMotionValueEvent, useScroll, useSpring, useTransform } from "motion/react";
// import underLineImage from '../assets/images/underline.svg'

const useMousePosition =() =>{
  const [innerWidth, setInnerWidth] = useState(1);
  const [innerHeight, setInnerHeight] = useState(1);
  const clientX = useMotionValue(0);
  const clientY = useMotionValue(0);
  
  const xProgress = useTransform(clientX, [0, innerWidth], [0, 1]);
  const yProgress = useTransform(clientY, [0, innerHeight], [0, 1]);

  useEffect(()=>{
    setInnerWidth(window.innerWidth);
    setInnerHeight(window.innerHeight);

    window.addEventListener("resize", ()=>{
      setInnerWidth(window.innerWidth);
      setInnerHeight(window.innerHeight);
    })
  },[])

  useEffect(()=>{
    window.addEventListener("mousemove",(e)=>{
      clientX.set(e.clientX);
      clientY.set(e.clientY);
    })
  },[])

  return { xProgress, yProgress};
}

export const Hero = () => {

  const { xProgress, yProgress } = useMousePosition();
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target : sectionRef,
    offset : ['end start', 'start end']
  })

  const translateY = useTransform(scrollYProgress, [0,1], [200, -200]);

  const springX = useSpring(xProgress);
  const springY = useSpring(yProgress);

  const translateLargeX = useTransform(springX, [0,1], ['-25%', '25%']);
  const translateLargeY = useTransform(springY, [0,1], ['-25%', '25%']);

  const translateMediumX = useTransform(springX, [0,1], ['-50%', '50%']);
  const translateMediumY = useTransform(springY, [0,1], ['-50%', '50%']);

  const translateSmallX = useTransform(springX, [0,1], ['-200%', '200%']);
  const translateSmallY = useTransform(springY, [0,1], ['-200%', '200%']);

  return (
    <section ref={sectionRef}>
      <div className="container">
        <SectionBorder>
          <SectionContent className="relative isolate  mask-[linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
            <div className="absolute -z-10 inset-0 bg-[radial-gradient(circle_farthest-corner,var(--color-fuchsia-900)_50%,var(--color-indigo-900)_75%,transparent)] mask-[radial-gradient(circle_farthest-side,black,transparent)]"></div>
            <div className="absolute -z-10 inset-5">
              <div className="absolute-center">
                <Orbit className="size-[350px]"/>
              </div>
              <div className="absolute-center">
                <Orbit className="size-[600px]"/>
              </div>
              <div className="absolute-center">
                <Orbit className="size-[850px]"/>
              </div>
              <div className="absolute-center">
                <Orbit className="size-[1100px]"/>
              </div>
              <div className="absolute-center">
                <Orbit className="size-[1350px]"/>
              </div>
            </div>
            <h1 className="text-4xl md:text-[45px] lg:text-6xl font-semibold text-gray-100 text-center leading-tight">
              Unlock the Future of AI Conversations with {' '}
              <span className="relative">
                <span>
                  Sphereal
                </span>
              </span>
            </h1>

            <p className="mt-8 text-center text-lg md:text-xl max-w-3xl mx-auto">
              Harness the power of AI with Sphereal.
              Elevate your productivity and streamline your workflow with our cutting-edge AI chat platform
            </p>

            <div className="mt-10 font-semibold text-center">
              <Button variant="secondary" className="uppercase">Start Chatting</Button>
            </div>

            <div className="relative isolate max-w-5xl mx-auto">
              <div className="absolute left-1/2 top-0">
              <motion.div style={{
                x: translateLargeX,
                y: translateLargeY,
              }}>
                <Planets size="lg" color="violet" className="-translate-x-[316px] -translate-y-[76px] rotate-135"/>
              </motion.div>

              <motion.div style={{
                x: translateLargeX,
                y: translateLargeY, 
              }}>
                <Planets size="lg" color="violet" className="translate-x-[334px] -translate-y-[188px] -rotate-135"/>
              </motion.div>

              <motion.div style={{
                x: translateSmallX,
                y: translateSmallY,
              }}>
                <Planets size="sm" color="fuchsia" className="-translate-y-[372px] -translate-x-[508px] rotate-135"/>
              </motion.div>

              <motion.div style={{
                x: translateMediumX,
                y: translateMediumY,
              }}>
                <Planets size="md" color="teal" className="-translate-y-[342px] translate-x-[488px] -rotate-135"/>
              </motion.div>
              </div>

              <div className="absolute z-10 top-[30%] left-0 -translate-x-10 hidden lg:block">
                <motion.div className="bg-gray-800/70 border border-gray-700 rounded-xl backdrop-blur-md p-4 w-72"
                style={{
                  y: translateY
                }}
                >
                  <div>
                    Can you generate an incredible frontend dev video tutorial?
                  </div>
                  <div className="text-right text-sm font-semibold text-gray-400">1m ago</div>
                </motion.div>
              </div>

              <div className="absolute z-10 top-[50%] right-0 translate-x-10 hidden lg:block">
                <motion.div className="bg-gray-800/70 border border-gray-700 rounded-xl backdrop-blur-md p-4 w-72"
                style={{
                  y: translateY
                }}
                >
                  <div>
                   <strong>Brainwave:</strong> I created one based on videos from Frontend Tribe!
                  </div>
                  <div className="text-right text-sm font-semibold text-gray-400">Just now</div>
                </motion.div>
              </div>
            
            <div className="mt-20 rounded-2xl border-2 overflow-hidden border-gradient relative flex">
              <img src="src/assets/images/robot.jpg" alt="robot-img" />
              <div className="absolute bottom-2 md:bottom-4 lg:bottom-10 left-1/2 -translate-x-1/2 w-xs px-[15px]">
                <div className="flex items-center gap-4 px-4 py-2 bg-gray-900/80 rounded-2xl w-[320px] max-w-full">
                  <img src="src/assets/images/loader-animated.svg" alt="loader" className="text-red-400 text-xl"/>
                  <div className="text-xl font-semibold text-gray-100">
                    AI is generating<span className="cursor-blink">|</span>
                  </div>
                </div>
                </div>
              </div>
            </div>
          </SectionContent>
        </SectionBorder>
      </div>
    </section>
  )
};

export default Hero;
