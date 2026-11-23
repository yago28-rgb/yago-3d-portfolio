import FadeIn from './FadeIn';
import AnimatedText from './AnimatedText';
import ContactButton from './ContactButton';
import { PROFILE } from '../data/profile';

const MOON_ICON =
  'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png';
const P59 =
  'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png';
const LEGO_ICON =
  'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png';
const GROUP_134 =
  'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png';

interface DecorImageProps {
  src: string;
  positionClass: string;
  widthClass: string;
  delay: number;
  x: number;
}

function DecorImage({ src, positionClass, widthClass, delay, x }: DecorImageProps) {
  return (
    <FadeIn
      className={`absolute ${positionClass} ${widthClass}`}
      delay={delay}
      duration={0.9}
      x={x}
      y={0}
    >
      <img src={src} alt="" className="block h-auto w-full select-none" draggable={false} />
    </FadeIn>
  );
}

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-5 py-20 sm:px-8 md:px-10"
    >
      <DecorImage
        src={MOON_ICON}
        positionClass="top-[4%] left-[1%] sm:left-[2%] md:left-[4%]"
        widthClass="w-[120px] sm:w-[160px] md:w-[210px]"
        delay={0.1}
        x={-80}
      />
      <DecorImage
        src={P59}
        positionClass="bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%]"
        widthClass="w-[100px] sm:w-[140px] md:w-[180px]"
        delay={0.25}
        x={-80}
      />
      <DecorImage
        src={LEGO_ICON}
        positionClass="top-[4%] right-[1%] sm:right-[2%] md:right-[4%]"
        widthClass="w-[120px] sm:w-[160px] md:w-[210px]"
        delay={0.15}
        x={80}
      />
      <DecorImage
        src={GROUP_134}
        positionClass="bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%]"
        widthClass="w-[130px] sm:w-[170px] md:w-[220px]"
        delay={0.3}
        x={80}
      />

      <div className="relative z-10 flex w-full flex-col items-center gap-16 sm:gap-20 md:gap-24">
        <div className="flex w-full flex-col items-center gap-10 sm:gap-14 md:gap-16">
          <FadeIn delay={0} y={40} className="w-full text-center">
            <h2
              className="hero-heading font-black uppercase leading-none tracking-tight"
              style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
            >
              About me
            </h2>
          </FadeIn>

          <AnimatedText
            text={PROFILE.about}
            className="mx-auto max-w-[560px] text-center font-medium leading-relaxed text-[#D7E2EA]"
            style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}
          />
        </div>

        <FadeIn delay={0} y={20}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
}
