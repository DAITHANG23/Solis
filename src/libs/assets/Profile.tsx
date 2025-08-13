import Image from "next/image";
import ProfileImage from "@/libs/icons/profile-icon.svg";

export const ProfileIcon = () => {
  return (
    <div style={{ position: "relative", width: "24px", height: "24px" }}>
      <Image alt="ProfileIcon" src={ProfileImage} fill />
    </div>
  );
};
