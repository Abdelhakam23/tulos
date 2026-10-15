"use client";
import {
  SanityImageAssetReference,
  SanityImageCrop,
  SanityImageHotspot,
} from "@/sanity.types";
import { urlFor } from "@/sanity/lib/image";

import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { act, useState } from "react";

interface Props {
  images?: Array<{
    asset?: SanityImageAssetReference;
    media?: unknown;
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
    _key: string;
  }>;
}

const ImageView = ({ images = [] }: Props) => {
  const [activeImage, setActiveImage] = useState(images[0]);
  return (
    <div className="w-full space-y-2 md:space-y-4 ">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeImage?._key}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="border border-border group w-full min-h-112.5 max-h-137.5 rounded-md overflow-hidden "
        >
          <Image
            src={urlFor(activeImage).url()}
            alt="ProductImages"
            width={700}
            height={700}
            className="w-full h-auto max-h-137.5 min-h-125 object-contain rounded-md group-hover:scale-110 hoverEffect"
          />
        </motion.div>
      </AnimatePresence>
      <div className=" grid grid-cols-6 justify-center items-center gap-2 ">
        {images.map((image) => (
          <button
            onClick={() => setActiveImage(image)}
            key={image?._key}
            className={`h-20 border overflow-hidden relative rounded-md hoverEffect ${activeImage?._key === image?._key ? " ring-1 ring-darkColor" : "border-transparent opacity-70 hover:opacity-100"}  `}
          >
            <Image
              src={urlFor(image).url()}
              alt="ProductImages"
              fill
              className=" object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ImageView;
