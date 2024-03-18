"use client";
import { dataCounter, dataServices } from ".";
import { ScrollAnimation } from "@/components/Animations";

export const Services = () => {
  return (
    <section
      className="grid lg:grid-cols-2 sm:grid-cols-1 md:grid-col-1 gap-24 mb-24"
      id="services"
    >
      <div>
        <ScrollAnimation>
          <p className="mb-5">Servicios</p>
          <h1 className="text-2xl lg:text-4xl mb-5">Calidad en web</h1>
          <div>
            <p className="text-secondary-light dark:text-secondary-dark mb-10">
              Como desarrollador web, transformo sus ideas en soluciones
              digitales con un enfoque en creatividad y funcionalidad. Brindo
              servicios esenciales para mejorar su presencia en línea,
              garantizando resultados profesionales y efectivos.
            </p>
          </div>
          <div className="flex flex-row gap-8">
            {dataCounter.map(({ id, number, text }) => (
              <div key={id} className="flex flex-col gap-2">
                <p className="text-2xl lg:text-4xl">{number}</p>
                <p className="text-secondary-light dark:text-secondary-dark">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </ScrollAnimation>
      </div>

      <div className="flex flex-col items-center gap-10">
        {dataServices.map(({ id, category, technologies, icon }) => (
          <ScrollAnimation key={id}>
            <div className="flex flex-row items-start">
              <div className="mr-5">{icon}</div>
              <div className="flex flex-col gap-2">
                <h1>{category}</h1>
                <p className="text-secondary-light dark:text-secondary-dark">
                  {technologies}
                </p>
              </div>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </section>
  );
};
