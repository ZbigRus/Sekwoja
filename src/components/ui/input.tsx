import type { InputHTMLAttributes } from 'react';

export default function Input({
  className,
  name,
  label,
  ...props
}: InputHTMLAttributes<HTMLInputElement> & { label?: string }) {
  return (
    <div className="relative">
      {label && (
        <label
          className="text-[#BABABA] text-[12px] absolute left-3.5 top-0 -translate-y-[50%] bg-white px-1"
          htmlFor={name}
        >
          {label}
        </label>
      )}
      <input
        className="rounded-md border-[1px] border-[#E2E2E2] px-4 py-3 !outline-none text-sm w-full"
        id={name}
        name={name}
        type="text"
        {...props}
      />
    </div>
  );
}
