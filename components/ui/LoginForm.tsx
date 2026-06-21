"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { loginAction } from "@/lib/actions";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending} className="w-full rounded-lg bg-green-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-green-700 transition disabled:opacity-60">
      {pending ? "Signing in…" : "Sign in"}
    </button>
  );
}

export default function LoginForm() {
  const [state, formAction] = useActionState(loginAction, null);

  return (
    <form action={formAction} className="space-y-4">
      {state?.error && (
        <div className="rounded-lg bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700">{state.error}</div>
      )}

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
        <input name="email" type="email" placeholder="admin@lumen.com" required className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500" />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
        <input name="password" type="password" placeholder="••••••••" required className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500" />
      </div>

      <SubmitButton />

      <p className="text-xs text-center text-gray-400 mt-2">Demo credentials: admin@lumen.com / password123</p>
    </form>
  );
}