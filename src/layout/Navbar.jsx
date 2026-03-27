import React, { useState, useEffect } from "react";
import Button from "../componets/Button";
import { Menu, X } from "lucide-react";
const Navbar = () => {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLink = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#testimonial", label: "Testimonial" },
  ];

  return (
 
    <header className={`fixed top-0 left-0 right-0 z-60 py-4 transition-all duration-500 ease-out ${isScrolled ? "navbar-glass animate-nav-shell-in" : "bg-transparent"}`}>
      <nav className="container mx-auto px-6 flex items-center justify-between">
        <a
          href="#"
          className="text-xl font-bold tracking-tight hover:text-primary pl-5"
        >
          SAFWAN <span className="text-primary">.</span>
        </a>
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
            {navLink.map((link, index) => (
              <a key={index} href={link.href} className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface" >
                {link.label}
              </a>
            ))}
          </div>
        </div>


        {/* CTA button */}
        <div className="hidden md:block">
          <Button
            size="sm"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Contact Me
          </Button>
        </div>
        {/* Mobile Menu Button */}
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center p-2 text-foreground hover:cursor-pointer"
          aria-label="Toggle mobile menu"
          onClick={()=>setIsMobileMenuOpen((prev)=>!prev)}
        >
          {isMobileMenuOpen?<X size={24}/>:<Menu size={24}/>}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen &&(
      <div className="md:hidden strong-glass animate-fade-in">
        <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {navLink.map((link, index) => (
              <a key={index} href={link.href} className="text-lg text-muted-foreground hover:text-foreground py-2" >
                {link.label}
              </a>
            ))}
             <Button
               onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
             >
               Contact Me
             </Button>
          </div>
      </div>)}
    </header>
  );
};

export default Navbar;
