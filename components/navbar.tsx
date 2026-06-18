"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navigationSettings, siteSettings } from "@/lib/settings";
import { cn } from "@/lib/utils/cn";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#070816]/75 backdrop-blur-2xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <Link href="/" className="group flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-lg font-black text-slate-950 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-105">M</span>
          <span className="text-lg font-bold tracking-tight">{siteSettings.name}</span>
        </Link>

        <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 p-1 md:flex">
          {navigationSettings.map((item) => (
            <Link key={item.href} href={item.href} className={cn("rounded-full px-4 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/10 hover:text-white", pathname === item.href && "bg-white text-slate-950 hover:bg-white hover:text-slate-950")}>
              {item.label}
            </Link>
          ))}
        </div>

        <button onClick={() => setOpen(!open)} className="rounded-2xl border border-white/10 bg-white/5 p-3 text-white md:hidden" aria-label="Open menu">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-[#070816]/95 p-4 backdrop-blur-2xl md:hidden">
          <div className="grid gap-2">
            {navigationSettings.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className={cn("rounded-2xl px-4 py-3 text-sm font-semibold text-slate-300 transition hover:bg-white/10 hover:text-white", pathname === item.href && "bg-white text-slate-950")}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
