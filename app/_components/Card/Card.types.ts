import {ThemeTypes} from "@/types/theme";

export interface CardData {
  title: string;
  subtitle: string;
  buttonText: string;
}

export interface CardProps extends CardData{
  className?: string;
  theme?: ThemeTypes;
}
