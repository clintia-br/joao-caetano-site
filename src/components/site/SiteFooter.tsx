import Link from "next/link";
import { LogoLockup } from "@/components/ds/LogoLockup";
import { Disclaimer } from "@/components/ds/Disclaimer";
import { FOOTER_COLUMNS, site } from "@/lib/site";

/**
 * SiteFooter — institutional close on musgo escuro. Carries the CRMV line the
 * CFMV requires and the honest emergency note, then signs off with the name
 * set very large: the last thing you read is who was talking.
 */
export function SiteFooter() {
  return (
    <footer className="jc-footer jc-on-dark">
      <div className="jc-container" style={{ position: "relative" }}>
        <div className="jc-footer__top">
          <div data-reveal="rise">
            <LogoLockup layout="institutional" tone="negative" size={52} />
          </div>

          <div className="jc-footer__cols" data-reveal-stagger="">
            {FOOTER_COLUMNS.map((col) => (
              <nav className="jc-footer__col" key={col.title} aria-label={col.title} data-reveal="rise">
                <span className="jc-footer__col-title">{col.title}</span>
                {col.links.map((link) =>
                  link.href.startsWith("http") ? (
                    <a
                      key={link.label}
                      className="jc-footer__link"
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link key={link.label} className="jc-footer__link" href={link.href}>
                      {link.label}
                    </Link>
                  ),
                )}
              </nav>
            ))}
          </div>
        </div>

        <div style={{ marginTop: "2.5rem" }} data-reveal="rise">
          <Disclaimer />
          <p className="jc-footer__legal">
            © {new Date().getFullYear()} {site.name} · {site.descritor} · {site.area}.
          </p>
        </div>

        <span className="jc-footer__wordmark" aria-hidden="true" data-parallax={8}>
          {site.name}
        </span>
      </div>
    </footer>
  );
}
