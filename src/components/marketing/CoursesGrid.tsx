import courseImg from '@/assets/images/course-1.png';
import { Container } from '../layouts/Container';
import { CourseCard } from './CourseCard';

export const defaultCourseData = {
  id: 'quran-reading-basics',
  title: "Qur'an Reading Basics (Learn Noorani Qaida)",
  subtitle:
    'Start with Arabic letters, Tajweed rules, and fluency — ideal for first-time learners, kids, or adults.',
  duration: '1-3 months',
  audience: 'For All Age',
  mode: '1-On-1 & Group',
  isLive: true,
  badgeLabel: 'Enroll Today',
  imageSrc: courseImg,
  alt: 'Qur’an Reading Basics course cover',
};

export function CoursesGrid() {
  return (
    <Container className="flex flex-col gap-8.5">
      <div className="flex flex-col items-center gap-3.5 sm:text-center">
        <h2 className="max-w-[40rem] font-bold text-3xl leading-8.5">
          Online Islamic Courses for Every Muslim — Kids, Adults & Families
        </h2>
        <p className="max-w-[35rem] font-manrope font-medium text-sm text-subheading leading-5">
          Structured 5-day classes in Qur’an, Tajweed, and Deen — designed for
          kids, adults, and families. Learn from trusted teachers in a
          child-safe, spiritually uplifting environment, right from home.
        </p>
      </div>
      <div className="flex gap-5 overflow-x-auto sm:grid sm:grid-cols-3 sm:gap-3.5 md:grid-cols-4">
        {new Array(8).fill(null).map((_, index) => (
          <CourseCard course={defaultCourseData} key={index} />
        ))}
      </div>
    </Container>
  );
}
