import { NextRequest, NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File | null;
    const folderName = formData.get("folderName") as string;
    if (!file) {
      return NextResponse.json({ error: "File not found" }, { status: 404 });
    }
    const allowedTypes = ["image/png", "image/jpeg", "image/jpg"];
    if (!allowedTypes.includes(file.type)) {
      throw new Error("EXTENSION_NOT_ALLOWED");
    }

    // max file size 1 MB
    const MAX_SIZE = 1 * 1024 * 1024;
    if (file.size > MAX_SIZE) {
      throw new Error("FILE_TOO_LARGE");
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const isPdf = file.type === "application/pdf" || file.name.endsWith(".pdf");

    const uploadResult = await new Promise<any>((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        {
          folder: folderName,
          type: "upload",
          resource_type: isPdf ? "image" : "auto",
          format: isPdf ? "jpg" : undefined,
        },
        (error, result) => {
          if (error) reject(error);
          else resolve(result as any);
        }
      );
      uploadStream.end(buffer);
    });

    return NextResponse.json(
      { message: "File successfuly uploaded!", uploadResult },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({
      message: "Upload File Error",
      error: (error as Error).message,
      statusCode: 500,
    });
  }
}
