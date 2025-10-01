import { Roboto, Poppins, Inter, DM_Sans, Lateef } from "next/font/google";

// Roboto (default)
export const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "600"], // Regular, Medium, SemiBold
  display: "swap",
});

// Poppins
export const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600"], // Regular, Medium, SemiBold
  display: "swap",
});

// Inter
export const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "700"], // Regular, Bold
  display: "swap",
});

// DM Sans
export const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["500", "700"], // Medium, Bold
  display: "swap",
});

export const lateef = Lateef({
  variable: "--font-lateef",
  subsets: ["arabic"],
  weight: ["400"], // Regular
  display: "swap",
});
