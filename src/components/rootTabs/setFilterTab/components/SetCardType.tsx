import React from "react";
import gendersFilter from "../../../../../lib/data/genders.json";
import nationFilter from "../../../../../lib/data/nationality.json";
import positionFilter from "../../../../../lib/data/positions.json";
import leagueFilter from "../../../../../lib/data/leagues.json";

export const SearcBar = () => {
  return (
    <div className="flex items-center justify-center col-span-2 row-span-1">
      <input
        className="w-1/2 py-1 outline-none indent-3"
        type="text"
        placeholder="search card . . ."
      />
    </div>
  );
};

const CardDropdown = ({
  jsonData,
  columnName,
}: {
  jsonData: any[];
  columnName: string;
}) => {
  console.log(jsonData);
  return (
    <select name="" id="" className="h-full w-full outline-none rounded-sm">
      {jsonData.map((value, index) => (
        <option value={value[columnName]}>{value[columnName]}</option>
      ))}
    </select>
  );
};

export const CardDropdownRow = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="col-span-2 row-span-1 gap-1 grid auto-cols-fr grid-flow-col mb-1 ">
      {children}
    </div>
  );
};

const SetCardType = () => {
  return (
    <div className="w-full grid grid-cols-2 grid-rows-5 gap-1 p-1">
      <SearcBar />
      <CardDropdownRow>
        <CardDropdown jsonData={gendersFilter["gender"]} columnName="label" />
        <CardDropdown
          jsonData={nationFilter["nationality"]}
          columnName="label"
        />
      </CardDropdownRow>

      <CardDropdownRow>
        <CardDropdown
          jsonData={positionFilter["positions"]}
          columnName="shortLabel"
        />
        <CardDropdown jsonData={leagueFilter} columnName="label" />
      </CardDropdownRow>
    </div>
  );
};

export default SetCardType;
