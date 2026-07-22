import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, CheckIcon } from "@/components/Icons";
import OrderPanel from "@/components/OrderPanel";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { business } from "@/content/site";

export const metadata: Metadata = {
  title: "Our Food",
  description: "Discover the straightforward, flavour-first approach behind Greek Street Waltham Cross gyros, souvlaki, meze and boxes.",
  alternates: { canonical: "/about" },
};

const principles = [
  {
    number: "01",
    title: "Start with the grill",
    body: "Greek herbs, proper heat and enough time to build caramelised edges — that is where the flavour begins.",
  },
  {
    number: "02",
    title: "Keep it bright",
    body: "Fresh tomato, cucumber, red onion, Greek salad and cooling tzatziki balance every rich, savoury bite.",
  },
  {
    number: "03",
    title: "Never underfill",
    body: "A Greek Street meal should feel generous, whether it is a pitta in your hand or a full box on the table.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our kind of Greek"
        title={<>No fuss.<br /><em>All flavour.</em></>}
        body="We take the things Greek street food does best — flame, herbs, freshness and generosity — and serve them right in the heart of Waltham Cross."
      />

      <section className="section shell about-intro">
        <Reveal className="about-intro__copy">
          <p className="eyebrow">The food comes first</p>
          <h2>Made for lunch breaks, late cravings and <em>everyone at the table.</em></h2>
          <p className="about-intro__lead">
            A great gyros is a complete idea: hot and cool, crisp and soft, rich and bright. We bring those contrasts together in warm pitta, loaded boxes, naked boxes and meze made for sharing.
          </p>
          <p>
            Choose chicken or pork, souvlaki straight from the grill, Cypriot favourites, seafood or a vegetarian filling. Then add your side, dip and something cold to drink.
          </p>
          <Link className="text-link" href="/menu">Find your order <ArrowRight /></Link>
        </Reveal>
        <Reveal className="about-intro__image" delay={100}>
          <Image src="/images/food-12.jpg" alt="A Greek Street souvlaki board with pitta, salad and potatoes" fill sizes="(max-width: 820px) 100vw, 48vw" />
          <div className="about-intro__note"><strong>Greek food</strong><span>for real life</span></div>
        </Reveal>
      </section>

      <section className="section section--blue principles">
        <div className="shell">
          <Reveal>
            <SectionHeading light eyebrow="Our three rules" title={<>What makes it<br /><em>Greek Street.</em></>} />
          </Reveal>
          <div className="principles__grid">
            {principles.map((principle, index) => (
              <Reveal key={principle.number} delay={index * 90}>
                <article className="principle-card">
                  <span>{principle.number}</span>
                  <CheckIcon />
                  <h3>{principle.title}</h3>
                  <p>{principle.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section shell food-detail">
        <div className="food-detail__images">
          <Reveal className="food-detail__image food-detail__image--large">
            <Image src="/images/food-01.jpg" alt="Halloumi wrap with fresh salad and chips" fill sizes="(max-width: 800px) 70vw, 32vw" />
          </Reveal>
          <Reveal className="food-detail__image food-detail__image--small" delay={100}>
            <Image src="/images/food-09.jpg" alt="Grilled souvlaki and pitta with Greek salad" fill sizes="(max-width: 800px) 55vw, 24vw" />
          </Reveal>
        </div>
        <Reveal className="food-detail__copy" delay={150}>
          <p className="eyebrow">A plate with range</p>
          <h2>There is more than one way to <em>go Greek.</em></h2>
          <p>
            Wrap it in pitta. Build a box with salad and a side. Skip the bread with a naked box. Add hummus, halloumi, calamari or a few skewers to share. The menu is designed to flex around the appetite you bring with you.
          </p>
          <ul className="checked-list">
            <li><CheckIcon /> Vegetarian choices across wraps, boxes and meze</li>
            <li><CheckIcon /> Collection and delivery through live ordering partners</li>
            <li><CheckIcon /> Lunch, dinner, solo orders and full-table feasts</li>
          </ul>
          <a className="button" href={business.links.directOrder} target="_blank" rel="noreferrer">
            See today’s live menu <ArrowUpRight />
          </a>
        </Reveal>
      </section>

      <section className="section shell"><OrderPanel /></section>
    </>
  );
}
