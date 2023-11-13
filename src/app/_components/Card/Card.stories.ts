import { Card } from './Card'
import {Meta, StoryObj} from "@storybook/react";
import {cardMock} from "@/app/_components/Card/Card.mock";
import {ThemeTypes} from "@/types/theme";

const meta = {
  title: 'Component/Card', // Отображает, где компонент будет отображаться в иерархии stories (unique)
  component: Card, // Компонент (required)
  tags: ['autodocs'],
  parameters: { // Доп параметры для настройки поведение stories. Можно задавать для конкретных stories и глобально
    backgrounds: {
      values: [
        { name: 'red', value: '#f00' },
        { name: 'green', value: '#0f0' },
        { name: 'blue', value: '#00f' },
      ],
    },
  },
} satisfies Meta<typeof Card>

export default meta; // Экспортирует метаданные компонента для stories
type Story = StoryObj<typeof meta>;

// Current stories
export const Default: Story = {
  args: {
    ...cardMock,
    theme: ThemeTypes.DEFAULT
  }
}

// Current stories
export const Primary: Story = {
  args: {
    ...cardMock,
    theme: ThemeTypes.PRIMARY
  }
}

// Current stories
export const Dark: Story = {
  args: {
    ...cardMock,
    theme: ThemeTypes.DARK
  }
}
