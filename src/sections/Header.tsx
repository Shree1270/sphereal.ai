import { Button , type ButtonProps} from "../components/Button";

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
    name : string;
    href : string;
    buttonVariant : ButtonProps['variant'];
}[];

export const Header = () => {
  return (
    <header className="border-b border-gray-200/20">
      <div className="container">
        <div className="h-18 lg:h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img src="/favicon.ico" alt="logo" className="size-10" />
            <div className="text-2xl font-extrabold">sphereal.ai</div>
          </div>

          <div className="h-full hidden lg:block">
           <nav className="h-full">
            {navItems.map(({name, href})=>(
              <a href={href} key={href}
              className={`h-full px-10 text-xs font-bold text-gray-400 uppercase tracking-widest relative inline-flex items-center
              before:content-[''] before:absolute before:h-2 before:w-px before:bg-gray-200/20 before:bottom-0 before:left-0
              last:after:content-[''] last:after:absolute last:after:h-2 last:after:w-px last:after:bg-gray-200/20 last:after:bottom-0 last:after:right-0`}
              >{name}</a>
            ))}
           </nav>
          </div>

          <div className="hidden lg:flex gap-4">
              {loginItems.map(({name, buttonVariant, href})=>(
                  <a href={href} key={name}>
                    <Button variant={buttonVariant}>{name}</Button>
                  </a>
              ))}
          </div>

          <div className="flex items-center lg:hidden">
            <button className="border-2 border-transparent rounded-lg size-10 relative [background:linear-gradient(var(--color-gray-950),var(--color-gray-950))_content-box,conic-gradient(from_45deg,var(--color-violet-400),var(--color-fuchsia-400),var(--color-amber-300),var(--color-teal-300),var(--color-violet-400))_border-box]">
              <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-4 h-0.5 bg-gray-100 -translate-y-1" />
              </div>

              <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-4 h-0.5 bg-gray-100 translate-y-1" />
              </div>

            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
