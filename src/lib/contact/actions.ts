'use server';

import { headers } from 'next/headers';
import nodemailer from 'nodemailer';

const TURNSTILE_SECRET_KEY = process.env.TURNSTILE_SECRET_KEY ?? '';

const user = process.env.EMAIL_SENDER;
const recipient = process.env.EMAIL_RECIPIENT;
const pass = process.env.EMAIL_PASSWORD;
const transporter = nodemailer.createTransport({
  host: 'mail.sekwoja.com',
  port: 465,
  auth: {
    user,
    pass,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

const ERROR_MESSAGE = {
  status: 'error',
  message: 'Niestety nie udało się wysłać Twojej wiadomości. Spróbuj później.',
} as const;

const ERROR_BOT_MESSAGE = {
  status: 'error',
  message:
    'Weryfikacja czy jesteś człowiekiem nie powiodła się. Spróbuj ponownie.',
} as const;

const SUCCESS_MESSAGE = {
  status: 'success',
  message: 'Twoja wiadomość została przesłana! Dziękujemy za kontakt',
} as const;

export async function getIPAddress() {
  return (await headers()).get('x-forwarded-for') ?? 'unknown';
}

async function validateTurnstile(token: string) {
  const remoteip = await getIPAddress();

  const formData = new FormData();
  formData.append('secret', TURNSTILE_SECRET_KEY);
  formData.append('response', token);
  formData.append('remoteip', remoteip);

  try {
    const response = await fetch(
      'https://challenges.cloudflare.com/turnstile/v0/siteverify',
      {
        method: 'POST',
        body: formData,
      },
    );

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Turnstile validation error:', error);
    return { success: false, 'error-codes': ['internal-error'] };
  }
}

type MessageResponse = {
  status: 'success' | 'error';
  message: string;
};

export async function sendMail(data: FormData): Promise<MessageResponse> {
  'use server';
  const firstName = data.get('first-name')?.toString();
  const lastName = data.get('last-name')?.toString();
  const email = data.get('email')?.toString();
  const phone = data.get('phone')?.toString();
  const message = data.get('message')?.toString();
  const type = data.get('type')?.toString();
  const token = data.get('cf-turnstile-response')?.toString() ?? 'unknown';

  try {
    const validation = await validateTurnstile(token);
    if (!validation.success) {
      return ERROR_BOT_MESSAGE;
    }

    const info = await new Promise((resolve, reject) => {
      transporter.sendMail(
        {
          from: user,
          to: recipient,
          subject: `${firstName} ${lastName} wysłał formularz - Sekwoja.com`,
          text: `
Imię: ${firstName}  
Nazwisko: ${lastName}

Numer telefonu: ${phone}

Email: ${email}

Powód kontaktu: ${type === 'measurement' ? 'Pomiar' : 'Rozmowa'}

Źródło kontaktu: Formularz kontaktowy

Wiadomość: 
${message}
        `,
        },
        (error) => {
          if (error) {
            console.error(error, 'Error while sending info message');
            reject(false);
          } else {
            resolve(true);
          }
        },
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
            console.error(error, 'Error while sending thanks message');
            reject(false);
          } else {
            resolve(true);
          }
        },
      );
    });
    if (info && thanks) {
      return SUCCESS_MESSAGE;
    }

    return ERROR_MESSAGE;
  } catch (err) {
    console.log({ err }, 'Error while sending message');

    return ERROR_MESSAGE;
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
}): Promise<MessageResponse> {
  try {
    const validation = await validateTurnstile(token);
    if (!validation.success) {
      return ERROR_BOT_MESSAGE;
    }

    const info = await new Promise((resolve, reject) => {
      transporter.sendMail(
        {
          from: user,
          to: recipient,
          subject: `${email} wysłał wiadomość - Sekwoja.com`,
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
        },
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
        },
      );
    });
    if (info && thanks) {
      return SUCCESS_MESSAGE;
    }

    return ERROR_MESSAGE;
  } catch (err) {
    console.log({ err }, 'Error while sending message');

    return ERROR_MESSAGE;
  }
}
