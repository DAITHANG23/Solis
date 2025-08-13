import Image from "next/image";
import PurchaseListImage from "@/libs/icons/purchase-list-icon.svg";

export const PurchaseListIcon = () => {
  return (
    <div style={{ position: "relative", width: "24px", height: "24px" }}>
      <Image alt="PurchaseListIcon" src={PurchaseListImage} fill />
    </div>
  );
};
