"use client";

import React, { useEffect } from "react";

const socialMediaData = [
  {
    id: 1,
    type: "YouTube",
    title: "Video Edukatif Kami",
    embedUrl: "https://www.youtube.com/embed/on9cbuigDaY?si=ZFOlaOhRdfMiJbBo",
    color: "from-red-500 to-rose-400",
  },
  {
    id: 2,
    type: "Instagram",
    title: "Media Edukatif Kami",
    embedUrl:
      "https://www.instagram.com/reel/DNC8-PfPF0Y/?utm_source=ig_embed&utm_campaign=loading",
    color: "from-pink-400 to-fuchsia-400",
  },
  {
    id: 3,
    type: "TikTok",
    title: "Sarana Edukatif dan Informatif",
    embedUrl: "https://www.tiktok.com/@adhikti.foundatio?refer=creator_embed",
    color: "from-amber-400 to-orange-400",
  },
];

export default function SocialMedia() {
  useEffect(() => {
    const igScript = document.createElement("script");
    igScript.src = "https://www.instagram.com/embed.js";
    igScript.async = true;
    document.body.appendChild(igScript);

    const tiktokScript = document.createElement("script");
    tiktokScript.src = "https://www.tiktok.com/embed.js";
    tiktokScript.async = true;
    document.body.appendChild(tiktokScript);

    return () => {
      document.body.removeChild(igScript);
      document.body.removeChild(tiktokScript);
    };
  }, []);

  return (
    <section className="py-20 px-6 lg:px-24 ">
      <h2 className="text-4xl lg:text-5xl font-bold text-teal-600 text-center mb-6 leading-snug">
        Sosial Media Kami
      </h2>
      <p className="text-center text-gray-600 text-lg max-w-4xl mx-auto mb-12">
        Ikuti berbagai kegiatan dan cerita inspiratif dari{" "}
        <strong>Adhikti Foundation</strong> di berbagai media sosial kami.
        Tempat berbagi informasi, pengetahuan, pengalaman, dan kisah inspiratif
        tentang anak dan remaja Indonesia.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 ">
        {socialMediaData.map((item) => (
          <div
            key={item.id}
            className="flex flex-col bg-white/90 backdrop-blur-md rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
          >
            <h3
              className={`text-center font-semibold py-3 rounded-t-xl text-white text-lg bg-gradient-to-r ${item.color}`}
            >
              {item.type}: {item.title}
            </h3>

            <div className="relative w-full overflow-hidden rounded-b-xl h-85 lg:h-100 xl:h-125">
              {item.type === "YouTube" ? (
                <div className="relative pb-[56.25%] h-full">
                  <iframe
                    src={item.embedUrl}
                    title={item.title}
                    className="absolute top-0 left-0 w-full h-full rounded-b-xl"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              ) : item.type === "Instagram" ? (
                <div className="relative w-full h-full">
                  <blockquote
                    className="instagram-media w-full"
                    data-instgrm-permalink={item.embedUrl}
                    data-instgrm-version="14"
                    style={{
                      background: "#fff",
                      border: 0,
                      borderRadius: "12px",
                      margin: "auto",
                      padding: 0,
                      width: "100%",
                      minHeight: "650px",
                    }}
                  />
                </div>
              ) : (
                <div className="relative w-full   flex justify-center">
                  <blockquote
                    className="tiktok-embed"
                    cite={item.embedUrl}
                    data-unique-id="adhikti.foundatio"
                    data-embed-type="creator"
                    style={{
                      width: "100%",
                      maxWidth: "700px",
                      minWidth: "320px",
                      minHeight: "700px",
                      margin: "auto",
                      borderRadius: "12px",
                      overflow: "hidden",
                    }}
                  >
                    <section>
                      <a
                        target="_blank"
                        href="https://www.tiktok.com/@adhikti.foundatio?refer=creator_embed"
                      >
                        @adhikti.foundation
                      </a>
                    </section>
                  </blockquote>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
