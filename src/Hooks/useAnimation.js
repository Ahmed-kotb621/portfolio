import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export function useAnimation() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  const inView = useInView(ref, { threshold: 0.5 });

  useEffect(() => {
    setIsVisible(inView);
  }, [inView]);

  return { ref, isVisible };
}
