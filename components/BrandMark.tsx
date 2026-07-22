import Link from "next/link";

interface BrandMarkProps {
  light?: boolean;
  compact?: boolean;
}

export default function BrandMark({ light, compact }: BrandMarkProps) {
  return (
    <Link
      className={`brand-mark${light ? " brand-mark--light" : ""}${compact ? " brand-mark--compact" : ""}`}
      href="/"
      aria-label="Greek Street Waltham Cross — home"
    >
      <svg
        className="brand-mark__symbol"
        viewBox="0 0 72 46"
        role="img"
        aria-hidden="true"
      >
        <path d="M6 36 34 8l11 12 7-7 14 23H6Z" />
        <path d="M14 36h44M25 27l9-9 7 8" />
      </svg>
      <span className="brand-mark__copy">
        <span className="brand-mark__name">Greek Street</span>
        {!compact && (
          <span className="brand-mark__sub">Gyros · Souvlaki · Waltham Cross</span>
        )}
      </span>
    </Link>
  );
}
