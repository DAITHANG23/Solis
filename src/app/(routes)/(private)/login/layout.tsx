// import { HeaderLogin } from "@/libs/shared/components/client-components/login";
import { Box } from "@mui/material";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* <HeaderLogin /> */}
      <Box
        sx={{
          display: "flex",
          height: "80vh",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "white",
        }}
      >
        {children}
      </Box>
    </>
  );
}
