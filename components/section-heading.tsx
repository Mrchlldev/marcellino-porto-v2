type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  subtitle: string;
};

export function SectionHeading({ eyebrow = "Portfolio", title, subtitle }: SectionHeadingProps) {
  return (
    <div data-aos="fade-up" className="aos-blur mx-auto mb-12 max-w-3xl text-center">
      <p className="mb-3 text-sm font-bold uppercase tracking-[0.35em] text-indigo-300">{eyebrow}</p>
      <h2 className="text-3xl font-black tracking-tight text-white md:text-5xl">{title}</h2>
      <p className="mt-4 text-base leading-7 text-slate-400 md:text-lg">{subtitle}</p>
    </div>
  );
}
