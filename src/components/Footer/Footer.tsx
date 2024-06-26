import Link from "next/link";
import { dataFooter } from ".";
import { HiOutlineMail } from "react-icons/hi";
import { Separator } from "@/components/ui/separator";
import { FaRegCopyright } from "react-icons/fa";

export const Footer = () => {
  return (
    <section className="bg-black dark:bg-[#d8d8d8] rounded-t-[50px]">
      <div className="flex flex-col lg:flex-row gap-8 justify-between p-5 items-center max-w-8xl mx-auto">
        <div className="flex flex-col gap-3 text-center">
          <div className="flex flex-row gap-3 items-center">
            <HiOutlineMail size={20} className="text-white dark:text-black" />
            <Link
              href="mailto:lucianogonzalezz080@gmail.com"
              className="text-white dark:text-black cursor-pointer hover:underline underline-offset-4"
            >
              lucianogonzalezz080@gmail.com
            </Link>
          </div>
          <p className="text-secondary-light dark:text-secondary-dark">
            Buenos Aires, Argentina
          </p>
        </div>
        <div className="flex flex-row gap-5">
          {dataFooter.map(({ id, icon, link }) => (
            <Link
              key={id}
              href={link}
              target="_blank"
              className="text-3xl text-white dark:text-black hover:text-[#d1d1d1] hover:dark:text-[#414141]"
            >
              {icon}
            </Link>
          ))}
        </div>
      </div>
      <Separator className="bg-secondary-light dark:text-secondary-dark w-[80%] mx-auto" />
      <div className="flex flex-row items-center justify-center gap-1 p-3 text-[#999999] dark:text-[#474747]">
        <FaRegCopyright />
        <p className="text-sm">2024 Luciano Gonzalez.</p>
      </div>
    </section>
  );
};
