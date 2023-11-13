export const updatePriceRange = (
	setPriceRanges: React.Dispatch<
		React.SetStateAction<{
			bidMin: number;
			bidMax: number;
			binMin: number;
			binMax: number;
		}>
	>,
	key: string,
	value: any
) => {
	setPriceRanges((prevRanges) => ({ ...prevRanges, [key]: value }));
};

export const clearPriceRanges = (
	priceFields: string[],
	setPriceRanges: React.Dispatch<
		React.SetStateAction<{
			bidMin: number;
			bidMax: number;
			binMin: number;
			binMax: number;
		}>
	>
) => {
	priceFields.forEach((key) => {
		updatePriceRange(setPriceRanges, key, 0);
	});
};
