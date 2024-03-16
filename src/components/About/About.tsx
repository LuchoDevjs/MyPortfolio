import Image from "next/image";
import Link from "next/link";
import { HiOutlineDownload } from "react-icons/hi";

export const About = () => {
  return (
    <div className="flex flex-col my-24 gap-5 max-w-[475px] max-y-[157px] mx-auto">
      <div className="flex flex-col gap-3 items-center">
        <Image
          src="/assets/my/lucianoGonzalez.jpeg"
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
        <div className="flex flex-row justify-center items-center gap-3 w-full">
          <Link href="/assets/cv/LucianoGonzalez-CV.pdf" target="_blank">
            <button className="flex flex-row gap-3 rounded-xl p-2 border border-transparent hover:border-black">
              Ver CV <HiOutlineDownload size={25} />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
