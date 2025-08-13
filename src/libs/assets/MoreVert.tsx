import Image from "next/image"
import MoreVertImage from "@/libs/icons/more-vert-icon.svg";
export const MoreVertIcon = () => {
    return (<div style={{ position: "relative", width: "24px", height: "24px" }}>
      <Image alt="MoreVertIcon" src={MoreVertImage} fill />
    </div>)
}