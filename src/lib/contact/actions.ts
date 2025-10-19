"use server";

import nodemailer from "nodemailer";

const TURNSTILE_SECRET_KEY = process.env.TURNSTILE_SECRET_KEY ?? "";

const user = process.env.EMAIL_SENDER;
const recipient = process.env.EMAIL_RECIPIENT;
const pass = process.env.EMAIL_PASSWORD;
const transporter = nodemailer.createTransport({
  host: "mail.sekwoja.com",
  port: 465,
  auth: {
    user,
    pass,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

import { headers } from "next/headers";
export async function getIPAddress() {
    return headers().get("x-forwarded-for") ?? 'unknown';
}

async function validateTurnstile(token: string) {
  const remoteip = await getIPAddress();

  const formData = new FormData();
  formData.append("secret", TURNSTILE_SECRET_KEY);
  formData.append("response", token);
  formData.append("remoteip", remoteip);

  try {
    const response = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        body: formData,
      }
    );

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Turnstile validation error:", error);
    return { success: false, "error-codes": ["internal-error"] };
  }
}

export async function sendMail(data: FormData) {
  "use server";
  const firstName = data.get("first-name")?.toString();
  const lastName = data.get("last-name")?.toString();
  const email = data.get("email")?.toString();
  const phone = data.get("phone")?.toString();
  const message = data.get("message")?.toString();
  const type = data.get("type")?.toString();
  const token = data.get("cf-turnstile-response")?.toString() ?? 'unknown';

      const validation = await validateTurnstile(token);

  try {
    const info = await new Promise((resolve, reject) => {
      transporter.sendMail(
        {
          from: user,
          to: recipient,
          subject: `Nowe zatwierdzenie formularza ${new Date().toLocaleDateString()} - Sekwoja`,
          text: `
Imię: ${firstName}  
Nazwisko: ${lastName}

Numer telefonu: ${phone}

Email: ${email}

Powód kontaktu: ${type === "measurement" ? "Pomiar" : "Rozmowa"}

Źródło kontaktu: Formularz kontaktowy

Wiadomość: 
${message}
        `,
        },
        (error) => {
          if (error) {
            reject(false);
          } else {
            resolve(true);
          }
        }
      );
    });
    const thanks = await new Promise((resolve, reject) => {
      transporter.sendMail(
        {
          from: user,
          to: email,
          subject: `Dziękujemy za wysłanie zgłoszenia!`,
          text: `
Dziękujemy serdecznie za skorzystanie z naszego formularza kontaktowego i przesłanie nam Państwa informacji. Cieszymy się, że zdecydowali się Państwo skontaktować z naszym zespołem.

Zgłoszenie zostało odebrane i jest obecnie przetwarzane przez pracowników naszej firmy. W niedługim czasie skontaktujemy się z Państwem, aby omówić zapytanie, odpowiedzieć na ewentualne pytania oraz udzielić niezbędnych informacji.

Twoja wiadomość: 
${message}

Z poważaniem,
Sekwoja
        `,
        },
        (error) => {
          if (error) {
            console.log({ error });
            reject(false);
          } else {
            resolve(true);
          }
        }
      );
    });
    if (info && thanks) return true;
    return false;
  } catch (err) {
    console.log({ err });
    return false;
  }
}

export async function sendChatMail({
  message,
  email,
  token,
}: {
  message: string;
  email: string;
  token: string;
}) {
  try {
    const info = await new Promise((resolve, reject) => {
      transporter.sendMail(
        {
          from: user,
          to: recipient,
          subject: `Nowe zatwierdzenie formularza ${new Date().toLocaleDateString()} - Sekwoja`,
          text: `
          Email: ${email}
  
          Źródło kontaktu: Chatbot
          
          Wiadomość: 
          ${message}
        `,
        },
        (error) => {
          if (error) {
            console.log({ error });
            reject(false);
          } else {
            resolve(true);
          }
        }
      );
    });
    const thanks = await new Promise((resolve, reject) => {
      transporter.sendMail(
        {
          from: user,
          to: email,
          subject: `Dziękujemy za wysłanie zgłoszenia!`,
          text: `
Dziękujemy serdecznie za skorzystanie z naszego formularza kontaktowego i przesłanie nam Państwa informacji. Cieszymy się, że zdecydowali się Państwo skontaktować z naszym zespołem.

Zgłoszenie zostało odebrane i jest obecnie przetwarzane przez pracowników naszej firmy. W niedługim czasie skontaktujemy się z Państwem, aby omówić zapytanie, odpowiedzieć na ewentualne pytania oraz udzielić niezbędnych informacji.

Twoja wiadomość: 
${message}

Z poważaniem,
Sekwoja
        `,
        },
        (error) => {
          if (error) {
            console.log({ error });
            reject(false);
          } else {
            resolve(true);
          }
        }
      );
    });
    if (info && thanks) return true;
    return false;
  } catch (err) {
    return false;
  }
}
