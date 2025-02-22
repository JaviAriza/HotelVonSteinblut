import { useState, useEffect } from "react";
import { getContainerMiddle } from "../utils/positionUtils";

export default function useTrackPosition(idWrapper) {
  const [isFixed, setIsFixed] = useState(true);

  useEffect(() => {
    const updateFixedStatus = () => {
      const containerMiddle = getContainerMiddle(idWrapper);

      if (containerMiddle >= window.scrollY) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    updateFixedStatus();

    window.addEventListener("scroll", updateFixedStatus);
    window.addEventListener("resize", updateFixedStatus);

    return () => {
      window.removeEventListener("scroll", updateFixedStatus);
      window.removeEventListener("resize", updateFixedStatus);
    };
  }, [idWrapper]);

  return isFixed;
}
