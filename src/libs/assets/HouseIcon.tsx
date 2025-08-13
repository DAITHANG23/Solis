import Image from "next/image";
import HouseImage from "@/libs/icons/house-icon.svg";

export const HouseIcon = () => {
  return (
    <div style={{ position: "relative", width: "24px", height: "24px" }}>
      <Image alt="HouseIcon" src={HouseImage} fill />
    </div>
  );
};
