import Image from "next/image";
import LogoutImage from "@/libs/icons/logout.svg";

export const LogoutIcon = () => {
  return (
    <div style={{ position: "relative", width: "24px", height: "24px" }}>
      <Image alt="LogoutIcon" src={LogoutImage} fill />
    </div>
  );
};
