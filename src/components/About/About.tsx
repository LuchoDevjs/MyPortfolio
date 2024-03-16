import Image from "next/image";
import { HiOutlineDownload } from "react-icons/hi";

export const About = () => {
  return (
    <div className="flex flex-col my-24 gap-5 max-w-[475px] max-y-[157px] mx-auto">
      <div className="flex flex-col gap-3 items-center">
        <Image
          src="/assets/lucianoGonzalez.jpeg"
          alt="Profile"
          width={100}
          height={100}
          className="rounded-full"
        />
        <p className="text-xl">Luciano González</p>
      </div>
      <div className="flex flex-col gap-8 text-center">
        <h1 className="text-4xl">Desarrollador web.</h1>
        <p className="text-secondary">
          Soy Desarrollador Web Junior especializado en frontend, con
          conocimientos en backend. Me enfoco en desarrollar sitios web
          responsivos y funcionales, garantizando calidad y eficiencia.
        </p>
        <div className="flex flex-row justify-center items-center gap-3">
          <button>Download CV</button>
          <HiOutlineDownload size={25} />
        </div>
      </div>
    </div>
  );
};
