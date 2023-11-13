import { CardTypes } from "../../types";

export const CardDropdown = ({
	jsonData,
	columnName,
	defaultOptionLabel,
	updatePriceRange,
	setCardTypes,
}: {
	jsonData: any[];
	columnName: string;
	defaultOptionLabel: string;
	updatePriceRange: (
		setCardTypes: React.Dispatch<React.SetStateAction<CardTypes>>,
		key: string,
		value: any
	) => void;
	setCardTypes: React.Dispatch<React.SetStateAction<CardTypes>>;
}) => {
	const handleChange = (key: string, value: string) => {
		updatePriceRange(setCardTypes, key, value);
	};

	return (
		<select
			name=""
			id=""
			className="h-full w-full outline-none rounded-sm"
			defaultValue={defaultOptionLabel}
			onChange={(e) => {
				handleChange(defaultOptionLabel.toLowerCase(), e.target.value);
			}}
		>
			<option disabled value={defaultOptionLabel}>
				{defaultOptionLabel}
			</option>

			{jsonData.map((value, index) => (
				<option key={index} value={columnName ? value[columnName] : value}>
					{columnName ? value[columnName] : value}
				</option>
			))}
		</select>
	);
};
