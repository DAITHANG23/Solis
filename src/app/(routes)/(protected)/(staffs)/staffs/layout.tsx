export async function generateMetadata() {
  return {
    title: "Staffs | Domique Fusion",
    description: "This is staffs feature which has information of staffs",
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}
