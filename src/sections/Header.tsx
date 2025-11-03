
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
];

export const Header = () => {
  return (
  <header className=" border-b border-gray-200/20">
      <div className="container">
        <div className="h-18 max-w-7xl mx-auto flex justify-between items-center sm:px-6">
          <div className="flex items-center gap-4 px-3">
            <img src="/favicon.ico" alt="logo" className='size-10'/>
            <div className="text-2xl font-extrabold">sphereal.ai</div>
          </div>

          <div></div>

          <div className="flex items-center  pr-5">
            <button className="size-10 rounded-lg border-2 border-transparent relative [background:linear-gradient(var(--color-gray-950),var(--color-gray-950))_content-box,conic-gradient(from_45deg,var(--color-violet-400),var(--color-fuchsia-400),var(--color-amber-300),var(--color-teal-300))_border-box] ">
              <div className="absolute left-1/2  -translate-x-1/2 -translate-y-1/2">
                <div className="w-4 h-0.5 bg-gray-200 -translate-y-1"/>
              </div>

              <div className="absolute left-1/2  -translate-x-1/2 -translate-y-1/2">
                <div className="w-4 h-0.5 bg-gray-200 translate-y-1"/>
              </div>
              
            </button>
          </div>
        </div>
      </div>  
  </header>
  );
};

export default Header;
