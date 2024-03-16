import { LayoutProject } from "..";

const badge = [
  {
    id: "1",
    title: "SITIO WEB",
    text: "https://youtube-clone-phi-two.vercel.app/",
  },
  {
    id: "2",
    title: "GITHUB",
    text: "https://github.com/LuchoDevjs/Youtube-Clone",
  },
  {
    id: "3",
    title: "STACK",
    text: "Reactjs / React-icons / Material-UI / Axios / Vercel",
  },
];

const images = [
  { id: "1", image: "/assets/projects/project2/screen1.png" },
  { id: "2", image: "/assets/projects/project2/screen2.png" },
];

export const Project2 = () => {
  return (
    <>
      <LayoutProject
        name="Youtube Clone 2023"
        title="Un sitio web personal."
        paragraph="Desarrollar un clon de YouTube me permitió poner en práctica mis conocimientos de ReactJS y mejorar mis habilidades de desarrollo de aplicaciones web. Aprendí mucho sobre cómo funcionan las aplicaciones de video en línea y cómo se pueden implementar diversas funcionalidades en una plataforma como esta."
        badgeItems={badge}
        images={images}
      />
    </>
  );
};
