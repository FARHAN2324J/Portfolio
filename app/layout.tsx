import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import NextTopLoader from "nextjs-toploader";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ??
    "http://localhost:3000";

export const metadata: Metadata = {
    metadataBase: new URL(siteUrl),

    title: {
        default: "Farhan Fadaei",
        template: "%s",
    },

    description:
        "Personal portfolio website.",

    robots: {
        index: true,
        follow: true,
    },

    openGraph: {
        type: "website",
        siteName: "Farhan Fadaei",
        title: "Farhan Fadaei",
        description:
            "Personal portfolio website.",
        url: siteUrl,
    },

    twitter: {
        card: "summary",
        title: "Farhan Fadaei",
        description:
            "Personal portfolio website.",
    },
};

export default function RootLayout({
    children,
}: LayoutProps<"/">) {
    return (
        <html
            lang="en"
            className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
        >
            <body className="min-h-full flex flex-col">
                <NextTopLoader
                    color="#EEEEEE"
                    height={2}
                    showSpinner={false}
                    shadow={false}
                    crawlSpeed={200}
                    speed={200}
                    easing="ease"
                />
                <Navbar />
                {children}
            </body>
        </html>
    );
}