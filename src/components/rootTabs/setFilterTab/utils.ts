import { FilterData } from "./types";

export const handleAddFilter = (
	setSearchFilters: React.Dispatch<React.SetStateAction<string[]>>,
	filterData: FilterData
) => {
	const rarity = filterData.cardTypes.rarity;
	if (rarity) {
		// Checks if rarity is not null or undefined
		setSearchFilters((prev) => Array.from(new Set([...prev, rarity])));
	}
};
