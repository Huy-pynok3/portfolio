import { useState } from "react";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="w-full pt-5 pb-10">
            <nav className="w-full flex items-center justify-between">
                {/* Logo */}
                <a className="font-bold hover:text-white uppercase text-gray-400 text-lg tracking-widest" href="/">
                    t.Q.Huy
                </a>

                {/* Desktop Menu */}
                <div className="flex items-center gap-6 text-lg text-gray-400 max-md:hidden">
                    <a className="hover:text-white" href="/#work-experience">
                        Work Experience
                    </a>
                    <a className="hover:text-white" href="/#projects">
                        Projects
                    </a>
                    <a className="hover:text-white" href="/#contact">
                        Contact
                    </a>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="hidden max-md:flex">
                    <button onClick={() => setMenuOpen(true)} type="button" className="text-white">
                        <MenuIcon />
                    </button>

                    {/* Fullscreen Mobile Menu */}
                    <div
                        className={`w-full h-screen flex flex-col px-6 py-11 fixed top-0 bottom-0 bg-black text-white transition-all ease-in-out z-50 ${
                            menuOpen ? "left-0" : "-left-full"
                        }`}
                    >
                        <button onClick={() => setMenuOpen(false)} type="button" className="text-white self-end">
                            <CloseIcon />
                        </button>

                        <ul className="flex flex-col text-gray-400 text-3xl font-semibold mt-32 gap-5 text-center">
                            <li>
                                <a className="hover:text-white" href="/#work-experience">
                                    Work Experience
                                </a>
                            </li>
                            <li>
                                <a className="hover:text-white" href="/#projects">
                                    Projects
                                </a>
                            </li>
                            <li>
                                <a className="hover:text-white" href="/#contact">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

function MenuIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="tabler-icon tabler-icon-menu-2"
        >
            <path d="M4 6h16" />
            <path d="M4 12h16" />
            <path d="M4 18h16" />
        </svg>
    );
}

function CloseIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="tabler-icon tabler-icon-x"
        >
            <path d="M18 6L6 18" />
            <path d="M6 6l12 12" />
        </svg>
    );
}
