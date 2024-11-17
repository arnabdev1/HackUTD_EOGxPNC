"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
const links = [
    {
        name: "home",
        path: "/",
    },
    {
        name: "Documentation",
        path: "/documentation",
    },
    {
        name: "About Us",
        path: "about",
    },
];

const Nav = () => {
    const pathname = usePathname()
    return (
        <nav className="flex gap-8">
            {links.map((link, index) => {
                return (
                    <Link
                        href={link.path}
                        key={index}
                        className={`${link.path === pathname &&
                            "text-[#ff0000] border-b-2 border-[#ff0000]"
                            } capitalize font-medium hover:text-[#ff0000] transition-all`}
                    >
                        {link.name}
                    </Link>
                );
            })}
        </nav>
    );
};

export default Nav;
