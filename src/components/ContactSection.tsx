import { Mail } from 'lucide-react';
import FadeIn from './FadeIn';
import { PROFILE } from '../data/profile';

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="flex min-h-[60vh] flex-col items-center justify-center gap-10 bg-[#0C0C0C] px-5 py-24 text-center sm:px-8 md:px-10"
    >
      <FadeIn>
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Contact
        </h2>
      </FadeIn>

      <FadeIn delay={0.1}>
        <p
          className="max-w-[560px] font-medium leading-relaxed text-[#D7E2EA]"
          style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}
        >
          Have a project in mind? Let's build something together.
        </p>
      </FadeIn>

      {PROFILE.email && (
        <FadeIn delay={0.2}>
          <a
            href={`mailto:${PROFILE.email}`}
            className="inline-flex items-center gap-3 rounded-full border-2 border-[#D7E2EA] px-8 py-3 text-sm font-medium uppercase tracking-widest text-[#D7E2EA] transition-colors duration-200 hover:bg-[#D7E2EA]/10 sm:text-base"
          >
            <Mail size={18} aria-hidden="true" />
            {PROFILE.email}
          </a>
        </FadeIn>
      )}
    </section>
  );
}
