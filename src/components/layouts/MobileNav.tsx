'use client';

import {
  ArrowLeftIcon,
  CaretRightIcon,
  ListIcon,
  XIcon,
} from '@phosphor-icons/react/ssr';
import { AnimatePresence, motion } from 'motion/react';
import Link from 'next/link';
import { useCallback, useEffect, useId, useRef, useState } from 'react';
// import { cn } from '@/lib/utils'; // Removed unused import
import { CTAButtons } from '../marketing/CTAButtons';
import { Button } from '../ui/button';
import { NAV_ITEMS } from './Nav';

/**
 * Mobile navigation drawer with accessible focus management + escape/overlay close.
 */
export function MobileNav() {
  const [open, setOpen] = useState(false);
  const [currentSubmenu, setCurrentSubmenu] = useState<string | null>(null);
  // Disable scroll outside when mobile nav is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);
  const [headerHeight, setHeaderHeight] = useState(0);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const labelId = useId();

  // Measure header height
  useEffect(() => {
    const measure = () => {
      const el = document.getElementById('site-header');
      if (el) {
        setHeaderHeight(el.offsetHeight);
      }
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  const toggle = useCallback(() => setOpen((o) => !o), []);
  const close = useCallback(() => {
    setOpen(false);
    setCurrentSubmenu(null);
    // Return focus to trigger button when menu closes
    setTimeout(() => {
      triggerRef.current?.focus();
    }, 100);
  }, []);

  // Handle escape key to close menu
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && open) {
        close();
      }
    };

    if (open) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [open, close]);

  const showSubmenu = useCallback((menuLabel: string) => {
    setCurrentSubmenu(menuLabel);
  }, []);

  const hideSubmenu = useCallback(() => {
    setCurrentSubmenu(null);
  }, []);

  return (
    <>
      <Button
        aria-controls="mobile-nav"
        aria-expanded={open}
        aria-haspopup="dialog"
        className="rounded-full border-primary-200 bg-primary-200 lg:hidden"
        onClick={toggle}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggle();
          }
        }}
        ref={triggerRef}
        size="icon"
        type="button"
      >
        {open ? (
          <XIcon className="size-5 text-primary" />
        ) : (
          <ListIcon className="size-5 text-primary" />
        )}
        <span className="sr-only">
          {open ? 'Close navigation menu' : 'Open navigation menu'}
        </span>
      </Button>
      {/* Full-screen mobile nav below header */}
      <AnimatePresence>
        {open && (
          <motion.div
            animate={{ x: 0 }}
            aria-labelledby={labelId}
            aria-modal="true"
            className="fixed right-0 left-0 z-40 flex flex-col justify-between gap-6 border-t bg-white shadow-lg lg:hidden"
            exit={{ x: '-100%' }}
            id="mobile-nav"
            initial={{ x: '-100%' }}
            ref={panelRef}
            role="dialog"
            style={{
              top: headerHeight,
              height: `calc(100dvh - ${headerHeight}px)`,
              width: '100vw',
            }}
            transition={{
              type: 'spring',
              stiffness: 400,
              damping: 40,
              mass: 1,
            }}
          >
            <nav
              aria-label="Mobile navigation"
              className="relative flex flex-1 flex-col overflow-hidden bg-white"
              id={labelId}
            >
              <AnimatePresence initial={false}>
                {currentSubmenu ? (
                  // Submenu view
                  <motion.div
                    animate={{ x: 0 }}
                    className="absolute inset-0 bg-white"
                    exit={{ x: '100%' }}
                    initial={{ x: '100%' }}
                    key={`submenu-${currentSubmenu}`}
                    transition={{
                      type: 'spring',
                      stiffness: 400,
                      damping: 40,
                      mass: 1,
                    }}
                  >
                    <div className="px-7.5 py-4 ">
                      <Button
                        className={
                          'group/cta w-fit gap-0.5 rounded-full bg-brand px-2.5 py-2 text-lg text-primary transition-all duration-200 hover:text-white'
                        }
                        onClick={hideSubmenu}
                        // size="sm"
                        type="button"
                      >
                        <ArrowLeftIcon className="size-5" weight="bold" />
                        <span className="font-semibold text-lg">
                          {currentSubmenu}
                        </span>
                      </Button>
                    </div>
                    {NAV_ITEMS.find(
                      (item) => item.label === currentSubmenu
                    )?.items?.map((subItem) => (
                      <Link
                        className="flex items-center justify-between rounded-md px-7.5 py-5 font-medium text-[1.5rem] text-heading transition-colors hover:bg-accent/50"
                        href={subItem.href}
                        key={subItem.label}
                        onClick={close}
                      >
                        {subItem.label}
                        <CaretRightIcon className="size-4" />
                      </Link>
                    ))}
                  </motion.div>
                ) : (
                  // Main menu view
                  <motion.div
                    animate={{ x: 0 }}
                    className="absolute inset-0 bg-white"
                    exit={{ x: '-100%' }}
                    initial={{ x: '-100%' }}
                    key="main-menu"
                    transition={{
                      type: 'spring',
                      stiffness: 400,
                      damping: 40,
                      mass: 1,
                    }}
                  >
                    {[
                      ...NAV_ITEMS,
                      {
                        label: 'Explore Madrasa App',
                        href: '#',
                      },
                    ].map((item) => (
                      <div className="flex flex-col" key={item.label}>
                        {'items' in item &&
                        item.items &&
                        item.items.length > 0 ? (
                          <button
                            className="flex items-center justify-between rounded-md px-7.5 py-5 font-medium text-[1.5rem] text-heading transition-colors hover:bg-accent/50"
                            onClick={() => showSubmenu(item.label)}
                            type="button"
                          >
                            <span>{item.label}</span>
                            <CaretRightIcon className="size-4" />
                          </button>
                        ) : (
                          <Link
                            className="flex items-center justify-between rounded-md px-7.5 py-5 font-medium text-[1.5rem] text-heading transition-colors hover:bg-accent/50"
                            href={item.href ?? '#'}
                            onClick={close}
                          >
                            {item.label}
                            <CaretRightIcon className="size-4" />
                          </Link>
                        )}
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </nav>
            <div className="flex flex-col gap-3 pt-4">
              <CTAButtons fullWidth />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
