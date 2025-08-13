export interface ClassCardProps {
  title: string;
  description: string;
}
export function ClassCard({ title, description }: ClassCardProps) {
  return (
    <div className="flex flex-col gap-6.5">
      {/* image placeholder */}
      <div className="h-[13.75rem] w-full rounded-lg bg-brand" />
      <div className="flex flex-col gap-3 text-left">
        <p className="font-bold text-heading text-xl">{title}</p>
        <p className="font-manrope font-medium text-sm text-subheading leading-5.5">
          {description}
        </p>
      </div>
    </div>
  );
}
