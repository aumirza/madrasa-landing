import { Container } from '../layouts/Container';
import { ClassCard } from './ClassCard';

const classOptions = [
  {
    title: '1-On-1 Classes',
    description:
      'Learn with a personal tutor, customised lessons, and a pace that suits your child’s needs.',
  },
  {
    title: 'Batch Classes',
    description:
      'Learn in a larger group with structured lessons, regular practice, and shared experiences.',
  },
  {
    title: 'Private Group Classes',
    description:
      'Learn in a small group with friends or family, focused lessons, and personal attention.',
  },
];

export function ClassOptions() {
  return (
    <Container className="flex flex-col items-center gap-8.5 sm:text-center">
      <div className="flex flex-col items-center gap-3.5 sm:text-center">
        <h3 className="max-w-[40rem] font-bold text-3xl text-heading leading-[100%]">
          Your Learning, Your Way - Class Options at Madrasa Maktab
        </h3>
        <p className="max-w-[32.5rem] font-manrope font-medium text-sm text-subheading leading-5 ">
          We offer flexible online Islamic learning options to suit every
          learner — whether you prefer personal attention, group interaction, or
          learning with close friends.
        </p>
      </div>
      {/* card */}
      <div className="flex w-full gap-5 overflow-x-auto sm:grid sm:grid-cols-3 sm:gap-10">
        {classOptions.map((option) => (
          <ClassCard key={option.title} {...option} />
        ))}
      </div>
    </Container>
  );
}
