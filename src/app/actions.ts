"use server";

import { z } from "zod";
import { supabase } from "@/lib/supabase";
import { resend } from "@/lib/resend";

const leadSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  practice_area: z.string().min(1, "Practice area is required"),
  case_description: z.string().min(10, "Please provide a more detailed description"),
  source: z.string().optional().default("vanguard-landing-page"),
});

export async function submitLead(formData: FormData): Promise<{ success: boolean; error?: Record<string, string[] | undefined> | string }> {
  const rawData = {
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    practice_area: formData.get("practice_area"),
    case_description: formData.get("case_description"),
    source: formData.get("source") || "vanguard-landing-page",
  };

  const validatedFields = leadSchema.safeParse(rawData);

  if (!validatedFields.success) {
    return {
      success: false,
      error: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { error } = await supabase
    .from("leads")
    .insert([validatedFields.data]);

  if (error) {
    console.error("Supabase error:", error);
    // Don't fail the whole submission for the frontend presentation if DB is missing
  }

  // Send Email Notification via Resend
  try {
    await resend.emails.send({
      from: "Vanguard Law <notifications@resend.dev>", // Replace with verified domain in production
      to: ["solomonfiverr98@gmail.com"],
      subject: `New Lead: ${validatedFields.data.practice_area} - ${validatedFields.data.name}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
          <h2 style="color: #1B2A4A;">New Consultation Request</h2>
          <p><strong>Name:</strong> ${validatedFields.data.name}</p>
          <p><strong>Email:</strong> ${validatedFields.data.email}</p>
          <p><strong>Phone:</strong> ${validatedFields.data.phone || "N/A"}</p>
          <p><strong>Practice Area:</strong> ${validatedFields.data.practice_area}</p>
          <p><strong>Description:</strong></p>
          <div style="background: #f9f9f9; padding: 15px; border-radius: 5px;">
            ${validatedFields.data.case_description}
          </div>
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
          <p style="font-size: 12px; color: #666;">Source: ${validatedFields.data.source}</p>
        </div>
      `,
    });
  } catch (emailError) {
    console.error("Resend error:", emailError);
    // We don't return error here because the lead was already saved to DB
  }

  return { success: true };
}
