import { useRef } from 'react';
import type { CSSProperties } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import LiveProjectButton from './LiveProjectButton';
import { PROJECTS, type Project } from '../data/profile';

const RADIUS = 'rounded-[40px] sm:rounded-[50px] md:rounded-[60px]';
const LEFT_TOP_H = 'clamp(130px, 16vw, 230px)';
const LEFT_BOTTOM_H = 'clamp(160px, 22vw, 340px)';

interface ProjectCardProps {
  project: Project;
  index: number;
  total: number;
}

function ProjectCard({ project, index, total }: ProjectCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  // Cards further back settle at a slightly smaller scale.
  const targetScale = 1 - (total - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  // Per-card stacking offset, consumed by the sticky `top` classes below.
  const stackStyle = {
    scale,
    transformOrigin: 'top center',
    '--stack-top': `${index * 28}px`,
  } as unknown as CSSProperties;

  const [left1, left2, right] = project.images;

  return (
    <div ref={containerRef} className="relative h-[85vh]">
      <motion.article
        style={stackStyle}
        className={`sticky top-[calc(6rem_+_var(--stack-top))] md:top-[calc(8rem_+_var(--stack-top))] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 ${RADIUS}`}
      >
        {/* Top row */}
        <div className="flex flex-wrap items-center justify-between gap-4 md:gap-6">
          <div className="flex items-center gap-4 md:gap-8">
            <span
              className="font-black leading-none text-[#D7E2EA]"
              style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
            >
              {project.number}
            </span>
            <div className="flex flex-col gap-1">
              <span className="text-xs uppercase tracking-widest text-[#D7E2EA]/60 sm:text-sm">
                {project.category} · {project.status}
              </span>
              <h3
                className="font-medium uppercase leading-tight text-[#D7E2EA]"
                style={{ fontSize: 'clamp(1.1rem, 2.6vw, 2.4rem)' }}
              >
                {project.name}
              </h3>
            </div>
          </div>
          <LiveProjectButton url={project.url} />
        </div>

        <p
          className="mt-4 max-w-2xl font-light leading-relaxed text-[#D7E2EA]/70 md:mt-6"
          style={{ fontSize: 'clamp(0.85rem, 1.4vw, 1.1rem)' }}
        >
          {project.description}
        </p>

        {/* Image grid: 40% left column (two stacked), 60% right column (one tall) */}
        <div className="mt-6 flex gap-3 md:mt-8 md:gap-4">
          <div className="flex w-[40%] flex-col gap-3 md:gap-4">
            <img
              src={left1}
              alt={`${project.name} preview 1`}
              loading="lazy"
              className={`w-full object-cover ${RADIUS}`}
              style={{ height: LEFT_TOP_H }}
            />
            <img
              src={left2}
              alt={`${project.name} preview 2`}
              loading="lazy"
              className={`w-full object-cover ${RADIUS}`}
              style={{ height: LEFT_BOTTOM_H }}
            />
          </div>
          <div className="w-[60%]">
            <img
              src={right}
              alt={`${project.name} preview 3`}
              loading="lazy"
              className={`h-full w-full object-cover ${RADIUS}`}
              style={{ height: `calc(${LEFT_TOP_H} + ${LEFT_BOTTOM_H} + 0.75rem)` }}
            />
          </div>
        </div>
      </motion.article>
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative z-10 -mt-10 rounded-t-[40px] bg-[#0C0C0C] px-5 pb-20 pt-20 sm:-mt-12 sm:rounded-t-[50px] sm:px-8 md:-mt-14 md:rounded-t-[60px] md:px-10"
    >
      <h2
        className="hero-heading mb-16 text-center font-black uppercase leading-none tracking-tight"
        style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
      >
        Projects
      </h2>

      <div>
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.number} project={project} index={i} total={PROJECTS.length} />
        ))}
      </div>
    </section>
  );
}
