import tutorImg from '@/assets/images/tutor.webp';
import { Container } from '../layouts/Container';
import { TutorCard } from './TutorCard';

export const defaultTutorData = {
  id: 'verified-tutor-1',
  title: 'Ustaad Ahmed — Quran & Tajweed',
  subtitle:
    'Experienced tutor specialising in Tajweed, Noorani Qaida and conversational Arabic.',
  duration: 'Ongoing',
  audience: 'Kids & Adults',
  mode: '1-On-1',
  isLive: true,
  badgeLabel: 'Book Trial',
  imageSrc: tutorImg,
  alt: 'Tutor profile image',
};

export function TutorGrid() {
  return (
    <Container className="flex flex-col gap-8.5">
      <div className="flex flex-col items-center gap-3.5 sm:text-center">
        <h2 className="max-w-[40rem] font-bold text-3xl leading-8.5">
          Verified Tutors — Find the right Ustaad for your child
        </h2>
        <p className="max-w-[35rem] font-manrope font-medium text-sm text-subheading leading-5">
          Browse qualified tutors, view bios and subjects, and book a trial
          lesson with the teacher who best matches your needs.
        </p>
      </div>
      <div className="flex gap-5 overflow-x-auto sm:gap-3.5 md:grid md:grid-cols-3 lg:grid-cols-4">
        {new Array(8).fill(null).map((_, index) => (
          <TutorCard
            key={`${defaultTutorData.id}-${index}`}
            tutor={defaultTutorData}
          />
        ))}
      </div>
    </Container>
  );
}
