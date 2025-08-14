import Image from 'next/image';
import Link from 'next/link';
import logo from '@/assets/images/madrasa-logo.svg';
import { Container } from './Container';

function FooterTop() {
  return (
    <Container className="bg-primary-700 px-[6.25rem] py-[110px]" fluid>
      <div className="flex gap-17">
        <div className="flex w-1/4 flex-col gap-4.5">
          <Image
            alt="Madrasa Logo"
            className="brightness-0 invert"
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
  return (
    <Container className="flex flex-col gap-6 py-15">
      <div className="flex flex-col gap-3.5">
        <h3 className="font-medium text-heading text-lg">
          Madrasa: Online Islamic Learning for Kids, Adults & Professionals in
          India
        </h3>
        <p className="font-manrope font-medium text-sm text-subheading leading-5">
          Madrasa is India's trusted platform for learning Qur’an, Islamic
          Studies, Arabic, and essential life values online — designed for
          children, students, working professionals, and parents. Our child-safe
          online classrooms are led by certified Islamic scholars and expert
          teachers who make learning engaging, interactive, and rooted in
          authentic knowledge.
        </p>
        <p className="font-manrope font-medium text-sm text-subheading leading-5">
          With 5-day-a-week classes and flexible timings, students can learn
          Tajweed, Hadith, Seerah, Islamic Etiquette, and Fiqh from the comfort
          of their homes. Whether you are preparing your child for basic Qur'an
          recitation or deepening your own Islamic understanding, Maktab offers
          beginner to advanced courses that cater to every age group.
        </p>
        <p className="font-manrope font-medium text-sm text-subheading leading-5">
          Our platform focuses on authentic Islamic knowledge inspired by the
          lives of the Prophets ﷺ and the noble companions, blending faith with
          daily life. All classes are live, recorded for revision, and supported
          by homework, quizzes, and progress reports — ensuring parents stay
          informed.
        </p>
      </div>
      <div className="flex flex-col gap-3.5">
        <h3 className="font-medium text-heading text-lg">
          Why Madrasa is Special:
        </h3>
        <ul className="list-inside list-disc font-manrope font-medium text-sm text-subheading leading-5">
          <li>
            Child-safe & family-friendly learning environment Certified teachers
          </li>
          <li>
            from reputed Islamic institutes Beginner to advanced Islamic courses
          </li>
          <li>
            for all ages Easy scheduling for students & working professionals
          </li>
          <li>Affordable fee plans for Indian families</li>
        </ul>
        <p className="font-manrope font-medium text-sm text-subheading leading-5">
          From learning the Qur’an with Tajweed to understanding everyday
          Sunnah, Maktab makes Islamic education accessible across India with
          authentic, engaging, and flexible online classes.
        </p>
      </div>
    </Container>
  );
}

export function Footer() {
  return (
    <>
      <FooterTop />
      <FooterMiddle />
    </>
  );
}
