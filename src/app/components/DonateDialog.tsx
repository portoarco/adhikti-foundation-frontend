"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Spinner } from "@/components/ui/spinner";
import { toastError, toastSuccess } from "@/utils/toaster";
import { isEmailValid } from "@/utils/validator";
import axios from "axios";
import { Send } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface IDonateDialog {
  open: boolean;
  setOpen: (value: boolean) => void;
}

export default function DonateDialog({ open, setOpen }: IDonateDialog) {
  const [uploadFile, setUploadFile] = useState<File | null>(null);
  const [confirmDonationLoading, setConfirmDonationLoading] = useState(false);
  const [fileUrl, setFileUrl] = useState<any>(null);

  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<
    "manual" | "auto" | null
  >(null);

  const handleFileChange = (e: any) => {
    try {
      const file = e.target.files?.[0];
      if (file) {
        setUploadFile(file);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const inDonaturNameRef = useRef<HTMLInputElement>(null);
  const inEmailRef = useRef<HTMLInputElement>(null);
  const inRelawanCodeRef = useRef<HTMLInputElement>(null);
  const inSubRelawanCodeRef = useRef<HTMLInputElement>(null);
  const inMessageRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setSelectedPaymentMethod("manual");
  }, []);

  const handlerSubmit = async () => {
    const dateSubmission = new Date().toLocaleString("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    });
    const namaDonatur = inDonaturNameRef.current?.value;
    const email = inEmailRef.current?.value;
    const kode_relawan = inRelawanCodeRef.current?.value;
    const kode_subRelawan = inSubRelawanCodeRef.current?.value;
    const message = inMessageRef.current?.value;
    try {
      if (!namaDonatur) return toastError("Harap isi Nama Anda");
      if (!email) return toastError("Harap isi Email Anda");
      if (!isEmailValid(email)) return toastError("Email Anda tidak Valid");
      // handler donation upload
      if (!uploadFile) {
        toastError("Bukti Donasi Wajib Ada");
        return;
      }

      let fileUrl = "";

      setConfirmDonationLoading(true);
      const formData = new FormData();
      formData.append("file", uploadFile);
      const folderName = "donation-upload";
      formData.append("folderName", folderName);

      console.log(uploadFile);

      const { data: resData } = await axios.post(
        "/api/donationFileUpload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      // handle cloudinary error
      if (resData.error) {
        toastError("Error Upload File");
        setConfirmDonationLoading(false);
        return;
      }

      // handle cloudinary sucess
      fileUrl = resData.res.secure_url;
      setFileUrl(fileUrl);
      //

      const payload = {
        dateSubmission,
        namaDonatur,
        email,
        kode_relawan,
        kode_subRelawan,
        message,
        fileUrl,
      };

      // if success, send to spreadsheets
      await fetch("/api/submitDonation", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      // cp adhikti
      const phoneTarget = "628811094150";
      const text = `Halo Admin Adhikti, saya ${payload.namaDonatur} dengan email ${payload.email} telah berdonasi. Tolong konfirmasi donasi saya `;
      const waLink = `https://wa.me/${phoneTarget}?text=${encodeURIComponent(
        text
      )}`;
      if (!waLink) return alert("There is something error");
      window.open(waLink, "_blank");
      // reset
      if (inDonaturNameRef.current) inDonaturNameRef.current.value = "";
      if (inEmailRef.current) inEmailRef.current.value = "";
      if (inRelawanCodeRef.current) inRelawanCodeRef.current.value = "";
      if (inSubRelawanCodeRef.current) inSubRelawanCodeRef.current.value = "";
      if (inMessageRef.current) inMessageRef.current.value = "";
      setUploadFile(null);
      setConfirmDonationLoading(false);
      setOpen(false);
      toastSuccess("Terima kasih telah berdonasi 🫶 ");
    } catch (error) {
      console.log(error);
      alert("There is something wrong!");
      setConfirmDonationLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="mb-2">Informasi Donasi</DialogTitle>
          <DialogDescription className="max-sm:hidden">
            Mohon Lengkapi Informasi Berikut untuk Kepentingan Pendataan
          </DialogDescription>
          {/* Payment methods temporary inactive */}
          {/* <section id="payment-methods" className="grid   grid-cols-2 gap-2">
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
          </section> */}
          <section
            id="donatur-form"
            className="grid max-sm:grid-cols-1 grid-cols-2 items-center max-sm:gap-0 gap-5 max-sm:mt-0 w-full"
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
              <div className=" gap-2">
                <div className="flex md:flex-col gap-2">
                  <div className="w-1/2 md:w-full">
                    <label className="text-sm">
                      Nama <span className="text-red-500">*</span>{" "}
                    </label>
                    <Input
                      className="text-xs"
                      placeholder="John"
                      ref={inDonaturNameRef}
                    />
                  </div>
                  <div className="w-1/2 md:w-full">
                    <label className="text-sm">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <Input
                      className="text-xs"
                      type="email"
                      placeholder="johndoe@mail.com"
                      ref={inEmailRef}
                    />
                  </div>
                </div>
                <div className="flex  gap-2">
                  <div className="w-1/2 md:w-full">
                    <label className="text-sm">Kode Relawan</label>
                    <Input
                      className="text-xs uppercase"
                      placeholder="ABCJO123"
                      ref={inRelawanCodeRef}
                    />
                  </div>
                  <div className="w-1/2 md:w-full">
                    <label className="text-sm"> Sub Relawan</label>
                    <Input
                      className="text-xs uppercase"
                      placeholder="JOHN123"
                      ref={inSubRelawanCodeRef}
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm">Pesan Anda</label>
                  <Input
                    className="text-xs"
                    placeholder="John"
                    ref={inMessageRef}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-sm">
                  Upload Bukti<span className="text-red-500">*</span>
                </label>
                <span className="text-[10px]">
                  Maks file 1 MB (.png, .jpg, .jpeg, .pdf)
                </span>
                <Input
                  type="file"
                  id="file-input"
                  onChange={handleFileChange}
                  className="cursor-pointer text-sm"
                />
              </div>
              <Button
                type="button"
                className="bg-teal-600 hover:bg-teal-700 cursor-pointer"
                disabled={confirmDonationLoading}
                onClick={handlerSubmit}
              >
                {confirmDonationLoading ? (
                  <div className="flex items-center gap-2">
                    <Spinner />
                    <span>Memproses...</span>
                  </div>
                ) : (
                  <div className="flex gap-3 items-center">
                    <Send />
                    <span> Konfirmasi</span>
                  </div>
                )}
              </Button>
            </form>
          </section>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
