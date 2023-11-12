import {CardItemData} from "@/app/_components/Wrapper/Wrapper.types";
import {ThemeTypes} from "@/types/theme";

export const items: CardItemData[] = [
  {
    title: 'First card item',
    subtitle: 'subtitle for first',
    buttonText: 'one click',
    theme: ThemeTypes.DEFAULT,
  },
  {
    title: 'Second card item',
    subtitle: 'subtitle for second',
    buttonText: 'two click',
    theme: ThemeTypes.PRIMARY,
  },
  {
    title: 'Third card item',
    subtitle: 'subtitle for third',
    buttonText: 'three click',
    theme: ThemeTypes.DARK,
  }
]
