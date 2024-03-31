import { ContactMe } from "@/components/ContactMe";
import { Skills } from "@/components/Skills";
import { WhoIam } from "@/components/WhoIam/page";
import { Works } from "@/components/Works";

export default function Home() {
  return (
    <main className=" m-auto  ">
      <div className=" w-full h-[80%] absolute left-0 top-[0px] z-[-1] bg-gradient-to-b from-[rgba(139,37,235,0.5)]"></div>

      <WhoIam></WhoIam>
      <ContactMe></ContactMe>
      <Works></Works>
      <Skills></Skills>

      
    </main>
  );
}
