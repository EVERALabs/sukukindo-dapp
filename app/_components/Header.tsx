"use client"

import Image from "next/image";
import { useRef, useState, useEffect } from "react"
import { motion, useMotionValueEvent, useScroll } from "framer-motion"
import { usePrivy, useWallets } from "@privy-io/react-auth"
import Link from "next/link";
import { PrimaryButton } from "./ui/Button";
import { cn } from "../_libs/utils";
import { usePathname, useRouter } from "next/navigation";

const LINKS = [
    {
        name: "Home",
        path: "/",
    },
    {
        name: "Stake",
        path: "/stake",
    },
    {
        name: "Portfolio",
        path: "/portfolio",
    },
];

const Header: React.FC = () => {
    const router = useRouter();
    const pathname = usePathname();
    const { login, authenticated, logout } = usePrivy();
    const { wallets } = useWallets();
    const connectedWallet = wallets[0];
    const [showDropdown, setShowDropdown] = useState(false);

    const [isScroll, setIsScrolled] = useState(false);
    const { scrollY } = useScroll();
    const wasScrolled = useRef(false);
    useMotionValueEvent(scrollY, "change", (latest) => {
        const isNowScrolled = latest > 250;

        if (isNowScrolled !== wasScrolled.current) {
            setIsScrolled(isNowScrolled);
            wasScrolled.current = isNowScrolled;
        }
    });

    const handleConnectWallet = () => {
        if (!authenticated) {
            login();
        } else {
            setShowDropdown(!showDropdown);
        }
    }

    const handleLogout = async () => {
        try {
            await logout();
            setShowDropdown(false);
        } catch (error) {
            console.error('Logout failed:', error);
        }
    }

    const formatAddress = (address: string) => {
        if (!address) return "";
        return `${address.slice(0, 6)}...${address.slice(-4)}`;
    }

    // Close dropdown when clicking outside
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Add click outside listener
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setShowDropdown(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <motion.header
            initial={{
                opacity: 0,
                y: "-100%",
            }}
            animate={{
                opacity: 1,
                y: 0,
                transition: {
                    duration: 0.6,
                },
            }}
            className={cn(
                "fixed z-50 flex items-center w-full transition-all duration-500",
                "h-[60px] md:h-[72px]",
                isScroll ? "backdrop-blur-sm bg-white/0" : "backdrop-blur-0 bg-green-950/0"
            )}
        >
            <div className="flex items-center w-full justify-between px-3 md:px-15 py-2 md:py-6">
                <div className="flex items-center">
                    <Link href="/" className="flex items-center space-x-2.5 hover:opacity-90 transition-opacity">
                        <Image
                            src="/images/indo-sukuk-logo.png"
                            alt="indo-sukuk-logo"
                            width={32}
                            height={32}
                            className="rounded-full w-7 h-7 md:w-9 md:h-9 object-cover"
                        />
                        <span className="text-white text-sm md:text-xl font-semibold">Indosukuk</span>
                    </Link>
                </div>

                <div className="hidden p-1 rounded-full lg:flex font-onestMedium gap-3 bg-[##0E1016]">
                    {LINKS.map((link) => (
                        <button
                            key={link.name}
                            className={cn(
                                "group rounded-full py-2 px-4 flex justify-center relative cursor-pointer",
                                link.path === pathname ? "text-white" : "text-text-300"
                            )}
                            onClick={() => router.push(link.path)}
                        >
                            {link.path === pathname && (
                                <motion.div
                                    layoutId="switch-header"
                                    className="size-full absolute inset-0 rounded-full bg-[#939B7D]"
                                ></motion.div>
                            )}
                            <div
                                className={cn("size-full absolute inset-0 rounded-full",
                                    link.path === pathname ? "group-hover:[#939B7D]" : "group-hover:bg-[#C6EDFF]"
                                )}
                            ></div>
                            <p className={cn("relative text-sm font-semibold",
                                link.path === pathname ? "group-hover:text-white" : "group-hover:text-[#2E7C90]"
                            )}>{link.name}</p>
                        </button>
                    ))}
                </div>

                {/* Wallet Connection Button */}
                <div className="relative" ref={dropdownRef}>
                    <PrimaryButton
                        onClick={handleConnectWallet}
                        className={cn(
                            "text-[10px] md:text-xs h-8 md:h-10",
                            "py-1 md:py-2",
                            "px-2 md:px-4",
                            "hover:bg-green-700 text-white",
                            "min-w-[90px] md:min-w-[140px]",
                            "truncate"
                        )}
                    >
                        {authenticated && connectedWallet ? (
                            formatAddress(connectedWallet.address)
                        ) : (
                            "Connect Wallet"
                        )}
                    </PrimaryButton>

                    {showDropdown && authenticated && (
                        <div className="absolute right-0 mt-2 w-[280px] bg-white rounded-lg shadow-lg py-1 z-50 border border-gray-200">
                            <div className="px-4 py-3 text-sm text-gray-700 border-b border-gray-100">
                                <div className="font-medium">Wallet Connected</div>
                                <div className="text-xs text-gray-500 mt-1 break-all">
                                    {connectedWallet?.address}
                                </div>
                            </div>
                            <button
                                onClick={handleLogout}
                                className="block w-full text-left px-4 py-3 text-sm text-red-600 hover:bg-red-50 transition-colors"
                            >
                                Disconnect Wallet
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </motion.header>
    )
}

export default Header;