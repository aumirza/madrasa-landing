import { MonitorPlayIcon } from '@phosphor-icons/react/ssr';
import Image, { type StaticImageData } from 'next/image';
import defaultBlogImg from '@/assets/images/blog-1.webp';

type Props = {
  title: string;
  date: string;
  image?: StaticImageData | string;
};

export function BlogCard({ title, date, image }: Props) {
  const src = image ?? defaultBlogImg;

  return (
    <div className="flex flex-col gap-3.5">
      {/* image */}
      <div className="relative h-36 w-full overflow-hidden rounded-[.75rem]">
        <Image
          alt={title}
          className="object-cover"
          fill
          src={src}
          title={title}
        />
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-30% from-primary/0 to-primary/100 opacity-80" />
      </div>
      {/* content */}
      <div className="flex flex-col gap-3">
        {/* badge */}
        <div className="flex w-fit items-center gap-1 rounded-lg border border-light bg-gradient-to-r from-primary-50 to-primary-200 px-2 py-1">
          <MonitorPlayIcon className="size-4 text-primary" weight="fill" />
          <span className="font-bold font-manrope text-primary text-xs ">
            {date}
          </span>
        </div>
        {/* Title and all details */}
        <h4 className="font-semibold text-heading leading-5">{title}</h4>
      </div>
    </div>
  );
}
