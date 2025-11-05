import { Button } from "../components/Button";
import { Orbit } from "../components/Orbit";
// import underLineImage from '../assets/images/underline.svg'

export const Hero = () => {
  return (
    <section className="pb-[1000px]">
      <div className="container">
        <div className="border-l border-r border-gray-200/20">
          <div className="container py-24 md:py-36 relative isolate overflow-hidden mask-[linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
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
            <h1 className="text-4xl md:text-[45px] font-semibold text-gray-100 text-center leading-tight">
              Unlock the Future of AI Conversations with {' '}
              <span className="relative">
                <span>
                  Sphereal
                </span>
              </span>
            </h1>

            <p className="mt-8 text-center text-lg md:text-xl ">
              Harness the power of AI with Sphereal.
              Elevate your productivity and streamline your workflow with our cutting-edge AI chat platform
            </p>

            <div className="mt-10 font-semibold text-center">
              <Button variant="secondary">Start Chatting</Button>
            </div>

            <div className="relative">
              <div className="absolute left-1/2 top-0">
                <div className="bg-linear-to-b from-violet-400 to-gray-900 rounded-full size-8 -translate-y-[76px] -translate-x-[316px] rotate-135"/>
              </div>
            
            <div className="mt-20 rounded-2xl border-2 overflow-hidden border-gradient relative flex justify-center">
              <img src="src/assets/images/robot.jpg" alt="robot-img" />
              <div className="absolute bottom-2 md:bottom-4 md:left-132 left-1/2 -translate-x-1/2 w-full px-4">
                <div className="flex items-center gap-4 px-4 py-2 bg-gray-900/80 rounded-2xl w-[320px] max-w-full">
                  <img src="src/assets/images/loader.svg" alt="loader" className="text-red-400 text-xl"/>
                  <div className="text-xl font-semibold text-gray-100">
                    AI is generating<span>|</span>
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};

export default Hero;
