import { useState, useEffect } from "react";

export const useContainerDimensions = (myRef: any) => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0, scrollWidth: 0, clientWidth: 0, offsetWidth: 0 })

  useEffect(() => {
    const getDimensions = () => ({
      width: myRef?.current?.offsetWidth,
      height: myRef?.current.offsetHeight,
      scrollWidth: myRef?.current.scrollWidth,
      clientWidth: myRef?.current.clientWidth,
      offsetWidth: myRef?.current.offsetWidth
    })

    const handleResize = () => {
      setDimensions(getDimensions())
    }

    if (myRef?.current) {
      setDimensions(getDimensions())
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [myRef])

  return dimensions;
};