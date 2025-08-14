import Link from 'next/link';

export function SocialCloud() {
  return (
    <div className="flex flex-wrap justify-end gap-4">
      <Link
        className="flex items-center gap-1 rounded-full bg-white py-1 pr-2.5 pl-2 font-medium text-sm shadow"
        href="https://facebook.com"
        rel="noopener"
        target="_blank"
      >
        <span className="font-manrope font-medium text-heading text-sm">
          <svg
            aria-hidden="true"
            fill="currentColor"
            height="20"
            viewBox="0 0 20 20"
            width="20"
          >
            <title>Facebook</title>
            <circle cx="10" cy="10" fill="#1877F3" r="10" />
            <path
              d="M13.5 10H11v5H9v-5H7.5V8.5H9V7.5C9 6.67 9.67 6 10.5 6H13v1.5h-2c-.28 0-.5.22-.5.5v.5h2V10z"
              fill="#fff"
            />
          </svg>
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
          <svg
            aria-hidden="true"
            fill="currentColor"
            height="20"
            viewBox="0 0 20 20"
            width="20"
          >
            <title>Instagram</title>
            <circle cx="10" cy="10" fill="#E4405F" r="10" />
            <rect fill="#fff" height="8" rx="2" width="8" x="6" y="6" />
            <circle cx="10" cy="10" fill="#E4405F" r="2" />
          </svg>
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
          <svg
            aria-hidden="true"
            fill="currentColor"
            height="20"
            viewBox="0 0 20 20"
            width="20"
          >
            <title>Reddit</title>
            <circle cx="10" cy="10" fill="#FF4500" r="10" />
            <circle cx="10" cy="10" fill="#fff" r="5" />
          </svg>
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
          <svg
            aria-hidden="true"
            fill="currentColor"
            height="20"
            viewBox="0 0 20 20"
            width="20"
          >
            <title>LinkedIn</title>
            <circle cx="10" cy="10" fill="#0A66C2" r="10" />
            <rect fill="#fff" height="6" width="2" x="6" y="8" />
            <rect fill="#fff" height="2" width="5" x="9" y="8" />
          </svg>
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
          <svg
            aria-hidden="true"
            fill="currentColor"
            height="20"
            viewBox="0 0 20 20"
            width="20"
          >
            <title>WhatsApp</title>
            <circle cx="10" cy="10" fill="#25D366" r="10" />
            <path
              d="M7 13c2 2 4 2 6-1"
              fill="none"
              stroke="#fff"
              strokeWidth="2"
            />
          </svg>
        </span>
        Join Community
      </Link>
    </div>
  );
}
