"use client";

import Link from "next/link";
import { dataNavbar } from ".";
import { HiOutlineMail } from "react-icons/hi";

export const Navbar = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex flex-row gap-3 items-center">
        <HiOutlineMail size={20} />
        <Link
          href="mailto:lucianogonzalezz080@gmail.com"
          className="cursor-pointer"
        >
          lucianogonzalezz080@gmail.com
        </Link>
      </div>
      <div className="flex items-center gap-10 flex-row justify-center">
        {dataNavbar.map(({ id, name, idLink }) => (
          <Link
            key={id}
            href={idLink}
            className="border-b-2 border-transparent hover:border-black"
          >
            {name}
          </Link>
        ))}
      </div>
    </div>
  );
};
