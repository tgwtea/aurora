import { useLayoutEffect, useState } from "react";
//import { useDebounce } from "use-debounce";

export function useVisualViewport() {
  const [viewport, setViewport] = useState([]);
  //const [state] = useDebounce(viewport, 250);
  
  useLayoutEffect(() => {
    function updateDimensions() {
      setViewport([window.visualViewport.width, window.visualViewport.height]);
    }

    window.visualViewport.addEventListener("resize", updateDimensions);
    updateDimensions();

    return () => window.visualViewport.removeEventListener("resize", updateDimensions);
  }, []);

  //return state;
  return viewport;
}