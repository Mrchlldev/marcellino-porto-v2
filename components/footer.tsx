import { navigationSettings, siteSettings } from "@/lib/settings";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/10 px-5 py-10">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 md:flex-row md:items-center">
        <div>
          <h2 className="text-xl font-black">{siteSettings.name}</h2>
          <p className="mt-2 max-w-md text-sm text-slate-400">{siteSettings.description}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          {navigationSettings.map((item) => (
            <Link key={item.href} href={item.href} className="rounded-full border border-white/10 px-4 py-2 text-sm text-slate-300 transition hover:border-white/30 hover:bg-white/10 hover:text-white">
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
