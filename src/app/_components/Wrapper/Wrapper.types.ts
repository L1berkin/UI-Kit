import {CardData} from "@/app/_components/Card/Card.types";
import {ThemeTypes} from "@/types/theme";

export interface CardItemData extends CardData {
  theme?: ThemeTypes;
}

export interface WrapperProps {
  className?: string;
  items?: CardItemData[];
}
