"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Check, X } from "lucide-react";
import { useState } from "react";

interface IDonateDialog {
  open: boolean;
  setOpen: (value: boolean) => void;
}

export default function DonateDialog({ open, setOpen }: IDonateDialog) {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<
    "manual" | "auto" | null
  >(null);

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
          <DialogDescription>
            Mohon Lengkapi Data Diri serta Metode Pembayaran yang Anda Inginkan
          </DialogDescription>
          <section id="payment-methods" className="grid grid-cols-2 gap-2">
            <button
              onClick={() => setSelectedPaymentMethod("manual")}
              className={`relative p-2 border rounded-md transition-colors duration-200 max-sm:text-sm  ${
                selectedPaymentMethod === "manual"
                  ? "border-teal-500 bg-teal-50 font-medium"
                  : "border-gray-300 hover:border-teal-400 "
              }`}
            >
              Manual Transfer
              {selectedPaymentMethod === "manual" && (
                <Check className="size-5 bg-teal-500 text-white rounded-full absolute -top-2 -right-2" />
              )}
            </button>

            <button
              disabled
              onClick={() => setSelectedPaymentMethod("auto")}
              className={`relative p-2 border rounded-md transition-colors duration-200 max-sm:text-sm text-gray-500 ${
                selectedPaymentMethod === "auto"
                  ? //   ? "border-teal-500 bg-teal-50 font-medium" //dipakai saat sudah ready
                    //   : "border-gray-300 hover:border-teal-400"
                    "border-red-500 bg-red-50 font-medium"
                  : "border-gray-300 "
              }`}
            >
              Pembayaran Otomatis
              {selectedPaymentMethod === "auto" && (
                // <Check className="size-5 bg-teal-500 text-white rounded-full absolute -top-2 -right-2" />
                <X className="size-5 bg-red-500 text-white rounded-full absolute -top-2 -right-2" />
              )}
            </button>
          </section>
          <section id="donatur-form">
            <form>
              <label>Nama</label>
            </form>
          </section>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
