import { Baskervville } from "next/font/google";
import localFont from "next/font/local";

export const baskervville = Baskervville({
    subsets: ["latin"],
    weight: "600",
    style: "italic",
});

export const tanha = localFont({
    src: "./Tanha.woff2",
    variable: "--font-tanha",
    display: "swap",
    weight: "400",
    style: "normal",
});
