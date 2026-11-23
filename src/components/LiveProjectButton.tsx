import { ArrowUpRight } from 'lucide-react';

interface LiveProjectButtonProps {
  url?: string;
}

const BASE =
  'inline-flex items-center gap-2 rounded-full border-2 border-[#D7E2EA] px-8 py-3 text-sm font-medium uppercase tracking-widest text-[#D7E2EA] transition-colors duration-200 sm:px-10 sm:py-3.5 sm:text-base';

export default function LiveProjectButton({ url }: LiveProjectButtonProps) {
  if (!url) {
    // Not online yet: rendered as a muted, non-clickable button.
    return (
      <button type="button" disabled className={`${BASE} cursor-not-allowed opacity-40`}>
        Live Project
        <ArrowUpRight size={18} aria-hidden="true" />
      </button>
    );
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`${BASE} hover:bg-[#D7E2EA]/10`}
    >
      Live Project
      <ArrowUpRight size={18} aria-hidden="true" />
    </a>
  );
}
