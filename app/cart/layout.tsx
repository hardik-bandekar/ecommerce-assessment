import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function CartLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headersList = await headers();
  const cookieHeader = headersList.get("cookie");

  const token = cookieHeader
    ?.split("; ")
    .find((row) => row.startsWith("token="))
    ?.split("=")[1];

  if (!token) {
    redirect("/login");
  }

  return <>{children}</>;
}
