import slackLogo from "../assets/images/slack-logo.png";
import dockerLogo from "../assets/images/docker-logo.png";
import figmaLogo from "../assets/images/figma-logo.png";
import githubLogo from "../assets/images/github-logo.png";
import vsCodeLogo from "../assets/images/vs-code-logo.png";
import notionLogo from "../assets/images/notion-logo.png";
import jiraLogo from "../assets/images/jira-logo.png";
import gcpLogo from "../assets/images/gcp-logo.png";
import { SectionBorder } from "../components/SectionBorder";
import { SectionContent } from "../components/SectionContent";
import { Button } from "../components/Button";
import { Orbit } from "../components/Orbit";
import { CheckCircle2 } from "lucide-react";

export const features = [
  "Effortless integration",
  "Intelligent automation",
  "Robust security",
];

export const logos = [
  {
    src: slackLogo,
    alt: "slack logo",
    rotate: 0,
  },
  {
    src: dockerLogo,
    alt: "docker logo",
    rotate: 45,
  },
  {
    src: figmaLogo,
    alt: "figma logo",
    rotate: 90,
  },
  {
    src: githubLogo,
    alt: "github logo",
    rotate: 135,
  },
  {
    src: vsCodeLogo,
    alt: "vs code logo",
    rotate: 180,
  },
  {
    src: notionLogo,
    alt: "notion logo",
    rotate: 225,
  },
  {
    src: jiraLogo,
    alt: "jira logo",
    rotate: 270,
  },
  {
    src: gcpLogo,
    alt: "gcp logo",
    rotate: 315,
  },
];

export const Features = () => {
  return (
    <section>
      <div className="container">
        <SectionBorder borderTop>
          <SectionContent >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 md:ml-20 lg:ml-40 lg:mr-10">
              <div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-300 leading-tight">Your AI-powered collaboration company </h2>
                <ul className="mt-8 flex flex-col gap-8">
                  {features.map((feature, key) => (
                    <li key={key} className="flex items-center gap-2">
                      <CheckCircle2 className="text-violet-400" />
                      <span className="text-xl font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="mt-16 uppercase">Try it now</Button>
              </div>

              <div className="flex justify-center shrink-0">
                <div className="relative size-[270px] md:size-[450px]">
                  <div className="absolute inset-0">
                    <Orbit className="size-full" />
                  </div>

                  <div className="absolute-center">
                    <Orbit className="size-[180px] md:size-[300px]" />
                  </div>

                  <div className="absolute-center">
                    <img src="/favicon.ico" alt="logo" className="size-24" />
                  </div>

                  {logos.map(({ src, alt, rotate }) => (

                    <div key={alt} className={`size-full absolute inset-0`}
                      style={{
                        transform: `rotate(${rotate}deg)`,
                      }}
                    >
                      <div className={` size-10 md:size-14 inline-flex items-center justify-center border border-gray-200/20 bg-gray-900 rounded-lg absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2`}
                        style={{
                          transform: ` rotate(-${rotate}deg)`,
                        }}
                      >
                        <img src={src} alt={alt} className="size-6 md:size-9" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </SectionContent>
        </SectionBorder>
      </div>
    </section>);
};

export default Features;
