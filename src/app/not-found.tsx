import Link from "next/link";
import { HiArrowLongRight } from "react-icons/hi2";

export default function NotFound() {
  return (
    <section className="flex flex-col justify-center items-center text-center h-screen w-screen gap-3">
      <h1 className="text-7xl font-bold">404</h1>
      <div>
        <p className="font-bold text-4xl mb-2"> Pagina no encontrada.</p>
        <p className="text-secondary-light dark:text-secondary-dark">
          Lo siento, no se puedo encontrar la pagina que estas buscando.
        </p>
      </div>
      <Link href="/">
        <button className="flex flex-row items-center hover:text-[#606060] hover:dark:text-[#d0d0d0]">
          Ir al inicio <HiArrowLongRight size={20} className="ml-1" />
        </button>
      </Link>
    </section>
  );
}
