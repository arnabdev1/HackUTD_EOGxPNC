"use client";
import { RiCloseCircleFill } from "react-icons/ri";

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
            path: "/about",
        },
    ];

    const pathname = usePathname();

    return (
        <div className="bg-[#000000]">
            {/* Menu Trigger */}
            <button
                className="flex justify-center items-center"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle Menu"
            >
                <CiMenuFries className="md:text-[32px] text-[24px] text-[#ff0000]" />
            </button>

            {/* Sidebar Menu */}
            <div
                className={`fixed top-0 right-0 w-64 h-full bg-[#000000] dark:bg-primary z-50 transform transition-transform duration-300 ease-in-out ${
                    isMenuOpen ? "translate-x-0" : "translate-x-full"
                }`}
            >
                <div className="flex justify-between items-center p-4">
                    {/* Close Button */}
                    <button
                        onClick={() => setIsMenuOpen(false)}
                        className="text-[#ff0000] text-3xl"
                    >
                        <RiCloseCircleFill />

                    </button>
                </div>

                {/* Navigation Links */}
                <div className="flex flex-col p-4 gap-5 bg-black h-screen ">
                    {links.map((link, index) => (
                        <Link
                            href={link.path}
                            key={index}
                            className={`${
                                link.path === pathname
                                    ? "text-[#ff0000] border-b-2 border-[#000000]"
                                    : "text-[#ffffff]"
                            } capitalize font-bold hover:text-[#ff0000] transition-all`}
                            onClick={() => setIsMenuOpen(false)} // Close menu on link click
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MobileNav;
