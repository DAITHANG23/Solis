import Image from "next/image";
import NodataImage from "@/libs/icons/no-data.svg";

export const NoDataIcon = () => {
  return (
    <div style={{ position: "relative", width: "100px", height: "100px" }}>
      <Image alt="NoDataIcon" src={NodataImage} fill />
    </div>
  );
};
