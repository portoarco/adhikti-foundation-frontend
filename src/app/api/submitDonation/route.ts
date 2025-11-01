import { google } from "googleapis";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      },
      scopes: [
        "https://www.googleapis.com/auth/drive",
        "https://www.googleapis.com/auth/drive.file",
        "https://www.googleapis.com/auth/spreadsheets",
      ],
    });

    const sheets = google.sheets({ version: "v4", auth });

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "donation_manual_proof!A1:G1",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [
          [
            body.dateSubmission,
            body.namaDonatur,
            body.email,
            body.kode_relawan,
            body.kode_subRelawan,
            body.message,
            body.fileUrl,
          ],
        ],
      },
    });

    return Response.json(
      { status: "success", data: response.data },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error submitting to Google Sheets:", error);
    return Response.json(
      { status: "error", message: error.message },
      { status: 500 }
    );
  }
}
