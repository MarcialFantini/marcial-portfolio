"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  NavbarContent,
  NavbarItem,
  Link,
} from "@nextui-org/react";
import { goToElement } from "@/utils/goToElement";
export default function NavbarComponent() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = ["Home", "Contact", "Works", "Skills"];
  const handlerGoToElement = (idElement: string) => () => {
    setIsMenuOpen(false);
    setTimeout(() => {
      goToElement(idElement);
    }, 50);
  };
  return (
    <Navbar isBordered isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent className=" flex flex-row justify-around w-auto">
        <NavbarBrand>
          <NavbarItem>
            <h2
              className={"text-purple-300 text-[1.3rem] border-x-fuchsia-500"}
            >
              Marcial Fantini
            </h2>
          </NavbarItem>
        </NavbarBrand>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              onPress={handlerGoToElement(item)}
              className="w-full"
              href={"#"}
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
