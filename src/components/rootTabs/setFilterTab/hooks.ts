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

    return {filterData, setFilterData}
}