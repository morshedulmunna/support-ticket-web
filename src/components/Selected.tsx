import { useState } from "react";

type Props = {};

export default function Selected({}: Props) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const [searchResults, setSearchResults] = useState([" Love", "COde"]);
  const [selectedItem, setSelectedItem] = useState("");

  const handleInputChange = (e: any) => {
    const value = e.target.value;
    // Call API with the input value and update searchResults
  };

  const handleItemClick = (item: string) => {
    setSelectedItem(item);
  };

  let error = "";
  if (searchResults.length === 0) {
    error = "No result found!";
  }

  return (
    <div className="relative w-full ">
      <label htmlFor="category" className="font-[400]">
        Assign to
      </label>
      <input
        value={selectedItem}
        onChange={handleInputChange}
        onFocus={() => {
          setIsOpen(true);
          // Call API when input is focused
        }}
        type="text"
        id="category"
        className="border w-full py-2 mt-1 rounded px-1 outline-none text-sm"
        placeholder="Select your assistant"
      />
      {isOpen && (
        <div className="absolute w-full z-10">
          <div className="bg-white border w-full px-2 pt-1 rounded">
            {searchResults.map((item, index) => (
              <li
                key={index}
                onClick={() => handleItemClick(item)}
                className="py-1 list-none"
              >
                {item}
              </li>
            ))}

            <li className="py-1 list-none text-sm text-red-500">{error}</li>
          </div>
        </div>
      )}
    </div>
  );
}
