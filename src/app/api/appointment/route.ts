import { NextResponse } from "next/server";

/* Appointment request endpoint.
   TODO before launch: forward the payload to the practice
   (front-desk email via Resend/SendGrid, or the practice management system).
   Until then it accepts and logs so the form flow is fully testable. */
export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (!body?.parentName || !body?.childName || !body?.phone) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  console.log("[appointment-request]", JSON.stringify(body));
  return NextResponse.json({ ok: true });
}
