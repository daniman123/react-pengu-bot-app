import type { Meta, StoryObj } from "@storybook/react";
import PrimaryLayout from "./PrimaryLayout";

const meta = {
	title: "Layout/Page",
	component: PrimaryLayout,
	parameters: {
		layout: "fullscreen",
	},
} satisfies Meta<typeof PrimaryLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
