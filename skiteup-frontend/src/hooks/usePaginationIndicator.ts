import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

type IndicatorStyle = {
  left: number;
  top: number;
  width: number;
  height: number;
  opacity: number;
};

const usePaginationIndicator = (
  currentPage: number,
  paginationRange: (number | string)[],
  size: string
) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const buttonRefs = useRef<{
    [key: number]: HTMLButtonElement | null;
  }>({});

  const [indicatorStyle, setIndicatorStyle] =
    useState<IndicatorStyle>({
      left: 0,
      top: 0,
      width: 0,
      height: 0,
      opacity: 0,
    });

  const updateIndicator = useCallback(() => {
    const activeButton =
      buttonRefs.current[currentPage];

    if (activeButton && containerRef.current) {
      setIndicatorStyle({
        left: activeButton.offsetLeft,
        top: activeButton.offsetTop,
        width: activeButton.offsetWidth,
        height: activeButton.offsetHeight,
        opacity: 1,
      });
    } else {
      setIndicatorStyle((prev) => ({
        ...prev,
        opacity: 0,
      }));
    }
  }, [currentPage]);

  useLayoutEffect(() => {
    updateIndicator();
  }, [updateIndicator, paginationRange, size]);

  useEffect(() => {
    const handleResize = () => {
      updateIndicator();
    };

    window.addEventListener("resize", handleResize);

    const container = containerRef.current;

    let observer: ResizeObserver | null = null;

    if (
      container &&
      typeof ResizeObserver !== "undefined"
    ) {
      observer = new ResizeObserver(() => {
        updateIndicator();
      });

      observer.observe(container);
    }

    return () => {
      window.removeEventListener(
        "resize",
        handleResize
      );

      observer?.disconnect();
    };
  }, [currentPage, paginationRange, updateIndicator]);

  return {
    containerRef,
    buttonRefs,
    indicatorStyle,
  };
};

export default usePaginationIndicator;