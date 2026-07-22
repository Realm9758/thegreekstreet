import type { ReactNode } from "react";

interface PageHeroProps {
  eyebrow: string;
  title: ReactNode;
  body: string;
  detail?: string;
}

export default function PageHero({ eyebrow, title, body, detail }: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="page-hero__pattern" aria-hidden="true" />
      <div className="shell page-hero__inner">
        <p className="eyebrow eyebrow--sun">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="page-hero__body">{body}</p>
        {detail && <p className="page-hero__detail">{detail}</p>}
      </div>
    </section>
  );
}
