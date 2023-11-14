import React, { useEffect, useState } from "react";
import gendersFilter from "../../../../../../lib/data/genders.json";
import nationFilter from "../../../../../../lib/data/nationality.json";
import positionFilter from "../../../../../../lib/data/positions.json";
import leagueFilter from "../../../../../../lib/data/leagues.json";
import rarityFilter from "../../../../../../lib/data/rarities.json";
import teamFilter from "../../../../../../lib/data/teams.json";
import playerNames from "../../../../../../lib/data/playerNames.json";
import { CardDropdownRow } from "./CardDropdownRow";
import { CardDropdown } from "./CardDropdown";
import { SearcBar } from "./SearcBar";
import { CardTypes, ISetPriceRanges } from "../../types";

const SetCardType = ({ setFilterData }: ISetPriceRanges) => {
  const [cardTypes, setCardTypes] = useState<CardTypes>({
    gender: null,
    position: null,
    rarity: null,
    team: null,
    nationality: null,
    league: null,
    player: null,
  });

  const updatePriceRange = (
    setCardTypes: React.Dispatch<React.SetStateAction<CardTypes>>,
    key: string,
    value: any
  ) => {
    setCardTypes((prevRanges) => ({ ...prevRanges, [key]: value }));
  };

  useEffect(() => {
    setFilterData((prevRanges) => ({ ...prevRanges, cardTypes }));
  }, [cardTypes, setFilterData]);

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(playerNames);

  useEffect(() => {
    // Filter the data based on the search term
    console.log(searchTerm);
    if (!searchTerm) {
      setFilteredData([]);

      return;
    }
    const result = playerNames.filter(
      (item) =>
        item.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.commonName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredData(result);
  }, [searchTerm]);

  return (
    <div className="w-full grid grid-cols-2 grid-rows-5 gap-1 p-1">
      <SearcBar setSearchTerm={setSearchTerm} filteredData={filteredData}>
        <CardDropdown
          jsonData={filteredData}
          columnName="fullName"
          defaultOptionLabel="Player"
          setCardTypes={setCardTypes}
          updatePriceRange={updatePriceRange}
        />
      </SearcBar>
      <CardDropdownRow>
        <CardDropdown
          jsonData={gendersFilter["gender"]}
          columnName="label"
          defaultOptionLabel="Gender"
          setCardTypes={setCardTypes}
          updatePriceRange={updatePriceRange}
        />
        <CardDropdown
          jsonData={nationFilter["nationality"]}
          columnName="label"
          defaultOptionLabel="Nationality"
          setCardTypes={setCardTypes}
          updatePriceRange={updatePriceRange}
        />
      </CardDropdownRow>

      <CardDropdownRow>
        <CardDropdown
          jsonData={positionFilter["positions"]}
          columnName="shortLabel"
          defaultOptionLabel="Position"
          setCardTypes={setCardTypes}
          updatePriceRange={updatePriceRange}
        />
        <CardDropdown
          jsonData={leagueFilter}
          columnName="label"
          defaultOptionLabel="League"
          setCardTypes={setCardTypes}
          updatePriceRange={updatePriceRange}
        />
      </CardDropdownRow>

      <CardDropdownRow>
        <CardDropdown
          jsonData={rarityFilter}
          columnName=""
          defaultOptionLabel="Rarity"
          setCardTypes={setCardTypes}
          updatePriceRange={updatePriceRange}
        />
        <CardDropdown
          jsonData={teamFilter}
          columnName="team"
          defaultOptionLabel="Team"
          setCardTypes={setCardTypes}
          updatePriceRange={updatePriceRange}
        />
      </CardDropdownRow>
    </div>
  );
};

export default SetCardType;
