import { Container } from '../layouts/Container';
import { CourseCard } from './CourseCard';

export function CoursesGrid() {
  return (
    <Container className="flex flex-col gap-8.5">
      <div className="flex flex-col items-center gap-3.5 text-center">
        <h2 className="max-w-[40rem] font-bold text-3xl leading-8.5">
          Online Islamic Courses for Every Muslim — Kids, Adults & Families
        </h2>
        <p className="max-w-[35rem] font-manrope font-medium text-sm text-subheading leading-5">
          Structured 5-day classes in Qur’an, Tajweed, and Deen — designed for
          kids, adults, and families. Learn from trusted teachers in a
          child-safe, spiritually uplifting environment, right from home.
        </p>
      </div>
      <div className="grid grid-cols-4 gap-3.5">
        {new Array(8).fill(null).map((_, index) => (
          <CourseCard key={index} />
        ))}
      </div>
    </Container>
  );
}
