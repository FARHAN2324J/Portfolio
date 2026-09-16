import { Footer } from "@/components/landing/sections/Footer";

export default function SiteLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            {children}
            <Footer />
        </>
    );
}