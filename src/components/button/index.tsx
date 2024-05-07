import { ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function Button({ className = "", type = "button", disabled = false, children, ...props }: ButtonProps) {
  return (
    <button type={type} disabled={disabled} className={className} {...props}>
      {children}
    </button>
  );
}
