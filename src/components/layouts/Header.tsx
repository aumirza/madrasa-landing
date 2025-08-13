'use client';
import { CaretRightIcon } from '@phosphor-icons/react/ssr';
import Link from 'next/link';
import { useScrollDirection } from '@/hooks/use-scroll-direction';
import { cn } from '@/lib/utils';
import { CTAButtons } from '../marketing/CTAButtons';
import { Button } from '../ui/button';
import Logo from './Logo';
import { MobileNav } from './MobileNav';
import { Nav } from './Nav';

export function Header() {
  const { scrollDirection, isAtTop } = useScrollDirection();

  return (
    <div
      className={cn(
        'fixed top-0 right-0 left-0 z-50 flex items-center justify-between gap-5 px-4.5 py-4 shadow-lg transition-all duration-300 ease-in-out md:px-10',
        // Glass effect styles
        'border-white/20 border-b bg-white/50 backdrop-blur-sm',
        // Show/hide based on scroll direction
        scrollDirection === 'down' && !isAtTop
          ? '-translate-y-full'
          : 'translate-y-0'
        // Shadow effect when not at top
        // !isAtTop && 'shadow-black/5 shadow-lg'
      )}
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
