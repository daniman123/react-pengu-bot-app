import { useState } from "react";
import { IRightSegment } from "../types";
import FilterControlPanel from "./filterControlPanel/FilterControlPanel";
import FilterList from "./FilterList";

const RightSegment = ({ filterData }: IRightSegment) => {
	const [filters, setSearchFilters] = useState<string[]>([]);
	const [excludeFilters, setExcludeFilters] = useState<string[]>([]);

	const [excludePlayers, setExcludePlayers] =
		useState<string>("Current Filters");

	const handleAddClick = () => {
		const rarity = filterData.cardTypes.rarity;
		if (rarity) {
			const updateFunction =
				excludePlayers === "Current Filters"
					? setSearchFilters
					: setExcludeFilters;
			updateFunction((prev) => Array.from(new Set([...prev, rarity])));
		}
	};

	const onItemRemove = (value: string) => {
		setSearchFilters((prev) => prev.filter((item) => item !== value));
	};

	const onItemRemove2 = (value: string) => {
		setExcludeFilters((prev) => prev.filter((item) => item !== value));
	};

	return (
		<div className="rounded bg-blue-700 max-h-full overflow-y-auto ">
			<FilterControlPanel
				onAddClick={handleAddClick}
				buttonText={
					excludePlayers === "Current Filters"
						? "Add to Search"
						: "Add to Exclude"
				}
			/>
			<div className="max-w-full p-4">
				<div className="grid auto-cols-fr grid-flow-col gap-4 place-content-center">
					<FilterList
						title="Current Filters"
						items={filters}
						onItemRemove={onItemRemove}
						isActive={excludePlayers}
						exclude={setExcludePlayers}
					/>
					<FilterList
						title="Players to Exclude"
						items={excludeFilters}
						onItemRemove={onItemRemove2}
						isActive={excludePlayers}
						exclude={setExcludePlayers}
					/>
				</div>
			</div>
		</div>
	);
};

export default RightSegment;
