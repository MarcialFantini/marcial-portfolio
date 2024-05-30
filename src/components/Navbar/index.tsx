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

  const menuLinks = {
    Home: "Inicio",
    Contact: "Contacto",
    Works: "Trabajos",
    Skills: "Habilidades",
  };
  const handlerGoToElement = (idElement: string) => () => {
    console.log(idElement);
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
        {Object.entries(menuLinks).map((item, index) => (
          <NavbarMenuItem key={`${item[0]}-${index}`}>
            <Link
              onPress={handlerGoToElement(item[1])}
              className="w-full"
              href={"#"}
              size="lg"
            >
              {item[0]}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
