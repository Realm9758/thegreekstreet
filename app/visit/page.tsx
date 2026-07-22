import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight, ClockIcon, InstagramIcon, PhoneIcon, PinIcon } from "@/components/Icons";
import OpenStatus from "@/components/OpenStatus";
import OrderPanel from "@/components/OrderPanel";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { business } from "@/content/site";

export const metadata: Metadata = {
  title: "Visit & Contact",
  description: `Find Greek Street at ${business.address.display}. View opening hours, call the restaurant or get directions.`,
  alternates: { canonical: "/visit" },
};

export default function VisitPage() {
  return (
    <>
      <PageHero
        eyebrow="Come and find us"
        title={<>Your Greek fix<br />is <em>right here.</em></>}
        body="Find us on Waltham Cross High Street for collection, takeaway and a warm welcome."
      />
      <section className="section shell visit-grid">
        <Reveal className="visit-grid__image">
          <Image src="/images/food-11.jpg" alt="A selection of Greek Street gyros ready to enjoy" fill sizes="(max-width: 850px) 100vw, 50vw" />
          <div className="visit-grid__status"><OpenStatus /></div>
        </Reveal>
        <Reveal className="visit-grid__details" delay={110}>
          <div className="visit-detail">
            <PinIcon />
            <div>
              <p className="eyebrow">Address</p>
              <h2>{business.address.street}<br />{business.address.locality}, {business.address.postcode}</h2>
              <a className="text-link" href={business.links.directions} target="_blank" rel="noreferrer">
                Get directions <ArrowUpRight />
              </a>
            </div>
          </div>
          <div className="visit-contact-row">
            <a href={business.phoneHref}>
              <PhoneIcon />
              <span><small>Call us</small>{business.phoneDisplay}</span>
            </a>
            <a href={business.links.instagram} target="_blank" rel="noreferrer">
              <InstagramIcon />
              <span><small>Follow us</small>Instagram</span>
            </a>
          </div>
        </Reveal>
      </section>

      <section className="section section--sand hours-section">
        <div className="shell hours-section__grid">
          <Reveal className="hours-section__heading">
            <ClockIcon />
            <p className="eyebrow">Opening hours</p>
            <h2>Plan the craving.</h2>
            <p>Holiday hours may differ. Check Instagram or call before making a special journey.</p>
          </Reveal>
          <Reveal className="hours-table" delay={100}>
            {business.openingHours.map((period) => (
              <div key={period.day}>
                <span>{period.day}</span>
                <strong>{period.display}</strong>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section shell service-cards">
        <Reveal>
          <article className="service-card">
            <span>01</span>
            <h3>Collection</h3>
            <p>Order ahead through the direct menu and collect from 260 High Street.</p>
            <a href={business.links.directOrder} target="_blank" rel="noreferrer">Start a direct order <ArrowUpRight /></a>
          </article>
        </Reveal>
        <Reveal delay={80}>
          <article className="service-card">
            <span>02</span>
            <h3>Delivery</h3>
            <p>Delivery areas, fees and live availability are shown by our ordering partners.</p>
            <a href={business.links.justEat} target="_blank" rel="noreferrer">Check Just Eat <ArrowUpRight /></a>
          </article>
        </Reveal>
        <Reveal delay={160}>
          <article className="service-card">
            <span>03</span>
            <h3>Access</h3>
            <p>Wheelchair access and outdoor seating are listed publicly. Call ahead for specific access needs.</p>
            <a href={business.phoneHref}>Call the restaurant <ArrowUpRight /></a>
          </article>
        </Reveal>
      </section>

      <section className="section shell"><OrderPanel compact /></section>
    </>
  );
}
