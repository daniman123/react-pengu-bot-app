import type { Meta, StoryObj } from "@storybook/react";

import SecondaryLayout from "./SecondaryLayout";
import { mockSecondaryLayoutProps } from "./SecondaryLayout.mocks";

const meta = {
	title: "Layout/SecondaryLayout",
	component: SecondaryLayout,
} satisfies Meta<typeof SecondaryLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
	args: {
		...mockSecondaryLayoutProps.base,
	},
};
