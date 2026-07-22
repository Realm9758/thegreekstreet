import { ArrowUpRight } from "@/components/Icons";
import { business } from "@/content/site";

export default function MobileOrderBar() {
  return (
    <div className="mobile-order-bar">
      <a href={business.links.directOrder} target="_blank" rel="noreferrer">
        <span>
          <small>Hungry?</small>
          Order direct
        </span>
        <ArrowUpRight />
      </a>
    </div>
  );
}
