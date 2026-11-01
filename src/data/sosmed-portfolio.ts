import portfolioBeauty from "@/assets/portfolio-beauty.jpg";
import portfolioFashion from "@/assets/portfolio-fashion.jpg";
import portfolioFood from "@/assets/portfolio-food.jpg";
import portfolioCafe from "@/assets/portfolio-cafe.jpg";
import portfolioEvent from "@/assets/portfolio-event.jpg";
import portfolioSkincare from "@/assets/portfolio-skincare.jpg";

export type SosmedPortfolioCategory = "Beauty" | "Fashion" | "Food" | "Cafe" | "Event" | "Skincare";

export interface SosmedPortfolioItem {
  id: string;
  name: string;
  category: SosmedPortfolioCategory;
  image: string;
}

export const SOSMED_PORTFOLIO_CATEGORIES: SosmedPortfolioCategory[] = [
  "Beauty",
  "Fashion",
  "Food",
  "Cafe",
  "Event",
  "Skincare",
];

export const SOSMED_PORTFOLIO: SosmedPortfolioItem[] = [
  { id: "lumiere", name: "Lumière Beauty", category: "Beauty", image: portfolioBeauty },
  { id: "velora", name: "Velora", category: "Fashion", image: portfolioFashion },
  { id: "warung-nusantara", name: "Warung Nusantara", category: "Food", image: portfolioFood },
  { id: "daily-bean", name: "The Daily Bean", category: "Cafe", image: portfolioCafe },
  { id: "riverdale", name: "Riverdale Music Events", category: "Event", image: portfolioEvent },
  { id: "purelune", name: "Purelune Skincare", category: "Skincare", image: portfolioSkincare },
];
