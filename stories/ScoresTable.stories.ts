import type { Meta, StoryObj } from '@storybook/react';

import { ScoresTable } from '../app/components/ScoresTable';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'ScoresTable',
  component: ScoresTable,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} satisfies Meta<typeof ScoresTable>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    scores: [
        {
            id:0,
            name: 'Juan Carlos Castillo',
            score: 20,
            earning: 5000,
        },
        {
            id:0,
            name: 'Silvia',
            score: 200,
            earning: -12000,
        }
    ]
  },
};