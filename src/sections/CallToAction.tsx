import { Button } from "../components/Button";
import { Orbit } from "../components/Orbit";
import { Planets } from "../components/Planets";
import { SectionBorder } from "../components/SectionBorder";
import { SectionContent } from "../components/SectionContent";

export const CallToAction = () => {
  return (
  <section>
    <div className="container">
      <SectionBorder borderTop>
        <SectionContent className="relative isolate">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_farthest-corner,var(--color-fuchsia-900)_50%,var(--color-indigo-900)_75%,transparent)] mask-[radial-gradient(circle_farthest-side,black,transparent)]"/>
          <div className="absolute inset-0 -z-10">
            <Orbit className="size-[200px] absolute-center"/>
            <Orbit className="size-[350px] absolute-center"/>
            <Orbit className="size-[500px] absolute-center"/>
            <Orbit className="size-[650px] absolute-center"/>
            <Orbit className="size-[800px] absolute-center"/>
          </div>

          <div className="absolute-center -z-10">
            <Planets
              size="lg"
              color="violet"
              className="translate-y-[200px] -translate-x-[200px] rotate-45"
            />
          </div>
          <div className="absolute-center -z-10">
            <Planets
              size="lg"
              color="violet"
              className="translate-x-[200px] -translate-y-[200px] -rotate-135"
            />
          </div>
          <div className="absolute-center -z-10">
            <Planets
              size="md"
              color="teal"
              className="-translate-x-[500px]  rotate-90"
            />
          </div>
          <div className="absolute-center -z-10">
            <Planets
              size="md"
              color="teal"
              className="translate-x-[500px] -translate-y-[100px] -rotate-135"
            />
          </div>
          <div className="absolute-center -z-10">
            <Planets
              size="sm"
              color="fuchsia"
              className="-translate-x-[400px] -translate-y-[250px] rotate-135"
            />
          </div>
          <div className="absolute-center -z-10">
            <Planets
              size="sm"
              color="fuchsia"
              className="translate-x-[400px] translate-y-[150px] -rotate-45"
            />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl max-w-3xl mx-auto font-semibold text-gray-200 leading-tight text-center">
            Join the AI Revolution with Sphereal
          </h2>
          <p className="mt-8 text-xl text-center max-w-2xl mx-auto">
            Experience the transformative power of AI with Sphereal. Boost your productivity and streamline your workflow with our innovative AI chat platform.
          </p>
          <div className="mt-10 font-semibold text-center">
            <Button variant="secondary" className=" uppercase">Get Started</Button>
          </div>
        </SectionContent>
      </SectionBorder>
    </div>
  </section>
)};

export default CallToAction;
