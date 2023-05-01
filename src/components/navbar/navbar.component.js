import { Component } from "react";

class navbar extends Component {
  render() {
    return (
      <nav className="flex flex-col w-full px-6 py-4 bg-white shadow sm:flex-row sm:text-left sm:justify-between sm:items-baseline">
        <div className="mb-2 sm:mb-0">
          <a href="/" className="text-xl text-orange-600 no-underline duration-300 hover:text-orange-dark hover:font-bold">Home</a>
        </div>

        <div>
          {/* <a href="/createEvent" className="m-2 text-black no-underline duration-300 hover:text-orange-800 hover:font-normal">Create Event</a>
          <a href="/event" className="m-2 text-black no-underline duration-300 hover:text-orange-800 hover:font-normal">Events</a>
          <a href="/createWedding" className="m-2 text-black no-underline duration-300 hover:text-orange-800 hover:font-normal">Create Wedding</a> */}
          <a href="/jetwingBlue" className="m-2 text-black no-underline duration-300 hover:text-orange-800 hover:font-normal">Jetwing Blue</a>
          <a href="/jetwingSea" className="m-2 text-black no-underline duration-300 hover:text-orange-800 hover:font-normal">Jetwing Sea</a>
          <a href="/jetwingSeven" className="m-2 text-black no-underline duration-300 hover:text-orange-800 hover:font-normal">Jetwing Colombo Seven</a>
          {/* <a href="/scheduleRequestLsit" className="m-2 text-black no-underline duration-300 hover:text-orange-800 hover:font-normal">Schedule Requests</a> */}
        </div>

        <div className="grid grid-cols-2 gap-1">
          <div class="flex flex-col sm:flex-row sm:text-left sm:justify-between">
            <button class="flex  bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg px-5 py-2.5 mr-2 mb-2 dark:bg-orange-600 dark:hover:bg-orange-700 focus:outline-none dark:focus:ring-orange-800">
              <a className="text-white no-underline text-md from-neutral-50" href="/signUp">Sign Up</a>
            </button>
          </div>

          <div class="flex flex-col sm:flex-row sm:text-left sm:justify-between">
            <button class="flex text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg px-5 py-2.5 mr-2 mb-2 dark:bg-orange-600 dark:hover:bg-orange-700 focus:outline-none dark:focus:ring-orange-800">
              <a className="text-white no-underline text-md" href="/signIn">Sign In</a>
            </button>
          </div>
        </div>
      </nav>
    );
  }
}

export default navbar;