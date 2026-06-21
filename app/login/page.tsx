import LoginForm from "@/components/ui/LoginForm";

export const metadata = {
  title: "Login | Lumen Books",
  description: "Sign in to your Lumen Books seller account.",
};

export default function LoginPage() {
  return (
    <main className="mx-auto max-w-md px-6 py-20">
      <h1 className="text-2xl font-bold mb-2">Welcome back</h1>
      <p className="text-sm text-gray-500 mb-8">
        Sign in to access your seller dashboard.
      </p>
      <LoginForm />
    </main>
  );
}