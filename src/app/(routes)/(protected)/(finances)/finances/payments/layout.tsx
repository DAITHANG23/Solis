export async function generateMetadata() {
  return {
    title: "Payments | Domique Fusion",
    description: "Learn more about Domique Fusion, our story, and what we offer.",
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}
