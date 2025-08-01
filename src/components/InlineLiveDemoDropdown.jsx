import { useState, useRef, useEffect } from "react";
import img from '@/image'

const InlineLiveDemoDropdown = ({ demos }) => {
    const [open, setOpen] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const handler = (e) => {
            if (ref.current && !ref.current.contains(e.target)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, []);

    return (
        <div className="relative max-sm:w-full" ref={ref}>
            <button
                onClick={() => setOpen(!open)}
                className="flex items-center gap-1 bg-gray-200/10 max-sm:w-full max-sm:justify-center rounded-full py-1 px-6 hover:bg-gray-200/20 transition-all text-white text-sm w-full"
            >
                <img className='invert' src={img.brand_world} alt="" />
                Live Demo
                {/* <span className="text-xs ml-1">{open ? "▲" : "▼"}</span> */}
                <img
                    src={img.chevron}
                    alt=""
                    className={`w-4 h-4 ml-1 transition-transform duration-300 transform invert ${
                        open ? "rotate-180" : "rotate-0"
                    }`}
                />

            </button>

            {open && (
                <ul className="absolute z-10 top-[110%] left-0 w-full rounded-md overflow-hidden bg-gray-800 border border-gray-600 text-white shadow-md max-sm:mt-1">
                    {demos.map((demo, i) => (
                        <li key={i}>
                            <a
                                href={demo.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => setOpen(false)}
                                className="block px-4 py-2 hover:bg-gray-700 text-sm w-full text-left"
                            >
                                {demo.label || `Demo ${i + 1}`}
                            </a>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};
export default InlineLiveDemoDropdown;