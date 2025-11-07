import { twMerge } from "tailwind-merge";
import { Button, type ButtonProps } from "../components/Button";
import { SectionBorder } from "../components/SectionBorder";
import { SectionContent } from "../components/SectionContent";
import { CheckCircle2 } from "lucide-react";

export const pricingTiers = [
  {
    title: "Basic",
    description: "AI chatbot, personalized recommendations",
    price: "Free",
    buttonText: "Get Started",
    buttonVariant: "secondary",
    features: [
      "Access to AI chatbot for natural language conversations",
      "Basic task automation for simple workflows",
      "Limited message history storage",
    ],
    color: "amber",
    className: "lg:py-12 lg:my-6",
  },
  {
    title: "Premium",
    description: "Advanced AI capabilities for enhanced productivity",
    price: 99,
    buttonText: "Upgrade to Premium",
    buttonVariant: "secondary",
    features: [
      "All Basic features included",
      "Priority access to new AI features and updates",
      "Advanced automation tools for seamless task management",
      "Customizable chat templates for your specific workflows",
    ],
    color: "violet",
    className: "lg:py-18 lg:my-0",
  },
  {
    title: "Enterprise",
    description: "Custom AI chatbot, advanced analytics, dedicated account",
    price: null,
    buttonText: "Contact Us",
    buttonVariant: "primary",
    features: [
      "All Premium features included",
      "Dedicated account manager and priority customer support",
      "Enhanced security and compliance features for large teams",
      "Custom AI models tailored to your organization's needs",
      "API access for seamless integration with enterprise systems",
    ],
    color: "teal",
    className: "lg:py-12 lg:my-6",
  },
] satisfies {
  title : string,
  description : string,
  price : string | number | null,
  buttonText : string,
  buttonVariant ?: ButtonProps["variant"],
  features : string[],
  color : string,
  className : string
}[];

export const Pricing = () => {
  return (
    <section>
      <div className="container">
        <SectionBorder borderTop>
          <SectionContent>
            <h2 className="text-center text-3xl md:text-4xl lg:text-5xl leading-tight text-gray-200 font-semibold">
              Flexible plans for every need
            </h2>
            <div className="mt-12 flex flex-col gap-8  lg:flex-row lg:items-start ">
              {pricingTiers.map((tier) => (
                <div key={tier.title} className={twMerge("rounded-3xl border border-gray-200/20 px-6 py-12 max-w-sm mx-auto flex-1",
                  tier.className
                )}>
                  <h3 className={twMerge("text-4xl font-semibold",
                    tier.color === "amber" && "text-amber-300",
                    tier.color === "violet" && "text-violet-400",
                    tier.color === "teal" && "text-teal-300"
                  )}>
                    {tier.title}
                  </h3>

                  <p className="mt-4 text-gray-400 ">
                    {tier.description}
                  </p>

                  <div className="mt-8">
                    {typeof tier.price === "number" && (
                      <span className="text-2xl font-semibold text-gray-200 align-top">$</span>
                    )}
                    <span className="text-7xl font-semibold text-gray-200">
                      {tier.price ? tier.price : <>&nbsp;</>}
                    </span>
                  </div>

                  <Button block variant={tier.buttonVariant} className="uppercase mt-8">{tier.buttonText}</Button>
                 
                  <ul className="mt-8 flex flex-col gap-4">
                    {tier.features.map((feature) => (
                      <li key={feature} className="border-t border-gray-200/20 flex gap-4 pt-4">
                        <CheckCircle2 className="size-6 text-violet-400 shrink-0"/>
                        <span className="font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>

                </div>
              ))}
            </div>
          </SectionContent>
        </SectionBorder>
      </div>
    </section>
  )
};

export default Pricing;
