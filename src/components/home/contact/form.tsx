"use client";

import Input from "@/components/ui/input";
import { sendMail } from "@/lib/contact/actions";
import { useRef, useTransition } from "react";
import toast from "react-hot-toast";
import MessagesIcon from "@/assets/icons/messages";
import Button from "@/components/ui/button";

export default function Form({ defaultType }: { defaultType?: string }) {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [isPending, startTransition] = useTransition();

  return (
    <form
      ref={formRef}
      className="flex flex-col gap-x-4 gap-y-6 sm:grid grid-cols-2 w-full"
      action={(data) => {
        startTransition(async () => {
          const isOk = await sendMail(data);
          if (isOk) {
            formRef.current?.reset();
            toast.success(
              "Twoja wiadomość została przesłana! Dziękujemy za kontakt"
            );
          } else {
            toast.error("Wystąpił błąd. Spróbuj ponownie później.");
          }
        });
      }}
    >
      <Input required name="first-name" label="Imię" />
      <Input required name="last-name" label="Nazwisko" />
      <Input required name="email" label="Email" type="email" />
      <Input required name="phone" label="Telefon" type="tel" />
      <div className="relative col-span-2">
        <label
          className="text-[#BABABA] text-[12px] absolute left-3.5 top-0 -translate-y-[50%] bg-white px-1"
          htmlFor="message"
        >
          Wiadomość (opcjonalnie)
        </label>
        <textarea
          className="rounded-md border-[1px] border-[#E2E2E2] px-4 py-3 !outline-none text-sm w-full min-h-[1in]"
          id="message"
          name="message"
          required
        />
      </div>
      <div className="col-span-2 flex items-center gap-4">
        <label
          className="text-sm flex items-center gap-2 cursor-pointer"
          htmlFor="measurement"
        >
          <input
            type="radio"
            name="type"
            value="measurement"
            id="measurement"
            defaultChecked={defaultType !== "call"}
            required
          />
          <span className="select-none">Zamawiam pomiar</span>
        </label>
        <label
          className="text-sm flex items-center gap-2 cursor-pointer"
          htmlFor="call"
        >
          <input
            type="radio"
            name="type"
            value="call"
            id="call"
            defaultChecked={defaultType === "call"}
            required
          />
          <span className="select-none">Zamawiam rozmowę</span>
        </label>
      </div>
      <input type="hidden" value="form" name="source" />
      <Button disabled={isPending} className="w-max mt-4">
        <MessagesIcon /> Wyślij wiadomość
      </Button>
    </form>
  );
}
