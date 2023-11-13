import { useEffect, useState } from "react";
import { ISetPriceRanges } from "../../types";
import { PriceInputFieldRanges } from "./PriceInputFieldRanges";
import { PriceInputField } from "./PriceInputField";
import { usePriceRange } from "./usePriceRange";
import { clearPriceRanges, updatePriceRange } from "./utils";

const SetPriceRanges = ({ setFilterData }: ISetPriceRanges) => {
	const [priceRanges, setPriceRanges] = useState({
		bidMin: 0,
		bidMax: 0,
		binMin: 0,
		binMax: 0,
	});

	usePriceRange(
		priceRanges.bidMin,
		priceRanges.bidMax,
		setPriceRanges,
		"bidMax"
	);
	usePriceRange(
		priceRanges.binMin,
		priceRanges.binMax,
		setPriceRanges,
		"binMax"
	);

	useEffect(() => {
		setFilterData((prevRanges) => ({ ...prevRanges, priceRanges }));
	}, [priceRanges, setFilterData]);

	return (
		<div className="w-full grid auto-rows-fr grid-flow-row gap-1 p-1">
			<div className="flex justify-between">
				<h4 className="flex items-center indent-5 text-lg font-semibold">
					Bid Price
				</h4>
				<button
					className="font-semibold mr-5"
					onClick={() => clearPriceRanges(["bidMin", "bidMax"], setPriceRanges)}
				>
					Clear
				</button>
			</div>
			<PriceInputFieldRanges>
				<PriceInputField
					inputLabel="Min"
					onChange={(value) =>
						updatePriceRange(setPriceRanges, "bidMin", value)
					}
					value={priceRanges.bidMin}
				/>
				<PriceInputField
					inputLabel="Max"
					onChange={(value) =>
						updatePriceRange(setPriceRanges, "bidMax", value)
					}
					value={priceRanges.bidMax}
				/>
			</PriceInputFieldRanges>

			<div className="flex justify-between">
				<h4 className="flex items-center indent-5 text-lg font-semibold">
					Bin Price
				</h4>
				<button
					className="font-semibold mr-5"
					onClick={() => clearPriceRanges(["binMin", "binMax"], setPriceRanges)}
				>
					Clear
				</button>
			</div>
			<PriceInputFieldRanges>
				<PriceInputField
					inputLabel="Min"
					onChange={(value) =>
						updatePriceRange(setPriceRanges, "binMin", value)
					}
					value={priceRanges.binMin}
				/>
				<PriceInputField
					inputLabel="Max"
					onChange={(value) =>
						updatePriceRange(setPriceRanges, "binMax", value)
					}
					value={priceRanges.binMax}
				/>
			</PriceInputFieldRanges>

			<button
				className="flex items-center justify-end font-semibold mr-5"
				onClick={() =>
					clearPriceRanges(
						["bidMin", "bidMax", "binMin", "binMax"],
						setPriceRanges
					)
				}
			>
				Clear All
			</button>
		</div>
	);
};

export default SetPriceRanges;
