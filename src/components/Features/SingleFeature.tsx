import Image from "next/image";
import Link from "next/link";
import { Feature } from "@/types/feature";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { image, icon, title, paragraph, href } = feature;
  return (
    <div className="wow fadeInUp w-full overflow-hidden rounded-sm border border-body-color/10 bg-white shadow-md transition-shadow duration-300 hover:shadow-xl dark:border-body-color/20 dark:bg-gray-dark" data-wow-delay=".15s">
      {/* Image */}
      <div className="relative h-56 w-full bg-gray-100 dark:bg-dark">
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            className="object-contain p-6"
          />
        ) : icon ? (
          <div className="flex h-full items-center justify-center">
            <div className="bg-primary/10 text-primary flex h-[70px] w-[70px] items-center justify-center rounded-md">
              {icon}
            </div>
          </div>
        ) : null}
      </div>

      {/* Content */}
      <div className="p-8">
        <h3 className="mb-3 text-xl font-bold text-black dark:text-white sm:text-2xl">
          {title}
        </h3>
        <p className="mb-5 text-base leading-relaxed text-body-color dark:text-body-color-dark">
          {paragraph}
        </p>
        {href && (
          <Link
            href={href}
            className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
          >
            View Product &rarr;
          </Link>
        )}
      </div>
    </div>
  );
};

export default SingleFeature;
