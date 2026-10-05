"use client";

import React, { forwardRef, useEffect, useId, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface AnimatedBeamProps {
  className?: string;
  containerRef: React.RefObject<HTMLElement | null>;
  fromRef: React.RefObject<HTMLElement | null>;
  toRef: React.RefObject<HTMLElement | null>;
  curvature?: number;
  reverse?: boolean;
  pathColor?: string;
  pathWidth?: number;
  pathOpacity?: number;
  gradientStartColor?: string;
  gradientStopColor?: string;
  delay?: number;
  duration?: number;
  startXOffset?: number;
  startYOffset?: number;
  endXOffset?: number;
  endYOffset?: number;
  dotted?: boolean;
  dotSpacing?: number;
}

export const AnimatedBeam: React.FC<AnimatedBeamProps> = ({
  className,
  containerRef,
  fromRef,
  toRef,
  curvature = 0,
  reverse = false,
  duration = 4,
  delay = 0,
  pathColor = "#c7cad5",
  pathWidth = 1.5,
  pathOpacity = 0.35,
  gradientStartColor = "#F4622A",
  gradientStopColor = "#4262ff",
  startXOffset = 0,
  startYOffset = 0,
  endXOffset = 0,
  endYOffset = 0,
  dotted = true,
  dotSpacing = 6,
}) => {
  const id = useId();
  const [pathD, setPathD] = useState("");
  const [svgDimensions, setSvgDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updatePath = () => {
      if (!containerRef.current || !fromRef.current || !toRef.current) return;

      const containerRect = containerRef.current.getBoundingClientRect();
      const fromRect = fromRef.current.getBoundingClientRect();
      const toRect = toRef.current.getBoundingClientRect();

      setSvgDimensions({
        width: containerRect.width,
        height: containerRect.height,
      });

      const startX = fromRect.left - containerRect.left + fromRect.width / 2 + startXOffset;
      const startY = fromRect.top - containerRect.top + fromRect.height / 2 + startYOffset;
      const endX = toRect.left - containerRect.left + toRect.width / 2 + endXOffset;
      const endY = toRect.top - containerRect.top + toRect.height / 2 + endYOffset;

      const controlX = startX + (endX - startX) / 2;
      const controlY = startY + (endY - startY) / 2 + curvature;

      const d = `M ${startX},${startY} Q ${controlX},${controlY} ${endX},${endY}`;
      setPathD(d);
    };

    updatePath();

    const resizeObserver = new ResizeObserver(updatePath);
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    window.addEventListener("resize", updatePath);
    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updatePath);
    };
  }, [containerRef, fromRef, toRef, curvature, startXOffset, startYOffset, endXOffset, endYOffset]);

  return (
    <svg
      fill="none"
      width={svgDimensions.width}
      height={svgDimensions.height}
      xmlns="http://www.w3.org/2000/svg"
      className={cn("pointer-events-none absolute left-0 top-0 transform-gpu stroke-2", className)}
      viewBox={`0 0 ${svgDimensions.width} ${svgDimensions.height}`}
    >
      {/* Background static / dotted path */}
      <path
        d={pathD}
        stroke={pathColor}
        strokeWidth={pathWidth}
        strokeOpacity={pathOpacity}
        strokeLinecap="round"
        strokeDasharray={dotted ? `${dotSpacing} ${dotSpacing}` : undefined}
      />

      {/* Animated glowing beam path */}
      <path
        d={pathD}
        strokeWidth={pathWidth * 1.6}
        stroke={`url(#${id})`}
        strokeOpacity="1"
        strokeLinecap="round"
      />

      <defs>
        <motion.linearGradient
          className="transform-gpu"
          id={id}
          gradientUnits="userSpaceOnUse"
          initial={{
            x1: "0%",
            x2: "0%",
            y1: "0%",
            y2: "0%",
          }}
          animate={
            reverse
              ? {
                  x1: ["100%", "-10%"],
                  x2: ["110%", "0%"],
                  y1: ["100%", "-10%"],
                  y2: ["110%", "0%"],
                }
              : {
                  x1: ["-10%", "100%"],
                  x2: ["0%", "110%"],
                  y1: ["-10%", "100%"],
                  y2: ["0%", "110%"],
                }
          }
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration,
            delay,
            ease: "easeInOut",
          }}
        >
          <stop stopColor={gradientStartColor} stopOpacity="0" />
          <stop stopColor={gradientStartColor} stopOpacity="1" offset="25%" />
          <stop stopColor={gradientStopColor} stopOpacity="1" offset="75%" />
          <stop stopColor={gradientStopColor} stopOpacity="0" offset="100%" />
        </motion.linearGradient>
      </defs>
    </svg>
  );
};

export const Circle = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "z-10 flex h-11 w-11 items-center justify-center rounded-xl bg-canvas border border-hairline p-2 shadow-subtle hover:scale-105 transition-transform",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);
Circle.displayName = "Circle";
