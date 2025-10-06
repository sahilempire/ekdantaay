"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { Phone } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const navItems = [
    {
      name: "Home",
      link: "#home",
    },
    {
      name: "Services",
      link: "#services",
    },
    {
      name: "About",
      link: "#about",
    },
    {
      name: "Contact",
      link: "#contact",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <Navbar>
      {/* Desktop Navigation */}
      <NavBody>
        <NavbarLogo />
        <NavItems items={navItems} />
        <div className="flex items-center gap-8">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm">
              <Phone className="w-4 h-4 text-white" />
              <a href="tel:9587815285" className="text-white hover:text-gray-200 transition-colors font-medium">
                9587815285
              </a>
            </div>
          </div>
          <NavbarButton variant="primary">Book Appointment</NavbarButton>
        </div>
      </NavBody>

      {/* Mobile Navigation */}
      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo />
          <MobileNavToggle
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </MobileNavHeader>

        <MobileNavMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        >
          {navItems.map((item, idx) => (
            <a
              key={`mobile-link-${idx}`}
              href={item.link}
              onClick={() => setIsMobileMenuOpen(false)}
              className="relative text-gray-700 hover:text-gray-900 py-2"
            >
              <span className="block">{item.name}</span>
            </a>
          ))}
          <div className="pt-4 border-t border-gray-200">
            <div className="flex items-center space-x-2 text-sm mb-4">
              <Phone className="w-4 h-4 text-dental-darkGray" />
              <a href="tel:9587815285" className="text-dental-darkGray">
                9587815285
              </a>
            </div>
          </div>
          <div className="flex w-full flex-col gap-4">
            <NavbarButton
              onClick={() => setIsMobileMenuOpen(false)}
              variant="primary"
              className="w-full"
            >
              Book Appointment
            </NavbarButton>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}

