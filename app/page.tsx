import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, ClockIcon, PinIcon, StarIcon } from "@/components/Icons";
import OpenStatus from "@/components/OpenStatus";
import OrderPanel from "@/components/OrderPanel";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { featuredMenu } from "@/content/menu";
import { business, gallery, reviews, verificationDate } from "@/content/site";

const signatureCards = [
  {
    number: "01",
    title: "Pitta wraps",
    copy: "Warm pitta, fresh salad, crispy chips and the filling you came for.",
    image: "/images/food-13.jpg",
    href: "/menu#wraps",
  },
  {
    number: "02",
    title: "Greek boxes",
    copy: "A full spread of grilled flavour, pitta, tzatziki, salad and your side.",
    image: "/images/food-08.jpg",
    href: "/menu#greek-boxes",
  },
  {
    number: "03",
    title: "Meze & more",
    copy: "Bring everyone in. Add a few plates, pass the dips and make a feast of it.",
    image: "/images/food-12.jpg",
    href: "/menu#meze",
  },
];

export default function Home() {
  return (
    <>
      <section className="home-hero">
        <div className="home-hero__content">
          <div className="home-hero__copy">
            <p className="eyebrow eyebrow--sun">Greek street food · Waltham Cross</p>
            <h1>
              Fresh off
              <span>the grill.</span>
            </h1>
            <p className="home-hero__intro">
              Gyros with crisp edges. Souvlaki straight from the flame. Big boxes built for serious appetites.
            </p>
            <div className="home-hero__actions">
              <a className="button button--sun" href={business.links.directOrder} target="_blank" rel="noreferrer">
                Order direct <ArrowUpRight />
              </a>
              <Link className="text-link text-link--light" href="/menu">
                Explore the menu <ArrowRight />
              </Link>
            </div>
          </div>
          <div className="home-hero__facts">
            <div>
              <ClockIcon />
              <span><OpenStatus /><small>Tuesday to Saturday</small></span>
            </div>
            <a href={business.links.directions} target="_blank" rel="noreferrer">
              <PinIcon />
              <span>260 High Street<small>Waltham Cross · EN8 7EA</small></span>
            </a>
          </div>
        </div>
        <div className="home-hero__image">
          <Image
            src="/images/food-13.jpg"
            alt="A generously filled Greek Street pork gyros"
            fill
            priority
            sizes="(max-width: 900px) 100vw, 52vw"
          />
          <div className="home-hero__stamp" aria-hidden="true">
            <span>MADE FRESH · MADE GREEK ·</span>
            <strong>GS</strong>
          </div>
          <div className="home-hero__caption">
            <span>House favourite</span>
            <strong>Pork gyros</strong>
          </div>
        </div>
      </section>

      <div className="ticker" aria-hidden="true">
        <div>
          <span>GYROS</span><i>✦</i><span>SOUVLAKI</span><i>✦</i><span>HALLOUMI</span><i>✦</i>
          <span>GREEK BOXES</span><i>✦</i><span>FRESH MEZE</span><i>✦</i><span>GOOD TIMES</span><i>✦</i>
        </div>
      </div>

      <section className="section shell signatures">
        <Reveal>
          <SectionHeading
            eyebrow="Choose your move"
            title={<>All roads lead to <em>something good.</em></>}
            body="The classics are all here — built fresh, packed generously and ready for collection or delivery."
          />
        </Reveal>
        <div className="signature-grid">
          {signatureCards.map((card, index) => (
            <Reveal key={card.title} delay={index * 90}>
              <Link href={card.href} className="signature-card">
                <div className="signature-card__image">
                  <Image src={card.image} alt="" fill sizes="(max-width: 760px) 100vw, 33vw" />
                  <span>{card.number}</span>
                </div>
                <div className="signature-card__copy">
                  <h3>{card.title}</h3>
                  <p>{card.copy}</p>
                  <span className="circle-arrow"><ArrowUpRight /></span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section section--blue menu-preview">
        <div className="shell">
          <Reveal>
            <SectionHeading
              light
              eyebrow="A little look at the menu"
              title={<>Built your way. <em>Eaten your way.</em></>}
              body="Go classic with gyros, load up a Greek box or keep it fresh with a naked box."
            />
          </Reveal>
          <div className="menu-preview__grid">
            {featuredMenu.slice(0, 6).map((item, index) => (
              <Reveal key={`${item.section}-${item.name}`} delay={index * 55}>
                <article className="preview-item">
                  <span className="preview-item__number">0{index + 1}</span>
                  <div>
                    <p>{item.section}</p>
                    <h3>{item.name}</h3>
                    {item.description && <span>{item.description}</span>}
                  </div>
                  <strong>{item.price}</strong>
                </article>
              </Reveal>
            ))}
          </div>
          <Link className="button button--sun menu-preview__button" href="/menu">
            See the whole menu <ArrowRight />
          </Link>
        </div>
      </section>

      <section className="section shell story-split">
        <Reveal className="story-split__image">
          <Image src="/images/food-11.jpg" alt="Three freshly prepared Greek Street gyros" fill sizes="(max-width: 800px) 100vw, 48vw" />
          <div className="story-split__label"><span>Made</span><strong>Properly</strong></div>
        </Reveal>
        <Reveal className="story-split__copy" delay={120}>
          <p className="eyebrow">The Greek Street way</p>
          <h2>Simple ingredients.<br /><em>Serious flavour.</em></h2>
          <p>
            This is food that gets straight to the point: meat seasoned with Greek herbs, pitta warmed to order, bright salad, creamy tzatziki and potatoes with the right kind of crunch.
          </p>
          <div className="story-values">
            <div><strong>01</strong><span>Grilled to order</span></div>
            <div><strong>02</strong><span>Generous by nature</span></div>
            <div><strong>03</strong><span>Fresh, bright, Greek</span></div>
          </div>
          <Link className="text-link" href="/about">Why we do it this way <ArrowRight /></Link>
        </Reveal>
      </section>

      <section className="section section--sand review-section">
        <div className="shell">
          <Reveal>
            <div className="review-section__top">
              <SectionHeading eyebrow="Word on the street" title={<>Loved locally.<br /><em>Craved regularly.</em></>} />
              <div className="rating-lockup">
                <strong>4.6</strong>
                <div><span>{[1, 2, 3, 4, 5].map((star) => <StarIcon key={star} />)}</span><p>Google rating · checked {verificationDate}</p></div>
              </div>
            </div>
          </Reveal>
          <div className="review-grid">
            {reviews.map((review, index) => (
              <Reveal key={review.author} delay={index * 80}>
                <a className="review-card" href={review.href} target="_blank" rel="noreferrer">
                  <span className="review-card__mark">“</span>
                  <blockquote>{review.quote}</blockquote>
                  <div><strong>{review.author}</strong><span>{review.source} review <ArrowUpRight /></span></div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section gallery-tease">
        <div className="shell gallery-tease__heading">
          <Reveal>
            <SectionHeading eyebrow="Fresh from the feed" title={<>Look first.<br /><em>Then get hungry.</em></>} />
          </Reveal>
          <a className="text-link" href={business.links.instagram} target="_blank" rel="noreferrer">
            Follow on Instagram <ArrowUpRight />
          </a>
        </div>
        <div className="gallery-tease__grid">
          {gallery.slice(0, 5).map((image, index) => (
            <Link href="/gallery" className="gallery-tease__item" key={image.src} aria-label="View the Greek Street gallery">
              <Image src={image.src} alt={image.alt} fill sizes="(max-width: 700px) 50vw, 25vw" />
              <span>0{index + 1}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="section shell home-order">
        <OrderPanel />
      </section>
    </>
  );
}
