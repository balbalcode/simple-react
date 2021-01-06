import React, { Component } from "react";
import { Cart, Sidebar, Content } from "./../components";
export default class Home extends Component {
  render() {
    return (
      <div class="grid grid-cols-12 h-screen ">
        <div class="col-span-2 bg-purple-600">
          <Sidebar />
        </div>
        <div class="col-span-9 bg-gray-50">
          <Content />
        </div>
        <div class="col-span-1 bg-gray-50">
          <Cart />
        </div>
      </div>
    );
  }
}
