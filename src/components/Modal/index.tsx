"use client";

import { Projects } from "../../../interface/projects";
import { Suspense, useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@nextui-org/react";
import Link from "next/link";

export const ModalProject = ({ project }: { project: Projects }) => {
  const [isHover, setIsHover] = useState(false);
  const [active, setActive] = useState(false);
  const [loadAnimate, setLoadAnimate] = useState(false);
  const [isShow, setIsShow] = useState(false);

  const toggleIsHover = () => setIsHover(!isHover);
  const toggleIsShow = () => setIsShow(!isShow);
  const toggleModal = () => {
    if (active) {
      toggleAnimate();
      setTimeout(() => {
        setActive(false);
        setIsShow(false);
      }, 350);
    } else {
      setActive(!active);
    }
  };

  const toggleAnimate = () => {
    setTimeout(() => {
      setLoadAnimate(!loadAnimate);
    }, 50);
  };

  useEffect(() => {
    if (active) {
      toggleAnimate();
      setTimeout(() => {
        toggleIsShow();
      }, 600);
    }
  }, [active]);

  const handleBackgroundClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (event.target === event.currentTarget) {
      toggleModal();
    }
  };

  return (
    <>
      <div
        style={{
          display: !active ? "none" : "flex",
          opacity: !loadAnimate ? "0" : "1",
        }}
        onClick={handleBackgroundClick}
        className={
          "transition-all fixed backdrop-blur-[2px] bg-[rgb(0,0,0,0.2)] p-[5%] w-full h-full top-0 left-0 z-50"
        }
      >
        <div
          className="p-4 m-auto max-w-[1200px] rounded-2xl relative w-full h-full bg-black grid md:grid-cols-2 grid-rows-2 md:grid-rows-1 overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          <Button
            onClick={toggleModal}
            className="absolute right-[10px] top-[10px] font-bold z-50"
            color="danger"
            variant="shadow"
          >
            X
          </Button>

          <picture className="h-full w-full overflow-hidden">
            <Image
              style={{ transform: `translateX(${!isShow ? 100 : 0}%)` }}
              className="transition-all h-auto w-full object-cover"
              src={project.img}
              alt={project.title}
            />
          </picture>

          <div
            style={{ transform: `translateY( ${!isShow ? 100 : 0}%)` }}
            className=" transition-all  flex flex-col items-center justify-center gap-4"
          >
            <h3 className="text-2xl uppercase">{project.title}</h3>
            <p>{project.description}</p>
            <Button
              as={Link}
              target="_blank"
              href={project.link}
              variant="ghost"
              color="success"
            >
              See more!
            </Button>
          </div>
        </div>
      </div>
      <article
        onMouseEnter={toggleIsHover}
        onMouseLeave={toggleIsHover}
        className="cursor-pointer border-black border-x-2 border-y-2 relative flex items-start justify-start overflow-hidden rounded-2xl"
      >
        <h4
          style={{ bottom: isHover ? 0 : "-30%" }}
          className="transition-all absolute p-4 bg-[rgb(0,0,0)] backdrop-blur-sm w-full text-center z-10 text-base"
        >
          {project.title}
        </h4>

        <picture
          onClick={toggleModal}
          className="max-h-[400px] overflow-hidden w-full flex justify-start items-start"
        >
          <Suspense>
            <Image
              style={{ scale: isHover ? 1.2 : 1 }}
              className="w-full h-full object-cover transition-all"
              src={project.img}
              alt={project.title}
            />
          </Suspense>
        </picture>
      </article>
    </>
  );
};
