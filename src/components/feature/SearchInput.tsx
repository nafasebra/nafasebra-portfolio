import React, { ChangeEvent, useState } from "react";

interface SearchInputProps {
  handleSearch: (value: string) => void;
}

function SearchInput(props: SearchInputProps) {
  const { handleSearch } = props;
  const [search, setSearch] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    handleSearch(event.target.value);
    setSearch(event.target.value);
  }

  return (
    <div className="w-full max-w-[656px] mx-auto">
      <div className="relative">
        <input
          type="text"
          id="search"
          name="search"
          className="border-none bg-dark-100 outline-none text-white rounded-full py-4 pr-6 pl-16 w-full"
          placeholder="عنوان پستی که میخوای رو سرچ کن..."
          onChange={handleChange}
          value={search}
        />
        <button
          type="submit"
          className="flex items-center justify-center absolute w-[60px] h-full top-1/2 left-0 -translate-y-1/2 text-white"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg>
        </button>
      </div>
    </div>
  );
}


export default SearchInput;
