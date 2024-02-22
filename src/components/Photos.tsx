import React, { Suspense } from "react";
import image1 from "@/img/image-1.jpg";
import image2 from "@/img/image-2.jpg";
import image3 from "@/img/image-3.jpg";
import image4 from "@/img/image-4.jpg";
import image5 from "@/img/image-5.jpg";
import Image from "next/image";
import clsx from "clsx";

const LoadImage = async ({ imgSrc }: { imgSrc: any }) => {
  const random = Math.floor(Math.random() * 5 * 5) * 100;
  await new Promise((resolve: any) => setTimeout(resolve, random));
  return (
    <Image
      src={imgSrc}
      alt="loadImage"
      sizes="(min-width: 640px) 18rem, 11rem"
      className="absolute inset-0 h-full w-full object-cover"
    />
  );
};

const Photos = () => {
  let rotations = [
    "rotate-2",
    "-rotate-2",
    "rotate-2",
    "rotate-2",
    "-rotate-2",
  ];
  return (
    <div className="my-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 py-4 sm:gap-8">
        {[image1, image2, image3, image4, image5].map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              "relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800",
              rotations[imageIndex % rotations.length]
            )}
          >
            <Suspense
              fallback={
                <div className="w-full h-full bg-black/80 flex items-center justify-center">
                  <p className="text-2xl font-medium text-white tracking-wider animate-pulse">
                    Loading...
                  </p>
                </div>
              }
            >
              <LoadImage imgSrc={image} />
            </Suspense>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Photos;
