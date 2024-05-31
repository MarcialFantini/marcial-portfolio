import { Projects } from "../../../interface/projects";

import srcImageFirst from "../../../public/image/works/fasco.webp";
import srcImageSecond from "../../../public/image/works/coffe.webp";
import srcImageThird from "../../../public/image/works/lawyer.webp";
import srcImageFourt from "../../../public/image/works/shadient.webp";

export const projects: Projects[] = [
  {
    img: srcImageFirst,
    title: "Fasco",
    link: "https://fasco-six.vercel.app/",
    description: "Minimalist website for a clothing store ",
  },
  {
    img: srcImageSecond,
    title: "Coffe",
    link: "https://coffe-three.vercel.app/",
    description: "Minimalist website for a Coffee ",
  },
  {
    img: srcImageThird,
    title: "lawyer-my-city",
    description: "Formal website for a law firm",
    link: "https://lawyer-my-city.vercel.app/",
  },
  {
    img: srcImageFourt,
    title: "shadient",
    link: "https://shadient.vercel.app/",
    description: "Modern website for a start up ",
  },
];
