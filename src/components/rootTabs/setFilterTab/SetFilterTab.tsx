import { useFilterData } from "./hooks";
import TabSegment from "./components/TabSegment";
// import SetCardType from "./components/cardTypes/SetCardType";
import SetPriceRanges from "./components/priceRanges/SetPriceRanges";
import BotRuntime from "./components/BotRuntime";
import { useState } from "react";
import FilterControlPanel from "./components/filterControlPanel/FilterControlPanel";
import FilterList from "./components/FilterList";
import { getFilterControlPanelProps } from "./utils";

const SetFilterTab = () => {
	const { filterData, setFilterData } = useFilterData();

	const [filters, setSearchFilters] = useState<string[]>([]);
	const [excludeFilters, setExcludeFilters] = useState<string[]>([]);

	const [excludePlayers, setExcludePlayers] =
		useState<string>("Current Filters");

	return (
		<div className="h-full w-full grid auto-cols-fr grid-flow-col gap-4">
			<TabSegment styling={"grid auto-rows-auto grid-row-col gap-1"}>
				<div className="grid auto-rows-auto grid-flow-row ">
					{/* <SetCardType setFilterData={setFilterData} /> */}
					<SetPriceRanges setFilterData={setFilterData} />
				</div>
				<div>
					<BotRuntime />
				</div>
			</TabSegment>
			<TabSegment styling="max-h-full overflow-y-auto">
				<FilterControlPanel
					{...getFilterControlPanelProps(
						excludePlayers,
						filterData,
						setSearchFilters,
						setExcludeFilters
					)}
				/>
				<div className="grid auto-cols-fr grid-flow-col max-w-full p-4 gap-4 place-content-center">
					<FilterList
						title="Current Filters"
						isActive={excludePlayers}
						exclude={setExcludePlayers}
						items={filters}
						stateSetter={setSearchFilters}
					/>

					<FilterList
						title="Players to Exclude"
						isActive={excludePlayers}
						exclude={setExcludePlayers}
						items={excludeFilters}
						stateSetter={setExcludeFilters}
					/>
				</div>
			</TabSegment>
		</div>
	);
};

export default SetFilterTab;
