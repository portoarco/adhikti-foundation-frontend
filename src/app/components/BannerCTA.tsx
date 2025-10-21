"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Footprints, HandCoins } from "lucide-react";
import DonateDialog from "./DonateDialog";
import { useState } from "react";

export default function BannerCTA() {
  const [openDonate, setOpenDonate] = useState(false);

  return (
    <section className="relative overflow-hidden py-24 px-6 sm:px-10 md:px-16 lg:px-24 bg-gradient-to-br from-teal-100 via-white to-teal-10 ">
      {/* Background glow effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-teal-300/40 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse" />
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-emerald-200/50 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-10 text-center max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight"
        >
          Mari Ambil Langkah Nyata,{" "}
          <span className="text-teal-600">Kolaborasi Bersama</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-lg md:text-xl text-gray-700 max-w-2xl"
        >
          Wujudkan kesehatan mental yang kuat dan seimbang bagi generasi muda
          Indonesia melalui aksi nyata dan kepedulian bersama.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5 mt-4"
        >
          <Button
            className="bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white text-lg font-medium px-10 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
            onClick={() => setOpenDonate(true)}
          >
            <HandCoins /> Mulai Berdonasi
          </Button>
          <Button
            variant="outline"
            className="border-2 border-teal-600 text-teal-700 hover:bg-teal-50 text-lg font-medium px-10 py-6 rounded-full transition-all duration-300 cursor-pointer"
          >
            <Footprints /> Bergabung Bersama Kami
          </Button>
        </motion.div>
      </div>

      {/* Donate Dialog */}
      <DonateDialog open={openDonate} setOpen={setOpenDonate} />
    </section>
  );
}
