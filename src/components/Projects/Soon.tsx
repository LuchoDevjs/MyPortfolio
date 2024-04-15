import Image from "next/image";
import { dataSoonProjects } from "@/components/Projects";

export const Soon = () => {
  return (
    <div>
      <h2 className="text-xl mb-5 font-semibold">Proximamente</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {dataSoonProjects.map(({ id, project }) => (
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
    </div>
  );
};
