import { ArrowUpRight, PhoneIcon } from "@/components/Icons";
import { business } from "@/content/site";

export default function OrderPanel({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`order-panel${compact ? " order-panel--compact" : ""}`}>
      <div>
        <p className="eyebrow eyebrow--sun">Pick your route</p>
        <h2>{compact ? "Ready when you are." : "From our grill to your table."}</h2>
        {!compact && (
          <p>
            Order for collection or delivery through our live partners, or call us if you need a hand.
          </p>
        )}
      </div>
      <div className="order-panel__actions">
        <a
          className="button button--sun"
          href={business.links.directOrder}
          target="_blank"
          rel="noreferrer"
        >
          Order direct <ArrowUpRight />
        </a>
        <a
          className="button button--outline-light"
          href={business.links.justEat}
          target="_blank"
          rel="noreferrer"
        >
          Order on Just Eat <ArrowUpRight />
        </a>
        <a className="order-panel__phone" href={business.phoneHref}>
          <PhoneIcon /> {business.phoneDisplay}
        </a>
      </div>
    </div>
  );
}
