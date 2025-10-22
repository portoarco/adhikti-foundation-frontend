"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Check, CircleX, Send, X } from "lucide-react";
import { useEffect, useState } from "react";
import ToolTipHover from "./ToolTipHover";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface IDonateDialog {
  open: boolean;
  setOpen: (value: boolean) => void;
}

export default function DonateDialog({ open, setOpen }: IDonateDialog) {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<
    "manual" | "auto" | null
  >(null);

  useEffect(() => {
    setSelectedPaymentMethod("manual");
  }, []);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {/* <DialogTrigger asChild>
        <Button className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 cursor-pointer rounded-full px-10 py-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 flex justify-between gap-2 text-white text-lg font-semibold">
          <HandCoins className="w-5 h-5" />
          Mulai Berdonasi
        </Button>
      </DialogTrigger> */}
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Informasi Donasi</DialogTitle>
          <DialogDescription className="max-sm:hidden">
            Mohon Lengkapi Data Diri serta Metode Pembayaran yang Anda Inginkan
          </DialogDescription>
          <section id="payment-methods" className="grid   grid-cols-2 gap-2">
            <button
              onClick={() => setSelectedPaymentMethod("manual")}
              className={`relative p-2 border rounded-md transition-colors duration-200 max-sm:text-xs cursor-pointer  ${
                selectedPaymentMethod === "manual"
                  ? "border-teal-500 bg-teal-50 "
                  : "border-gray-300 hover:border-teal-400 "
              }`}
            >
              Manual Transfer
              {selectedPaymentMethod === "manual" && (
                <Check className="size-5 bg-teal-500 text-white rounded-full absolute -top-2 -right-2" />
              )}
            </button>

            <ToolTipHover
              label={
                <div className="flex gap-2 items-center ">
                  <CircleX className="size-4" />
                  Metode Belum Tersedia
                </div>
              }
            >
              <button
                disabled
                onClick={() => setSelectedPaymentMethod("auto")}
                className={`relative p-2 border rounded-md transition-colors duration-200 max-sm:text-xs text-gray-500 ${
                  selectedPaymentMethod === "auto"
                    ? //   ? "border-teal-500 bg-teal-50 font-medium" //dipakai saat sudah ready
                      //   : "border-gray-300 hover:border-teal-400"
                      "border-red-500 bg-red-50"
                    : "border-gray-300 "
                }`}
              >
                Pembayaran Otomatis
                {selectedPaymentMethod === "auto" && (
                  // <Check className="size-5 bg-teal-500 text-white rounded-full absolute -top-2 -right-2" />
                  <X className="size-5 bg-red-500 text-white rounded-full absolute -top-2 -right-2" />
                )}
              </button>
            </ToolTipHover>
          </section>
          <section
            id="donatur-form"
            className="grid max-sm:grid-cols-1 grid-cols-2 items-center max-sm:gap-0 gap-5 mt-5 w-full"
          >
            <div id="qris" className=" p-1 rounded-md  ">
              <Image
                src="/assets/qris.jpg"
                alt="qris"
                width={350}
                height={150}
                className="max-sm:w-40 max-sm:mx-auto "
              />
              <div className="flex flex-col gap-1">
                <p className="text-sm">
                  Rekening BRI :{" "}
                  <span className="font-semibold">038601002953304</span>{" "}
                </p>
                <p className="text-xs">
                  a.n.{" "}
                  <span className="font-semibold">
                    Yayasan Adhirajasa Kusuma Bakti
                  </span>{" "}
                </p>
              </div>
            </div>

            <form className="flex flex-col gap-3">
              <div className="max-sm:flex gap-2">
                <div>
                  <label className="max-sm:text-sm">Nama/Inisial</label>
                  <Input className="max-sm:text-xs" placeholder="John" />
                </div>
                <div>
                  <label className="max-sm:text-sm">Email</label>
                  <Input
                    className="max-sm:text-xs"
                    type="email"
                    placeholder="johndoe@mail.com"
                  />
                </div>
              </div>
              <div>
                <label className="max-sm:text-sm">Upload Bukti</label>
                <Input type="file" className="cursor-pointer" />
              </div>
              <Button
                type="button"
                className="bg-teal-600 hover:bg-teal-700 cursor-pointer"
              >
                <Send /> Konfirmasi
              </Button>
            </form>
          </section>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
