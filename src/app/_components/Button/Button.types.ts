import {ReactNode} from "react";
import {ThemeTypes} from "@/types/theme";

export interface ButtonProps {
  className?: string;
  children?: ReactNode;
  theme?: ThemeTypes;
}
