import { useEffect, useState } from "react";
import {
	IPriceInputField,
	IPriceInputFieldRanges,
	ISetPriceRanges,
} from "../types";

export const PriceInputField = ({
	inputLabel,
	valueRef,
	mainVal,
}: IPriceInputField) => {
	const [value, setValue] = useState(0);

	useEffect(() => {
		valueRef(value);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [value]);

	return (
		<div className="relative flex justify-center">
			<button
				className="w-[15%] text-xl bg-slate-500 font-bold px-3 rounded-l"
				onClick={() => setValue((prev) => prev - 1)}
			>
				-
			</button>
			<label className="absolute top-0 left-24 text-xs font-semibold opacity-90">
				{inputLabel}
			</label>
			<input
				className="w-[60%] pt-1 indent-3 outline-none font-semibold text-lg"
				type="number"
				value={mainVal}
				onChange={(e) => setValue(Number(e.target.value))}
			/>
			<button
				className="w-[15%] text-xl bg-slate-500 font-bold px-3 rounded-r"
				onClick={() => setValue((prev) => prev + 1)}
			>
				+
			</button>
		</div>
	);
};
export const PriceInputFieldRanges = ({ children }: IPriceInputFieldRanges) => {
	return (
		<div
			id="bin-price"
			className="relative w-full grid auto-cols-fr grid-flow-col"
		>
			{children}
		</div>
	);
};

const SetPriceRanges = ({ setFilterData }: ISetPriceRanges) => {
	const [bidMin, setBidMin] = useState<number | undefined>(undefined);
	const [bidMax, setBidMax] = useState<number | undefined>(undefined);
	const [binMin, setBinMin] = useState<number | undefined>(undefined);
	const [binMax, setBinMax] = useState<number | undefined>(undefined);

	useEffect(() => {
		if (
			bidMin !== undefined &&
			bidMax !== undefined &&
			bidMin !== 0 &&
			bidMin >= bidMax
		) {
			setBidMax(bidMin + 50);
		}

		if (
			binMin !== undefined &&
			binMax !== undefined &&
			binMin !== 0 &&
			binMin >= binMax
		) {
			setBinMax(binMin + 50);
		}

		const minMaxDifference = 50;
		if (
			bidMin !== undefined &&
			bidMax !== undefined &&
			bidMin !== 0 &&
			bidMax < bidMin + minMaxDifference
		) {
			setBidMax(bidMin + minMaxDifference);
		}

		if (
			binMin !== undefined &&
			binMax !== undefined &&
			binMin !== 0 &&
			binMax < binMin + minMaxDifference
		) {
			setBinMax(binMin + minMaxDifference);
		}

		const filterData = {
			minBidPrice: bidMin,
			maxBidPrice: bidMax,
			minBinPrice: binMin,
			maxBinPrice: binMax,
		};

		setFilterData(filterData);
	}, [bidMin, bidMax, binMin, binMax, setFilterData]);

	return (
		<div className="w-full grid auto-rows-fr grid-flow-row gap-1 p-1">
			<div className="flex justify-between">
				<h4 className="flex items-center indent-5 text-lg font-semibold">
					Bid Price
				</h4>
				<button
					className="font-semibold mr-5"
					onClick={() => {
						setBidMin(0);
						setBidMax(0);
					}}
				>
					Clear
				</button>
			</div>
			<PriceInputFieldRanges>
				<PriceInputField
					inputLabel="Min"
					valueRef={setBidMin}
					mainVal={bidMin}
				/>
				<PriceInputField
					inputLabel="Max"
					valueRef={setBidMax}
					mainVal={bidMax}
				/>
			</PriceInputFieldRanges>
			<div className="flex justify-between">
				<h4 className="flex items-center indent-5 text-lg font-semibold">
					Bin Price
				</h4>
				<button
					className="font-semibold mr-5"
					onClick={() => {
						setBinMin(0);
						setBinMax(0);
					}}
				>
					Clear
				</button>
			</div>
			<PriceInputFieldRanges>
				<PriceInputField
					inputLabel="Min"
					valueRef={setBinMin}
					mainVal={binMin}
				/>
				<PriceInputField
					inputLabel="Max"
					valueRef={setBinMax}
					mainVal={binMax}
				/>
			</PriceInputFieldRanges>
			<button
				className="flex items-center justify-end font-semibold mr-5"
				onClick={() => {
					setBinMin(0);
					setBinMax(0);
					setBidMin(0);
					setBidMax(0);
				}}
			>
				Clear All
			</button>
		</div>
	);
};

export default SetPriceRanges;
