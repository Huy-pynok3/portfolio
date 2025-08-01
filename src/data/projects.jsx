import img from "@/image";
import { useState } from "react";

const CopyButton  = ({ text}) => {

    const [copied, setCopied] = useState(false);
    return (

        <button
          onClick={() => {
            navigator.clipboard.writeText(text);
            setCopied(true);
            setTimeout(() => setCopied(false), 1500);
          }}
          className="flex items-center gap-1 px-2 py-1 text-sm sm:text-base bg-gray-700 hover:bg-gray-600 rounded text-white transition w-fit"
        >
            <img src={img.copy} alt="copy" className="w-4 h-4 invert" />
            {/* {copied ? " Copied!" : " Copy"} */}
            <span className="hidden sm:inline">{copied ? "Copied!" : "Copy"}</span>

        </button>
        
    );
};

const projects = [
    {
        name: "CarRental",
        slug: "carrental",
        title: "CarRental - Modern Car Booking App",
        description: (
            <>
                <span className="text-white">CarRental</span> is a modern, responsive web application that allows users
                to browse, search, and rent cars with ease.

            </>
        ),
        des: (
            <>
                <span>A responsive and visually appealing car rental app where users can browse, filter, and rent cars. Integrated with backend services for a realistic experience.</span>
                <br />
                <br />
                <div className="flex items-center gap-2 text-white">
                    <span>Account Test: <span className="font-mono">test@gmail.com</span></span>
                    <CopyButton text='test@gmail.com'/>
                </div>

                <div className="flex items-center gap-2 text-white">
                    <span>Password: <span className="font-mono ">123456</span></span>
                    <CopyButton text='123456'/>
                </div>
            </>
        ),
        // des: `A responsive and visually appealing car rental app where users can browse, filter, and rent cars. Integrated with backend services for a realistic experience.`,
        image: img.home,
        url: "/projects/carrental",
        // demos: "https://car-rental-seven-beta.vercel.app/",
        demos: [{ url: "https://car-rental-seven-beta.vercel.app/", label: "Live demo" }],
        source: "https://github.com/Huy-pynok3/CarRental",
        video: "a",
        techs: ["React", "Tailwind", "ImageKit", "JavaScript", "NodeJs", "MongDB", "Motion"],
        features: [
            "🚗 Browse & Filter Cars — View car listings by brand, type, fuel, or seating capacity.",
            "🔍 Real-time Search — Search cars instantly with smart filters.",
            "📸 Image Optimization — Images are loaded quickly with ImageKit integration.",
            "🔐 Authentication (Optional) — Structure ready for user login/register.",
            "📱 Mobile Responsive — Fully optimized for all screen sizes.",
        ],
        screenshots: [
            img.home,
            img.preview1_1,
            img.preview1_2,
            img.preview1_3,
            img.preview1_4,
            img.preview1_5,
            img.preview1_6,
            img.preview1_7,
            img.preview1_8,
        ],
        videoEmbed: "https://www.youtube.com/?app=desktop&hl=vi",
    },
    {
        name: "KYC",
        slug: "kyc",
        title: "Kyc-Alpha",
        description: (
            <>
                {/* <span className="text-white">Decentralized KYC reimagined</span> — Users submit KYC links, while real students verify identities under anti-fraud countdowns. Real people, real checks, real trust. */}
                <span className="text-white">Decentralized KYC, powered by real people</span> — Users submit KYC links,{" "}
                <span className="text-cyan-300">students verify with countdown-based sessions</span> to prevent fake
                handling and ensure real trust.
                {/* <span className="text-white">A KYC</span> platform where customers submit verification links, and students are assigned to perform identity checks with real-time countdown to prevent fraud or impersonation. */}
            </>
        ),
        des: (
            <>
                <span className="text-white font-semibold">"Real people. Real-time KYC. Verified with trust."</span>{" "}
                <br />
                <br />
                <span className="text-white">KYC-Alpha</span> is a{" "}
                <span className="text-primary">two-sided identity verification platform</span> that blends Web3
                authentication with real-world trust. Customers submit their KYC request via a signed wallet message and
                a third-party verification link (e.g., Argos). On the other end,{" "}
                <span className="text-accent">real students</span> carry out the KYC process within a{" "}
                <span className="text-yellow-400">countdown-controlled session</span> — preventing fraud, fake results,
                and idle handling. The system tracks sessions via randomized emojis and session IDs to ensure
                transparency and accountability. Admins can{" "}
                <span className="text-blue-400">review KYC tasks, approve results</span>, and manage payouts (manual or
                auto).
                <br />
                <br />
                {/* <span className="text-white">Account Verifier Portal: KYC-I0X2K6</span> */}

                <div className="flex items-center gap-2 text-white">
                    <span>Account Verifier Portal: <span className="font-mono">KYC-I0X2K6</span></span>
                    <CopyButton text='KYC-I0X2K6'/>
                </div>
            </>
        ),
        // des: `KYC-Alpha transforms identity verification into a transparent and human-driven process. Instead of relying solely on automation, the system assigns KYC tasks to verified students — each session tracked in real time with countdown timers, random emojis, and unique session IDs to prevent fake handling.

        // Users connect their Web3 wallets, sign authentication messages, and submit their KYC link (e.g., from Kycaid). On the verifier side, students are guided through a focused, time-boxed process to complete each verification.

        // Designed with trust, decentralization, and accountability at its core, this platform bridges Web3 authentication with real-world responsibility. Built fullstack — React, Node.js, MongoDB, and wallet signature flow.
        // `,
        image: img.home1,
        url: "/projects/kyc",
        // demos: "https://kyc-alpha.vercel.app/",
        demos: [
            { url: "https://kyc-alpha.vercel.app/", label: "User Portal" },
            { url: "https://verify-kyc-snowy.vercel.app/", label: "Verifier" },
        ],
        source: "https://github.com/Huy-pynok3/Kyc",
        video: "c",
        techs: ["React", "Tailwind", "Cloudinary", "JavaScript", "NodeJs", "MongDB", "Shadcn", "Web3"],
        features: [
            "🧾 Wallet-authenticated KYC submission with signature check.",
            "💸 Supported two payment options: USDT (BEP-20) or bank transfer.",
            "⏱️ Countdown timer and emoji session ID to catch lazy/fake verifications.",
            "🔐 Web3 + real-world hybrid trust model.",
            "🛠️ Admin dashboard for reviewing sessions and managing payouts.",
            "📬 Telegram Bot Notification: Automatically notify admin via Telegram when:",
            "• A new payment is received and confirmed.",

            " • A user submits a KYC session for verification.",
        ],
        screenshots: [
            img.preview_0,
            img.preview_1,
            img.preview_2,
            img.preview_3,
            img.preview_5,
            img.preview_4,
            img.preview_6,
        ],
        videoEmbed: "https://www.youtube.com/?app=desktop&hl=vi",
    },
];

export default projects;
