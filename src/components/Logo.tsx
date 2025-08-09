import Image from 'next/image';
import madrasaLogo from '@/assets/images/madrasa-logo.webp';
export default function Logo() {
  return (
    <Image
      alt="Madrasa Logo"
      className="max-h-10 max-w-fit"
      height={100}
      src={madrasaLogo}
      width={100}
    />
  );
}
