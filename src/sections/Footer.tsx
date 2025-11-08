import {
  faYoutube,
  faXTwitter,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
  {
    name: "Login",
    href: "#login",
  },
];

export const socialLinks = [
  {
    name: "Youtube",
    icon: faYoutube,
    href: "#1",
  },
  {
    name: "X",
    icon: faXTwitter,
    href: "#2",
  },
  {
    name: "Discord",
    icon: faDiscord,
    href: "#3",
  },
];

export const Footer = () => {
  return (
  <footer className="border-t border-gray-200/20">
    <div className="container py-8">
    
      <div className="flex flex-col lg:flex-row lg:justify-between items-center gap-12">
        <div className="font-extrabold text-2xl">sphereal.ai</div>
        <nav className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
          {navItems.map((item)=>(
            <a href={item.href} key={item.name} className="uppercase text-gray-400 text-xs font-bold tracking-widest">
              {item.name}
            </a>
          ))}
        </nav>
      </div>

      <div className="mt-16">
        <div className="flex justify-center lg:justify-end gap-6">
          {socialLinks.map((link)=>(
            
              <div key={link.href} className="size-10 border border-gray-200/20 rounded-full inline-flex justify-center items-center">
              <FontAwesomeIcon icon={link.icon} className="size-8 "/>
              </div>
            
          ))}
        </div>
      </div>
    
    </div>
  </footer>
)};

export default Footer;
