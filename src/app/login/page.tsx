"use client";

import React from "react";
import { CaseLensProvider } from "@/context/CaseLensContext";
import { AuthLayout } from "@/components/auth/AuthLayout";
import { LoginForm } from "@/components/auth/LoginForm";
import { ToastContainer } from "@/components/ToastContainer";

export default function LoginPage() {
  return (
    <CaseLensProvider>
      <AuthLayout>
        <LoginForm />
      </AuthLayout>
      <ToastContainer />
    </CaseLensProvider>
  );
}

