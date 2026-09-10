'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavLinks() {
    const pathname = usePathname();

    const linkClasses = (path: string) =>
        `px-3 py-2 rounded-md transition-colors ${pathname === path
            ? 'bg-white text-blue-600 font-semibold'
            : 'text-white hover:bg-blue-500'
        }`;

    return (
        <ul className="flex gap-6">
            <li>
                <Link
                    href="/"
                    className={linkClasses('/')}
                    aria-current={pathname === '/' ? 'page' : undefined}
                >
                    Home
                </Link>
            </li>

            <li>
                <Link
                    href="/about"
                    className={linkClasses('/about')}
                    aria-current={pathname === '/about' ? 'page' : undefined}
                >
                    About
                </Link>
            </li>

            <li>
                <Link
                    href="/contact"
                    className={linkClasses('/contact')}
                    aria-current={pathname === '/contact' ? 'page' : undefined}
                >
                    Contact
                </Link>
            </li>
        </ul>
    );
}