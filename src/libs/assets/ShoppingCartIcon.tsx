import Image from "next/image";
import ShoppingCartImage from "@/libs/icons/shopping-cart.svg";

export const ShoppingCartIcon = () => {
  return (
    <div style={{ position: "relative", width: "24px", height: "24px" }}>
      <Image alt="ShoppingCartIcon" src={ShoppingCartImage} fill />
    </div>
  );
};
