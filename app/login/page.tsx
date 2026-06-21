import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default function LoginPage() {
  async function login(formData: FormData) {
    "use server";

    const email = formData.get("email")?.toString();
    const password = formData.get("password")?.toString();

    // hardcoded credentials (assessment requirement)
    const validEmail = "admin@lumen.com";
    const validPassword = "password123";

    if (email !== validEmail || password !== validPassword) {
      throw new Error("Invalid credentials");
    }

    const cookieStore = await cookies();

    cookieStore.set("auth", "authenticated", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
    });

    redirect("/dashboard");
  }

  return (
    <main className="mx-auto max-w-md px-6 py-10">
      <h1 className="text-2xl font-bold mb-6">
        Login
      </h1>

      <form action={login} className="space-y-4">
        <input
          name="email"
          type="email"
          placeholder="Email"
          className="w-full border p-2"
          required
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          className="w-full border p-2"
          required
        />

        <button
          type="submit"
          className="bg-black text-white px-4 py-2"
        >
          Sign in
        </button>
      </form>
    </main>
  );
}