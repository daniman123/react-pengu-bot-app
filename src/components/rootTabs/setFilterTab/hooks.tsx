import { useState } from "react";
import { FilterData } from "./types";

export const useFilterData = () => {
	const [filterData, setFilterData] = useState<FilterData>({
		cardTypes: {
			rarity: "",
			gender: "",
			league: "",
			nationality: "",
			position: "",
			team: "",
			player: "",
		},
		priceRange: { max: 0, min: 0 },
	});

	return { filterData, setFilterData };
};

// export const useInitListeners = (ws: any) => {
// 	useEffect(() => {
// 		if (!ws) return;

// 		const element = document.getElementById("APjFqb");
// 		element?.addEventListener("change", (e) => {
// 			console.log("listening", e.target);
// 		});

// 		return () => {
// 			// element.removeEventListener("change", () => {});
// 		};
// 	}, [ws]);
// };
