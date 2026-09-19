"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { LogoLockup } from "@/components/ds/LogoLockup";
import { ButtonLink } from "@/components/ds/Button";
import { DUR, ScrollTrigger, gsap, prefersReducedMotion, useGSAP } from "@/lib/gsap";
import { NAV, site } from "@/lib/site";

/* The sections the nav can land on, in page order, for the scroll spy. */
const SECTION_IDS = ["sobre", "servicos", "conteudo", "faq"] as const;

/**
 * SiteHeader — fixed, quiet, and out of the way: it slips up when you scroll
 * into the page and comes back the moment you scroll up, which is the calmest
 * way to keep the "Agendar" action always one gesture away.
 *
 * One-page site: the nav is anchor links, and a scroll spy marks the section
 * you're reading so the underline follows you down the page.
 */
export function SiteHeader() {
  const header = useRef<HTMLElement>(null);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    /* the floating WhatsApp button steps aside while the menu is up */
    document.body.classList.toggle("jc-drawer-open", open);
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.body.classList.remove("jc-drawer-open");
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  /* Scroll spy: whichever section owns the upper third of the viewport is
     the current one. Cheap, and it needs no motion so it runs for everyone. */
  useEffect(() => {
    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => el !== null,
    );
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useGSAP(
    () => {
      const el = header.current;
      if (!el || prefersReducedMotion()) return;

      gsap.from(el, { y: -70, opacity: 0, duration: DUR.enter, ease: "jcOut", delay: 0.1 });

      /* The nav stays fixed and always visible; only its background firms up
         once you've scrolled off the top. */
      const trigger = ScrollTrigger.create({
        start: "top -40",
        end: 99999,
        onUpdate: (self) => el.classList.toggle("jc-header--scrolled", self.scroll() > 40),
        onLeaveBack: () => el.classList.remove("jc-header--scrolled"),
      });

      return () => trigger.kill();
    },
    { scope: header },
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

  const isActive = (href: string) => href === `#${active}`;

  return (
    <>
      <header className="jc-header" ref={header}>
        <Link href="#top" aria-label={`${site.name} — início`}>
          <LogoLockup layout="horizontal" size={36} />
        </Link>

        <nav className="jc-header__nav" aria-label="Navegação principal">
          {NAV.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="jc-header__link"
              aria-current={isActive(link.href) ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
          <ButtonLink href="#contato" size="sm">
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
          {NAV.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="jc-drawer__link"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="jc-drawer__foot">
          <ButtonLink href="#contato" size="lg" fullWidth onClick={() => setOpen(false)}>
            Agendar pelo WhatsApp
          </ButtonLink>
          <span className="jc-drawer__note">{site.area} · a domicílio</span>
        </div>
      </div>
    </>
  );
}
