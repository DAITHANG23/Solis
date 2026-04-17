export async function generateMetadata() {
  return {
    title: "Payments | Admin Domique Fusion",
    description: "Learn more about Admin Domique Fusion, our story, and what we offer.",
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}
