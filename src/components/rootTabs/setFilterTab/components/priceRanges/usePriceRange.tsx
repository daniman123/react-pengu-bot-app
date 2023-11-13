import { useEffect } from "react";

const MIN_MAX_DIFFERENCE = 50;

export const usePriceRange = (
	min: number,
	max: number,
	setPriceRanges: React.Dispatch<
		React.SetStateAction<{
			bidMin: number;
			bidMax: number;
			binMin: number;
			binMax: number;
		}>
	>,
	name: string
) => {
	useEffect(() => {
		if (min !== undefined && max !== undefined) {
			if (min !== 0 && max !== 0 && min >= max) {
				max = min + MIN_MAX_DIFFERENCE;
			} else if (max < min + MIN_MAX_DIFFERENCE && max >= MIN_MAX_DIFFERENCE) {
				max = min + MIN_MAX_DIFFERENCE;
			}
			setPriceRanges((prevRanges) => ({ ...prevRanges, [name]: max }));
		}
	}, [min, max]);
};
