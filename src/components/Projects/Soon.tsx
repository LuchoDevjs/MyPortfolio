import Image from "next/image";
import { dataNewProjects } from "@/components/Projects";
import { Separator } from "@radix-ui/react-separator";

export const Soon = () => {
  return (
    <div>
      <h2 className="text-xl mb-5 font-semibold">Proximamente</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {dataNewProjects.map(({ id, project }) => (
          <Image
            key={id}
            src={project}
            alt="Project"
            width={600}
            height={600}
            className="rounded-xl hover:brightness-75 transition-all duration-500 ease-in-out cursor-not-allowed"
          />
        ))}
      </div>
      <Separator className="bg-secondary-light dark:text-secondary-dark mx-auto h-[1px] my-12" />
    </div>
  );
};
