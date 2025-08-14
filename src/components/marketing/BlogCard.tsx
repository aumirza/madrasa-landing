import { MonitorPlayIcon } from '@phosphor-icons/react/ssr';
import Image from 'next/image';
import blogImg from '@/assets/images/blog-1.png';

export function BlogCard() {
  return (
    <div className="flex flex-col gap-3.5">
      {/* image */}
      <div className="relative h-36 w-full overflow-hidden rounded-[.75rem]">
        <Image
          alt="The Maktab Revival blog banner"
          className="object-cover"
          fill
          src={blogImg}
          title="The Maktab Revival"
        />
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-30% from-primary/0 to-primary/100 opacity-80" />
      </div>
      {/* content */}
      <div className="flex flex-col gap-3">
        {/* badge */}
        <div className="flex w-fit items-center gap-1 rounded-lg border border-light bg-gradient-to-r from-primary-50 to-primary-200 px-2 py-1">
          <MonitorPlayIcon className="size-4 text-primary" weight="fill" />
          <span className="font-bold font-manrope text-primary text-xs ">
            26th July 2025
          </span>
        </div>
        {/* Title and all details */}
        <h4 className="font-semibold text-heading leading-5">
          The Maktab Revival: Why Your Child Needs It Now More Than Ever
        </h4>
      </div>
    </div>
  );
}
