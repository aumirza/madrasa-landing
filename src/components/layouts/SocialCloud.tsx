import Image from 'next/image';
import Link from 'next/link';
import facebookIcon from '@/assets/icons/facebook.svg';
import instagramIcon from '@/assets/icons/instagram.svg';
import linkedinIcon from '@/assets/icons/linkedin.svg';
import redditIcon from '@/assets/icons/reddit.svg';
import whatsappIcon from '@/assets/icons/whatsapp.svg';

export function SocialCloud() {
  return (
    <div className="flex flex-wrap gap-4 sm:justify-end">
      <Link
        className="flex items-center gap-1 rounded-full bg-white py-1 pr-2.5 pl-2 font-medium text-sm shadow"
        href="https://facebook.com"
        rel="noopener"
        target="_blank"
      >
        <span className="font-manrope font-medium text-heading text-sm">
          <Image alt="Facebook" height={20} src={facebookIcon} width={20} />
        </span>
        Facebook
      </Link>
      <Link
        className="flex items-center gap-1 rounded-full bg-white py-1 pr-2.5 pl-2 font-medium text-sm shadow"
        href="https://instagram.com"
        rel="noopener"
        target="_blank"
      >
        <span className="font-manrope font-medium text-heading text-sm">
          <Image alt="Instagram" height={20} src={instagramIcon} width={20} />
        </span>
        Instagram
      </Link>
      <Link
        className="flex items-center gap-1 rounded-full bg-white py-1 pr-2.5 pl-2 font-medium text-sm shadow"
        href="https://reddit.com"
        rel="noopener"
        target="_blank"
      >
        <span className="font-manrope font-medium text-heading text-sm">
          <Image alt="Reddit" height={20} src={redditIcon} width={20} />
        </span>
        Reddit
      </Link>
      <Link
        className="flex items-center gap-1 rounded-full bg-white py-1 pr-2.5 pl-2 font-medium text-sm shadow"
        href="https://linkedin.com"
        rel="noopener"
        target="_blank"
      >
        <span className="font-manrope font-medium text-heading text-sm">
          <Image alt="LinkedIn" height={20} src={linkedinIcon} width={20} />
        </span>
        LinkedIn
      </Link>
      <Link
        className="flex items-center gap-1 rounded-full bg-white py-1 pr-2.5 pl-2 font-medium text-sm shadow"
        href="https://chat.whatsapp.com"
        rel="noopener"
        target="_blank"
      >
        <span className="font-manrope font-medium text-heading text-sm">
          <Image alt="WhatsApp" height={20} src={whatsappIcon} width={20} />
        </span>
        Join Community
      </Link>
    </div>
  );
}
