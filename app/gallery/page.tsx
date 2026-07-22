import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight, InstagramIcon } from "@/components/Icons";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { business, gallery } from "@/content/site";

export const metadata: Metadata = {
  title: "Gallery",
  description: "See Greek Street Waltham Cross gyros, souvlaki, Greek boxes, fresh salads and meze.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Camera eats first"
        title={<>Fresh, golden<br />and <em>ready for you.</em></>}
        body="A closer look at the wraps, boxes and grills coming out of Greek Street."
      />
      <section className="section shell gallery-page">
        <div className="gallery-page__intro">
          <p>Real food from the Greek Street kitchen.</p>
          <a href={business.links.instagram} target="_blank" rel="noreferrer">
            <InstagramIcon /> Follow @greekstreet_walthamcross <ArrowUpRight />
          </a>
        </div>
        <div className="gallery-grid">
          {gallery.map((image, index) => (
            <Reveal
              key={image.src}
              className={`gallery-grid__item${image.featured ? " gallery-grid__item--featured" : ""}`}
              delay={(index % 3) * 70}
            >
              <Image src={image.src} alt={image.alt} fill sizes="(max-width: 700px) 100vw, 50vw" />
              <span>0{index + 1}</span>
            </Reveal>
          ))}
        </div>
        <div className="gallery-page__cta">
          <p className="eyebrow">Enough looking?</p>
          <h2>Make it your order.</h2>
          <a className="button button--sun" href={business.links.directOrder} target="_blank" rel="noreferrer">
            Order direct <ArrowUpRight />
          </a>
        </div>
      </section>
    </>
  );
}
