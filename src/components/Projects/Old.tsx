import Image from "next/image";
import Link from "next/link";
import { dataOldProjects } from "@/components/Projects";
import { Separator } from "@radix-ui/react-separator";

export const Old = () => {
  return (
    <div>
      <h2 className="text-xl mb-5 font-semibold">Antiguos</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {dataOldProjects.map(({ id, project, path }) => (
          <Link key={id} href={path}>
            <Image
              src={project}
              alt="Project"
              width={600}
              height={600}
              className="rounded-xl hover:brightness-75 transition-all duration-500 ease-in-out cursor-pointer"
            />
          </Link>
        ))}
      </div>
      <Separator className="bg-secondary-light dark:text-secondary-dark mx-auto h-[1px] my-12" />
    </div>
  );
};
