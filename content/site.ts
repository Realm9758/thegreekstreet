import type {
  BusinessDetails,
  GalleryImage,
  Review,
} from "@/content/types";

export const business: BusinessDetails = {
  name: "Greek Street Waltham Cross",
  shortName: "Greek Street",
  tagline: "Big Greek flavour. Right on your street.",
  description:
    "Fresh gyros, sizzling souvlaki, loaded boxes and proper Greek sides, prepared in the heart of Waltham Cross.",
  phoneDisplay: "07460 486902",
  phoneInternational: "+44 7460 486902",
  phoneHref: "tel:+447460486902",
  address: {
    street: "260 High Street",
    locality: "Waltham Cross",
    region: "Hertfordshire",
    postcode: "EN8 7EA",
    country: "GB",
    display: "260 High Street, Waltham Cross, EN8 7EA",
  },
  openingHours: [
    {
      day: "Monday",
      shortDay: "Mon",
      schemaDay: "Monday",
      display: "Closed",
    },
    {
      day: "Tuesday",
      shortDay: "Tue",
      schemaDay: "Tuesday",
      opens: "12:00",
      closes: "21:00",
      display: "12:00–21:00",
    },
    {
      day: "Wednesday",
      shortDay: "Wed",
      schemaDay: "Wednesday",
      opens: "12:00",
      closes: "21:00",
      display: "12:00–21:00",
    },
    {
      day: "Thursday",
      shortDay: "Thu",
      schemaDay: "Thursday",
      opens: "12:00",
      closes: "21:00",
      display: "12:00–21:00",
    },
    {
      day: "Friday",
      shortDay: "Fri",
      schemaDay: "Friday",
      opens: "12:00",
      closes: "22:00",
      display: "12:00–22:00",
    },
    {
      day: "Saturday",
      shortDay: "Sat",
      schemaDay: "Saturday",
      opens: "12:00",
      closes: "22:00",
      display: "12:00–22:00",
    },
    {
      day: "Sunday",
      shortDay: "Sun",
      schemaDay: "Sunday",
      display: "Closed",
    },
  ],
  links: {
    directOrder: "https://greekstreetfood.practi.menu/",
    justEat:
      "https://www.just-eat.co.uk/restaurants-greek-street-waltham-cross-waltham-cross/menu",
    instagram: "https://www.instagram.com/greekstreet_walthamcross/",
    directions:
      "https://www.google.com/maps/dir/?api=1&destination=Greek+Street%2C+260+High+Street%2C+Waltham+Cross%2C+EN8+7EA",
    reviews:
      "https://restaurantguru.com/The-Greek-street-food-company-Waltham-Cross",
  },
};

export const navigation = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "Our food" },
  { href: "/gallery", label: "Gallery" },
  { href: "/visit", label: "Visit" },
] as const;

export const reviews: Review[] = [
  {
    quote:
      "Truly one of the best takeouts I’ve ever had. Insanely good food and generous portions.",
    author: "Lucy C.",
    source: "Google",
    href: business.links.reviews,
  },
  {
    quote:
      "Amazing service, very professional. Fresh food and it tastes amazing — I would come back again.",
    author: "Beata B.",
    source: "Google",
    href: business.links.reviews,
  },
  {
    quote:
      "The food is unreal. Everything tasted fantastic. Highly recommend and will definitely be going back.",
    author: "James H.",
    source: "Tripadvisor",
    href: "https://www.tripadvisor.co.uk/Restaurant_Review-g3337108-d18961342-Reviews-The_Greek_street_food_company-Waltham_Cross_Greater_London_England.html",
  },
];

export const gallery: GalleryImage[] = [
  {
    src: "/images/food-13.jpg",
    alt: "Pork gyros in warm pitta with golden chips",
    width: 1600,
    height: 1000,
    featured: true,
  },
  {
    src: "/images/food-11.jpg",
    alt: "A selection of Greek Street gyros with fresh salad and chips",
    width: 1007,
    height: 993,
  },
  {
    src: "/images/food-12.jpg",
    alt: "Grilled souvlaki, pitta, Greek salad and potatoes on a wooden board",
    width: 844,
    height: 735,
    featured: true,
  },
  {
    src: "/images/food-01.jpg",
    alt: "Halloumi gyros with tzatziki, salad and chips",
    width: 914,
    height: 1200,
  },
  {
    src: "/images/food-06.jpg",
    alt: "Greek Street mixed grill box with meats, halloumi and potatoes",
    width: 1400,
    height: 1400,
  },
  {
    src: "/images/food-07.jpg",
    alt: "Classic pork gyros with tzatziki and chips",
    width: 1400,
    height: 1401,
  },
  {
    src: "/images/food-08.jpg",
    alt: "Souvlaki box with Greek salad, seasoned potatoes and tzatziki",
    width: 774,
    height: 1032,
  },
  {
    src: "/images/food-09.jpg",
    alt: "Souvlaki platter with grilled pitta, tomato, cucumber and red onion",
    width: 1400,
    height: 1400,
  },
  {
    src: "/images/food-10.jpg",
    alt: "Grilled souvlaki served over pitta with salad and tzatziki",
    width: 1400,
    height: 1400,
  },
];

export const verificationDate = "July 2026";
