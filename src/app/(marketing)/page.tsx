import { AudienceTabs } from '@/components/marketing/AudienceTabs';
import { ClassOptions } from '@/components/marketing/ClassOptions';
import { CoursesGrid } from '@/components/marketing/CoursesGrid';
import { HeroSection } from '@/components/marketing/HeroSection';
import { WhyChooseMadrasaMaktab } from '@/components/marketing/WhyChooseMadrasaMaktab';

export default function Home() {
  return (
    <div className="space-y-18 py-18">
      <HeroSection />
      <AudienceTabs />
      <CoursesGrid />
      <ClassOptions />
      <CoursesGrid />
      <WhyChooseMadrasaMaktab />
    </div>
  );
}
