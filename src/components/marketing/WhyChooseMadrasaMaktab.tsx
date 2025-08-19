import { RocketIcon } from '@phosphor-icons/react/dist/ssr';
import Image from 'next/image';
import whyLearnFromMaktabImage from '@/assets/images/why-learn-from-maktab.png';
import { Container } from '../layouts/Container';

const data = [
  {
    title: '1-on-1 & Batch Classes',
    description:
      'Personalised Zoom/Meet sessions for Qur’an, Arabic, Salah, Duas, Aqeedah, and character-building.',
  },
  {
    title: 'Flexible Timings',
    description:
      'Busy lifestyle? Choose slots that work for you — early morning, evening, or weekends.',
  },
  {
    title: 'Verified Tutors',
    description:
      'View tutor bios, subjects, and language preferences before joining. Learn from those you trust.',
  },
  {
    title: 'Child-Safe Learning',
    description:
      'We ensure every class is safe, respectful, and aligned with Islamic values — so parents can trust the environment.',
  },
];

export function WhyChooseMadrasaMaktab() {
  return (
    <Container className="flex flex-col gap-8.5" fluid="sm">
      <Container className="flex flex-col gap-3.5 sm:items-center sm:text-center">
        <div className="flex flex-col gap-2 sm:items-center">
          <div className="flex w-fit items-center gap-1 rounded-lg bg-gradient-to-r from-semantic-success-50 to-semantic-success-100 px-2 py-1">
            <RocketIcon
              className="size-4 text-semantic-success-600"
              weight="bold"
            />
            <span className="font-manrope font-semibold text-semantic-success-600 text-xs">
              Powered By <span className="font-extrabold">Madrasa App</span>
            </span>
          </div>
          <h3 className="font-bold text-3xl leading-[100%]">
            Why learn from Madrasa Maktab?
          </h3>
        </div>
        <div className="max-w-[30rem]">
          <span className="font-manrope font-medium text-sm text-subheading leading-5">
            Because we are the best Islamic online EdTech platform — reimagined
            with technology for a new generation.
          </span>
        </div>
      </Container>
      <div className="flex flex-col sm:flex-row">
        <div className="h-full shrink-0 sm:w-1/3">
          <div className="relative aspect-square h-full w-full overflow-hidden">
            <Image
              alt="Why learn from Madrasa Maktab"
              className="object-cover"
              fill
              src={whyLearnFromMaktabImage}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2">
          {data.map((item) => (
            <div className="flex gap-3.5 border px-5 py-7" key={item.title}>
              {/* Icon Placeholder */}
              <div className="size-10 shrink-0 rounded-lg bg-accent" />

              {/* Text content */}
              <div className="flex flex-col gap-1">
                <p className="font-semibold text-heading">{item.title}</p>
                <p className="font-manrope text-sm text-subheading">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
