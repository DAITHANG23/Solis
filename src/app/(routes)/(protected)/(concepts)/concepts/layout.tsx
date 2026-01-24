export async function generateMetadata() {
  return {
    title: "Concepts | Domique Fusion",
    description: "This is concepts feature which has information of concepts",
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}
