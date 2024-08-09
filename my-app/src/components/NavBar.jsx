"use client"
import { usePathname } from 'next/navigation'
import Link from 'next/link';
import MailIcon from '@mui/icons-material/Mail';
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';
import { useState, useEffect } from 'react';

const NavBar = () => {
    const path = usePathname();
    const [subscribed, setSubscribed] = useState(false)

    useEffect(() => {
        setSubscribed(JSON.parse(localStorage.getItem("isSubscribed")))
    }, [])

    return (
        <nav className="NavBar">
            <ul className="menu">
                <li>
                    <Link href="/" className={path === '/' ?
                        'active' : null}>Home</Link>
                </li>
                <li>
                    <Link href="/coffee-knowledge" className={path.startsWith('/coffee-knowledge') ?
                        'active' : null}>Know Your Coffee</Link>
                </li>
                <li>
                    <Link
                        href="/coffee-statistics" className={path.startsWith('/coffee-statistics') ?
                            'active' : null}>Coffee Statistics</Link>
                </li>
                <li>
                    <Link
                        href="/feeling-coffee" className={path.startsWith('/feeling-coffee') ?
                            'active' : null}>Feeling Coffee</Link>
                </li>
                <li>
                    <Link
                        href="/bean-news" className={path.startsWith('/bean-news') ?
                            'active' : null}>BeaNews</Link>
                </li>
                <li>
                    {subscribed ? <MarkEmailReadIcon /> : <MailIcon />}
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;