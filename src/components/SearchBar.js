import React from "react";

class SearchBar extends React.Component {
  render() {
    return (
      <div class="block">
        <div class="text-xl font-black text-gray-500">
          Find your product here
        </div>
        <div>
            <input type="text" class="px-2 py-1 border-2 border-gray-300
            rounded w-full font-light mt-2 focus:ring-4 focus:border-solid focus:border-purple-800 focus:ring-purple-300  " placeholder="Product name ..." />
        </div>
        
      </div>
    );
  }
}

export default SearchBar;
