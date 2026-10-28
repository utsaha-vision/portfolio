import Link from "next/link";
import { hasWork, services, site } from "@/content/site";
import { Logo } from "./Logo";
import { Container } from "./ui";

const company = [
  { label: "About us", href: "/about" },
  ...(hasWork ? [{ label: "Our work", href: "/work" }] : []),
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-ink text-white">
      <Container className="grid gap-12 py-16 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <Logo dark />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/55">{site.description}</p>
          {site.socials.length > 0 && (
          <ul className="mt-6 flex flex-wrap gap-2">
            {site.socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex rounded-full border border-white/15 px-3.5 py-1.5 text-xs text-white/70 transition-colors hover:border-white/40 hover:text-white"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
          )}
        </div>
        <FooterCol title="Services" links={services.slice(0, 6).map((s) => ({ label: s.title, href: `/services/${s.slug}` }))} />
        <FooterCol title="Company" links={company} />
        <div>
          <h3 className="text-sm font-medium text-white">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm text-white/55">
            <li><a href={`mailto:${site.email}`} className="transition-colors hover:text-white">{site.email}</a></li>
            {site.phone && <li><a href={`tel:${site.phone.replace(/\s/g, "")}`} className="transition-colors hover:text-white">{site.phone}</a></li>}
            <li>{site.location}</li>
          </ul>
        </div>
      </Container>
      <Container>
        <div className="flex flex-col gap-3 border-t border-white/10 py-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {site.legalName}. All rights reserved.</p>
          <p>Engineered in Nepal for the world.</p>
        </div>
      </Container>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h3 className="text-sm font-medium text-white">{title}</h3>
      <ul className="mt-4 space-y-3 text-sm text-white/55">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="transition-colors hover:text-white">{l.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
