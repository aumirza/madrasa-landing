import Image from 'next/image';
import Link from 'next/link';
import logo from '@/assets/images/madrasa-logo.svg';
import ummah from '@/assets/images/ummah.svg';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Container } from './Container';
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

function FooterMiddle() {
  const footerMiddleSections = [
    {
      title:
        'Madrasa: Online Islamic Learning for Kids, Adults & Professionals in India',
      blocks: [
        {
          type: 'paragraph',
          content:
            "Madrasa is India's trusted platform for learning Qur’an, Islamic Studies, Arabic, and essential life values online — designed for children, students, working professionals, and parents. Our child-safe online classrooms are led by certified Islamic scholars and expert teachers who make learning engaging, interactive, and rooted in authentic knowledge.",
        },
        {
          type: 'paragraph',
          content:
            "With 5-day-a-week classes and flexible timings, students can learn Tajweed, Hadith, Seerah, Islamic Etiquette, and Fiqh from the comfort of their homes. Whether you are preparing your child for basic Qur'an recitation or deepening your own Islamic understanding, Maktab offers beginner to advanced courses that cater to every age group.",
        },
        {
          type: 'paragraph',
          content:
            'Our platform focuses on authentic Islamic knowledge inspired by the lives of the Prophets ﷺ and the noble companions, blending faith with daily life. All classes are live, recorded for revision, and supported by homework, quizzes, and progress reports — ensuring parents stay informed.',
        },
      ],
    },
    {
      title: 'Why Madrasa is Special:',
      blocks: [
        {
          type: 'list',
          content: [
            'Child-safe & family-friendly learning environment',
            'Certified teachers from reputed Islamic institutes',
            'Beginner to advanced Islamic courses for all ages',
            'Easy scheduling for students & working professionals',
            'Affordable fee plans for Indian families',
          ],
        },
        {
          type: 'paragraph',
          content:
            'From learning the Qur’an with Tajweed to understanding everyday Sunnah, Maktab makes Islamic education accessible across India with authentic, engaging, and flexible online classes.',
        },
      ],
    },
  ];

  return (
    <Container className="flex flex-col gap-6 py-15">
      <div className="flex flex-col gap-3.5 ">
        <Accordion collapsible type="single">
          {footerMiddleSections.map((section, sIdx) => (
            <AccordionItem
              className="rounded-none border-b bg-transparent"
              key={section.title}
              value={`footer-section-${sIdx}`}
            >
              <AccordionTrigger>
                <h3 className="font-medium text-heading text-lg">
                  {section.title}
                </h3>
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col gap-2">
                  {section.blocks.map((block, idx) => {
                    const blockKey = `${section.title}-${block.type}-${idx}`;
                    if (block.type === 'paragraph') {
                      return (
                        <p
                          className="font-manrope font-medium text-sm text-subheading leading-5"
                          key={blockKey}
                        >
                          {block.content}
                        </p>
                      );
                    }

                    if (block.type === 'list' && Array.isArray(block.content)) {
                      return (
                        <ul
                          className="ml-3 list-inside list-disc font-manrope font-medium text-sm text-subheading leading-5"
                          key={blockKey}
                        >
                          {block.content.map((li: string, i: number) => {
                            const safeLi = String(li)
                              .slice(0, 40)
                              .replace(/\s+/g, '-');
                            return (
                              <li key={`${section.title}-li-${i}-${safeLi}`}>
                                {li}
                              </li>
                            );
                          })}
                        </ul>
                      );
                    }

                    return null;
                  })}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Container>
  );
}

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
      <FooterMiddle />
      <FooterBottom />
    </>
  );
}
