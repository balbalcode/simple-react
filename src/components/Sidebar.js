import React from "react";
import CategoryCompnent from "./CategoryList";
import { categoriesServices } from "./../services/categories.service";

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
    };
  }
  async componentDidMount() {
    await this.defineCategory();
  }

  changeCategory(category){
    console.log(category)
  }

  async defineCategory() {
    let data = await categoriesServices.get();
    this.setState({
      categories: data.data,
    });
  }

  render() {
    const { categories } = this.state;
    const { changeCategory } = this.props
    return (
      <div class="m-4 fixed">
        <div class="text-white font-black">
          <i class="bx bx-cart-alt"></i> StoreCoeg.
        </div>

        <hr class="mt-2" />

        <div class="pt-12 text-white text-xs font-black">
          Explore <i class="bx bxs-cart-add"></i>
        </div>
        <ul class="list-none font-medium mx-4">
          {categories &&
            categories.map((data) => (
              <CategoryCompnent key={data.id} category={data} changeCategory={changeCategory} />
            ))}
        </ul>

        <div class="pt-12 text-white text-xs font-black">
          Your Order <i class="bx bx-cart-alt"></i>
        </div>
        <ul class="list-none font-medium mx-4">
          <li class="cursor-pointer mt-3">
            <span class="rounded p-1 text-red-800 text-sm bg-red-400 text-center">
              <i class="bx bx-cart-alt"></i>
            </span>
            <span class="text-white ml-2 text-sm">Carts </span>
          </li>
        </ul>

        <div class="fixed  bottom-10 text-white text-xs font-black">
          <p class="w-full">
            UserCoeg{" "}
            <span class="float-right">
              {" "}
              <i class="bx bx-user-circle "></i>
            </span>
          </p>
        </div>
      </div>
    );
  }
}

export default Sidebar;
