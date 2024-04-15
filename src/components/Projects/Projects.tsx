"use client";

import { New, Old, Soon } from ".";
import { ScrollAnimation } from "../Animations";

export const ProjectCarousel = () => {
  return (
    <ScrollAnimation>
      <div className="mb-24 flex flex-col items-center" id="projects">
        <div className="flex flex-col items-center justify-center gap-5 mb-20">
          <h1>Proyectos</h1>
          <h2 className="text-2xl lg:text-4xl">Mis proyectos</h2>
        </div>
        <section className="flex flex-col items-center justify-center">
          <New />
          <Old />
          <Soon />
        </section>
      </div>
    </ScrollAnimation>
  );
};
