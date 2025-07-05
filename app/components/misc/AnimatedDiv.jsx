"use client"

import { useSpring, animated } from "@react-spring/web";
import classNames from "classnames";

export default function AnimatedDiv({ children, className, duration }) {
  const springs = useSpring({
    config: {
      duration: (duration) ? (duration * 1000) : 3000
    },
    from: {
      opacity: 0
    },
    to: {
      opacity: 1
    }
  });

  return (
    <animated.div style={{
      ...springs
    }} className={className}>
      {children}
    </animated.div>
  );
}