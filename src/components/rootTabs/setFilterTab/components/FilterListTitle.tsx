const FilterListTitle = ({
	title,
	isActive,
	exclude,
}: {
	title: string;
	isActive: string;
	exclude: React.Dispatch<React.SetStateAction<string>>;
}) => {
	return (
		<h4
			className={`${
				title === isActive ? "bg-green-500" : ""
			} cursor-pointer flex items-center justify-center mb-4`}
			onClick={() => exclude(title)}
		>
			{title}
		</h4>
	);
};

export default FilterListTitle;
