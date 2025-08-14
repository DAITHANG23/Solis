"use client";
import { LANGUAGE_OPTIONS } from "@/constants";
import i18n from "@/libs/i18n/i18n";
import { MenuCustom } from "./Menu";
import { useEffect, useState } from "react";

export const LanguageSelect = () => {
  const [langValue, setLangValue] = useState<string>("en-GB");
  useEffect(() => {
    if (typeof window !== "undefined") {
      const langGetStorage = localStorage.getItem("i18nextLng") || "";
      setLangValue(langGetStorage);
    }
  }, []);
  const onSelect = (value: string) => {
    setLangValue(value);
    i18n.changeLanguage(value);
  };
  return (
    <MenuCustom
      options={LANGUAGE_OPTIONS}
      onSelect={onSelect}
      valueSelected={langValue}
      verticalAnchor="bottom"
      horizontalTransformOrigin="center"
    />
  );
};
