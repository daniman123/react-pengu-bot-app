export interface IPriceInputField {
	inputLabel: string;
	valueRef: Dispatch<SetStateAction<number | undefined>>;
	mainVal: number | undefined;
}

export interface IPriceInputFieldRanges {
	children: React.ReactNode;
}

export interface ISetPriceRanges {
	setFilterData: React.Dispatch<React.SetStateAction<{}>>;
}
