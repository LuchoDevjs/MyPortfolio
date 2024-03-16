import Link from "next/link";
import { dataNavbar } from ".";
import { HiOutlineMail } from "react-icons/hi";

export const Navbar = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex flex-row gap-3 items-center">
        <HiOutlineMail size={20} />
        <p>lucianogonzalezz080@gmail.com</p>
      </div>
      <div className="flex items-center gap-10 flex-row justify-center">
        {dataNavbar.map(({ id, name, idLink }) => (
          <Link key={id} href={idLink}>
            {name}
          </Link>
        ))}
      </div>
    </div>
  );
};
