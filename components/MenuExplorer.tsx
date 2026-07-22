"use client";

import { useMemo, useState } from "react";
import { ArrowUpRight, SearchIcon } from "@/components/Icons";
import { business } from "@/content/site";
import type { MenuSection } from "@/content/types";

export default function MenuExplorer({ sections }: { sections: MenuSection[] }) {
  const [active, setActive] = useState("all");
  const [query, setQuery] = useState("");

  const visibleSections = useMemo(() => {
    const normalised = query.trim().toLowerCase();
    return sections
      .filter((section) => active === "all" || section.id === active)
      .map((section) => ({
        ...section,
        items: normalised
          ? section.items.filter((item) =>
              [item.name, item.description, ...(item.dietary ?? [])]
                .filter(Boolean)
                .join(" ")
                .toLowerCase()
                .includes(normalised),
            )
          : section.items,
      }))
      .filter((section) => section.items.length > 0);
  }, [active, query, sections]);

  return (
    <div className="menu-explorer">
      <div className="menu-tools">
        <label className="menu-search">
          <span className="sr-only">Search the menu</span>
          <SearchIcon />
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search gyros, halloumi, vegan…"
          />
        </label>
        <div className="menu-tabs" role="group" aria-label="Filter menu by section">
          <button
            type="button"
            className={active === "all" ? "menu-tab menu-tab--active" : "menu-tab"}
            onClick={() => setActive("all")}
          >
            All
          </button>
          {sections.map((section) => (
            <button
              type="button"
              className={active === section.id ? "menu-tab menu-tab--active" : "menu-tab"}
              onClick={() => setActive(section.id)}
              key={section.id}
            >
              {section.name}
            </button>
          ))}
        </div>
      </div>

      {visibleSections.length > 0 ? (
        <div className="menu-results" aria-live="polite">
          {visibleSections.map((section) => (
            <section className="menu-section" id={section.id} key={section.id}>
              <div className="menu-section__heading">
                <p className="eyebrow">{section.eyebrow}</p>
                <h2>{section.name}</h2>
                {section.description && <p>{section.description}</p>}
              </div>
              <div className="menu-section__items">
                {section.items.map((item) => (
                  <article className="menu-item" key={item.name}>
                    <div className="menu-item__topline">
                      <h3>{item.name}</h3>
                      <span className={item.price === "See live price" ? "menu-item__price menu-item__price--live" : "menu-item__price"}>
                        {item.price}
                      </span>
                    </div>
                    {item.description && <p>{item.description}</p>}
                    <div className="menu-item__tags">
                      {item.popular && <span className="tag tag--popular">Greek Street pick</span>}
                      {item.dietary?.map((diet) => (
                        <span className="tag" key={diet}>{diet}</span>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      ) : (
        <div className="menu-empty" aria-live="polite">
          <p className="eyebrow">No plates found</p>
          <h2>Try another search.</h2>
          <p>Or head to the live menu to see today’s complete selection.</p>
          <a className="button" href={business.links.directOrder} target="_blank" rel="noreferrer">
            View live menu <ArrowUpRight />
          </a>
        </div>
      )}
    </div>
  );
}
