import Image from "next/image";
import SettingImage from "@/libs/icons/setting-icon.svg";

export const SettingIcon = () => {
  return (
    <div style={{ position: "relative", width: "24px", height: "24px" }}>
      <Image alt="SettingIcon" src={SettingImage} fill />
    </div>
  );
};
