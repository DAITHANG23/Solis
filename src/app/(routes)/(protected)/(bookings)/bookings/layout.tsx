export async function generateMetadata() {
  return {
    title: "Bookings | Admin Admin Domique Fusion",
    description: "This is bookings feature which has information of bookings",
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}
