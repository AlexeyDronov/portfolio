"use server";

export async function submitContactForm(prevState: any, formData: FormData) {
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    // Validate
    if (!name || !email || !message) {
        return { success: false, message: "Please fill in all fields." };
    }

    // Simulate delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Here you would typically use an email service API like Resend, SendGrid, or Nodemailer.
    // Example with Resend:
    // await resend.emails.send({ ... });

    console.log("Contact Form Submitted:", { name, email, message });

    return {
        success: true,
        message: "Message sent successfully! (This is a demo, check console)"
    };
}
