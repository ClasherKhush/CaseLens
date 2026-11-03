"use client";

import React from "react";
import { CaseLensProvider } from "@/context/CaseLensContext";
import { AuthLayout } from "@/components/auth/AuthLayout";
import { ForgotPasswordForm } from "@/components/auth/ForgotPasswordForm";
import { ToastContainer } from "@/components/ToastContainer";

export default function ForgotPasswordPage() {
  return (
    <CaseLensProvider>
      <AuthLayout>
        <ForgotPasswordForm />
      </AuthLayout>
      <ToastContainer />
    </CaseLensProvider>
  );
}

