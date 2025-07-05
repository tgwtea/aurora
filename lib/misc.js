import Bold from "@/app/components/text/Bold";
import Colored from "@/app/components/text/Colored";
import External from "@/app/components/text/External";
import Text from "@/app/components/text/Text";
import Underline from "@/app/components/text/Underline";

export function calculateBreakpoint(measure, breakpoints) {
  const points = Object.entries(breakpoints).sort(([_, pa], [__, pb]) => pa - pb);

  const layout = points.find(([_, point], i) => {
    const greater = measure >= point;
    const next = points[i + 1];

    if (next) return greater && measure < next[1];

    return greater;
  });

  return (layout) ? layout[0] : points[0];
}

export const markdown_options = {
  overrides: {
    Text,
    Underline,
    Colored,
    Bold,
    External
  }
};