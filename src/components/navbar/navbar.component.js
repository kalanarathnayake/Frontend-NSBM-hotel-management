import { Component } from "react";
import AuthenticationService from "../user/AuthenticationService";

class navbar extends Component {

  logout = () => {
    AuthenticationService.logout();
    window.location = "/"
  }

  render() {
    const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
    const loggedUserRole = AuthenticationService.loggedUserRole();
    let loggedAsCustomer = false;
    let loggedAsAdmin = false;
    let unknownUser = false;
    if (isUserLoggedIn === true) {
      console.log("User Logged In")
    } else {
      unknownUser = true;
    }
    if (loggedUserRole != null && loggedUserRole === 'Customer') {
      loggedAsCustomer = true;
    }
    if (loggedUserRole != null && loggedUserRole === 'Admin') {
      loggedAsAdmin = true;
    }

    return (
      <nav className="flex flex-col w-full px-6 py-4 bg-white shadow sm:flex-row sm:text-left sm:justify-between sm:items-baseline">
        {unknownUser &&
          <>
            <div className="mb-2 sm:mb-0">
              <a href="/" className="text-xl font-bold text-yellow-900 no-underline duration-300 hover:text-amber-700 hover:font-bold">Home</a>
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
          </>
        }
        {isUserLoggedIn && loggedAsCustomer &&
          <><div className="mb-2 sm:mb-0">
            <a href="/" className="text-xl font-bold text-yellow-900 no-underline duration-300 hover:text-amber-700 hover:font-bold">Home</a>
          </div>
            <div>
              <a href="/cusJetwingBlue" className="m-2 text-black no-underline duration-300 hover:text-orange-800 hover:font-normal">Jetwing Blue</a>
              <span class="">| </span>
              <a href="/cusJetwingSea" className="m-2 text-black no-underline duration-300 hover:text-orange-800 hover:font-normal">Jetwing Sea</a>
              <span class="">| </span>
              <a href="/cusJetwingCol" className="m-2 text-black no-underline duration-300 hover:text-orange-800 hover:font-normal">Jetwing Colombo Seven</a>
              <span class="">| </span>
              <a href="/myBooking" className="m-2 text-black no-underline duration-300 hover:text-orange-800 hover:font-normal">My Bookings</a>
            </div>
            <div class="flex flex-col sm:flex-row sm:text-left sm:justify-between">
              <button class="shadow-lg duration-500 bg-pink-600 hover:bg-pink-300  font-medium rounded-lg px-5 py-2.5 mr-2 mb-2 " onClick={this.logout}>
                <a className="text-white no-underline text-md from-neutral-50" >Sign Out</a>
              </button>
            </div>
          </>
        }
        {isUserLoggedIn && loggedAsAdmin &&
          <><div className="mb-2 sm:mb-0">
            <a href="/" className="text-xl font-bold text-yellow-900 no-underline duration-300 hover:text-amber-700 hover:font-bold">Home</a>
          </div>
            <div>
              <a href="/jetwingBlue" className="m-2 text-black no-underline duration-300 hover:text-orange-800 hover:font-normal">Jetwing Blue</a>
              <span class="">| </span>
              <a href="/jetwingSea" className="m-2 text-black no-underline duration-300 hover:text-orange-800 hover:font-normal">Jetwing Sea</a>
              <span class="">| </span>
              <a href="/jetwingSeven" className="m-2 text-black no-underline duration-300 hover:text-orange-800 hover:font-normal">Jetwing Colombo Seven</a>
            </div>
            <div class="flex flex-col sm:flex-row sm:text-left sm:justify-between">
              <button class="shadow-lg duration-500 bg-pink-600 hover:bg-pink-300  font-medium rounded-lg px-5 py-2.5 mr-2 mb-2 " onClick={this.logout}>
                <a className="text-white no-underline text-md from-neutral-50" >Sign Out</a>
              </button>
            </div>
          </>
        }
      </nav>
    );
  }
}

export default navbar;