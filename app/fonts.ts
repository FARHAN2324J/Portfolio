import { Baskervville } from "next/font/google";
import localFont from "next/font/local";

export const baskervville = Baskervville({
    subsets: ["latin"],
    weight: "600",
    style: "italic",
});

export const iranSans = localFont({
    src: "./fonts/IRANSansX-Medium.otf",
    variable: "--font-iran-sans",
    display: "swap",
    weight: "500",
});