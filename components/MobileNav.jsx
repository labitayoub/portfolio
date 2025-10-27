"use client"

import { usePathname } from "next/navigation"
import { Link as ScrollLink } from 'react-scroll'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { CiMenuFries } from "react-icons/ci"
import Nav from "./Nav"


const links = [
    {
        name: "Home",
        path: "/"
    },
    {
        name: "About",
        path: "/About"
    },
    {
        name: "Project",
        path: "/Project"
    },
    {
        name: "Contact",
        path: "/Contact"
    },
]

const MobileNav = () => {
    const pathname = usePathname();
    return (
        <Sheet>
            <SheetTrigger className="flex justify-centre items-centre primery">
                <CiMenuFries className="text-[32px] text-accent" />
            </SheetTrigger>
            <SheetContent className="flex flex-col bg-primary h-full min-h-screen">
                <h1 className="text-4xl font-semibold">
                    <span className="text-accent ">M/</span>DIV<span className="text-accent animate-ping .4s">.</span><span className="text-accent animate-ping 1s">.</span><span className="text-accent animate-ping 1.5s">.</span>
                </h1>
                <Nav className="h-full flex flex-col items-center mt-20" />
            </SheetContent>
        </Sheet>
    )
}

export default MobileNav
