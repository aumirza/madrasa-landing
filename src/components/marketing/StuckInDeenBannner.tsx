import { Container } from '../layouts/Container';
import { Button } from '../ui/button';

export default function StuckInDeenBanner() {
  return (
    <Container>
      <div className="flex h-[23.25rem] items-center justify-between rounded-xl bg-gradient-to-b from-primary-900 to-primary-700 p-10">
        {/* right */}
        <div className="flex w-[25.75rem] flex-col gap-10">
          <div className="flex flex-col gap-3.5">
            <h3 className="font-semibold text-3xl text-white leading-[100%]">
              Stuck in Your Deen Journey? Get a Free Skill Check with 1-on-1
              Guidance
            </h3>
            <p className="font-manrope font-medium text-neutral-300 text-sm leading-5.5">
              Struggling with Quran, Tajweed, or reconnecting with your faith?
              Whether you’re a Parent, Student, Professional, a revert, or just
              seeking clarity — get a personalised Deen Skill Check in a
              spiritually safe space.
            </p>
          </div>
          <Button className="h-10 w-fit bg-gradient-cta">
            Check My Deen Skills
          </Button>
        </div>
        <div className="" />
      </div>
    </Container>
  );
}
