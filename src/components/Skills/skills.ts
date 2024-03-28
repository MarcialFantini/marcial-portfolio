import { StaticImageData } from "next/image";
import srcJavascript from "../../../public/image/icons/css.webp";
import srcCss from "../../../public/image/icons/css.webp";
import srcExpress from "../../../public/image/icons/express.png";
import srcGit from "../../../public/image/icons/git.webp";
import srcHtml from "../../../public/image/icons/html.webp";
import srcMongo from "../../../public/image/icons/mongo.png";
import srcTypescript from "../../../public/image/icons/typescript.png";
import srcReact from "../../../public/image/icons/react.png";
import srcNext from "../../../public/image/icons/next.png";
import srcRedux from "../../../public/image/icons/redux.webp";

interface Skill {
  src: StaticImageData;
  title: string;
}

export const skills: Skill[] = [
  {
    src: srcCss,
    title: "Css 3",
  },
  {
    src: srcExpress,
    title: "Express js",
  },
  {
    src: srcGit,
    title: "Git",
  },
  {
    src: srcHtml,
    title: "Html5",
  },
  {
    src: srcJavascript,
    title: "JavaScript ",
  },
  {
    src: srcMongo,
    title: "Mongoose",
  },
  {
    src: srcNext,
    title: "Next js",
  },
  {
    src: srcRedux,
    title: "Redux toolkit",
  },
  {
    src: srcReact,
    title: "React js",
  },
  {
    src: srcTypescript,
    title: "TypScript",
  },
];
