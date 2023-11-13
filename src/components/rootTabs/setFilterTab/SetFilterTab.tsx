import { useEffect, useState } from "react";
import BotRuntime from "./components/BotRuntime";
import SetCardType from "./components/cardTypes/SetCardType";
import SetPriceRanges from "./components/priceRanges/SetPriceRanges";

export const FilterListElement = ({
	value,
	setSearchFilters,
}: {
	value: string;
	setSearchFilters: React.Dispatch<React.SetStateAction<never[]>>;
}) => {
	return (
		<li
			className="cursor-pointer opacity-80 hover:opacity-100 border rounded-md p-5"
			onClick={(e) =>
				setSearchFilters(
					(prev) => (prev = prev.filter((item) => item !== e.target.innerHTML))
				)
			}
		>
			{value}
		</li>
	);
};

const SetFilterTab = () => {
	const [filterData, setFilterData] = useState({});
	const [filters, setSearchFilters] = useState([]);

	useEffect(() => {
		console.log(filterData);
	}, [filterData]);

	useEffect(() => {
		console.log(filters);
	}, [filters]);

	const handleAddFilter = () => {
		setSearchFilters((prev) => [
			...new Set([...prev, filterData["cardTypes"]["rarity"]]),
		]);
	};

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
				<div className="flex gap-3">
					<button onClick={handleAddFilter}>Add</button>
					<button>Exclude</button>
				</div>

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
