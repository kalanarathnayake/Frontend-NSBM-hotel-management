import { Component } from "react";

class navbar extends Component {
  render() {
    return (
      <nav className="flex flex-col w-full px-6 py-4 bg-white shadow sm:flex-row sm:text-left sm:justify-between sm:items-baseline">
        <div className="mb-2 sm:mb-0">
          <a href="/" className="text-xl font-bold text-yellow-900 no-underline duration-300 hover:text-amber-700 hover:font-bold">Home</a>
        </div>
        <div>
          <a href="/jetwingBlue" className="m-2 text-black no-underline duration-300 hover:text-orange-800 hover:font-normal">Jetwing Blue</a>
          <span class="">| </span>
          <a href="/jetwingSea" className="m-2 text-black no-underline duration-300 hover:text-orange-800 hover:font-normal">Jetwing Sea</a>
          <span class="">| </span>
          <a href="/jetwingSeven" className="m-2 text-black no-underline duration-300 hover:text-orange-800 hover:font-normal">Jetwing Colombo Seven</a>
          <span class="">| </span>
          <a href="/cushome" className="m-2 text-black no-underline duration-300 hover:text-orange-800 hover:font-normal">customer home</a>
          <span class="">| </span>
        </div>
        <div className="grid grid-cols-2 gap-1">
          <div class="flex flex-col sm:flex-row sm:text-left sm:justify-between">
            <button class="shadow-lg duration-500 bg-pink-600 hover:bg-pink-300  font-medium rounded-lg px-5 py-2.5 mr-2 mb-2 ">
              <a className="text-white no-underline text-md from-neutral-50" href="/signUp">Sign Up</a>
            </button>
          </div>

          <div class="flex flex-col sm:flex-row sm:text-left sm:justify-between">
            <button class="shadow-lg duration-500 bg-pink-50 hover:bg-pink-200  font-medium rounded-lg px-5 py-2.5 mr-2 mb-2  ">
              <a className="text-black no-underline drop-shadow-sm text-md" href="/signIn">Sign In</a>
            </button>
          </div>
        </div>
      </nav>
    );
  }
}

export default navbar;