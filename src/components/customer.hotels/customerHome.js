import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Swal from "sweetalert2";
// import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { Modal } from "react-bootstrap";
// import { ViewDeliveryDetails } from './deliveryDetails-view.component';
import EditEvent from '../event/event-edit.comonent';
import { EditWeddingHall } from '../weddingHalls/weddingHall-edit.component';
import EditRoom from '../room/room-edit.component';
import RoomDetails from '../room/room-details.component';
class customerHome extends Component {


  constructor(props) {
    super(props);

    this.deleteEvent = this.deleteEvent.bind(this);
    this.gotoView = this.gotoView.bind(this);
    this.gotoWeddingHall = this.gotoWeddingHall.bind(this);



    this.state = {
      event: [],
      wedding: [],
      room: [],
      search: "Jetwing Blue",
      show: false,
      display: false,
      view: false,
      pop: false
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

  gotoView = (id) => {
    this.setState({
      id: id,
      show: true

    })
    console.log("List id is :" + id);
  }

  //Modal box
  closeModalBoxForEvent = () => {
    this.setState({ show: false })

    this.eventList();

  }
  gotoWeddingHall = (id) => {
    this.setState({
      id: id,
      display: true

    })
    console.log("List id is :" + id);
  }

  //Modal box
  closeModalBoxForWedding = () => {
    this.setState({ display: false })

    this.weddingHallList();

  }
  gotoRoomUpdate = (id) => {
    this.setState({
      id: id,
      view: true

    })
    console.log("List id is :" + id);
  }

  //Modal box
  closeModalBoxForRoomUpdate = () => {
    this.setState({ view: false })

    this.roomList();

  }
  gotoRoomDetails = (id) => {
    this.setState({
      id: id,
      pop: true

    })
    console.log("List id is :" + id);
  }

  //Modal box
  closeModalBoxForRoomDetails = () => {
    this.setState({ pop: false })

    this.roomList();

  }

  deleteEvent(id) {
    axios.delete('http://localhost:5000/event/' + id).then(response => {
      console.log(response.status)
      // this.refreshTable();

      if (response.status == 200) {
        Swal.fire({
          icon: 'success',
          title: 'Successful',
          text: "Event has been deleted!!",
          background: '#fff',
          confirmButtonColor: '#0a5bf2',
          iconColor: '#60e004'
        })

        this.eventList();
      }

      else {
        Swal.fire({
          icon: 'Unsuccess',
          title: 'Unsuccessfull',
          text: "Event has not been deleted!!",
          background: '#fff',
          confirmButtonColor: '#eb220c',
          iconColor: '#60e004'
        })
      }


    })
  }

  deleteWedding(id) {
    axios.delete('http://localhost:5000/weddingHall/' + id).then(response => {
      console.log(response.status)
      // this.refreshTable();

      if (response.status == 200) {
        Swal.fire({
          icon: 'success',
          title: 'Successful',
          text: "Wedding Hall has been deleted!!",
          background: '#fff',
          confirmButtonColor: '#0a5bf2',
          iconColor: '#60e004'
        })

        this.weddingHallList();
      }

      else {
        Swal.fire({
          icon: 'Unsuccess',
          title: 'Unsuccessfull',
          text: "Wedding Hall has not been deleted!!",
          background: '#fff',
          confirmButtonColor: '#eb220c',
          iconColor: '#60e004'
        })
      }


    })
  }

  deleteRoom(id) {
    axios.delete('http://localhost:5000/room/' + id).then(response => {
      console.log(response.status)
      // this.refreshTable();

      if (response.status == 200) {
        Swal.fire({
          icon: 'success',
          title: 'Successful',
          text: "Room has been deleted!!",
          background: '#fff',
          confirmButtonColor: '#0a5bf2',
          iconColor: '#60e004'
        })

        this.roomList();
      }

      else {
        Swal.fire({
          icon: 'error',
          title: 'Unsuccessfull',
          text: "Room has not been deleted!!",
          background: '#fff',
          confirmButtonColor: '#eb220c',
          iconColor: '#60e004'
        })
      }


    })
  }


  searchEventList() {
    return this.state.event.map((currentevent) => {
      if (
        this.state.search ==
        currentevent.hotelName

      ) {
        return (

          <tr >
            {/* <td className='px-6 py-4'>{currentdelivery._id}</td>
                    <td className='px-6 py-4'>{currentdelivery.orderId}</td> */}

            <td className='px-6 py-4'>{currentevent.hallName}</td>
            <td className='px-6 py-4'>{currentevent.description}</td>
            <tr>
              <td className='px-6 py-4'>{currentevent.style1}</td>
              <td className='px-6 py-4'>{currentevent.capacity1}</td>
            </tr>
            <tr>
              <td className='px-6 py-4'>{currentevent.style2}</td>
              <td className='px-6 py-4'>{currentevent.capacity2}</td>
            </tr>
            <tr>
              <td className='px-6 py-4'>{currentevent.style3}</td>
              <td className='px-6 py-4'>{currentevent.capacity3}</td>
            </tr>
            <tr>
              <td className='px-6 py-4'>{currentevent.style4}</td>
              <td className='px-6 py-4'>{currentevent.capacity4}</td>
            </tr>






          </tr>
        );
      }
    });
  }

  searchWeddingHallList() {
    return this.state.wedding.map((currentWedding) => {
      if (
        this.state.search ==
        currentWedding.hotelName

      ) {
        return (
          <div className="shadow-xl card w-96 bg-base-100">
            <figure><img src="https://wallpapershome.com/images/pages/pic_h/16232.jpg" alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="justify-center card-title">{currentWedding.hallName}</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="justify-center card-actions">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        );
      }
    });
  }

  searchRoomList() {
    return this.state.room.map((currentRoom) => {
      if (
        this.state.search ==
        currentRoom.hotelName

      ) {
        return (
          <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
            {/* <td className='px-6 py-4'>{currentdelivery._id}</td>
                    <td className='px-6 py-4'>{currentdelivery.orderId}</td> */}

            <td className='px-6 py-4'>{currentRoom.roomName}</td>
            <td className='px-6 py-4'>{currentRoom.description}</td>

            <td className='px-6 py-4'>{currentRoom.size}</td>
            <td className='px-6 py-4'>{currentRoom.price}</td>

            {/* <td className='px-6 py-4'>
                        <span
                            class="text-base inline-block whitespace-nowrap rounded-full bg-green-400 p-1 hover:bg-green-500 hover:drop-shadow-md hover:text-white  px-2 pt-[0.35em] pb-[0.25em] text-center align-baseline text-[0.75em] font-bold leading-none text-primary-700">
                            {currentdelivery.orderStatus}
                        </span>
                    </td> */}
            <td className='px-6 py-4'>
              <div class="">
                <button className='inline-flex items-center px-4 py-2 mr-1 text-sm font-medium text-white bg-indigo-500 rounded-md hover:bg-blue-200' onClick={() => { this.gotoRoomDetails(currentRoom._id) }}>
                  <div class=" grid grid-cols-2 gap-1">
                    <div class="">
                      <svg class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round " stroke-width="2" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"></path>
                      </svg>
                    </div>
                    <div class="">
                      View
                    </div>
                  </div></button>
              </div></td>


            <td className='px-6 py-4'>
              <div class="">
                <button className='inline-flex items-center px-4 py-2 mr-1 text-sm font-medium text-white bg-indigo-500 rounded-md hover:bg-blue-200' onClick={() => { this.gotoRoomUpdate(currentRoom._id) }}>
                  <div class=" grid grid-cols-2 gap-1">
                    <div class="">
                      <svg class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round " stroke-width="2" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"></path>
                      </svg>
                    </div>
                    <div class="">
                      Update
                    </div>
                  </div></button>
              </div></td>

            <td className='px-6 py-4'>
              <div class="">
                <button className='inline-flex items-center px-4 py-2 mr-1 text-sm font-medium text-white bg-red-500 rounded-md hover:bg-red-200' onClick={() => { this.deleteRoom(currentRoom._id) }}>
                  <div class=" grid grid-cols-2 gap-1">
                    <div class="">
                      <svg class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </div>
                    <div class="">
                      Delete
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
        <section class="">
          <div class="text-center bg-white text-gray-800 py-20 px-6">
            <h1 class="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight uppercase mb-8 drop-shadow-md ">HOTELS IN SRI LANKA<br />
              <span class="text-blue-950 font-serif font-light  ">JETWING HOTELS </span>
              {/* <span class="text-orange-500 animate-pulse "> PizzaMania </span> */}
            </h1>
          </div>
        </section>

        <div class="container mx-auto px-5 py-2 lg:px-32 lg:pt-12 mb-5 grid grid-cols-3 content-center">
          <div className="shadow-xl card w-96 bg-base-100">
            <figure><img src="https://wallpapershome.com/images/pages/pic_h/16232.jpg" alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="justify-center card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="justify-center card-actions">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
          <div className="shadow-xl card w-96 bg-base-100">
            <figure><img src="https://wallpapershome.com/images/pages/pic_h/6498.jpg" alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="justify-center card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="justify-center card-actions">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
          <div className="shadow-xl card w-96 bg-base-100">
            <figure><img src="https://wallpapershome.com/images/pages/pic_h/336.jpg" alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="justify-center card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="justify-center card-actions">
                <button className="btn btn-primary ">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
        {/* events and meetings */}
        <section class="">
          <div class="text-center bg-white text-gray-800 px-6">
            <h1 class="text-5xl text-blue-950 md:text-6xl xl:text-3xl font-bold tracking-tight uppercase drop-shadow-md ">Events and Meetings<br />
            </h1>
          </div>
        </section>

        <div class="container mx-auto px-5 py-2 lg:px-32 lg:pt-12 " >
          <div class="p-10">
            <div class=" flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-7xl h-96 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
              <table>

                {/* <tr>
             
            
              <th rowSpan={5}><h3>Conference Hall</h3></th>
              <td rowSpan={5}>Standing out among Negombo event venues, the intimate Conference Hall at Jetwing Sea is designed to accommodate up to 60 people in a contemporary space with a view of the Indian Ocean. In addition, the open expanse of our Lobby also features majestic views of the sea, and is available for any intimate gathering or casual event.</td>
              <td>Theater Style</td>
              <td>1000</td>
              </tr>
              <tr><td>Theater Style</td>
              <td>200</td></tr> */}

                {this.searchEventList()}

              </table>
            </div>
          </div>

          <div class="p-10">
            <a href="/" class=" flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-7xl h-96 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
              <img src="https://wallpapershome.com/images/pages/pic_h/336.jpg" alt="" class=" grow object-cover rounded-t-lg h-96  md:w-48 md:rounded-none md:rounded-l-lg" />
              <div class="flex flex-col justify-between p-4 leading-normal">
                {/* <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p> */}
                <table>
                  {this.searchEventList()}
                </table>
              </div>
            </a>
          </div>
        </div>
        <div class="container mx-auto px-5 py-2 lg:px-32 lg:pt-12 mb-5 grid grid-cols-3 content-center">
          <div className="shadow-xl card w-96 bg-base-100">
            <figure><img src="https://wallpapershome.com/images/pages/pic_h/16232.jpg" alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="justify-center card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="justify-center card-actions">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
          <div className="shadow-xl card w-96 bg-base-100">
            <figure><img src="https://wallpapershome.com/images/pages/pic_h/6498.jpg" alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="justify-center card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="justify-center card-actions">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
          <div className="shadow-xl card w-96 bg-base-100">
            <figure><img src="https://wallpapershome.com/images/pages/pic_h/336.jpg" alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="justify-center card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="justify-center card-actions">
                <button className="btn btn-primary ">Buy Now</button>
              </div>
            </div>
          </div>
        </div>

        {/* Accomodations*/}
        <section class="">
          <div class="text-center bg-white text-gray-800 px-6">
            <h1 class="text-5xl md:text-6xl xl:text-3xl font-bold tracking-tight uppercase drop-shadow-md text-blue-950 ">Accomodations<br />
            </h1>
          </div>
        </section>

        <div class=" container mx-auto px-5 py-2 lg:px-32 lg:pt-12 " >
          <div class="p-10">
            <a href="/" class=" flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-7xl h-96 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
              <img src="https://wallpapershome.com/images/pages/pic_h/336.jpg" alt="" class=" grow object-cover rounded-t-lg h-96  md:w-48 md:rounded-none md:rounded-l-lg" />
              <div class="flex flex-col justify-between p-4 leading-normal">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
              </div>
            </a>
          </div>

          <div class="p-10">
            <a href="/" class=" flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-7xl h-96 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
              <img src="https://wallpapershome.com/images/pages/pic_h/336.jpg" alt="" class=" grow object-cover rounded-t-lg h-96  md:w-48 md:rounded-none md:rounded-l-lg" />
              <div class="flex flex-col justify-between p-4 leading-normal">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
              </div>
            </a>
          </div>
        </div>

        {/*  */}
        <div class="mb-24 container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
          <div class="-m-1 flex flex-wrap md:-m-2">
            <div class="flex w-1/3 flex-wrap">
              <div class="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block h-full w-full rounded-lg object-cover object-center"
                  src="https://www.jetwinghotels.com/wp-content/uploads/2019/06/colombo-hotel-category-744x653.jpg"
                />
              </div>
            </div>
            <div class="flex w-1/3 flex-wrap">
              <div class="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block h-full w-full rounded-lg object-cover object-center"
                  src="https://www.jetwinghotels.com/wp-content/uploads/2018/07/mermaid-hotel-kalutara.jpg"
                />
              </div>
            </div>
            <div class="flex w-1/3 flex-wrap">
              <div class="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block h-full w-full rounded-lg object-cover object-center"
                  src="https://www.jetwinghotels.com/wp-content/uploads/2017/10/Colombo-7-categorythumbnail.jpg" />
              </div>
            </div>
            <div class="flex w-1/3 flex-wrap">
              <div class="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block h-full w-full rounded-lg object-cover object-center"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQceBMogAcpWxMh3HK4QGYZrGPKlIwN-Tximyd0rj8c-4sDIWZ7EGdrKe_G6jaFPIE_iSs&usqp=CAU"
                />
              </div>
            </div>
            <div class="flex w-1/3 flex-wrap">
              <div class="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block h-full w-full rounded-lg object-cover object-center"
                  src="https://www.jetwinghotels.com/wp-content/uploads/2019/06/bentota-hotels-category-744x653-1.jpg" />
              </div>
            </div>
            <div class="flex w-1/3 flex-wrap">
              <div class="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block h-full w-full rounded-lg object-cover object-center"
                  src="https://www.jetwinghotels.com/jetwinglake/wp-content/uploads/sites/8/2017/11/lake-Gallery2.jpg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default customerHome;