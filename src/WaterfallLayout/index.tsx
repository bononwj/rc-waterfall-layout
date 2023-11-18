import { useDebounceFn } from "ahooks";
import React, { useEffect, useRef } from "react";

interface WaterfallLayoutProps<T> {
  list: T[];
  columnCount: number;
  gutter: number[];
  item: (item: T, index: number) => React.ReactNode;
}

class Waterfall {
  columnHeights: number[] = [];
  itemWidth: number = 0;
  private readonly gutter: number[];

  constructor({ containerWidth = 0, columnCount = 3, gutter = [0, 0] }) {
    if (containerWidth) {
      this.itemWidth =
        (containerWidth - (columnCount - 1) * gutter[0]) / columnCount;
    }
    this.gutter = gutter;
    this.columnHeights = Array(columnCount).fill(0);
  }

  maxHeight() {
    return Math.max(...this.columnHeights);
  }

  clear() {
    this.columnHeights = Array(this.columnHeights.length).fill(0);
  }

  add(item: { width?: number; height?: number }) {
    const minHeight = Math.min(...this.columnHeights);
    const minHeightIndex = this.columnHeights.indexOf(minHeight);
    const left = minHeightIndex * (this.itemWidth + this.gutter[0]);
    const top = minHeight;
    const ratio = item.width && item.height ? item.width / item.height : 1;
    const itemHeight = this.itemWidth / ratio;
    this.columnHeights[minHeightIndex] = top + this.gutter[1] + itemHeight;
    return {
      left,
      top,
      width: this.itemWidth,
      height: itemHeight,
    };
  }
}

const useWindowResize = (callback: () => void) => {
  const { run } = useDebounceFn(callback, {
    wait: 500,
  });
  useEffect(() => {
    window.addEventListener("resize", run);
    return () => {
      window.removeEventListener("resize", run);
    };
  }, [callback, run]);
};

function WaterfallLayout<T>(props: WaterfallLayoutProps<T>) {
  const containerRef = useRef<HTMLDivElement>({} as HTMLDivElement);
  const [waterfall, setWaterfall] = React.useState<Waterfall | null>(null);
  function initialize() {
    const containerEl = containerRef.current;
    if (containerEl) {
      const _waterfall = new Waterfall({
        containerWidth: containerEl?.clientWidth,
        columnCount: props.columnCount || 3,
        gutter: props.gutter || [8, 8],
      });
      setWaterfall(_waterfall);
    }
  }
  function render(waterfall: Waterfall) {
    const containerEl = containerRef.current;
    if (containerEl && waterfall) {
      waterfall.clear();
      (props.list || []).forEach((item, index) => {
        const { left, top, width, height } = waterfall.add(
          item as { width?: number; height?: number },
        );
        const el = containerEl?.children[index] as HTMLDivElement;
        el.style.left = left + "px";
        el.style.top = top + "px";
        el.style.width = width + "px";
        el.style.height = height + "px";
      });
      containerEl.style.height = waterfall.maxHeight() + "px";
    }
  }

  useEffect(() => {
    initialize();
  }, [containerRef, props.list.length]);

  useEffect(() => {
    waterfall && render(waterfall);
  }, [props.list, waterfall]);

  useWindowResize(initialize);
  return (
    <div
      ref={containerRef}
      style={{
        position: "relative",
      }}
    >
      {props.list.map((item, index) => {
        return (
          <div
            key={index}
            style={{
              position: "absolute",
              display: "inline-block",
              boxSizing: "border-box",
              transition: "all 0.1s ease-in-out",
            }}
          >
            {props.item(item, index)}
          </div>
        );
      })}
    </div>
  );
}

export default WaterfallLayout;
