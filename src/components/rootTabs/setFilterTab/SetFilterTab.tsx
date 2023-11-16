import {useFilterData} from "./hooks.ts"
import LeftSegment from "./components/LeftSegment";
import RightSegment from "./components/RightSegment";

const SetFilterTab = () => {
  const {filterData,setFilterData} = useFilterData()

  return (
    <div className="h-full w-full grid auto-cols-fr grid-flow-col gap-4">
      <LeftSegment setFilterData={setFilterData} />
      <RightSegment filterData={filterData} />
    </div>
  );
};

export default SetFilterTab;
