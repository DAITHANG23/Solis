export async function generateMetadata() {
  return {
    title: "Clients | Domique Fusion",
    description: "This is clients feature which has information of clients",
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}
