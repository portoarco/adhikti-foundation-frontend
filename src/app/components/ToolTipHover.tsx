import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import React from "react";

interface IToolTipHoverProps {
  children: React.ReactNode;
  label: React.ReactNode;
}

export default function ToolTipHover({ children, label }: IToolTipHoverProps) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>{children}</TooltipTrigger>
      <TooltipContent>{label}</TooltipContent>
    </Tooltip>
  );
}
