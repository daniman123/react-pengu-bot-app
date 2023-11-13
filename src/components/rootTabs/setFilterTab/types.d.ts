export interface IPriceRangeSection {
	min: number;
	max: number;
	setMin: (value: number) => void;
	setMax: (value: number) => void;
}

export interface IPriceInputField {
	inputLabel: string;
	onChange: (value: number) => void;
	value: number;
}

export interface IPriceInputFieldRanges {
	children: React.ReactNode;
}

export interface ISetPriceRanges {
	setFilterData: React.Dispatch<React.SetStateAction<FilterData>>;
}

export interface IFilterControlPanel {
	setSearchFilters: React.Dispatch<React.SetStateAction<string[]>>;
	filterData: FilterData;
}

export interface IFilterListElement {
	value: string;
	setSearchFilters: React.Dispatch<React.SetStateAction<string[]>>;
}

export interface FilterData {
	cardTypes: CardTypes;
	priceRange?: { min: number; max: number };
}

export type CardTypes = {
	gender: string | null;
	position: string | null;
	rarity: string | null;
	team: string | null;
	nationality: string | null;
	league: string | null;
};
