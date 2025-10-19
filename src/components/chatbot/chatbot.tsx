'use client';

import { Turnstile } from '@marsidev/react-turnstile';
import Image from 'next/image';
import { type FormEvent, useRef, useState, useTransition } from 'react';
import toast from 'react-hot-toast';
import SendIcon from '@/assets/icons/send';
import { logo } from '@/assets/images';
import { TURNSTILE_SITE_KEY } from '@/consts';
import { sendChatMail } from '@/lib/contact/actions';

export default function ChatBot() {
  const input = useRef<HTMLInputElement | null>(null);
  const [isPending, startTransition] = useTransition();
  const [step, setStep] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [data, setData] = useState({
    message: '',
    email: '',
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (step === 0) return setStep((prev) => prev + 1);

    const formData = new FormData(e.currentTarget);
    const token =
      formData.get('cf-turnstile-response')?.toString() ?? 'unknown';

    startTransition(async () => {
      const { email, message } = data;
      const { status, message: responseMessage } = await sendChatMail({
        message,
        email,
        token,
      });
      if (status === 'success') {
        toast.success(responseMessage);
      } else {
        toast.error(responseMessage);
      }
      setIsActive(false);
    });
  };

  return (
    <div className="fixed right-[8vw] md:right-[4vw] bottom-8 z-50">
      <button
        type="button"
        onClick={() =>
          setIsActive((prev) => {
            if (!prev) input.current?.focus();
            return !prev;
          })
        }
        className="w-20 h-20 bg-light rounded-full shadow-[0_4px_24px_4px_rgba(17,27,22,0.15)] grid place-content-center"
      >
        <Image width={64} height={64} src={logo} alt="Sekwoja Logo" />
      </button>
      <div
        className={`bg-white w-[84vw] sm:w-[5in] h-[4in] absolute bottom-[120%] sm:bottom-0 right-0 sm:right-[120%] rounded-xl overflow-hidden flex flex-col ${
          isActive ? 'opacity-100' : 'opacity-0 pointer-events-none'
        } transition-opacity shadow-[0_25px_48px_0_rgba(17,27,22,0.25)]`}
      >
        <div className="px-6 py-4 grid grid-cols-[44px_1fr] gap-x-4 grid-rows-[1fr_1fr]">
          <div className="bg-light rounded-full row-span-2 grid place-content-center w-11 h-11">
            <Image width={32} height={32} src={logo} alt="Sekwoja Logo" />
          </div>
          <h3 className="font-medium self-end">Sekwoja ChatBot</h3>
          <span className="text-secondary font-semibold text-[12px]">
            Aktywny
          </span>
        </div>
        <div className="bg-light flex-1 px-6 py-4 grid grid-cols-[36px_1fr] grid-rows-[36px_repeat(2,max-content)] gap-x-2">
          <div className="bg-white rounded-full grid place-content-center w-9 h-9 row-span-full">
            <Image width={28} height={28} src={logo} alt="Sekwoja Logo" />
          </div>
          <div className="flex items-center">
            <span className="text-[12px] text-[#1C1C1C]/80 font-medium">
              Sekwoja konsultant
            </span>
          </div>
          <div className="bg-white px-4 py-2 rounded-md rounded-tl-none mb-2">
            <p className="text-sm font-medium">Witaj! Jak możemy Ci pomóc?</p>
          </div>
          {step > 0 && (
            <div className="bg-white px-4 py-2 rounded-md rounded-tl-none">
              <p className="text-sm font-medium">
                Dziękujemy za wiadomość, nasz pracownik odpowie w przeciągu
                maksymalnie 48h. Podaj proszę email, na który ma przyjść Twoja
                odpowiedź.
              </p>
            </div>
          )}
        </div>
        <form
          onSubmit={handleSubmit}
          className="bg-white p-2 flex flex-col gap-4"
        >
          <div className="relative flex items-center">
            <input
              ref={input}
              required
              className="bg-light placeholder:text-font/80 text-sm py-4 px-6 rounded w-full font-medium pr-16"
              type={step > 0 ? 'email' : 'text'}
              readOnly={isPending}
              value={step > 0 ? data.email : data.message}
              onChange={(e) =>
                setData((prev) =>
                  step > 0
                    ? { ...prev, email: e.target.value }
                    : { ...prev, message: e.target.value },
                )
              }
              placeholder={
                step > 0
                  ? 'Wpisz tutaj swojego maila'
                  : 'Wpisz tutaj swoją wiadomość'
              }
            />
            <button
              type="button"
              disabled={isPending}
              className="h-10 w-10 disabled:opacity-80 bg-white rounded absolute pl-3 place-content-center right-4"
            >
              <SendIcon />
            </button>
          </div>

          <div>
            <Turnstile siteKey={TURNSTILE_SITE_KEY} />
          </div>
        </form>
      </div>
    </div>
  );
}
