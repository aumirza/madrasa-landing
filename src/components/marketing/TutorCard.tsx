import { MonitorPlayIcon } from '@phosphor-icons/react/ssr';
import Image, { type StaticImageData } from 'next/image';

export type Tutor = {
  id?: string;
  title: string;
  subtitle?: string;
  duration?: string;
  audience?: string;
  mode?: string;
  isLive?: boolean;
  badgeLabel?: string;
  imageSrc?: StaticImageData | string;
  alt?: string;
};

export function TutorCard({ tutor }: { tutor?: Tutor }) {
  return (
    <div className="flex flex-col gap-3.5">
      {/* image */}
      <div className="relative h-36 w-56 overflow-hidden rounded-[.75rem] sm:w-full">
        <Image
          alt={tutor?.alt || ''}
          className="object-cover"
          fill
          src={tutor?.imageSrc || ''}
          title={tutor?.title}
        />
        {tutor?.isLive ? (
          <div className="absolute top-1 right-1 z-20 flex items-center gap-1 rounded-xl bg-white px-1.5 py-0.5">
            <div className="size-2 rounded-full bg-semantic-error-500" />
            <span className="font-bold font-manrope text-sm">Live</span>
          </div>
        ) : null}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-30% from-primary/0 to-primary/100 opacity-80" />
      </div>
      {/* content */}
      <div className="flex flex-col gap-3">
        {/* Title and all details */}
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center gap-1.5 font-bold font-manrope text-[.625rem] text-neutral-500">
            <p className="text-nowrap">{tutor?.duration}</p>
            <div className="size-1 rounded-full bg-primary" />
            <p className="text-nowrap">{tutor?.audience}</p>
            <div className="size-1 rounded-full bg-primary" />
            <p className="text-nowrap">{tutor?.mode}</p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-bold">{tutor?.title}</h3>
            <p className="font-manrope font-medium text-sm text-subheading">
              {tutor?.subtitle}
            </p>
          </div>
        </div>
        {/* badge */}
        <div className="flex w-fit items-center gap-1 rounded-lg border border-light bg-gradient-to-r from-primary-50 to-primary-200 px-2 py-1">
          <MonitorPlayIcon className="size-4 text-primary" weight="fill" />
          <span className="font-bold font-manrope text-primary text-xs ">
            {tutor?.badgeLabel}
          </span>
        </div>
      </div>
    </div>
  );
}
