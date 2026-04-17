"use client";
import { LayoutMain } from "@/libs/shared";

export default function ProtectedLayout({ children }: { children: React.ReactNode }) {
  return <LayoutMain>{children}</LayoutMain>;
}
