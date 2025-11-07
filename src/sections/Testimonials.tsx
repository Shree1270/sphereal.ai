import React from "react";
import AshwinSantiago from "../assets/images/ashwin-santiago.jpg";
import AlecWhitten from "../assets/images/alec-whitten.jpg";
import ReneWells from "../assets/images/rene-wells.jpg";
import MollieHall from "../assets/images/mollie-hall.jpg";
import { SectionBorder } from "../components/SectionBorder";
import { SectionContent } from "../components/SectionContent";
import Quote from "../assets/images/quote.svg";

export const testimonials = [
  {
    quote:
      "Sphereal has completely transformed the way we collaborate. The AI chatbot's ability to automate tasks and provide insightful recommendations has saved us hours each week. It's now an indispensable part of our workflow.",
    name: "Ashwin Santiago",
    title: "Operations Manager",
    image: AshwinSantiago,
  },
  {
    quote:
      "Sphereal integrates effortlessly with our existing tools, and the AI chatbot feels like a natural extension of our team. The responses are impressively accurate, and it's always learning from our interactions.",
    name: "Alec Whitten",
    title: "Lead Developer",
    image: AlecWhitten,
  },
  {
    quote:
      "Sphereal's AI has elevated our customer service to a whole new level. Its real-time responses and personalized recommendations help us address client needs faster than ever. I can't imagine our support team without it.",
    name: "Rene Wells",
    title: "Customer Success Manager",
    image: ReneWells,
  },
  {
    quote:
      "I've never seen a tool like Sphereal. It's intuitive, responsive, and has helped us streamline projects that would normally take days. The AI capabilities are unmatched in terms of accuracy and speed.",
    name: "Mollie Hall",
    title: "Product Designer",
    image: MollieHall,
  },
];

const SELECTED_TESTIMONAL_INDEX = 0;

export const Testimonials = () => {
  return (
    <section>
      <div className="container">
        <SectionBorder borderTop>
          <SectionContent>
            <div className="border-gradient px-6 lg:px-16 lg:py-24 py-16 rounded-3xl flex flex-col md:flex-row items-center gap-9 lg:gap-6 md:gap-3 md:mx-10 md:px-10 lg:mx-20 relative">
              <img src={Quote} alt="quote" className="size-24 absolute top-0 -translate-y-1/2"/>
              {testimonials.map((testimonial, index) => (
                <div key={testimonial.name}>

                  {SELECTED_TESTIMONAL_INDEX === index && (
                    <blockquote className="flex flex-col lg:flex-row gap-12">
                      <p className="text-xl md:text-2xl font-medium">{testimonial.quote}</p>
                      <cite className="not-italic">
                      <img src={testimonial.image} alt={testimonial.name} className=" rounded-lg"/>
                      <div className="font-bold mt-3">{testimonial.name}</div>
                      <div className="text-xs mt-2">{testimonial.title}</div>
                      </cite>
                    </blockquote>
                  )}
                </div>
              ))}

              <div className="flex md:flex-col justify-center gap-2 ">
                {testimonials.map((testimonal, index)=>(
                  <div key={testimonal.name} className="size-6 relative inline-flex items-center justify-center isolate">
                    {SELECTED_TESTIMONAL_INDEX === index && (

                      <div className="absolute size-full border-gradient rounded-full -z-10"/>
                    )}
                    <div className="size-1.5 rounded-full bg-gray-200 "></div>
                  </div>
                ))}
              </div>
            </div>
          </SectionContent>
        </SectionBorder>
      </div>
    </section>
  )
};

export default Testimonials;
