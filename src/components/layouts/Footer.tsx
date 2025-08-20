import Image from 'next/image';
import Link from 'next/link';
import logo from '@/assets/images/madrasa-logo.svg';
import ummah from '@/assets/images/ummah.svg';
import { Button } from '../ui/button';
import { Container } from './Container';
import { MidFooter } from './MidFooter';
import { SocialCloud } from './SocialCloud';

function FooterTop() {
  return (
    <Container
      className="bg-primary-700 px-3 py-5 sm:px-[6.25rem] sm:py-[110px]"
      fluid
    >
      <div className="flex flex-col gap-10 sm:flex-row sm:gap-17">
        <div className="flex flex-col gap-2 sm:w-1/4 sm:gap-4.5">
          <Image
            alt="Madrasa Logo"
            className="h-20 brightness-0 invert"
            src={logo}
          />
          <p className="font-manrope text-sm text-white">
            An online Islamic Learning for Kids, Adults & Professionals in
            India.
          </p>
          <p className="font-manrope text-sm text-white">
            91 988-660-2456 (9 AM to 10:00 PM) support@madrasaapp.com
          </p>
        </div>
        {/* links */}
        <div className="grid flex-1 grid-cols-3">
          {[
            {
              title: 'Solutions',
              links: [
                { label: 'For Parents', href: '/parents' },
                { label: 'For Kids', href: '/kids' },
                { label: 'For Students', href: '/students' },
                { label: 'For Professionals', href: '/professionals' },
                { label: 'Women Only', href: '/women' },
              ],
            },
            {
              title: 'Course',
              links: [
                { label: 'For Parents', href: '/parents' },
                { label: 'For Kids', href: '/kids' },
                { label: 'For Students', href: '/students' },
                { label: 'For Professionals', href: '/professionals' },
                { label: 'Women Only', href: '/women' },
              ],
            },
            {
              title: 'Solutions 2',
              links: [
                { label: 'For Parents', href: '/parents' },
                { label: 'For Kids', href: '/kids' },
                { label: 'For Students', href: '/students' },
                { label: 'For Professionals', href: '/professionals' },
                { label: 'Women Only', href: '/women' },
              ],
            },
          ].map((col) => (
            <div className="flex flex-col gap-2" key={col.title}>
              <span className="font-semibold text-white">{col.title}</span>
              {col.links.map((link) => (
                <Link
                  className="font-manrope font-medium text-[#E5E5E5] text-sm"
                  href={link.href}
                  key={link.label}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}

// MidFooter extracted to `MidFooter.tsx`

function FooterBottom() {
  return (
    <Container className="bg-[#E5E5E5]" fluid>
      <Container className="flex flex-col justify-between gap-8.5 py-15 sm:flex-row sm:items-center">
        <div>
          {/* ummah placeholder */}
          <Image
            alt="Ummah placeholder"
            className="-ml-2 h-15 w-44"
            src={ummah}
          />
          <p>
            Crafted with ❤️ by <span className="font-bold">Madrasa Team</span>,
            India
          </p>
        </div>
        <div className="flex max-w-[21.25rem] flex-col gap-8 sm:items-end">
          {/* Social cloud */}
          <SocialCloud />
          {/* Privacy and terms */}
          <div className="flex items-center gap-3 font-manrope font-medium text-heading text-sm">
            <Link className="hover:underline" href="/privacy-policy">
              Privacy policy
            </Link>
            <div className="size-1.5 rounded-full bg-primary-300" />
            <Link className="hover:underline" href="/terms-and-conditions">
              Terms and conditions
            </Link>
          </div>
        </div>
      </Container>
    </Container>
  );
}
export function Footer() {
  return (
    <>
      <FooterTop />
      <MidFooter />
      <FooterBottom />
    </>
  );
}
