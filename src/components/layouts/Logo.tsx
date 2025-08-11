import Image from 'next/image';
import Link from 'next/link';
import madrasaLogo from '@/assets/images/madrasa-logo.svg';
export default function Logo() {
  return (
    <Link className="flex items-center" href="/">
      <Image
        alt="Madrasa Logo"
        className="max-h-10 max-w-fit"
        height={100}
        src={madrasaLogo}
        width={100}
      />
    </Link>
  );
}
