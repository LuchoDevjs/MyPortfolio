import { LayoutProject } from "..";

const badge = [
  { id: "1", title: "SITIO WEB", text: "https://juanasotelo.vercel.app/" },
  {
    id: "2",
    title: "GITHUB",
    text: "https://github.com/LuchoDevjs/LandingPageJS/",
  },
  {
    id: "3",
    title: "STACK",
    text: "Reactjs / React-icons / Material-UI / Formik / SweetAlert2 / Vercel",
  },
];

const images = [
  { id: "1", image: "/assets/projects/project1/screen1.png" },
  { id: "2", image: "/assets/projects/project1/screen2.png" },
];

export const Project1 = () => {
  return (
    <>
      <LayoutProject
        name="Landing Page 2022"
        title="Un sitio web de la agencia Juana Sotelo para inscribirse en sus cursos de micropigmentación."
        paragraph="Desarrollé una landing page para una academia de micropigmentación, enfocada en optimizar la inscripción a sus cursos. Con un diseño intuitivo y accesible, esta página facilita a los usuarios la toma de decisiones informadas mediante la presentación clara y concisa de la información esencial."
        badgeItems={badge}
        images={images}
      />
    </>
  );
};
