import React from "react";
import SearchBar from "./SearchBar";
import MenuComponent from "./Menu";
import { menuServices } from "./../services/menu.services";

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: [],
    };
  }
  async componentDidMount() {
    await this.defineMenu();
  }

  async defineMenu() {
    let data = await menuServices.get();
    this.setState({
      menu: data.data,
    });
  }

  render() {
    const { menu } = this.state;
    return (
      <div class="block m-12">
        <h6 class="font-bold pt-5 text-gray-600 text-xl">
          Hello, <span class="text-purple-600">Ikbal Maulana</span>
        </h6>
        <div class="grid grid-cols-3 mt-5">
          <div class="col-span-2 h-auto text-gray-700">
            <div class=" text-gray-400 mt-5 bg-purple-100 p-10 rounded-xl ">
              <p class="text-3xl font-black">
                <span class="text-purple-600">Start your</span> <br />
                Order from zero here <br />
              </p>
              <p class="text-xs text-gray-600 font-bold mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
                <br />
              </p>
              <div class="mt-2">
                <button class="bg-purple-400 font-semibold rounded-full border-2 border-purple-400 pt-1 text-white text-xs pb-1 px-3 hover:bg-purple-500 transition-all duration-100 ">
                  <i class="bx bxs-cart "></i> Order Now
                </button>
                <button class="border-2 border-purple-400 font-semibold rounded-full pt-1 text-purple-400 mt-2 text-xs pb-1 px-3 hover:bg-purple-50 ml-1 transition-all duration-100 ">
                  <i class="bx bxs-cart "></i> Order Later
                </button>
              </div>
            </div>
          </div>
          <div class="">
            <img src="assets/img/header.png" class="h-auto w-auto rounded" />
          </div>
        </div>
        <div class="mt-2">
          <SearchBar />
        </div>

        <div class="mt-2">
          <div class="block mt-8">
            <div class="grid grid-cols-4 ">
              {menu &&
                menu.map((data) => <MenuComponent key={data.id} menu={data} />)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Content;
