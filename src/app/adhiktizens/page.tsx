"use client";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const adhiktizens = [
  {
    id: 1,
    code: "0007",
    name: "Reza Novalino",
    job: "Pekerja Sosial",
    location: "Jakarta",
  },
  {
    id: 2,
    code: "0008",
    name: "Bonike Islam M",
    job: "Pekerja Sosial",
    location: "Jakarta",
  },
  {
    id: 3,
    code: "0009",
    name: "Dani Damanik",
    job: "Pekerja Sosial",
    location: "Jakarta",
  },
  {
    id: 4,
    code: "0010",
    name: "Della",
    job: "Mahasiswa",
    location: "Jawa Barat",
  },
  {
    id: 5,
    code: "0011",
    name: "Riesta A. Chandra",
    job: "Pengajar",
    location: "Jakarta",
  },
  {
    id: 6,
    code: "0012",
    name: "Irma",
    job: "Mahasiswa",
    location: "Jawa Timur",
  },
  {
    id: 7,
    code: "0013",
    name: "Hanifah",
    job: "Pekerja Sosial",
    location: "Jakarta",
  },
  {
    id: 8,
    code: "0014",
    name: "Sapna Putri",
    job: "Mahasiswa",
    location: "Jambi",
  },
  {
    id: 9,
    code: "00071",
    name: "Mafhe",
    job: "Pekerja Sosial",
    location: "Jakarta",
  },
  {
    id: 10,
    code: "00072",
    name: "Ratu",
    job: "Pekerja Sosial",
    location: "Jakarta",
  },
  {
    id: 11,
    code: "00072A",
    name: "Icha",
    job: "Pekerja Sosial",
    location: "Jakarta",
  },
  {
    id: 12,
    code: "00081",
    name: "Fera",
    job: "Pekerja Sosial",
    location: "Jakarta",
  },
  {
    id: 13,
    code: "00082",
    name: "Adel",
    job: "Pekerja Sosial",
    location: "Jakarta",
  },
  {
    id: 14,
    code: "0014A",
    name: "Sapna Putri Aprilia",
    job: "Mahasiswa",
    location: "Jambi",
  },
  {
    id: 15,
    code: "0015",
    name: "Naomi Silaban",
    job: "Pelajar",
    location: "Pematang Siantar",
  },
  {
    id: 16,
    code: "0016",
    name: "Hanifah Aliyah",
    job: "Mahasiswa",
    location: "Jakarta/Depok",
  },
  {
    id: 17,
    code: "0017",
    name: "Ziya Jauza",
    job: "Mahasiswa",
    location: "Depok",
  },
  {
    id: 18,
    code: "0018",
    name: "Siti Aqila",
    job: "Mahasiswa",
    location: "Banten",
  },
  {
    id: 19,
    code: "0019",
    name: "Hilma Tsabita",
    job: "Mahasiswa",
    location: "Serang",
  },
  {
    id: 20,
    code: "0020",
    name: "Naya Maulidina",
    job: "Pelajar",
    location: "Jakarta",
  },
];

export default function AdhiktizensPage() {
  const [activeId, setActiveId] = useState<number | null>(null);

  return (
    <section className="relative flex flex-col items-center justify-center py-32 px-6 text-center overflow-hidden">
      <motion.div
        className="absolute inset-0 -z-10"
        animate={{ filter: activeId ? "brightness(0.25)" : "brightness(0.45)" }}
        transition={{ duration: 0.3 }}
      >
        <Image
          src="/assets/bghof.jpeg"
          alt="Background Hall of Fame"
          fill
          priority
          quality={100}
          className="object-cover object-center"
        />
      </motion.div>

      <AnimatePresence>
        {activeId && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-[2px] z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        )}
      </AnimatePresence>

      <div className="max-w-4xl text-white mb-16 drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)] relative z-20">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-wide">
          The Adhiktizens <span className="text-teal-300">Hall of Fame</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-100">
          Persembahan bagi para <strong>Adhiktizens</strong> — individu penuh
          semangat dan dedikasi yang turut menumbuhkan{" "}
          <span className="text-teal-300 font-semibold">
            Adhikti Foundation Indonesia
          </span>
          .
        </p>
      </div>

      <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-[90vw] max-w-7xl z-20">
        {adhiktizens.map((person) => {
          const isActive = activeId === person.id;
          return (
            <motion.div
              key={person.id}
              whileHover={{ scale: 1.07 }}
              onClick={() => {
                setActiveId(person.id);
                setTimeout(() => setActiveId(null), 1800); // reset otomatis
              }}
              className={`relative cursor-pointer group transition-all duration-300 ${
                activeId && !isActive ? "opacity-30 scale-95" : "opacity-100"
              }`}
            >
              {/* Card */}
              <motion.div
                animate={
                  isActive
                    ? {
                        scale: 1.15,
                        boxShadow: "0 0 60px rgba(255,255,255,0.6)",
                      }
                    : { scale: 1, boxShadow: "0 0 0 rgba(0,0,0,0)" }
                }
                transition={{ duration: 0.4 }}
              >
                <Card className="bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-lg rounded-none">
                  <CardContent className="p-5 flex flex-col items-center justify-center text-center">
                    <p className="text-sm text-teal-200 mb-1 font-mono">
                      #{person.code}
                    </p>
                    <h3 className="text-xl font-semibold mb-1">
                      {person.name}
                    </h3>
                    <p className="text-gray-200 text-sm mb-1">{person.job}</p>
                    <p className="text-gray-300 text-xs">{person.location}</p>
                  </CardContent>
                  {/* Efek glow di hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-white/40 via-teal-300/30 to-transparent blur-md transition-all duration-500"></div>
                </Card>
              </motion.div>

              <AnimatePresence>
                {isActive && (
                  <motion.div
                    className="absolute inset-0 pointer-events-none"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.2 }}
                  >
                    {[...Array(16)].map((_, i) => (
                      <motion.span
                        key={i}
                        className="absolute w-2 h-2 bg-white  shadow-[0_0_8px_2px_rgba(255,255,255,0.9)]"
                        initial={{
                          top: "50%",
                          left: "50%",
                          scale: 0,
                        }}
                        animate={{
                          top: `${Math.random() * 100}%`,
                          left: `${Math.random() * 100}%`,
                          scale: [0, 1.5, 0],
                          opacity: [1, 0.8, 0],
                        }}
                        transition={{
                          duration: 1.4,
                          ease: "easeOut",
                          delay: Math.random() * 0.25,
                        }}
                      />
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

      {/* Fade bawah */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/60 to-transparent"></div>
    </section>
  );
}
