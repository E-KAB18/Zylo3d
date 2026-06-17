"use client";

import { useState } from "react";
import Image from "next/image";

interface KOLCardProps {
    photo: string;
    name: string;
    quote: string;
    videoId: string;
    aosDelay?: number;
}

export default function KOLCard({ photo, name, quote, videoId, aosDelay = 0 }: KOLCardProps) {
    const [playing, setPlaying] = useState(false);

    const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
    const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;

    return (
        <div
            className="rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-[#111] p-6 flex flex-col gap-4"
            data-aos="fade-up"
            data-aos-delay={aosDelay}
            data-aos-duration="400"
        >
            {/* Photo + Name row */}
            <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#df7b26]/30 shrink-0">
                    <Image src={photo} alt={name} width={48} height={48} className="w-full h-full object-cover" />
                </div>
                <span className="text-gray-900 dark:text-white font-bold text-sm">{name}</span>
            </div>

            {/* Quote */}
            <p className="text-gray-500 dark:text-gray-400 text-sm italic leading-relaxed">
                &quot;{quote}&quot;
            </p>

            {/* Video */}
            <div className="rounded-xl overflow-hidden aspect-video relative bg-black">
                {playing ? (
                    <iframe
                        src={embedUrl}
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                        className="w-full h-full"
                        title={`${name} video`}
                    />
                ) : (
                    <button
                        onClick={() => setPlaying(true)}
                        className="w-full h-full relative block group"
                        aria-label={`Play ${name} video`}
                    >
                        <Image
                            src={thumbnailUrl}
                            alt={`${name} video thumbnail`}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                            sizes="(max-width: 768px) 100vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-black/25 group-hover:bg-black/15 transition-colors" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-200">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="#df7b26">
                                    <polygon points="6,4 20,12 6,20" />
                                </svg>
                            </div>
                        </div>
                    </button>
                )}
            </div>
        </div>
    );
}
