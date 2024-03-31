import { Projects } from "../../../interface/projects";

import ImageTop from "../../../public/image/top-image.jpg";
import srcImageFirst from "../../../public/image/works/fasco.png";
import srcImageSecond from "../../../public/image/works/coffe.png";
import srcImageThird from "../../../public/image/works/lawyer.png";
import srcImageFourt from "../../../public/image/works/shadient.png";

export const projects: Projects[] = [
  {
    img: srcImageFirst,
    title: "Fasco",
    link: "https://fasco-six.vercel.app/",
  },
  {
    img: srcImageSecond,
    title: "Coffe",
    link: "https://coffe-three.vercel.app/",
  },
  {
    img: srcImageThird,
    title: "lawyer-my-city",
    link: "https://lawyer-my-city.vercel.app/",
  },
  {
    img: srcImageFourt,
    title: "shadient",
    link: "https://shadient.vercel.app/",
  },
];
