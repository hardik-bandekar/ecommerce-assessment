"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ProductsPage() {
  const router = useRouter();

  useEffect(() => {
    const hasToken = document.cookie.includes("token=");
    if (!hasToken) {
      router.replace("/login");
    }
  }, [router]);

  return (
    <div>
      <h1>Products</h1>
    </div>
  );
}
