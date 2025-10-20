'use client';

import Image from "next/image";
import NavItems from "./NavItems";

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between px-8 py-4 bg-neutral-900 shadow-md">
            {/* Left: Logo */}
            <div className="flex items-center gap-3">
                <Image
                    src="/assets/icons/logo.svg"
                    alt="Signalist logo"
                    width={140}
                    height={32}
                    className="h-8 w-auto invert dark:invert-0"
                />
            </div>

            {/* Right: Navigation links */}
            <NavItems />
        </nav>
    );
};

export default Navbar;
