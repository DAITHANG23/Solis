import Image from "next/image";
import WareHouseImage from "@/libs/icons/warehouse-icon.svg";

export const WarehouseIcon = () => {
  return (
    <div style={{ position: "relative", width: "24px", height: "24px" }}>
      <Image alt="WarehouseIcon" src={WareHouseImage} fill />
    </div>
  );
};
