"use client";

import { useState } from "react";
import RequestModal from "@/components/RequestModal";

type Props = {
  productName?: string;
};

export default function ProductCTAs({ productName }: Props) {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState<"quote" | "demo">("quote");

  function open(type: "quote" | "demo") {
    setModalType(type);
    setModalOpen(true);
  }

  return (
    <>
      <div className="flex flex-wrap gap-4">
        <button
          onClick={() => open("quote")}
          className="rounded-xs bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
        >
          Request a Quote
        </button>
        <button
          onClick={() => open("demo")}
          className="rounded-xs border border-body-color/20 px-8 py-4 text-base font-semibold text-black duration-300 ease-in-out hover:border-primary hover:text-primary dark:text-white dark:hover:border-primary"
        >
          Schedule a Demo
        </button>
      </div>

      <RequestModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        type={modalType}
        productName={productName}
      />
    </>
  );
}
