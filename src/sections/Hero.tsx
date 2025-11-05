import { Button } from "../components/Button";
import underLineImage from '../assets/images/underline.svg'

export const Hero = () => {
  return (
    <section className="pb-[1000px]">
      <div className="container">
        <div className="border-l border-r border-gray-200/20">
          <div className="container py-24">
            <h1 className="text-4xl font-semibold text-gray-100 text-center leading-tight">
              Unlock the Future of AI Conversations with {' '}
              <span className="relative">
                <span>Sphereal</span>
              </span>
            </h1>

            <p className="mt-8 text-center text-lg">
              Harness the power of AI with Sphereal.
              Elevate your productivity and streamline your workflow with our cutting-edge AI chat platform
            </p>

            <div className="mt-10 font-semibold text-center">
              <Button variant="secondary">Start Chatting</Button>
            </div>

            <div className="mt-20 rounded-2xl border-2 overflow-hidden border-gradient">
              <img src="src/assets/images/robot.jpg" alt="robot-img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};

export default Hero;
