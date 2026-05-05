"use client";

import Link from "next/link";
import { useState } from "react";
import RequestModal from "@/components/RequestModal";

const Hero = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden bg-white pb-16 pt-[120px] dark:bg-gray-dark md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[800px] text-center">
                <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                  The Complete Digital Dentistry Manufacturing Platform
                </h1>
                <p className="mb-12 text-base leading-relaxed! text-body-color dark:text-body-color-dark sm:text-lg md:text-xl">
                  Integrated hardware, intelligent software, validated materials,
                  and expert guidance — built to work as one.
                </p>
                <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <button
                    onClick={() => setModalOpen(true)}
                    className="rounded-xs bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
                  >
                    Request a Quote
                  </button>
                  <Link
                    href="/indications"
                    className="inline-block rounded-xs border border-body-color/20 px-8 py-4 text-base font-semibold text-black duration-300 ease-in-out hover:border-primary hover:text-primary dark:text-white dark:hover:border-primary"
                  >
                    Explore Dental Applications
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <RequestModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        type="quote"
      />
    </>
  );
};

export default Hero;
