import { PhoneIcon } from '@phosphor-icons/react/ssr';
import Image from 'next/image';
import Link from 'next/link';
import logoSquare from '@/assets/images/logo-square.svg';
import ummah from '@/assets/images/ummah.svg';
import { Button } from '../ui/button';
import { Container } from './Container';
import { MidFooter } from './MidFooter';
import { SocialCloud } from './SocialCloud';

function FooterTop() {
  return (
    <Container
      className="bg-gradient-to-b from-[#0A0414] to-[#4B1F90] px-3 py-5 sm:px-[6.25rem] sm:py-[110px]"
      fluid
    >
      <Container className="flex flex-col gap-10 sm:flex-row sm:gap-17">
        <div className="flex flex-1 flex-col gap-2 ">
          <div className="flex h-full w-[21.75rem] flex-col justify-between text-white">
            <div className="space-y-4">
              <Image
                alt="Madrasa Logo"
                className="max-h-15 max-w-15"
                src={logoSquare}
              />
              <h3 className="font-semibold text-2xl leading-7">
                Where the Ummah connects to Learn, Inspire and Strengthen Faith.
              </h3>
            </div>
            <div className="space-y-3">
              <div className="space-y-1">
                <h4 className="font-bold text-lg leading-5">Reach out to us</h4>
                <p className="font-manrope font-medium text-sm leading-5">
                  Get your questions answered about learning with Madrasa team.
                </p>
              </div>
              <Button
                className="rounded-lg bg-gradient-to-b from-semantic-success-50 to-semantic-success-100 font-bold text-semantic-success-500 text-xs"
                size="sm"
              >
                <PhoneIcon
                  className="size-4 text-semantic-success-500"
                  weight="bold"
                />
                Call +91-9113110996
              </Button>
            </div>
          </div>
        </div>
        {/* links */}
        <div className="grid flex-1 gap-8 sm:grid-cols-2 sm:gap-11">
          {[
            {
              title: 'Tutor (Ustaad)',
              links: [
                {
                  label: 'Quran Tutors for Kids (Male)',
                  href: '/tutors/quran-kids-male',
                },
                {
                  label: 'Quran Tutors for Kids (Female)',
                  href: '/tutors/quran-kids-female',
                },
                {
                  label: 'Islamic Tutors for Students',
                  href: '/tutors/islamic-students',
                },
                {
                  label: 'Professional Tutors for Adults',
                  href: '/tutors/professionals',
                },
                {
                  label: 'Women-Only Female Tutors',
                  href: '/tutors/women-only',
                },
              ],
            },
            {
              title: 'Courses',
              links: [
                {
                  label: 'Noorani Qaida for Kids',
                  href: '/courses/noorani-qaida',
                },
                { label: 'Hifz for Kids & Students', href: '/courses/hifz' },
                {
                  label: 'Islamic Studies for Professionals',
                  href: '/courses/islamic-studies-professionals',
                },
                { label: 'Arabic for All Ages', href: '/courses/arabic' },
                { label: 'Women-Only Classes', href: '/courses/women-only' },
              ],
            },
            {
              title: 'Solution',
              links: [
                { label: 'For Parents', href: '/parents' },
                { label: 'For Kids', href: '/kids' },
                { label: 'For Students', href: '/students' },
                { label: 'For Professionals', href: '/professionals' },
                { label: 'Women Only', href: '/women' },
              ],
            },
            {
              title: 'Madrasa Tools',
              links: [
                { label: 'Al-Quran', href: '/tools/al-quran' },
                {
                  label: 'Asma UI Husna (99 Names)',
                  href: '/tools/asma-ul-husna',
                },
                { label: 'Daily Dua', href: '/tools/daily-dua' },
                {
                  label: 'Feeling Based Dua',
                  href: '/tools/feeling-based-dua',
                },
                { label: 'Zakat Calculator', href: '/tools/zakat-calculator' },
              ],
            },
          ].map((col) => (
            <div className="flex flex-col gap-2" key={col.title}>
              <span className="font-semibold text-white">{col.title}</span>
              {col.links.map((link) => (
                <Link
                  className="font-manrope font-medium text-[#E5E5E5] text-sm leading-6"
                  href={link.href}
                  key={link.label}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </Container>
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
