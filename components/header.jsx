import { Button } from "./ui/button"





// components
import Nav from "./Nav"
import MobileNav from "./MobileNav"


const header = () => {
    return (
        <header className="py-4 px-4 xl:py-5 text-white fixed top-0 left-0 w-full z-50 shadow-md backdrop-blur-lg">
            <div className="px-6 mx-auto flex justify-between items-center ">

                {/* logo */}
                <h1 className="text-7xl font-semibold">
                <span className="text-accent ">M/</span>DIV<span className="text-accent animate-ping .4s">.</span><span className="text-accent animate-ping 1s">.</span><span className="text-accent animate-ping 1.5s">.</span>
                </h1>

                {/* desktop nav & hire me button */}
                <div className="hidden lg:flex items-centre gap-8">
                    <Nav />
                    <Button className=" h-[30px] bg-accent text-black hover:border-inset border-2 border-transparent hover:text-accent hover:border-accent rounded-[20px] my-auto">Hire me</Button>

                </div>

                {/* mobile nav */}
                <div className="lg:hidden">
                    <MobileNav />
                </div>
            </div>
        </header>
    )
}

export default header
