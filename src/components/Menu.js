import React from "react";
import utility from "./../plugins/utility";

function formatRupiah(number){
  return utility.convertToRupiah(number)
}

const Menu = ({ menu }) => {
  return (
    <div class="overflow-hidden p-2">
      <img src={`assets/img/${menu.category.name.toLowerCase()}/${menu.picture}`} class="rounded" alt="" />
      <div class="float-left">
        <p class="font-semibold mt-2 text-gray-500 text-sm">{menu.name}</p>
        <p class="font-semibold text-gray-800">Rp. {formatRupiah(menu.price)}</p>
      </div>
      <div class="float-right mt-3">
        <button
          class="font-bold text-xs text-purple-600 transition-all duration-100
              border border-purple-600 px-2 py-1 rounded hover:bg-purple-100"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Menu;
