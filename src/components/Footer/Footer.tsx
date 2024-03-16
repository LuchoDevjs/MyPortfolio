import Link from "next/link";
import { dataFooter } from ".";

export const Footer = () => {
  return (
    <section className="bg-noiseBlack bg-black">
      <div className="flex flex-row justify-between p-5 items-center max-w-8xl mx-auto">
        <div className="flex flex-col gap-3">
          <p className="text-white">lucianogonzalezz080@gmail.com</p>
          <p className="text-secondary">Buenos Aires, Argentina</p>
        </div>
        <div className="flex flex-row gap-5">
          {dataFooter.map(({ id, icon, link }) => (
            <Link key={id} href={link} className="text-3xl text-white">
              {icon}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
