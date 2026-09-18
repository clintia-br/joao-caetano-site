"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LogoLockup } from "@/components/ds/LogoLockup";
import { ButtonLink } from "@/components/ds/Button";
import { DUR, ScrollTrigger, gsap, prefersReducedMotion, useGSAP } from "@/lib/gsap";
import { NAV, SERVICES, site } from "@/lib/site";

/**
 * SiteHeader — fixed, quiet, and out of the way: it slips up when you scroll
 * into the page and comes back the moment you scroll up, which is the calmest
 * way to keep the "Agendar" action always one gesture away.
 */
export function SiteHeader() {
  const pathname = usePathname();
  const header = useRef<HTMLElement>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useGSAP(
    () => {
      const el = header.current;
      if (!el || prefersReducedMotion()) return;

      gsap.from(el, { y: -70, opacity: 0, duration: DUR.enter, ease: "jcOut", delay: 0.1 });

      const show = gsap.quickTo(el, "yPercent", { duration: DUR.slow, ease: "jcStandard" });

      const trigger = ScrollTrigger.create({
        start: "top -80",
        end: 99999,
        onUpdate: (self) => {
          el.classList.toggle("jc-header--scrolled", self.scroll() > 40);
          if (open) return;
          show(self.direction === 1 && self.scroll() > 260 ? -110 : 0);
        },
        onLeaveBack: () => {
          el.classList.remove("jc-header--scrolled");
          show(0);
        },
      });

      return () => trigger.kill();
    },
    { scope: header, dependencies: [open] },
  );

  /* Drawer links step in one by one — same curve, nothing showy. */
  useGSAP(
    () => {
      if (!open || prefersReducedMotion()) return;
      gsap.from(".jc-drawer__link", {
        opacity: 0,
        y: 18,
        duration: DUR.slow,
        ease: "jcOut",
        stagger: 0.05,
      });
    },
    { dependencies: [open] },
  );

  const links = [...NAV];

  return (
    <>
      <header className="jc-header" ref={header}>
        <Link href="/" aria-label={`${site.name} — início`}>
          <LogoLockup layout="horizontal" size={38} />
        </Link>

        <nav className="jc-header__nav" aria-label="Navegação principal">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="jc-header__link"
              aria-current={pathname === link.href ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
          <ButtonLink href="/contato" size="sm">
            Agendar
          </ButtonLink>
        </nav>

        <button
          type="button"
          className="jc-header__burger"
          aria-expanded={open}
          aria-controls="jc-drawer"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </header>

      <div className="jc-drawer jc-on-dark" id="jc-drawer" data-open={open} hidden={!open}>
        <nav aria-label="Navegação">
          {SERVICES.map((s) => (
            <Link key={s.slug} href={s.slug} className="jc-drawer__link">
              {s.title}
            </Link>
          ))}
          {links
            .filter((l) => !l.href.startsWith("/#"))
            .map((l) => (
              <Link key={l.href} href={l.href} className="jc-drawer__link">
                {l.label}
              </Link>
            ))}
          <Link href="/contato" className="jc-drawer__link">
            Agendar
          </Link>
        </nav>
      </div>
    </>
  );
}
