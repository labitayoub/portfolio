"use client"

import { Link as ScrollLink } from 'react-scroll'
import { usePathname } from "next/navigation"


const links = [
    {
        name: "Accueil",
        path: "Home"
    },
    {
        name: "À Propos",
        path: "about"
    },
    {
        name: "Projets",
        path: "project"
    },
    {
        name: "Contact",
        path: "contact"
    },
]

const Nav = ({ className }) => {
    const pathname = usePathname();
    return (
        <nav className={`flex items-center gap-8 ${className}`}>
            {links.map((link, index) => {
                const isHome = link.name === "Home";
                const isActive = link.path === pathname;
                const linkClass = isHome || isActive
                    ? "text-accent border-b-2 border-accent"
                    : "";
                return (
                    <ScrollLink 
                        key={index} 
                        to={link.path} 
                        smooth={true}
                        duration={500}
                        className={`${linkClass} capitalize font-medium hover:text-accent transition-all cursor-pointer`} >
                        {link.name}
                    </ScrollLink>
                )
            })}
        </nav>
    )
}

export default Nav
