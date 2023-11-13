import { Wrapper } from './Wrapper'
import {Meta, StoryObj} from "@storybook/react";
import {items} from "@/app/_components/Wrapper/Wrapper.mock";

const meta = {
  title: 'Component/Wrapper', // Отображает, где компонент будет отображаться в иерархии stories (unique)
  component: Wrapper, // Компонент (required)
  tags: ['autodocs'],
} satisfies Meta<typeof Wrapper>

export default meta; // Экспортирует метаданные компонента для stories
type Story = StoryObj<typeof meta>;

// Current stories
export const Default: Story = {
  args: {
    items: items,
  }
}
