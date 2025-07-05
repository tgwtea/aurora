import { useVisualViewport } from "@/lib/hooks";
import { calculateBreakpoint } from "@/lib/misc";
import { createContext } from "react";
import { useOrientation } from "react-use";
import useBreakpoint from "use-breakpoint";

const breakpoints = {
  width: {
    mobile: 0,
    tablet: 768,
    laptop: 1280,
    desktop: 1920 
  },
  height: {
    tiny: 350,
    small: 500,
    normal: 750
  }
};

export const BreakpointsContext = createContext();

export default function BreakpointsContextProvider({ children }) {
  const layout = useBreakpoint(breakpoints.width).breakpoint;
  const [vwidth, vheight] = useVisualViewport();
  const orientation = useOrientation();

  const vplayout = calculateBreakpoint(vheight, breakpoints.height);

  const booleans = {
    width: {
      mobile: (layout == "mobile"),
      tablet: (layout == "tablet"),
      laptop: (layout == "laptop"),
      desktop: (layout == "desktop")
    },
    height: {
      tiny: (vplayout == "tiny"),
      small: (vplayout == "small"),
      normal: (vplayout == "normal")
    },
    orientation: {
      landscape: orientation.type.startsWith("landscape"),
      portrait: orientation.type.startsWith("portrait")
    }
  };

  booleans.width = {
    ...booleans.width,
    small: booleans.width.mobile || booleans.width.tablet,
    big: booleans.width.laptop || booleans.width.desktop
  };

  const calculateStyles = (styles, layout, combos) => {
    if (styles[layout]) return styles[layout];
    else {
      const find = Object.entries(combos).find(([_, value]) => value);
      
      if (find && styles[find[0]]) return styles[find[0]];
      
      return styles.default ?? "";
    }
  };

  const calculateBPStyles = (styles) => calculateStyles(styles, layout, {
    small: booleans.width.small,
    big: booleans.width.big
  });

  const calculateVPStyles = (styles) => calculateStyles(styles, vplayout, {
    tiny: booleans.height.tiny,
    small: booleans.height.small,
    normal: booleans.height.normal,
  });

  const calculateORStyles = (styles) => calculateStyles(styles, orientation.type, {
    landscape: booleans.orientation.landscape,
    portrait: booleans.orientation.portrait
  });

  return (
    <BreakpointsContext.Provider value={{
      layout,
      booleans,
      calculateBPStyles,
      calculateVPStyles,
      calculateORStyles
    }}>
      {children}
    </BreakpointsContext.Provider>
  );
}