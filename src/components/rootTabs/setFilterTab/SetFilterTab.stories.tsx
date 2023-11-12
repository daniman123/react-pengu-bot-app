import type { Meta, StoryObj } from "@storybook/react";

import SetFilterTab from "./SetFilterTab";
import { mockSetFilterTabProps } from "./SetFilterTab.mocks";

const meta = {
	title: "RootTabs/SetFilterTab",
	component: SetFilterTab,
} satisfies Meta<typeof SetFilterTab>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
	args: {
		...mockSetFilterTabProps.base,
	},
};
