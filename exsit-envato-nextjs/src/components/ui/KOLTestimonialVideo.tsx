"use client";

import { useState } from "react";
import Image from "next/image";

interface KOLTestimonialVideoProps {
    videoId?: string;
}

export default function KOLTestimonialVideo({ videoId }: KOLTestimonialVideoProps) {
    const [playing, setPlaying] = useState(false);

    if (!videoId) {
        return (
            <div className="rounded-2xl border border-dashed border-gray-300 dark:border-gray-600 bg-white dark:bg-[#111111] aspect-video w-full flex items-center justify-center">
                <div className="text-center px-6">
                    <p className="text-gray-400 dark:text-gray-500 font-medium">KOL testimonial video</p>
                    <p className="text-gray-400 dark:text-gray-600 text-sm mt-1">YouTube embed — KOL_TESTIMONIAL_VIDEO_ID </p>
                </div>
            </div>
        );
    }

    const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
    const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;

    return (
        <div className="rounded-2xl overflow-hidden border border-gray-200 dark:border-white/10 bg-black aspect-video w-full">
            {playing ? (
                <iframe
                    src={embedUrl}
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    className="w-full h-full"
                    title="Zylo KOL testimonial video"
                />
            ) : (
                <button
                    onClick={() => setPlaying(true)}
                    className="w-full h-full relative block group"
                    aria-label="Play KOL testimonial video"
                >
                    <Image
                        src={thumbnailUrl}
                        alt="KOL testimonial video thumbnail"
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-black/25 group-hover:bg-black/15 transition-colors" />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-200">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="#df7b26">
                                <polygon points="6,4 20,12 6,20" />
                            </svg>
                        </div>
                    </div>
                </button>
            )}
        </div>
    );
}
