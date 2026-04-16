import { ReactNode } from 'react';

export function Section({
  id,
  label,
  title,
  lede,
  children,
  className = '',
}: {
  id?: string;
  label?: string;
  title?: ReactNode;
  lede?: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`relative py-20 md:py-28 ${className}`}>
      <div className="mx-auto max-w-6xl px-5">
        {(label || title) && (
          <div className="max-w-3xl mb-10 md:mb-14">
            {label && <div className="section-label mb-4">{label}</div>}
            {title && (
              <h2 className="serif-tight text-white text-4xl md:text-6xl leading-[1]">
                {title}
              </h2>
            )}
            {lede && <p className="mt-5 text-white/70 text-lg leading-relaxed max-w-2xl">{lede}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
