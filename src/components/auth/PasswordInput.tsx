"use client";

import React, { useState } from "react";
import { Eye, EyeOff, Lock } from "lucide-react";

export interface PasswordInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  icon?: boolean;
}

export function PasswordInput({
  error,
  icon = true,
  className = "",
  ...props
}: PasswordInputProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative w-full">
      {icon && (
        <Lock className="w-4 h-4 text-[#778397] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
      )}
      <input
        type={showPassword ? "text" : "password"}
        className={`w-full ${
          icon ? "pl-10" : "pl-3.5"
        } pr-10 py-2.5 text-xs sm:text-sm bg-[#F5F7FA] border ${
          error ? "border-[#D9534F] bg-[#FEF2F2]" : "border-[#E5E9EF] focus:border-[#C9A45C]"
        } rounded-xl text-[#101C2C] placeholder:text-[#778397]/70 outline-hidden transition-all duration-200 focus:bg-white focus:ring-2 focus:ring-[#C9A45C]/20 ${className}`}
        {...props}
      />
      <button
        type="button"
        tabIndex={-1}
        onClick={() => setShowPassword(!showPassword)}
        className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-[#778397] hover:text-[#101C2C] transition-colors"
        title={showPassword ? "Hide password" : "Show password"}
      >
        {showPassword ? (
          <EyeOff className="w-4 h-4 transition-transform hover:scale-110" />
        ) : (
          <Eye className="w-4 h-4 transition-transform hover:scale-110" />
        )}
      </button>
    </div>
  );
}
