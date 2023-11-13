import { useEffect, useState } from "react";
import BotRuntime from "./components/BotRuntime";
import SetCardType from "./components/cardTypes/SetCardType";
import SetPriceRanges from "./components/priceRanges/SetPriceRanges";
import { FilterListElement } from "./components/FilterListElement";
import FilterControlPanel from "./components/filterControlPanel/FilterControlPanel";
import { FilterData } from "./types";

const SetFilterTab = () => {
	const [filterData, setFilterData] = useState<FilterData>({
		cardTypes: {
			rarity: "",
			gender: "",
			league: "",
			nationality: "",
			position: "",
			team: "",
		},
		priceRange: { max: 0, min: 0 },
	});
	const [filters, setSearchFilters] = useState<string[]>([]);

	useEffect(() => {
		console.log(filterData);
	}, [filterData]);

	useEffect(() => {
		console.log(filters);
	}, [filters]);

	return (
		<div className="h-full w-full grid auto-cols-fr grid-flow-col gap-4">
			<div className="grid auto-rows-auto grid-row-col gap-1 rounded bg-blue-700">
				<div className="grid auto-rows-auto grid-flow-row ">
					<SetCardType setFilterData={setFilterData} />
					<SetPriceRanges setFilterData={setFilterData} />
				</div>
				<div className="">
					<BotRuntime />
				</div>
			</div>
			<div className="bg-white max-h-full overflow-y-auto ">
				<FilterControlPanel
					setSearchFilters={setSearchFilters}
					filterData={filterData}
				/>

				<div className="max-w-full p-4">
					<h4>Current Filters</h4>
					<div className="grid auto-rows-auto grid-flow-col gap-4">
						<ul className="block relative max-w-[50%] max-h-full col-span-1">
							{filters.map((value) => (
								<FilterListElement
									value={value}
									setSearchFilters={setSearchFilters}
								/>
							))}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SetFilterTab;
