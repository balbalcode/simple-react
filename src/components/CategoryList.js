import React from "react";



const CategoryList = ({ category, changeCategory }) => {
  console.log(category)
  return (
    <li class="cursor-pointer mt-3" >
      <span
        class={`rounded p-1 text-${category.color}-800 text-sm bg-${category.color}-400 text-center`}
      >
        <i class={category.icon}></i>
      </span>
      <span class="text-white font-black ml-2 text-sm">{category.name}</span>
    </li>
  );
};

export default CategoryList;
