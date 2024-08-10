"use client"
import { usePathname } from 'next/navigation'
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Mail, MarkEmailRead } from '@mui/icons-material'
import { Typography } from '@mui/material';
import CustomizedMenus from "@/components/SmallScreenMenu";

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
                        'active' : null}><Typography><strong>Home</strong></Typography></Link>
                </li>
                <li>
                    <Link href="/coffee-knowledge" className={path.startsWith('/coffee-knowledge') ?
                        'active' : null}><Typography><strong>Know Your Coffee</strong></Typography></Link>
                </li>
                <li>
                    <Link
                        href="/coffee-statistics" className={path.startsWith('/coffee-statistics') ?
                            'active' : null}><Typography><strong>Coffee Statistics</strong></Typography>
                    </Link>
                </li>
                <li>
                    <Link
                        href="/feeling-coffee" className={path.startsWith('/feeling-coffee') ?
                            'active' : null}><Typography><strong>Feeling Coffee</strong></Typography></Link>
                </li>
                <li>
                    <Link
                        href="/bean-news" className={path.startsWith('/bean-news') ?
                            'active' : null}><Typography><strong>BeaNews</strong></Typography></Link>
                </li>
                <li>
                    {subscribed ? <MarkEmailRead /> : <Mail />}
                </li>
            </ul>
            <CustomizedMenus className='menuDropdown' />
        </nav>
    )
}

export default NavBar;