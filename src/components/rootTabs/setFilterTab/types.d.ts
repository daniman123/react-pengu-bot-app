export interface IPriceInputField {
	inputLabel: string;
	onChange: (key: string, value: any) => void;
	value: number | undefined;
}

export interface IPriceInputFieldRanges {
	children: React.ReactNode;
}

export interface ISetPriceRanges {
	setFilterData: React.Dispatch<React.SetStateAction<{}>>;
}
