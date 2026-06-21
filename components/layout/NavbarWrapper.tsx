import { cookies } from "next/headers";
import Navbar from "@/components/layout/Navbar";

export default async function NavbarWrapper() {
  const cookieStore = await cookies();
  const auth = cookieStore.get("auth");
  const isLoggedIn = auth?.value === "authenticated";

  return <Navbar isLoggedIn={isLoggedIn} />;
}