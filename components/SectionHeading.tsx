import type { ReactNode } from "react";

interface SectionHeadingProps {
  eyebrow: string;
  title: ReactNode;
  body?: string;
  align?: "left" | "center";
  light?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  body,
  align = "left",
  light,
}: SectionHeadingProps) {
  return (
    <div
      className={`section-heading section-heading--${align}${light ? " section-heading--light" : ""}`}
    >
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {body && <p className="section-heading__body">{body}</p>}
    </div>
  );
}
