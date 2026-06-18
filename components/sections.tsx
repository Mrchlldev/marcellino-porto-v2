import { ArrowRight, BookOpen, Code2, Mail, Sparkles } from "lucide-react";
import Link from "next/link";
import { aboutSettings, contactSettings, educationSettings, heroSettings, projectSettings, siteSettings, skillSettings } from "@/lib/settings";
import { SectionHeading } from "@/components/section-heading";

export function HeroSection() {
  return (
    <section className="relative px-5 pb-20 pt-10 md:pb-28">
      <div className="absolute left-1/2 top-12 h-72 w-72 -translate-x-1/2 rounded-full bg-indigo-500/20 blur-3xl" />
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.08fr_0.92fr]">
        <div data-aos="fade-up" className="aos-blur relative z-10">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-indigo-200 shadow-glow">
            <Sparkles size={16} /> {heroSettings.badge}
          </div>
          <h1 className="max-w-4xl text-5xl font-black leading-tight tracking-tight md:text-7xl">
            Hi, I&apos;m <span className="text-gradient">{siteSettings.name}</span>. {heroSettings.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">{heroSettings.subtitle}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href={heroSettings.primaryButton.href} className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 font-bold text-slate-950 transition hover:-translate-y-1 hover:shadow-glow">
              {heroSettings.primaryButton.label} <ArrowRight className="transition group-hover:translate-x-1" size={18} />
            </Link>
            <Link href={heroSettings.secondaryButton.href} className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 font-bold text-white transition hover:-translate-y-1 hover:bg-white/10">
              {heroSettings.secondaryButton.label}
            </Link>
          </div>
          <div className="mt-10 grid max-w-xl grid-cols-3 gap-3">
            {heroSettings.stats.map((stat) => (
              <div key={stat.label} className="glass-card rounded-3xl p-4 transition hover:-translate-y-1 hover:border-indigo-300/40">
                <p className="text-2xl font-black text-white">{stat.value}</p>
                <p className="text-sm text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div data-aos="zoom-in" data-aos-delay="150" className="aos-blur relative mx-auto aspect-square w-full max-w-[500px]">
          <div className="absolute inset-0 animate-float rounded-[3rem] border border-white/10 bg-gradient-to-br from-indigo-500/30 via-sky-500/20 to-white/5 shadow-glow" />
          <div className="absolute inset-8 rounded-[2.5rem] border border-white/10 bg-[#0d1024]/80 p-8 backdrop-blur-xl">
            <div className="flex gap-2">
              <span className="h-3 w-3 rounded-full bg-white/40" />
              <span className="h-3 w-3 rounded-full bg-white/25" />
              <span className="h-3 w-3 rounded-full bg-white/15" />
            </div>
            <div className="mt-10 space-y-5">
              <div className="h-5 w-2/3 rounded-full bg-white/30" />
              <div className="h-20 rounded-3xl bg-white/10" />
              <div className="grid grid-cols-2 gap-4">
                <div className="h-28 rounded-3xl bg-indigo-400/20" />
                <div className="h-28 rounded-3xl bg-sky-400/20" />
              </div>
              <div className="h-12 rounded-full bg-white text-center text-sm font-black leading-[3rem] text-slate-950">MODERN PORTFOLIO</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function MarqueeSection() {
  return (
    <div className="overflow-hidden border-y border-white/10 bg-white/5 py-4">
      <div className="flex w-[200%] animate-marquee gap-8 text-2xl font-black uppercase tracking-[0.2em] text-white/20">
        {Array.from({ length: 12 }).map((_, index) => <span key={index}>Modern Portfolio • {siteSettings.name}</span>)}
      </div>
    </div>
  );
}

export function AboutSection() {
  return (
    <section className="px-5 py-20">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="About" title={aboutSettings.title} subtitle={aboutSettings.subtitle} />
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div data-aos="fade-right" className="aos-blur glass-card rounded-[2rem] p-8">
            <h3 className="text-2xl font-black">{siteSettings.name}</h3>
            <p className="mt-4 text-slate-300 leading-8">{aboutSettings.description}</p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {aboutSettings.cards.map((card, index) => (
              <div key={card.title} data-aos="fade-up" data-aos-delay={index * 100} className="aos-blur rounded-[2rem] border border-white/10 bg-white/5 p-6 transition hover:-translate-y-2 hover:bg-white/10">
                <h4 className="text-xl font-black">{card.title}</h4>
                <p className="mt-3 text-sm leading-7 text-slate-400">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function SkillSection() {
  return (
    <section className="px-5 py-20">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Skill" title={skillSettings.title} subtitle={skillSettings.subtitle} />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillSettings.items.map((skill, index) => (
            <div key={skill.name} data-aos="fade-up" data-aos-delay={index * 70} className="aos-blur glass-card rounded-[2rem] p-6 transition hover:-translate-y-2 hover:border-indigo-300/40">
              <div className="flex items-center gap-3"><Code2 className="text-indigo-300" /><h3 className="text-xl font-black">{skill.name}</h3></div>
              <p className="mt-3 text-sm text-slate-400">{skill.description}</p>
              <div className="mt-5 h-3 overflow-hidden rounded-full bg-white/10"><div className="h-full rounded-full bg-white" style={{ width: `${skill.level}%` }} /></div>
              <p className="mt-2 text-sm font-bold text-indigo-200">{skill.level}%</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function EducationSection() {
  return (
    <section className="px-5 py-20">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="Education" title={educationSettings.title} subtitle={educationSettings.subtitle} />
        <div className="space-y-5">
          {educationSettings.items.map((item, index) => (
            <div key={item.school} data-aos="fade-up" data-aos-delay={index * 100} className="aos-blur glass-card rounded-[2rem] p-6 transition hover:-translate-y-1 hover:bg-white/10 md:flex md:items-center md:justify-between">
              <div className="flex gap-4"><BookOpen className="mt-1 text-indigo-300" /><div><p className="font-bold text-indigo-200">{item.year}</p><h3 className="mt-1 text-2xl font-black">{item.school}</h3><p className="mt-1 text-slate-300">{item.major}</p><p className="mt-3 text-sm text-slate-400">{item.description}</p></div></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProjectSection() {
  return (
    <section className="px-5 py-20">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Project" title={projectSettings.title} subtitle={projectSettings.subtitle} />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projectSettings.items.map((project, index) => (
            <Link key={project.title} href={project.href} data-aos="fade-up" data-aos-delay={index * 100} className="aos-blur group glass-card rounded-[2rem] p-6 transition hover:-translate-y-2 hover:border-sky-300/40">
              <div className="mb-6 h-44 rounded-[1.5rem] bg-gradient-to-br from-indigo-500/30 to-sky-400/20 transition group-hover:scale-[1.02]" />
              <p className="text-sm font-bold text-indigo-200">{project.category}</p>
              <h3 className="mt-2 text-2xl font-black">{project.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">{project.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">{project.tags.map((tag) => <span key={tag} className="rounded-full border border-white/10 px-3 py-1 text-xs font-bold text-slate-300">{tag}</span>)}</div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ContactSection() {
  return (
    <section className="px-5 py-20">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="Contact" title={contactSettings.title} subtitle={contactSettings.subtitle} />
        <div data-aos="fade-up" className="aos-blur glass-card rounded-[2rem] p-6 md:p-8">
          <div className="grid gap-8 md:grid-cols-2">
            <div><Mail className="text-indigo-300" size={36} /><p className="mt-5 leading-8 text-slate-300">{contactSettings.description}</p><p className="mt-5 font-bold text-white">{siteSettings.email}</p><p className="mt-2 text-slate-400">{siteSettings.location}</p></div>
            <form className="space-y-4">
              <input className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 outline-none transition focus:border-indigo-300" placeholder={contactSettings.form.namePlaceholder} />
              <input className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 outline-none transition focus:border-indigo-300" placeholder={contactSettings.form.emailPlaceholder} />
              <textarea className="min-h-32 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 outline-none transition focus:border-indigo-300" placeholder={contactSettings.form.messagePlaceholder} />
              <button type="button" className="w-full rounded-full bg-white px-5 py-3 font-black text-slate-950 transition hover:-translate-y-1 hover:shadow-glow">{contactSettings.form.buttonLabel}</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
