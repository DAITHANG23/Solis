"use client";
import Image from "next/image";
import { StyledHeaderLogin, StyledImgLogoHeader } from "./LoginForm.styles";
import { LanguageSelect } from "@/libs/shared/LanguageSelect";

export const HeaderLogin = () => {
  return (
    <StyledHeaderLogin>
      <StyledImgLogoHeader>
        <Image src={"/favicon.ico"} alt="logo" fill />
      </StyledImgLogoHeader>

      <LanguageSelect />
    </StyledHeaderLogin>
  );
};
