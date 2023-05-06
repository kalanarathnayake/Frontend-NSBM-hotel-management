import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import 'jspdf-autotable';
import { Modal } from "react-bootstrap";
import CreateBooking from './booking-add.component';
class CusJetwingBlueView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      event: [],
      wedding: [],
      room: [],
      search: "Jetwing Blue",
      show: false,
    };
  }

  componentDidMount() {
    this.eventList();
    this.weddingHallList();
    this.roomList();
  }

  eventList() {
    axios.get('http://localhost:5000/event/')
      .then(response => {
        this.setState({ event: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  weddingHallList() {
    axios.get('http://localhost:5000/weddingHall/')
      .then(response => {
        this.setState({ wedding: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  roomList() {
    axios.get('http://localhost:5000/room/')
      .then(response => {
        this.setState({ room: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  searchEventList() {
    return this.state.event.map((currentevent) => {
      if (
        this.state.search === currentevent.hotelName
      ) {
        return (
          <tr className='bg-white dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
            <td className='px-6 text-lg font-bold'>{currentevent.hallName}</td>
            <td className='max-w-3xl px-6 text-justify'>{currentevent.description}</td>
            <td class=" pt-3">
              <p class="">
                <div class="flex p-2"><span class="mx-1">{currentevent.style1}</span> <span class="">{currentevent.capacity1}</span> </div>
                <div class="flex p-2"><span class="mx-1">{currentevent.style2}</span> <span class="">{currentevent.capacity2}</span> </div>
                <div class="flex p-2"><span class="mx-1">{currentevent.style3}</span> <span class="">{currentevent.capacity3}</span> </div>
                <div class="flex p-2"><span class="mx-1">{currentevent.style4}</span> <span class="">{currentevent.capacity4}</span> </div>
              </p>
            </td>
          </tr>
        );
      }
    });
  }

  searchWeddingHallList() {
    return this.state.wedding.map((currentWedding) => {
      if (
        this.state.search === currentWedding.hotelName
      ) {
        return (
          <div className="mt-5 mb-12 shadow-xl card w-96 bg-base-100 hover:scale-105" >
            <figure><img src={currentWedding.imageURL} alt="Weddings" className='h-96' /></figure>
            <div className="card-body">
              <h2 className="justify-center font-bold card-title">{currentWedding.hallName}</h2>
              <p className='px-3 text-justify'>{currentWedding.description}</p>
              <table>
                <tr className='flex justify-between'>
                  <div>
                    <td>{currentWedding.capacity} Seats</td>
                  </div>
                  <div>
                    <th className='text-cyan-800'>{currentWedding.price} per plate</th>
                  </div>
                </tr>
              </table>
            </div>
          </div>
        );
      }
    });
  }

  searchRoomList() {
    return this.state.room.map((currentRoom) => {
      if (
        this.state.search === currentRoom.hotelName
      ) {
        return (
          <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
            <td className='justify-center w-32 px-4'>{currentRoom.roomName}</td>
            <td className='w-32 px-4'>{currentRoom.size}</td>
            <td className='w-24 px-4'>{currentRoom.numofPeople}</td>
            <td className='w-24 px-4 '>{currentRoom.price}</td>
            <td className='max-w-2xl px-4'><p class="">
              <div class="flex p-2 "><span class="mx-1">{currentRoom.feature1}</span> </div>
              <div class="flex p-2"><span class="mx-1">{currentRoom.feature2}</span> </div>
              <div class="flex p-2"><span class="mx-1">{currentRoom.feature3}</span>  </div>
              <div class="flex p-2"><span class="mx-1">{currentRoom.feature4}</span> </div>
              <div class="flex p-2"><span class="mx-1">{currentRoom.feature5}</span> </div>
              <div class="flex p-2"><span class="mx-1">{currentRoom.feature6}</span> </div>
              <div class="flex p-2"><span class="mx-1">{currentRoom.feature7}</span> </div>
              <div class="flex p-2"><span class="mx-1">{currentRoom.feature8}</span> </div>
              <div class="flex p-2"><span class="mx-1">{currentRoom.feature9}</span> </div>
              <div class="flex p-2"><span class="mx-1">{currentRoom.feature10}</span> </div>
            </p></td>
            <td className='px-6 py-4'>
              <div class="">
                <button className='inline-flex items-center px-4 py-2 mr-1 text-sm font-medium text-white bg-indigo-500 rounded-md hover:bg-blue-200' onClick={() => { this.gotoBooking(currentRoom._id) }}>
                  <div class=" grid grid-cols-1 gap-1 px-3 py-2">
                    <div class="">
                      Book
                    </div>
                  </div></button>
              </div></td>
          </tr>
        );
      }
    });
  }

  render() {
    return (
      <div class="">
        <div class="w-100">
          <img src="https://www.jetwinghotels.com/jetwingblue/wp-content/uploads/sites/26/2017/12/blue-gallery-desktop-large.jpg" alt="Shoes" />
        </div>
        <section class="">
          <div class="grid grid-cols-2 divide-x">
            <div class="text-center bg-white text-gray-800 pt-20 px-8 pb-10">
              <h3 class="text-3xl md:text-4xl xl:text-5xl font-bold tracking-tight uppercase mb-8 drop-shadow-md "><span class="text-blue-950 font-serif font-light  ">JETWING BLUE HOTEL</span>
              </h3>
              <p>Nearly half a century ago, our legendary brand of hospitality was born on this very coastline. From the warm hearts of a Sri Lankan family, the values of passion, humility, integrity, and tenacity were brought to life in a charming beachside villa that has since inspired a world of luxury spread across our tropical isle.</p>
              <p>It all began here – at our original home of Sri Lankan hospitality. The home in which we welcomed the world as part of our family, and treated the world as one of our own. From mouthwatering meals to unique experiences, we have always been delighted to share the magic of our land with you. And today, as our timeless seas hold a wealth of stories past, we invite you to our nostalgic shores to begin one of your own.</p>
              <p>Ravindra de Silva
                Manager – Jetwing Blue & Jetwing Beach</p>
            </div>
            <div class="max-w-[90%] mx-auto px-5 py-5 lg:px-32 lg:pt-16">
              <img src="https://www.jetwinghotels.com/jetwingblue/wp-content/uploads/sites/26/2018/02/Main-1742X871.jpg" alt="Events" class="h-[25rem] w-[80rem] pr-8 hover:animate-pulse" />
            </div>
          </div>
        </section>
        {/* events and meetings */}
        <section class="">
          <div class="max-w-[90%] mx-auto px-5 pb-5 lg:px-32 lg:pt-12">
            <img src="https://www.jetwinghotels.com/jetwingyala/wp-content/uploads/sites/32/2017/11/1920x656-desktop-large.jpg" alt="Events" />
          </div>
          <div class="text-center bg-white text-gray-800 px-6">
            <h1 class="text-5xl text-blue-950 md:text-6xl xl:text-3xl font-bold tracking-tight uppercase drop-shadow-md ">Events and Meetings<br />
            </h1>
          </div>
        </section>
        <div class="container mx-auto px-5 py-2 lg:px-32 lg:pt-12 " >
          <div class="p-10">
            <a href="/" class=" flex no-underline text-black flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-7xl h-96 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">

              <div class="flex flex-col justify-between p-4 leading-normal">
                <table>
                  {this.searchEventList()}
                </table>
              </div>
            </a>
          </div>
        </div>
        <section class="">
          <div class="text-center bg-white text-gray-800 px-6">
            <h1 class="text-5xl text-blue-950 md:text-6xl xl:text-3xl font-bold tracking-tight uppercase drop-shadow-md ">Weddings<br />
            </h1>
          </div>
        </section>
        <div class="container mx-auto px-5 py-2 lg:px-32 lg:pt-12 mb-5 grid grid-cols-3 content-center ">

          {this.searchWeddingHallList()}
        </div>
        {/* Accomodations*/}
        <section class="">
          <div class="max-w-[90%] mx-auto px-5 py-5 lg:px-32 lg:pt-12">
            <table>
              <tr>
                <td rowspan="2"><div >
                  <img src="https://cf.bstatic.com/images/hotel/max1024x768/100/100601106.jpg" alt="Events" class="h-[30rem] w-[100rem] transition duration-300 ease-in-out hover:opacity-40" />
                </div></td>
                <td><div >
                  <img src="https://www.jetwinghotels.com/jetwingblue/wp-content/uploads/sites/26/2017/11/blue-special-offers-desktop-large.jpg" alt="Events" class="h-[15rem] w-[80rem] transition duration-300 ease-in-out hover:opacity-40" />
                </div></td>
              </tr>
              <tr>
                <td>
                  <div >
                    <img src="https://www.jetwinghotels.com/jetwingblue/wp-content/uploads/sites/26/2018/02/JBN_Reception_1128.jpg" alt="Events" class="h-[15rem] w-[80rem] transition duration-300 ease-in-out hover:opacity-40" />
                  </div>
                </td>
              </tr>
            </table>
          </div>
        </section>
        <section class="">
          <div class="text-center bg-white text-gray-800 px-6">
            <h1 class="text-5xl md:text-6xl xl:text-3xl font-bold tracking-tight uppercase drop-shadow-md text-blue-950 ">Accomodations<br />
            </h1>
          </div>
        </section>
        <div class="container mx-auto px-5 py-2 lg:px-32 lg:pt-12 " >
          <div class="p-10">
            <div class="py-2 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow  md:max-w-7xl  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
              <table>
                <thead className='justify-center'>
                  <tr>
                    <th class="pl-12 py-2">Room Name</th>
                    <th class="pl-12 py-2">Size</th>
                    <th class="pl-8 py-2">Number Of People</th>
                    <th class="pl-8 py-2">Price</th>
                    <th class="pl-42 py-2">Features</th>
                    <th class="pl-12 py-2">Book Here</th>
                  </tr>
                </thead>
                {this.searchRoomList()}</table>
            </div>
          </div>
        </div>
        <div class="">
          <Modal show={this.state.show} onHide={this.closeModalBoxForBooking} centered size={"xl"}>
            <Modal.Header className='px-5 pt-4 border-2 shadow-md bg-gray-50' closeButton>
              <div class="">
                <Modal.Title className='items-center' >
                  <p className='font-semibold text-black uppercase '>
                    Book Your Accomodation
                  </p>
                </Modal.Title>
              </div>
            </Modal.Header >
            <Modal.Body className='px-12 py-12 border-2 rounded-lg shadow-md bg-gray-50'>
              <CreateBooking rmId={this.state.id} key={this.state.id} close={this.closeModalBoxForBooking} />
            </Modal.Body>
          </Modal>
        </div>
        {/*  */}
        <section class="">
          <div class="text-center bg-white text-gray-800 px-6 pt-6 pb-8">
            <h1 class="text-5xl md:text-6xl xl:text-3xl font-bold tracking-tight uppercase drop-shadow-md text-blue-950 ">Gallery<br />
            </h1>
          </div>
          <div class="mb-24 container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
            <div class="-m-1 flex flex-wrap md:-m-2">
              <div class="flex w-1/3 flex-wrap transition duration-300 ease-in-out hover:scale-110">
                <div class="w-full p-1 md:p-2">
                  <img
                    alt="gallery"
                    class="block h-full w-full rounded-lg object-cover object-center "
                    src="https://www.jetwinghotels.com/wp-content/uploads/2019/06/colombo-hotel-category-744x653.jpg"
                  />
                </div>
              </div>
              <div class="flex w-1/3 flex-wrap transition duration-300 ease-in-out hover:scale-110">
                <div class="w-full p-1 md:p-2">
                  <img
                    alt="gallery"
                    class="block h-full w-full rounded-lg object-cover object-center"
                    src="https://www.jetwinghotels.com/wp-content/uploads/2018/07/mermaid-hotel-kalutara.jpg"
                  />
                </div>
              </div>
              <div class="flex w-1/3 flex-wrap transition duration-300 ease-in-out hover:scale-110">
                <div class="w-full p-1 md:p-2">
                  <img
                    alt="gallery"
                    class="block h-full w-full rounded-lg object-cover object-center"
                    src="https://www.jetwinghotels.com/wp-content/uploads/2017/10/Colombo-7-categorythumbnail.jpg" />
                </div>
              </div>
              <div class="flex w-1/3 flex-wrap transition duration-300 ease-in-out hover:scale-110">
                <div class="w-full p-1 md:p-2">
                  <img
                    alt="gallery"
                    class="block h-full w-full rounded-lg object-cover object-center"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQceBMogAcpWxMh3HK4QGYZrGPKlIwN-Tximyd0rj8c-4sDIWZ7EGdrKe_G6jaFPIE_iSs&usqp=CAU"
                  />
                </div>
              </div>
              <div class="flex w-1/3 flex-wrap transition duration-300 ease-in-out hover:scale-110">
                <div class="w-full p-1 md:p-2">
                  <img
                    alt="gallery"
                    class="block h-full w-full rounded-lg object-cover object-center"
                    src="https://www.jetwinghotels.com/wp-content/uploads/2019/06/bentota-hotels-category-744x653-1.jpg" />
                </div>
              </div>
              <div class="flex w-1/3 flex-wrap transition duration-300 ease-in-out hover:scale-110">
                <div class="w-full p-1 md:p-2">
                  <img
                    alt="gallery"
                    class="block h-full w-full rounded-lg object-cover object-center"
                    src="https://www.jetwinghotels.com/jetwinglake/wp-content/uploads/sites/8/2017/11/lake-Gallery2.jpg" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default CusJetwingBlueView;