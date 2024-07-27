"use client"
import { usePathname } from 'next/navigation'
import Link from 'next/link';

const NavBar = () => {
    const path = usePathname();

    return (
        <nav className="NavBar">
            <ul className="menu">
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/coffee-knowledge" className={path.startsWith('/coffee_knowledge') ?
                        'active' : null}>Know Your Coffee</Link>
                </li>
                <li>
                    <Link
                        href="/coffee-statistics" className={path.startsWith('/coffee_statistics') ?
                            'active' : null}>Coffee Statistics</Link>
                </li>
                <li>
                    <Link
                        href="/feeling-coffee" className={path.startsWith('/feeling_coffee') ?
                            'active' : null}>Feeling Coffee</Link>
                </li>
                <li>
                    <Link
                        href="/bean-news" className={path.startsWith('/bean_news') ?
                            'active' : null}>BeaNews</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;