import React from "react";

export default function CategoryList({
  category,
  changeCategory,
  selectedCategory,
}) {
  return (
    <li class="cursor-pointer mt-3" onClick={() => changeCategory(category)}>
      <span
        class={`rounded p-1 text-${category.color}-800 text-sm bg-${category.color}-400 text-center`}
      >
        <i class={category.icon}></i>
      </span>
      <span class="text-white font-black ml-2 text-sm">{category.name}</span>
      {selectedCategory === category.id && (
        <i class="bx bx-radio-circle text-white "></i>
      )}
    </li>
  );
}
