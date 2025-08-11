import { CaretRightIcon } from '@phosphor-icons/react/ssr';
import Link from 'next/link';
import { CTAButtons } from '../marketing/CTAButtons';
import { Button } from '../ui/button';
import Logo from './Logo';
import { MobileNav } from './MobileNav';
import { Nav } from './Nav';

export function Header() {
  return (
    <div
      className="flex items-center justify-between gap-5 bg-white px-4.5 py-4 shadow-xs md:px-10"
      id="site-header"
    >
      <div className="flex items-center gap-10 md:gap-7">
        <Logo />
        <div className="flex items-center gap-4.5">
          <Nav />

          <Button
            asChild
            className={
              'group/cta hidden gap-0.5 rounded-full bg-brand px-2.5 py-2 text-primary transition-all duration-200 hover:text-white md:flex'
            }
            size="sm"
          >
            <Link href="#">
              Explore Madrasa App
              <CaretRightIcon className="text-primary transition duration-200 group-hover/cta:text-white" />
            </Link>
          </Button>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <CTAButtons />
        <MobileNav />
      </div>
    </div>
  );
}
