'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'react-feather';
import MenuBlock from './MenuBlock';
import DarkToggle from './DarkToggle';
import Image from 'next/image';
import Button from '../ui/Button';

interface SubnavItem {
    label: string;
    href: string;
}

interface HeaderProps {
    btnColor?: string;
    btnlinkColor?: string;
    bgColor?: string;
    logo?: string;
    headerClass?: string;
    position?: string;
    theme?: 'header-dark' | 'header-light';
    subnavItems?: SubnavItem[];
}

const Header = ({ btnColor = 'bg-[#df7b26]', bgColor = "bg-transparent", headerClass = "", position = "absolute", btnlinkColor = "text-white", theme = "header-dark", logo = "/images/logo/zylo-logo.webp", subnavItems }: HeaderProps) => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Toggle mobile menu
    const toggleMobileMenu = () => setMobileOpen(!mobileOpen);

    // Scroll listener for sticky header
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10); // change after 10px scroll
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`header-wrapper w-full ${position} left-0 z-50 transition-all duration-300 ease-in-out font-dm-sans ${headerClass === "bg-color-none" ? "bg-color-none top-0" : ""} ${theme} ${scrolled ? "scroll-header shadow-xs" : `${bgColor} border-transparent`
                }`}
        >
            <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-3">
                <div className={`${headerClass === "bg-color-none" ? "bg-gray-200 rounded-xl px-4 shadow-md" : ""}`} >
                    <nav className="flex items-center justify-between w-full relative">

                        {/* Logo */}
                        <Link href="/" className="flex items-center lg:py-2 py-3 mr-5">
                            <Image
                                src={logo}
                                alt="Zylo3D"
                                width={140}
                                height={45}
                                priority
                                className='h-10 w-auto dark:invert'
                            />
                        </Link>

                        {/* Mobile Menu Overlay */}
                        {mobileOpen && (
                            <div
                                className="fixed inset-0 bg-black/60 z-40 lg:hidden"
                                onClick={toggleMobileMenu}
                            ></div>
                        )}

                        {/* MenuBlock handles both desktop and mobile */}
                        <MenuBlock btnColor={btnColor} btnlinkColor={btnlinkColor} logo={logo} mobileOpen={mobileOpen} toggleMobileMenu={toggleMobileMenu} />

                        {/* Right Icons */}
                        <div className="flex items-center space-x-3">
                            {/* Dark Mode Toggle */}
                            <DarkToggle />

                            {/* Buy Now Button */}
                            <Button href={process.env.NEXT_PUBLIC_STRIPE_BUY_URL || '#'} label='Buy Now' icon="" className="text-sm register-btn hidden lg:inline-flex" bgColor={` ${btnColor} `} textColor={` ${btnlinkColor} `} target="_blank" rel="noopener noreferrer" />

                            {/* Mobile Menu Button */}
                            <button
                                aria-label="menu"
                                className="lg:hidden flex items-center"
                                onClick={toggleMobileMenu}
                            >
                                {mobileOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>

                    </nav>

                    {/* Per-page subnav row - always visible when subnavItems provided */}
                    {subnavItems && (
                        <div className="border-t border-white/10 overflow-x-auto scrollbar-hide">
                            <div className="flex">
                                {subnavItems.map((item) => (
                                    <a
                                        key={item.href}
                                        href={item.href}
                                        className="whitespace-nowrap px-4 py-2 text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-[#df7b26] dark:hover:text-[#df7b26] transition-colors duration-200"
                                    >
                                        {item.label}
                                    </a>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </header >
    );
};

export default Header;
