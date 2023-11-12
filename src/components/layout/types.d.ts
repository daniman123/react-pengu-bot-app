export interface INavBar {
	setActiveTab: Dispatch<SetStateAction<string>>;
	activeTab: string;
	tabContent: ItabContent;
}

export interface INavEle {
	setActiveTab: Dispatch<SetStateAction<string>>;
	tabName: string;
	active: boolean;
}

export interface ItabContent {
	[key: string]: string | React.ReactNode;
}
