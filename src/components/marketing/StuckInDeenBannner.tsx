import Image from 'next/image';
import bannerEffect from '@/assets/images/banner-effect.webp';
import stuckBanner from '@/assets/images/stuck-in-deen-banner.webp';
import { Container } from '../layouts/Container';
import { Button } from '../ui/button';

export default function StuckInDeenBanner() {
  return (
    <Container>
      <div className="flex flex-col items-stretch justify-between gap-8 overflow-x-hidden rounded-xl bg-gradient-to-b from-primary-900 to-primary-700 sm:flex-row">
        {/* right */}
        <div className="m-6 mr-0 flex max-w-full flex-col gap-10 sm:m-10 sm:w-[25.75rem] ">
          <div className="flex flex-col gap-3.5">
            <h3 className="font-semibold text-3xl text-white leading-[100%]">
              Stuck in Your Deen Journey? Get a Free Skill Check with 1-on-1
              Guidance
            </h3>
            <p className="font-manrope font-medium text-neutral-300 text-sm leading-5.5">
              Struggling with Quran, Tajweed, or reconnecting with your faith?
              Whether you're a Parent, Student, Professional, a revert, or just
              seeking clarity — get a personalised Deen Skill Check in a
              spiritually safe space.
            </p>
          </div>
          <Button className="h-10 w-fit bg-gradient-cta">
            Check My Deen Skills
          </Button>
        </div>
        <div className="relative flex items-end justify-end sm:self-stretch">
          {/* decorative background effect */}
          <Image
            alt="Decorative banner background"
            className="absolute top-0 h-full w-full object-cover opacity-80 blur-xl "
            priority
            src={bannerEffect}
          />

          {/* foreground illustration */}
          <div className="z-20 w-[21rem] lg:w-[26rem]">
            <Image
              alt="Person thinking — Stuck in Deen banner"
              className="block"
              priority
              src={stuckBanner}
            />
          </div>
        </div>
      </div>
    </Container>
  );
}
