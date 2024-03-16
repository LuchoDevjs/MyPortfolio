"use client";
import Image from "next/image";
import { dataEducation } from ".";

export const Education = () => {
  return (
    <section className="mb-24">
      <div className="flex flex-col items-center justify-center gap-5 mb-16">
        <h1>Educación</h1>
        <h2 className="text-4xl">Mi educación</h2>
      </div>
      <div className="grid grid-cols-2">
        {dataEducation.map(({ id, diploma }) => (
          <Image
            src={diploma}
            key={id}
            alt="Diploma"
            width={600}
            height={600}
            className="p-2"
          />
        ))}
      </div>
    </section>
  );
};
