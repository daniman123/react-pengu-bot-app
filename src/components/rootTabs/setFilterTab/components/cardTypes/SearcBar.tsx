interface ISearchFilter {
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  filteredData: { fullName: string; commonName: string }[];
  children: React.ReactNode;
}

export const SearcBar = ({
  setSearchTerm,
  filteredData,
  children,
}: ISearchFilter) => {
  return (
    <>
      <div className="flex items-center justify-center col-span-1 row-span-1">
        <input
          className="w-1/2 py-1 outline-none indent-3"
          type="text"
          placeholder="search card . . ."
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      {children}
      {/* <select
        name=""
        id=""
        className="col-span-1"
        disabled={filteredData.length ? false : true}
      >
        {filteredData.length ? (
          Object.values(filteredData).map((value) => (
            <option>{value["fullName"]}</option>
          ))
        ) : (
          <option value="">Player</option>
        )}
      </select> */}
    </>
  );
};
