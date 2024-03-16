"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";
import { dataCarousel } from ".";

export const ProjectCarousel = () => {
  return (
    <div className="mb-24 flex flex-col items-center" id="projects">
      <div className="flex flex-col items-center justify-center gap-5 mb-20">
        <h1>Projectos</h1>
        <h2 className="text-2xl lg:text-4xl">Mis projectos</h2>
      </div>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-[260px] lg:w-full md:w-[600px]"
      >
        <CarouselContent>
          {dataCarousel.map(({ id, project, path }) => (
            <CarouselItem key={id} className="lg:basis-1/2">
              <div className="p-1">
                <Card className="border-none">
                  <CardContent className="flex items-center justify-center p-0 lg:p-6">
                    <Link href={path}>
                      <Image
                        src={project}
                        alt="Project"
                        width={600}
                        height={600}
                        className="rounded-xl hover:brightness-75 transition-all duration-500 ease-in-out cursor-pointer"
                      />
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};