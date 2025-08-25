import { LayoutMain } from "@/libs/shared/LayoutMain/LayoutMain";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <LayoutMain>{children}</LayoutMain>;
}
