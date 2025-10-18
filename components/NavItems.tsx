'use client';

import { NAV_ITEMS } from "@/lib/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavItems = () => {
    const pathname = usePathname();

    const isActive = (path: string) => {
        if (path === "/") return pathname === "/";
        return pathname.startsWith(path);
    };

    return (
        <ul className="flex flex-row items-center gap-8 font-medium text-gray-400">
            {NAV_ITEMS.map(({ href, label }) => (
                <li key={href}>
                    <Link
                        href={href}
                        className={`transition-colors duration-200 hover:text-yellow-500 ${
                            isActive(href) ? "text-white" : ""
                        }`}
                    >
                        {label}
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default NavItems;
