import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "@/components/Icons";
import { business } from "@/content/site";

export default function NotFound() {
  return (
    <section className="not-found">
      <div className="not-found__pattern" aria-hidden="true" />
      <div className="not-found__inner">
        <p className="not-found__number">404</p>
        <p className="eyebrow eyebrow--sun">This pitta is empty</p>
        <h1>Nothing to see.<br /><em>Plenty to eat.</em></h1>
        <p>The page moved, but Greek Street is still right where you left us.</p>
        <div className="not-found__actions">
          <Link className="button button--sun" href="/">Back home <ArrowRight /></Link>
          <a className="text-link text-link--light" href={business.links.directOrder} target="_blank" rel="noreferrer">
            Order instead <ArrowUpRight />
          </a>
        </div>
      </div>
    </section>
  );
}
