import Image from "next/image";
import MenuImage from "@/libs/icons/menu-icon.svg";

export const MenuArrowIcon = () => {
  return (
    <div style={{ position: "relative", width: "24px", height: "24px" }}>
      <Image alt="MenuIcon" src={MenuImage} fill />
    </div>
  );
};
