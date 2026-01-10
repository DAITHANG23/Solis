"use client";
import Image from "next/image";
import { StyledHeaderLogin, StyledImgLogoHeader } from "./LoginForm.styles";

export const HeaderLogin = () => {
  return (
    <StyledHeaderLogin>
      <StyledImgLogoHeader>
        <Image src={"/favicon.ico"} alt='logo' fill />
      </StyledImgLogoHeader>
    </StyledHeaderLogin>
  );
};
