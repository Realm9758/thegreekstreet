import type { MenuSection } from "@/content/types";

const livePrice = "See live price";

export const menuSections: MenuSection[] = [
  {
    id: "deals",
    name: "Meal deals",
    eyebrow: "Good company, better value",
    description:
      "Easy combinations for one, two or a full-on Greek Street feast.",
    items: [
      {
        name: "Wrap deal for one",
        description: "Your favourite wrap with house chips and a drink.",
        price: "£13.95",
        popular: true,
      },
      {
        name: "Wrap deal for two",
        description: "Two wraps, two sides and two drinks.",
        price: "£27.00",
      },
      {
        name: "Megalo box",
        description:
          "Chicken souvlaki, pork souvlaki, halloumi, loukaniko and sheftalia with a side and small Greek salad.",
        price: "£18.50",
        popular: true,
      },
      {
        name: "Greek box deal for one",
        description: "A Greek box of your choice with a drink.",
        price: "£14.50",
      },
      {
        name: "Greek box deal for two",
        description: "Two Greek boxes with two drinks.",
        price: "£28.50",
      },
    ],
  },
  {
    id: "soups",
    name: "Homemade soups",
    eyebrow: "Seasonal & slow-simmered",
    description:
      "Made in-house with fresh seasonal ingredients. Selection changes regularly.",
    items: [
      {
        name: "Spicy crab soup",
        description:
          "Blue crab simmered in a bold tomato, chilli, garlic and ginger broth.",
        price: "£9.50",
      },
      {
        name: "Seasonal soup selection",
        description: "Ask what is simmering today or check the live menu.",
        price: livePrice,
      },
    ],
  },
  {
    id: "meze",
    name: "Meze",
    eyebrow: "Small plates, big table energy",
    description:
      "Mediterranean plates for sharing, dipping or adding to your main.",
    items: [
      { name: "Tzatziki & pitta", price: livePrice, dietary: ["Vegetarian"] },
      { name: "Hummus & pitta", price: livePrice, dietary: ["Vegan"] },
      { name: "Grilled halloumi", price: livePrice, dietary: ["Vegetarian"] },
      { name: "Halloumi fries", price: livePrice, dietary: ["Vegetarian"] },
      { name: "Calamari", price: livePrice },
      { name: "Chicken souvlaki", price: livePrice },
      { name: "Pork souvlaki", price: livePrice },
      { name: "Loukaniko", description: "Greek village sausage.", price: livePrice },
      { name: "Sheftalia", description: "Traditional Cypriot sausage.", price: livePrice },
      { name: "Greek salad", price: livePrice, dietary: ["Vegetarian"] },
      { name: "Falafel", price: livePrice, dietary: ["Vegan"] },
    ],
  },
  {
    id: "sides",
    name: "Sides",
    eyebrow: "Complete the feast",
    items: [
      { name: "House chips", price: livePrice, dietary: ["Vegan"] },
      { name: "Greek roast potatoes", price: livePrice, dietary: ["Vegan"] },
      { name: "Pourgouri", description: "Cypriot-style bulgur wheat.", price: livePrice, dietary: ["Vegan"] },
      { name: "Small Greek salad", price: livePrice, dietary: ["Vegetarian"] },
    ],
  },
  {
    id: "wraps",
    name: "Pitta wraps",
    eyebrow: "The street-food classic",
    description:
      "Your filling in warm Greek pitta with tzatziki, lettuce, tomato, red onion and chips.",
    items: [
      { name: "Chicken gyros", price: livePrice, popular: true },
      { name: "Pork gyros", price: livePrice, popular: true },
      { name: "Chicken souvlaki", price: livePrice },
      { name: "Pork souvlaki", price: livePrice },
      { name: "Slow-cooked lamb", price: livePrice },
      { name: "Beef pikantiko", price: livePrice },
      { name: "Loukaniko", price: livePrice },
      { name: "Sheftalia", price: livePrice },
      { name: "Calamari", price: livePrice },
      { name: "Halloumi", price: livePrice, dietary: ["Vegetarian"] },
      { name: "Falafel", price: livePrice, dietary: ["Vegetarian"] },
    ],
  },
  {
    id: "greek-boxes",
    name: "Greek boxes",
    eyebrow: "A proper plateful",
    description:
      "Your main with tzatziki, Greek pitta, a small Greek salad and your choice of side.",
    items: [
      { name: "Chicken gyros box", price: livePrice, popular: true },
      { name: "Pork gyros box", price: livePrice, popular: true },
      { name: "Mixed gyros box", price: livePrice },
      { name: "Chicken souvlaki box", price: livePrice },
      { name: "Pork souvlaki box", price: livePrice },
      { name: "Slow-cooked lamb box", price: livePrice },
      { name: "Beef pikantiko box", price: livePrice },
      { name: "Loukaniko box", price: livePrice },
      { name: "Sheftalia box", price: livePrice },
      { name: "Calamari box", price: livePrice },
      { name: "Halloumi box", price: livePrice, dietary: ["Vegetarian"] },
      { name: "Falafel box", price: livePrice, dietary: ["Vegetarian"] },
    ],
  },
  {
    id: "naked-boxes",
    name: "Naked boxes",
    eyebrow: "Fresh, filling, no pitta required",
    description:
      "Your choice of main served with a generous Greek salad.",
    items: [
      { name: "Chicken gyros naked box", price: livePrice },
      { name: "Pork gyros naked box", price: livePrice },
      { name: "Mixed gyros naked box", price: livePrice },
      { name: "Chicken souvlaki naked box", price: livePrice },
      { name: "Pork souvlaki naked box", price: livePrice },
      { name: "Slow-cooked lamb naked box", price: livePrice },
      { name: "Beef pikantiko naked box", price: livePrice },
      { name: "Loukaniko naked box", price: livePrice },
      { name: "Sheftalia naked box", price: livePrice },
      { name: "Halloumi naked box", price: livePrice, dietary: ["Vegetarian"] },
      { name: "Falafel naked box", price: livePrice, dietary: ["Vegetarian"] },
    ],
  },
  {
    id: "loaded-fries",
    name: "House loaded fries",
    eyebrow: "Golden, loaded, gone",
    items: [
      { name: "Chicken gyros loaded fries", price: livePrice },
      { name: "Pork gyros loaded fries", price: livePrice },
      { name: "Mixed gyros loaded fries", price: livePrice },
      { name: "Halloumi loaded fries", price: livePrice, dietary: ["Vegetarian"] },
    ],
  },
  {
    id: "sauces",
    name: "Sauces & dips",
    eyebrow: "Something on the side",
    items: [
      { name: "Tzatziki", price: livePrice, dietary: ["Vegetarian"] },
      { name: "Hummus", price: livePrice, dietary: ["Vegan"] },
      { name: "House sauce", price: livePrice },
      { name: "Chilli sauce", price: livePrice },
      { name: "Garlic mayo", price: livePrice },
      { name: "Vegan mayo", price: livePrice, dietary: ["Vegan"] },
      { name: "Tahini", price: livePrice, dietary: ["Vegan"] },
    ],
  },
  {
    id: "sweets",
    name: "Greek Street sweets",
    eyebrow: "Save room",
    items: [
      {
        name: "Today’s Greek sweet",
        description: "Check the live menu for the current dessert.",
        price: livePrice,
        dietary: ["Vegetarian"],
      },
    ],
  },
  {
    id: "drinks",
    name: "Drinks",
    eyebrow: "Cold & refreshing",
    items: [
      {
        name: "Soft drinks",
        description: "A rotating selection of cans and bottles.",
        price: livePrice,
      },
      { name: "Still water", price: livePrice },
      { name: "Sparkling water", price: livePrice },
    ],
  },
];

export const featuredMenu = menuSections
  .flatMap((section) =>
    section.items.map((item) => ({ ...item, section: section.name })),
  )
  .filter((item) => item.popular);
