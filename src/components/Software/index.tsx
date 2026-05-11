"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { ReactElement } from "react";

type OS = "windows" | "mac";

function detectOS(): OS {
  if (typeof window === "undefined") return "windows";
  const ua = window.navigator.userAgent.toLowerCase();
  if (ua.includes("mac")) return "mac";
  return "windows";
}

const osLabels: Record<OS, string> = {
  windows: "Windows",
  mac: "macOS",
};

const osIcons: Record<OS, ReactElement> = {
  windows: (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-13.051-1.8" />
    </svg>
  ),
  mac: (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701" />
    </svg>
  ),
};

const downloadLinks: Record<OS, { label: string; href: string }[]> = {
  windows: [
    { label: "ZyloPrep for Windows (.exe)", href: "/downloads/zyloPrep-setup.exe" },
  ],
  mac: [
    { label: "ZyloPrep for macOS (.dmg)", href: "/downloads/zyloPrep.dmg" },
  ],
};

const SoftwareSection = () => {
  const [os, setOs] = useState<OS>("windows");
  const [detected, setDetected] = useState<OS>("windows");

  useEffect(() => {
    const d = detectOS();
    setOs(d);
    setDetected(d);
  }, []);

  return (
    <section className="py-16 md:py-20 lg:py-28 bg-gray-light dark:bg-dark">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          {/* Left — text */}
          <div className="w-full px-4 lg:w-1/2">
            <div className="mb-10 lg:mb-0 max-w-[540px]">
              <span className="mb-4 block text-sm font-semibold uppercase tracking-widest text-primary">
                Zylo3D Software
              </span>
              <h2 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl">
                Design. Prepare. Print.
                <br />
                All in One Ecosystem.
              </h2>
              <p className="mb-6 text-base text-body-color dark:text-body-color-dark sm:text-lg leading-relaxed">
                AI ZyloCAD is our intelligent design software built for dental workflows — from
                crown design to full dentures. ZyloPrep handles slicing, material profiles, and
                print preparation in seconds.
              </p>
              <ul className="mb-8 space-y-3">
                {[
                  "AI-assisted crown and restoration design",
                  "Auto-nesting and build plate optimization",
                  "Validated material profiles pre-loaded",
                  "One-click send to printer",
                  "Cloud sync across devices",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary">
                      <svg className="h-3 w-3 fill-white" viewBox="0 0 12 10">
                        <path d="M10.3 0.3L4 6.6 1.7 4.3 0.3 5.7l3.7 3.7 7.7-7.7z" />
                      </svg>
                    </span>
                    <span className="text-body-color dark:text-body-color-dark">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="inline-block text-sm font-semibold text-primary hover:underline"
              >
                Talk to us about ZyloCAD →
              </Link>
            </div>
          </div>

          {/* Right — download card */}
          <div className="w-full px-4 lg:w-1/2">
            <div className="rounded-sm border border-body-color/10 bg-white p-8 shadow-md dark:border-body-color/20 dark:bg-gray-dark">
              <h3 className="mb-2 text-xl font-bold text-black dark:text-white">
                Download Zylo3D Software
              </h3>
              <p className="mb-6 text-sm text-body-color dark:text-body-color-dark">
                {detected === os
                  ? `We detected ${osLabels[os]}. Download below or switch platform.`
                  : `Showing downloads for ${osLabels[os]}.`}
              </p>

              {/* OS tabs */}
              <div className="mb-6 flex gap-2">
              {(["windows", "mac"] as OS[]).map((platform) => (
                  <button
                    key={platform}
                    onClick={() => setOs(platform)}
                    className={`flex items-center gap-2 rounded-xs px-4 py-2 text-sm font-semibold transition-colors duration-200 ${
                      os === platform
                        ? "bg-primary text-white"
                        : "border border-body-color/20 text-body-color hover:border-primary hover:text-primary dark:text-body-color-dark dark:hover:border-primary dark:hover:text-primary"
                    }`}
                  >
                    {osIcons[platform]}
                    {osLabels[platform]}
                  </button>
                ))}
              </div>

              {/* Download buttons */}
              <div className="space-y-3">
                {downloadLinks[os].map((dl, i) => (
                  <a
                    key={i}
                    href={dl.href}
                    className="flex w-full items-center justify-between rounded-xs border border-body-color/10 bg-gray-light px-5 py-4 text-sm font-semibold text-black transition-colors hover:border-primary hover:text-primary dark:border-body-color/20 dark:bg-dark dark:text-white dark:hover:border-primary dark:hover:text-primary"
                  >
                    <span>{dl.label}</span>
                    <svg
                      className="h-5 w-5 shrink-0"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 4v11"
                      />
                    </svg>
                  </a>
                ))}
              </div>

              <p className="mt-6 text-xs text-body-color dark:text-body-color-dark">
                A Zylo3D account is required to activate your software license. Contact our team to get started.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SoftwareSection;
