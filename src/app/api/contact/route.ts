import { NextRequest, NextResponse } from "next/server";
import { createServiceClient } from "@/lib/supabase";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message, type } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Todos los campos requeridos deben completarse." },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Email inválido." },
        { status: 400 }
      );
    }

    // Save to Supabase
    try {
      const supabase = createServiceClient();
      await supabase.from("contact_messages").insert([
        {
          name,
          email,
          subject: `[${type ?? "consulta"}] ${subject}`,
          message,
          created_at: new Date().toISOString(),
        },
      ]);
    } catch {
      // If Supabase not configured, we still return success
      // In production, you'd add email sending here (Resend, SendGrid, etc.)
      console.log("Contact form submission:", { name, email, subject, type });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Error interno del servidor." },
      { status: 500 }
    );
  }
}
