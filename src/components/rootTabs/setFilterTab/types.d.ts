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

export interface FilterData {
	cardTypes: CardTypes;
	priceRange?: { min: number; max: number };
}

export interface ISetPriceRanges {
	setFilterData: React.Dispatch<React.SetStateAction<FilterData>>;
}

export interface Ifilters {
	[include: string]: string[];
	[exclude: string]: string[];
}

export type setStateType = React.Dispatch<React.SetStateAction<string[]>>;

export interface IFilterControlPanel {
	value: string;
	stateSetter: setStateType;
	buttonText: string;
}

export interface IFilterList {
	title: string;
	isActive: string;
	exclude: React.Dispatch<React.SetStateAction<string>>;
	items: string[];
	stateSetter: setStateType;
}

export interface IFilterListElement {
	value: string;
	setSearchFilters: setStateType;
	handleClick: (value: string) => void;
}

export type CardTypes = {
	gender: string | null;
	position: string | null;
	rarity: string | null;
	team: string | null;
	nationality: string | null;
	league: string | null;
	player: string | null;
};

export interface ITabSegment {
	children: React.ReactNode;
	styling: string;
}

export interface IRightSegment {
	filterData: FilterData;
}
