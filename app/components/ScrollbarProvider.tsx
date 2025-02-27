"use client";
import { useScrollbarVisibility } from "@/hooks/useScrollbarVisibility";

const ScrollbarProvider = ({ children }: { children: React.ReactNode }) => {
  useScrollbarVisibility("body");
  return <>{children}</>;
};

export default ScrollbarProvider;
