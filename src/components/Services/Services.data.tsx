import { CgBrowser } from "react-icons/cg";
import { IoServerOutline } from "react-icons/io5";
import { VscTools } from "react-icons/vsc";

export const dataServices = [
  {
    id: 1,
    category: "Desarrollador Front-End",
    technologies:
      "Desarrollo el front-end utilizando Tailwind CSS y React JS, creando interfaces dinámicas y responsivas. Uso Redux para la gestión de estados y Next JS para aplicaciones renderizadas en el servidor. Empleo Typescript para añadir tipado estático y mejorar la calidad del código.",

    icon: <CgBrowser size={25} />,
  },
  {
    id: 2,
    category: "Desarrollador Back-End",
    technologies:
      "Trabajo con Node JS y Express para construir servidores y APIs robustas. Gestiono datos con MongoDB. Utilizo Git para el control de versiones y colaboración en equipo.",

    icon: <IoServerOutline size={25} />,
  },
  {
    id: 3,
    category: "Herramientas y Tecnologías Adicionales",
    technologies:
      "Integro Sass para escribir CSS de manera más eficiente. Utilizo Git para el control de versiones, asegurando una colaboración efectiva y un seguimiento detallado de los cambios en el proyecto.",
    icon: <VscTools size={25} />,
  },
];

export const dataCounter = [
  {
    id: 1,
    number: "5+",
    text: "Proyectos",
  },
  {
    id: 2,
    number: "2+",
    text: "Experiencia",
  },
];
