"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { dataEducation } from ".";
import { ScrollAnimation } from "../Animations";
import { Skeleton } from "../ui/skeleton";

export const Education = () => {
  return (
    <ScrollAnimation>
      <div
        className="flex justify-center flex-col items-center mb-24"
        id="education"
      >
        <div className="flex flex-col items-center justify-center gap-5 mb-20">
          <h1>Educación</h1>
          <h2 className="text-2xl lg:text-4xl">Mi educación</h2>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          orientation="vertical"
          className="w-full max-w-3xl"
        >
          <CarouselContent className="-mt-1 h-[300px] lg:h-[700px] md:h-[800px] sm:h-[700px]">
            {dataEducation.map(({ id, diploma }) => (
              <CarouselItem key={id} className="pt-1 basis-1/2">
                <div className="p-1">
                  <Card className="border-none">
                    <CardContent className="flex items-center justify-center p-0 lg:p-6">
                      <Image
                        src={diploma}
                        alt="Diploma"
                        width={700}
                        height={700}
                        className="rounded-xl"
                      />
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
    </ScrollAnimation>
  );
};
