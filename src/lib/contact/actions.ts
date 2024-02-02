"use server";

import nodemailer from "nodemailer";

export async function sendMail(data: FormData) {
  "use server";
  const firstName = data.get("first-name")?.toString();
  const lastName = data.get("last-name")?.toString();
  const email = data.get("email")?.toString();
  const phone = data.get("phone")?.toString();
  const message = data.get("message")?.toString();
  const type = data.get("type")?.toString();
  const source = data.get("source")?.toString();
  const user = process.env.NEXT_PUBLIC_EMAIL_SENDER;
  const recipient = process.env.NEXT_PUBLIC_EMAIL_RECIPIENT;
  const pass = process.env.NEXT_PUBLIC_EMAIL_PASSWORD;
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
  try {
    await new Promise((resolve, reject) => {
      transporter.sendMail(
        {
          from: user,
          to: recipient,
          subject: `Nowe zatwierdzenie formularza ${new Date().toLocaleDateString()} - Sekwoja`,
          text: `
          Imię: ${firstName}  Nazwisko: ${lastName}
          
          Numer telefonu: ${phone}
          
          Email: ${email}
          
          Powód kontaktu: ${type === "measurement" ? "Pomiar" : "Rozmowa"}

          Źródło kontaktu: ${
            source === "form" ? "Formularz kontaktowy" : "Chatbot"
          }

          Message: ${message}
        `,
        },
        (error, info) => {
          if (error) {
            console.log({ error });
            reject(error);
          } else {
            resolve(info);
          }
        }
      );
    });
    await new Promise((resolve, reject) => {
      transporter.sendMail(
        {
          from: user,
          to: email,
          subject: `Dziękujemy za wysłanie zgłoszenia!`,
          text: `
          Dziękujemy serdecznie za skorzystanie z naszego formularza kontaktowego i przesłanie nam Państwa informacji. Cieszymy się, że zdecydowali się Państwo skontaktować z naszym zespołem.

          Zgłoszenie zostało odebrane i jest obecnie przetwarzane przez pracowników naszej firmy. W niedługim czasie skontaktujemy się z Państwem, aby omówić zapytanie, odpowiedzieć na ewentualne pytania oraz udzielić niezbędnych informacji.
          
          Z poważaniem,
          Sekwoja
        `,
        },
        (error, info) => {
          if (error) {
            console.log({ error });
            reject(error);
          } else {
            resolve(info);
          }
        }
      );
    });
  } catch (err) {
    console.log({ err });
  }
}
