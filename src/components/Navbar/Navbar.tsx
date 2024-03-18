"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { dataNavbar } from ".";
import {
  HiOutlineMail,
  HiOutlineUser,
  HiOutlineBookOpen,
} from "react-icons/hi";
import { VscTools } from "react-icons/vsc";
import { GoProjectSymlink } from "react-icons/go";
import { useTheme } from "next-themes";
import { IoSunnyOutline } from "react-icons/io5";
import { RxMoon } from "react-icons/rx";

export const Navbar = () => {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <nav className="flex flex-col gap-4 lg:flex-row lg:justify-between items-center items-center">
      <div className="flex flex-row gap-3 items-center">
        <HiOutlineMail size={20} />
        <Link
          href="mailto:lucianogonzalezz080@gmail.com"
          className="cursor-pointer hover:underline underline-offset-4"
        >
          lucianogonzalezz080@gmail.com
        </Link>
      </div>
      <div className="flex items-center gap-5 lg:gap-10 flex-row justify-center">
        {dataNavbar.map(({ id, name, idLink }) => (
          <Link
            key={id}
            href={idLink}
            className="border-b-2 border-transparent hover:border-black dark:hover:border-white"
          >
            <div className="lg:hidden">
              {id === 1 && <HiOutlineUser size={27} />}
              {id === 2 && <VscTools size={27} />}
              {id === 3 && <HiOutlineBookOpen size={27} />}
              {id === 4 && <GoProjectSymlink size={27} />}
            </div>
            <span className="hidden lg:block">{name}</span>
          </Link>
        ))}
        <button
          onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
        >
          {resolvedTheme === "dark" ? (
            <RxMoon size={25} />
          ) : (
            <IoSunnyOutline size={25} />
          )}
        </button>
      </div>
    </nav>
  );
};
