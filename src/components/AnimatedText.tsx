import { useRef } from 'react';
import type { CSSProperties } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import type { MotionValue } from 'framer-motion';

interface CharProps {
  char: string;
  index: number;
  total: number;
  progress: MotionValue<number>;
}

// Each character fades from 0.2 to 1 across its own slice of scroll progress.
function Char({ char, index, total, progress }: CharProps) {
  const start = index / total;
  const end = (index + 1) / total;
  const opacity = useTransform(progress, [start, end], [0.2, 1]);

  return (
    <span className="relative inline-block">
      <span className="invisible">{char}</span>
      <motion.span className="absolute inset-0" style={{ opacity }}>
        {char}
      </motion.span>
    </span>
  );
}

interface AnimatedTextProps {
  text: string;
  className?: string;
  style?: CSSProperties;
}

export default function AnimatedText({ text, className = '', style }: AnimatedTextProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  });

  // Split into word and whitespace tokens so words never break across lines.
  const tokens = text.match(/\S+|\s+/g) ?? [];
  const total = text.length;
  let cursor = 0;

  return (
    <p ref={ref} className={className} style={style}>
      {tokens.map((token, t) => {
        const chars = token.split('').map((c) => {
          const idx = cursor++;
          return (
            <Char key={idx} char={c} index={idx} total={total} progress={scrollYProgress} />
          );
        });

        return /\S/.test(token) ? (
          <span key={t} className="inline-block whitespace-nowrap">
            {chars}
          </span>
        ) : (
          <span key={t}>{chars}</span>
        );
      })}
    </p>
  );
}
