import { useState } from "react";
import { Button, type ButtonProps } from "../components/Button";
import { twMerge } from "tailwind-merge";
import { Orbit } from "../components/Orbit";

export const navItems = [
  {
    name: "Features",
    href: "#features",
  },
  {
    name: "Pricing",
    href: "#pricing",
  },
  {
    name: "Testimonials",
    href: "#testimonials",
  },
];

export const loginItems = [
  {
    buttonVariant: "tertiary",
    name: "Login",
    href: "#login",
  },
  {
    buttonVariant: "primary",
    name: "Sign Up",
    href: "#sign-up",
  },
] satisfies {
  name: string;
  href: string;
  buttonVariant: ButtonProps['variant'];
}[];

export const Header = () => {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <>
      <header className="border-b border-gray-200/20 relative z-40">
        <div className="container">
          <div className="h-18 lg:h-20 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img src="/favicon.ico" alt="logo" className="size-10" />
              <div className="text-2xl font-extrabold">sphereal.ai</div>
            </div>

            <div className="h-full hidden lg:block">
              <nav className="h-full">
                {navItems.map(({ name, href }) => (
                  <a href={href} key={href}
                    className={`h-full px-10 text-xs font-bold text-gray-400 uppercase tracking-widest relative inline-flex items-center
              before:content-[''] before:absolute before:h-2 before:w-px before:bg-gray-200/20 before:bottom-0 before:left-0
              last:after:content-[''] last:after:absolute last:after:h-2 last:after:w-px last:after:bg-gray-200/20 last:after:bottom-0 last:after:right-0`}
                  >{name}</a>
                ))}
              </nav>
            </div>

            <div className="hidden lg:flex gap-4">
              {loginItems.map(({ name, buttonVariant, href }) => (
                <a href={href} key={name}>
                  <Button variant={buttonVariant}>{name}</Button>
                </a>
              ))}
            </div>

            <div className="flex items-center lg:hidden">
              <button className={`border-2 border-transparent rounded-lg size-10 relative 
              [background:linear-gradient(var(--color-gray-950),var(--color-gray-950))_content-box,conic-gradient(from_45deg,var(--color-violet-400),var(--color-fuchsia-400),var(--color-amber-300),var(--color-teal-300),var(--color-violet-400))_border-box]`}
              onClick={()=> setIsMobileMenuOpen((prev ) => !prev)}
              >
                <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className={twMerge("w-4 h-0.5 bg-gray-100 -translate-y-1 transition duration-300",
                    isMobileMenuOpen && "translate-y-0 rotate-45"
                  )} />
                </div>

                <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className={twMerge("w-4 h-0.5 bg-gray-100 translate-y-1 transition duration-300",
                    isMobileMenuOpen && "translate-y-0 -rotate-45"
                  )} />
                </div>

              </button>
            </div>
          </div>
        </div>
      </header>

      {isMobileMenuOpen && 
        <div className=" fixed top-18 left-0 right-0 bottom-0 z-30 bg-gray-900 overflow-hidden">
          <div className="absolute-center isolate -z-10">
           <Orbit className="size-[200px]"/>
          </div>
          <div className="absolute-center isolate -z-10">
           <Orbit className="size-[350px]"/>
          </div>
          <div className="absolute-center isolate -z-10">
           <Orbit className="size-[500px]"/>
          </div>
          <div className="absolute-center isolate -z-10">
           <Orbit className="size-[650px]"/>
          </div>
          <div className="absolute-center isolate -z-10">
           <Orbit className="size-[800px]"/>
          </div>
          
          <div className="container h-full">
            <nav className="h-full flex flex-col items-center justify-center gap-4 py-8">
              {navItems.map(({name,href})=>(
                <a href={href} key={href} className="text-xs font-bold tracking-widest text-gray-400 h-10 uppercase">
                  {name}
                </a>
              ))}

              {loginItems.map(({buttonVariant, name, href})=>(
                <a href={href} key={name} className="w-full max-w-xs">
                  <Button block variant={buttonVariant} >
                    {name}
                  </Button>
                </a>
              ))}
            </nav>
          </div>
        </div>
      }
    </>
  );
};

export default Header;
