"use client";

import Link from "next/link";
import Image from "next/image";

export default function ZyloFooter() {
    return (
        <footer className="font-dm relative z-10 text-gray-100 bg-[#111111]">
            <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-3">

                {/* Main columns */}
                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10 lg:py-16 py-10 border-b border-[#2a2a2a]">

                    {/* Column 1: Logo + description + socials */}
                    <div className="lg:col-span-1">
                        <Link href="/" className="inline-flex mb-5">
                            <Image
                                src="/images/logo/zylo-logo.webp"
                                alt="Zylo3D"
                                width={140}
                                height={45}
                                className="h-10 w-auto invert"
                            />
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            The complete digital dentistry manufacturing platform: hardware, software, and validated materials, built to work as one.
                        </p>
                        <ul className="flex gap-3">
                            {/* Facebook */}
                            <li>
                                <a
                                    href="https://www.facebook.com/profile.php?id=61554739610170"
                                    aria-label="Facebook"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white hover:bg-[#2a2a2a] bg-[#1e1e1e] rounded-full w-10 h-10 flex items-center justify-center transition"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                                    </svg>
                                </a>
                            </li>
                            {/* YouTube */}
                            <li>
                                <a
                                    href="https://www.youtube.com/@Zylo3Ddental"
                                    aria-label="YouTube"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white hover:bg-[#2a2a2a] bg-[#1e1e1e] rounded-full w-10 h-10 flex items-center justify-center transition"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z" />
                                    </svg>
                                </a>
                            </li>
                            {/* LinkedIn */}
                            <li>
                                <a
                                    href="https://www.linkedin.com/company/zylo3d/"
                                    aria-label="LinkedIn"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white hover:bg-[#2a2a2a] bg-[#1e1e1e] rounded-full w-10 h-10 flex items-center justify-center transition"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Column 2: Products */}
                    <div>
                        <h4 className="text-base font-semibold text-white mb-5">Products</h4>
                        <ul className="text-gray-400 footer-link flex flex-col gap-3 text-sm">
                            <li><Link href="/products/zylodent" className="hover:text-[#df7b26] transition-colors">ZyloDent</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Company */}
                    <div>
                        <h4 className="text-base font-semibold text-white mb-5">Company</h4>
                        <ul className="text-gray-400 footer-link flex flex-col gap-3 text-sm">
                            <li><Link href="/about" className="hover:text-[#df7b26] transition-colors">About</Link></li>
                            <li><Link href="/blog" className="hover:text-[#df7b26] transition-colors">Blog</Link></li>
                            <li><Link href="/learning" className="hover:text-[#df7b26] transition-colors">Learning</Link></li>
                            <li><Link href="/indications" className="hover:text-[#df7b26] transition-colors">Indications</Link></li>
                        </ul>
                    </div>

                    {/* Column 4: Support */}
                    <div>
                        <h4 className="text-base font-semibold text-white mb-5">Support</h4>
                        <ul className="text-gray-400 footer-link flex flex-col gap-3 text-sm">
                            <li>
                                <Link href="/contact" className="hover:text-[#df7b26] transition-colors">
                                    Open Support Ticket
                                </Link>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* Bottom copyright */}
                <div className="text-center lg:py-7 py-5">
                    <p className="text-gray-400 text-sm font-medium">
                        © 2026 Zylo3D. All rights reserved.
                    </p>
                </div>

            </div>
        </footer>
    );
}
