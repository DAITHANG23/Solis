import Image from "next/image";
import CreditCartImage from "@/libs/icons/credit-card-icon.svg";

export const CreditCartIcon = () => {
  return (
    <div style={{ position: "relative", width: "24px", height: "24px" }}>
      <Image alt="CreditCartIcon" src={CreditCartImage} fill />
    </div>
  );
};
