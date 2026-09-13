import {
    SiGithub,
    SiTelegram,
} from "@icons-pack/react-simple-icons";

import { Button } from "@/components/ui/Button";
import { Description } from "../ui/Description";

const contactLinks = [

    {
        label: "GitHub",
        href: "https://github.com/your-username",
        icon: SiGithub,
    },
    {
        label: "Telegram",
        href: "https://t.me/your-username",
        icon: SiTelegram,
    },

];

export function Footer() {
    return (
        <footer className="py-8 my-28">
            <div className="mx-auto flex w-full max-w-5xl flex-col items-center px-4 sm:px-6 lg:px-8">
                <Description className="text-lg">
                    You can reach me at
                </Description>

                <nav aria-label="Contact links" className="mt-4">
                    <ul className="flex flex-wrap items-center justify-center gap-2">
                        {contactLinks.map(({ label, href, icon: Icon }) => (
                            <li key={label}>
                                <Button asChild variant="link" size="sm">
                                    <a
                                        href={href}
                                        target={href.startsWith("mailto:") ? undefined : "_blank"}
                                        rel={
                                            href.startsWith("mailto:")
                                                ? undefined
                                                : "noreferrer"
                                        }
                                    >
                                        <Icon aria-hidden="true" className="size-4" />
                                        {label}
                                    </a>
                                </Button>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </footer>
    );
}