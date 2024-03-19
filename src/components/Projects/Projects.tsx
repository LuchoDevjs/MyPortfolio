"use client";

import Image from "next/image";
import Link from "next/link";
import { dataProjects } from ".";
import { ScrollAnimation } from "../Animations";

export const ProjectCarousel = () => {
  return (
    <ScrollAnimation>
      <div className="mb-24 flex flex-col items-center" id="projects">
        <div className="flex flex-col items-center justify-center gap-5 mb-20">
          <h1>Proyectos</h1>
          <h2 className="text-2xl lg:text-4xl">Mis proyectos</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {dataProjects.map(({ id, project, path }) => (
            <Link key={id} href={path}>
              <Image
                src={project}
                alt="Project"
                width={600}
                height={600}
                className="rounded-xl hover:brightness-75 transition-all duration-500 ease-in-out cursor-pointer"
              />
            </Link>
          ))}
        </div>
      </div>
    </ScrollAnimation>
  );
};
