export async function generateMetadata() {
  return {
    title: "Dashboard | Admin Domique Fusion",
    description: "This is clients feature which has information of clients",
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}
