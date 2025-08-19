export interface ClassCardProps {
  title: string;
  description: string;
}
export function ClassCard({ title, description }: ClassCardProps) {
  return (
    <div className="flex flex-col gap-6.5">
      {/* image placeholder */}
      <div className="h-40 w-60 rounded-lg bg-brand sm:h-[13.75rem] lg:w-64" />
      <div className="flex flex-col gap-3 text-left">
        <p className="font-bold text-heading text-xl">{title}</p>
        <p className="font-manrope font-medium text-sm text-subheading leading-5.5">
          {description}
        </p>
      </div>
    </div>
  );
}
