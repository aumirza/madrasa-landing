import Image from 'next/image';
import bannerEffect from '@/assets/images/banner-effect.png';
import stuckBanner from '@/assets/images/stuck-in-deen-banner.png';
import { Container } from '../layouts/Container';
import { Button } from '../ui/button';

export default function StuckInDeenBanner() {
  return (
    <Container>
      <div className="flex flex-col items-center justify-between gap-8 overflow-x-hidden rounded-xl bg-gradient-to-b from-primary-900 to-primary-700 p-10 sm:flex-row">
        {/* right */}
        <div className="flex w-[25.75rem] max-w-full flex-col gap-10">
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
        <div className="-mr-10 -mb-13 relative flex items-center justify-end">
          {/* decorative background effect */}
          <div className="absolute inset-0 z-10 overflow-hidden">
            <Image
              alt="Decorative banner background"
              className="object-cover"
              fill
              priority
              src={bannerEffect}
              style={{
                transform: 'scale(1.9) translateX(6rem)',
                filter: 'blur(12px)',
                opacity: '70%',
              }}
            />
          </div>

          {/* foreground illustration */}
          <div className="relative z-20 w-[21rem]">
            <Image
              alt="Person thinking — Stuck in Deen banner"
              className="block"
              height={240}
              priority
              src={stuckBanner}
              width={336}
            />
          </div>
        </div>
      </div>
    </Container>
  );
}
