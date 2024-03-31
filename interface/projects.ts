import { StaticImageData } from "next/image";

export interface Projects {
  title: string;
  img: string | StaticImageData;
  link: string;
}
