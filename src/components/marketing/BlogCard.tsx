import { MonitorPlayIcon } from '@phosphor-icons/react/ssr';

export function BlogCard() {
  return (
    <div className="flex flex-col gap-3.5">
      <div className="relative h-36 w-full overflow-hidden rounded-[.75rem]">
        <div className="h-full w-full bg-gray-200" />
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-primary/0 to-primary/100 opacity-70" />
      </div>
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
