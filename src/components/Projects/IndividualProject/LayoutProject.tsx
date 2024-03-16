import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";

interface Map {
  id: string;
  title: string;
  text: string;
}

interface MapImages {
  id: string;
  image: string;
}

interface Props {
  name: string;
  title: string;
  paragraph: string;
  badgeItems: Array<Map>;
  images: Array<MapImages>;
}

export const LayoutProject = ({
  name,
  title,
  paragraph,
  badgeItems,
  images,
}: Props) => {
  return (
    <>
      <Breadcrumb className="mb-5 text-secondary-light dark:text-secondary-dark">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink
              href="/#projects"
              className="hover:text-primary-light hover:dark:text-primary-dark hover:underline underline-offset-4"
            >
              Inicio
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem className="text-primary-light dark:text-primary-dark">
            {name}
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <section>
        <div className="flex flex-col gap-5 mb-5">
          <p>{title}</p>
          <p className="text-secondary-light dark:text-secondary-dark">
            {paragraph}
          </p>
        </div>
        <section>
          <div className="flex flex-col gap-3 mb-10">
            {badgeItems.map(({ id, title, text }) => (
              <div key={id} className="flex flex-row gap-3 flex-wrap">
                <Badge className="text-white dark:text-black bg-primary-light dark:bg-primary-dark rounded-md">
                  {title}
                </Badge>

                {id !== "3" ? (
                  <Link
                    href={text}
                    target="_blank"
                    className="hover:underline underline-offset-4 text-sm"
                  >
                    {text}
                  </Link>
                ) : (
                  <span className="text-sm">{text}</span>
                )}
              </div>
            ))}
          </div>
          <div className="flex flex-col items-center">
            {images.map(({ id, image }) => (
              <Image
                src={image}
                key={id}
                alt="Code"
                width={900}
                height={900}
                className="mb-7 rounded-xl"
              />
            ))}
          </div>
        </section>
      </section>
    </>
  );
};
