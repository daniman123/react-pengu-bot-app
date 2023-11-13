import { IPriceInputField } from "../../types";

export const PriceInputField = ({
	inputLabel,
	onChange,
	value,
}: IPriceInputField) => {
	return (
		<div className="relative flex justify-center">
			<button
				className="w-[15%] text-xl bg-slate-500 font-bold px-3 rounded-l"
				onClick={() => onChange(value - 1)}
			>
				-
			</button>
			<label className="absolute top-0 left-24 text-xs font-semibold opacity-90">
				{inputLabel}
			</label>
			<input
				className="w-[60%] pt-1 indent-3 outline-none font-semibold text-lg"
				type="number"
				value={value}
				onChange={(e) => onChange(Number(e.target.value))}
			/>
			<button
				className="w-[15%] text-xl bg-slate-500 font-bold px-3 rounded-r"
				onClick={() => onChange(value + 1)}
			>
				+
			</button>
		</div>
	);
};
