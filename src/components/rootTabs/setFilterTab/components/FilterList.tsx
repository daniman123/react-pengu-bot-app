import { IFilterList } from "../types";
import FilterListTitle from "./FilterListTitle";
import RenderFilterListElements from "./RenderFilterListElements";

const FilterList = ({
	title,
	isActive,
	exclude,
	items,
	stateSetter,
}: IFilterList) => {
	return (
		<ul className="block relative max-w-[100%] max-h-full col-span-1">
			<FilterListTitle title={title} isActive={isActive} exclude={exclude} />
			<RenderFilterListElements items={items} stateSetter={stateSetter} />
		</ul>
	);
};

export default FilterList;
