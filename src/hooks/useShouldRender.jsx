import { useState, useEffect } from "react";
import { getContainePositionFromTop } from "../utils/positionUtils";

export default function useTrackPosition(idWrapper, idBg) {
  const [shouldRender, setshouldRender] = useState(false);

  useEffect(() => {
    const updateRenderStatus = () => {
      const containerPos =
        getContainePositionFromTop(idWrapper) -
        document.getElementById(idBg).offsetTop;

      if (containerPos <= window.scrollY) {
        setshouldRender(true);
      } else {
        setshouldRender(false);
      }
    };

    updateRenderStatus();

    window.addEventListener("scroll", updateRenderStatus);
    window.addEventListener("resize", updateRenderStatus);

    return () => {
      window.removeEventListener("scroll", updateRenderStatus);
      window.removeEventListener("resize", updateRenderStatus);
    };
  }, [idWrapper, idBg]);

  return shouldRender;
}
