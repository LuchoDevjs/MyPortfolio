import { LayoutProject } from "..";

const badge = [
  { id: "1", title: "SITIO WEB", text: "https://gzz.vercel.app/" },
  {
    id: "2",
    title: "GITHUB",
    text: "https://github.com/LuchoDevjs/GZ",
  },
  {
    id: "3",
    title: "STACK",
    text: "ReactJS / NextJS / Typescript / TailwindCss / React-hook-form / React-icons / Vercel",
  },
];

const images = [
  { id: "1", image: "/assets/projects/project5/ScreenHero.png" },
  { id: "2", image: "/assets/projects/project5/ScreenContact.png" },
];

export const Project5 = () => {
  return (
    <>
      <LayoutProject
        name="Landing Page 2024"
        title="Un sitio web personal en el cual ofrezo mis servicios web."
        paragraph="Desarrollé una landing page personal con el objetivo de ofrecer mis servicios de desarrollo web. Usando tecnologías como ReactJS, NextJS, TypeScript, TailwindCSS y React-hook-form, creé una plataforma intuitiva y accesible. Este proyecto destaca mi capacidad para diseñar y ejecutar soluciones web eficientes, centradas en las necesidades del usuario."
        badgeItems={badge}
        images={images}
      />
    </>
  );
};
