import GrilledSteak from "../assets/GrilledSteak.avif";
import HealthySalad from "../assets/HealthySalad.avif";
import ItalianPast from "../assets/ItalianPasta.avif";
import hi from "../assets/chefinfo.avif";
export const navLinks = [
  { name: "Home", href: "#Home" },
  { name: "Menu", href: "#Menu" },
  { name: "About", href: "#About" },
  { name: "Reservation", href: "#Footer" },
  { name: "Contact", href: "#Footer" },
];
export const dishes = [
  {
    name: "Grilled Steak",
    description: "Juicy grilled beef served with vegetables.",
    price: "$18",
    image: GrilledSteak,
  },
  {
    name: "Italian Pasta",
    description: "Creamy pasta with fresh herbs and parmesan cheese.",
    price: "$14",
    image: ItalianPast,
  },
  {
    name: "Healthy Salad",
    description: "Fresh vegetables with a light lemon dressing.",
    price: "$10",
    image: HealthySalad,
  },
];
export const menuDetails = [
  {
    id: 1,
    name: "Grilled Steak",
    price: "$18",
    serving: "Serves 1",
    prepTime: "20 min",
    description:
      "Tender grilled beef served with roasted vegetables and a savory house sauce for a rich and satisfying main dish.",
    extras: [
      "Herb butter finish",
      "Seasonal vegetables",
      "Choice of side sauce",
    ],
  },
  {
    id: 2,
    name: "Italian Pasta",
    price: "$14",
    serving: "Serves 1",
    prepTime: "15 min",
    description:
      "Creamy pasta blended with parmesan, fresh herbs, and a smooth sauce that makes it a comforting customer favorite.",
    extras: [
      "Fresh parmesan topping",
      "Garlic bread option",
      "Balanced creamy texture",
    ],
  },
  {
    id: 3,
    name: "Healthy Salad",
    price: "$10",
    serving: "Serves 1",
    prepTime: "10 min",
    description:
      "A refreshing mix of crisp vegetables and lemon dressing, perfect for a light meal that still feels complete.",
    extras: [
      "Fresh lemon dressing",
      "Crunchy seasonal greens",
      "Light and clean flavor",
    ],
  },
];

export const chefInfo = [
  {
    title: "Our Special Chef",
    description:
      "Our chef creates delicious dishes with fresh ingredients and a passion for quality food every day.",
    image: hi,
  },
];

export const footerLinks = ["Menu", "Gallery", "Booking", "Location"];
