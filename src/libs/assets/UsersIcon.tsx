import Image from "next/image";
import UsersImage from "@/libs/icons/users-icon.svg";

export const UsersIcon = () => {
  return (
    <div style={{ position: "relative", width: "24px", height: "24px" }}>
      <Image alt="UsersIcon" src={UsersImage} fill />
    </div>
  );
};
