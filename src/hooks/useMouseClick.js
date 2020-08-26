import { useEffect, useRef } from "react";

export default function useMouseClick(innerCallback, outerCallback) {
  const innerRef = useRef(null);
  const innerCallbackRef = useRef(null);
  const outerCallbackRef = useRef(null);

  useEffect(() => {
    innerCallbackRef.current = innerCallback;
    outerCallbackRef.current = outerCallback;
  });

  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };

    function handleClick(event) {
      //mouse click within component
      if (innerRef.current &&
          innerRef.current.contains(event.target)) {
        innerCallbackRef.current(event);
      }
      //mouse click outside of component
      if (innerRef.current && !innerRef.current.contains(event.target)) {
        outerCallbackRef.current(event);
      }
    };
  }, []);

  return { innerRef };
}
