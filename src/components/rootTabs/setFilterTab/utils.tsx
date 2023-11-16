import { FilterData, setStateType } from "./types";

export const onItemRemove = (updateFunction: setStateType, value: string) => {
	updateFunction((prev) => prev.filter((item) => item !== value));
};

export const onItemAdd = (updateFunction: setStateType, value: string) => {
	updateFunction((prev) => Array.from(new Set([...prev, value])));
};

export const getFilterControlPanelProps = (
	excludePlayers: string,
	filterData: FilterData,
	setSearchFilters: setStateType,
	setExcludeFilters: setStateType
) => {
	const isCurrentFilters = excludePlayers === "Current Filters";
	return {
		value: filterData.cardTypes[
			isCurrentFilters ? "rarity" : "player"
		] as string,
		stateSetter: isCurrentFilters ? setSearchFilters : setExcludeFilters,
		buttonText: isCurrentFilters ? "Add to Search" : "Add to Exclude",
	};
};


