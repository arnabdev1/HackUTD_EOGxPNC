"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { useState } from "react";

const MobileNav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

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

    const pathname = usePathname();

    return (
        <div className="bg-[#492c74] dark:bg-primary">
            {/* Menu Trigger */}
            <button
                className="flex justify-center items-center"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle Menu"
            >
                <CiMenuFries className="md:text-[32px] text-[24px] text-[#cbacf9]" />
            </button>

            {/* Menu Content */}
            {isMenuOpen && (
                <div className="bg-[#492c74] dark:bg-primary flex flex-col p-4 absolute top-0 left-0 w-full h-screen z-50">
                    {/* User Info */}
                    <div className="mt-10 mb-10 text-center flex flex-row items-center justify-center gap-2 md:text-2xl text-xl">
                        <div>Arnab</div>
                        <div>Dev</div>
                    </div>

                    {/* Navigation Links */}
                    {links.map((link, index) => (
                        <Link
                            href={link.path}
                            key={index}
                            className={`${link.path === pathname &&
                                "text-[#cbacf9] border-b-2 border-[#cbacf9]"
                                } capitalize font-medium hover:text-[#cbacf9] transition-all`}
                            onClick={() => setIsMenuOpen(false)} // Close menu on link click
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MobileNav;
