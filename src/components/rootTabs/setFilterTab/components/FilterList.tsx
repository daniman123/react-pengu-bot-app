import React from "react";
import { FilterListElement } from "./FilterListElement";
// import FilterListElement from "./FilterListElement";

const FilterList = ({ title, items, onItemRemove, isActive, exclude }: any) => {
	return (
		<ul className="block relative max-w-[100%] max-h-full col-span-1">
			<h4
				className={`${
					title === isActive ? "bg-green-500" : ""
				} cursor-pointer flex items-center justify-center mb-4`}
				onClick={() => exclude(title)}
			>
				{title}
			</h4>
			{items.map((value: any) => (
				<FilterListElement
					key={value}
					value={value}
					handleClick={() => onItemRemove(value)}
				/>
			))}
		</ul>
	);
};

export default FilterList;
