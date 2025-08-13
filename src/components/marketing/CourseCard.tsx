import { MonitorPlayIcon } from '@phosphor-icons/react/ssr';

export function CourseCard() {
  return (
    <div className="flex flex-col gap-3.5">
      <div className="relative h-36 w-full overflow-hidden rounded-[.75rem]">
        <div className="h-full w-full bg-gray-200" />
        <div className="absolute top-1 right-1 z-20 flex items-center gap-1 rounded-xl bg-white px-1.5 py-0.5">
          <div className="size-2 rounded-full bg-semantic-error-500" />
          <span className="font-bold font-manrope text-sm">Live</span>
        </div>
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-primary/0 to-primary/100 opacity-70" />
      </div>
      <div className="flex flex-col gap-3">
        {/* Title and all details */}
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center gap-1.5 font-bold font-manrope text-[.625rem] text-neutral-500">
            <p>1-3 months</p>
            <div className="size-1 rounded-full bg-primary" />
            <p>For All Age</p>
            <div className="size-1 rounded-full bg-primary" />
            <p>1-On-1 & Group</p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-bold">
              Qur’an Reading Basics (Learn Noorani Qaida)
            </h3>
            <p className="font-manrope font-medium text-sm text-subheading">
              Start with Arabic letters, Tajweed rules, and fluency — ideal for
              first-time learners, kids, or adults.
            </p>
          </div>
        </div>
        {/* badge */}
        <div className="flex w-fit items-center gap-1 rounded-lg border border-light bg-gradient-to-r from-primary-50 to-primary-200 px-2 py-1">
          <MonitorPlayIcon className="size-4 text-primary" weight="fill" />
          <span className="font-bold font-manrope text-primary text-xs ">
            Enroll Today
          </span>
        </div>
      </div>
    </div>
  );
}
