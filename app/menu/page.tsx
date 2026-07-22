import type { Metadata } from "next";
import MenuExplorer from "@/components/MenuExplorer";
import OrderPanel from "@/components/OrderPanel";
import PageHero from "@/components/PageHero";
import { menuSections } from "@/content/menu";

export const metadata: Metadata = {
  title: "Menu",
  description: "Explore Greek Street Waltham Cross meal deals, wraps, Greek boxes, meze, loaded fries, sides and more.",
  alternates: { canonical: "/menu" },
};

export default function MenuPage() {
  return (
    <>
      <PageHero
        eyebrow="The full spread"
        title={<>Pick a favourite.<br /><em>Then find another.</em></>}
        body="From quick pitta wraps to loaded Greek boxes and shareable meze, build lunch or dinner your way."
        detail="Exact prices and availability are confirmed on the live ordering menu."
      />
      <section className="section shell menu-page">
        <div className="menu-notice">
          <strong>Before you order</strong>
          <p>
            Menu selections can change. Please tell the restaurant about allergies before ordering; dietary labels describe recipes, not an allergen-free preparation environment.
          </p>
        </div>
        <MenuExplorer sections={menuSections} />
      </section>
      <section className="section shell"><OrderPanel compact /></section>
    </>
  );
}
