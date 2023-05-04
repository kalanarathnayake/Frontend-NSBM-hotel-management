import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Swal from "sweetalert2";
import 'jspdf-autotable';
import { Modal } from "react-bootstrap";
import EditEvent from '../event/event-edit.comonent';
import { EditWeddingHall } from '../weddingHalls/weddingHall-edit.component';
import EditRoom from '../room/room-edit.component';
import RoomDetails from '../room/room-details.component';


export class ViewJetwingColomboSeven extends Component {

    constructor(props) {
        super(props);

        this.deleteEvent = this.deleteEvent.bind(this);
        this.gotoView = this.gotoView.bind(this);
        this.gotoWeddingHall = this.gotoWeddingHall.bind(this);



        this.state = {
            event: [],
            wedding: [],
            room: [],
            search: "Jetwing Colombo Seven",
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
                this.state.search === currentevent.hotelName

            ) {
                return (
                    <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>

                        <td className='px-6 '>{currentevent.hallName}</td>
                        <td className='max-w-xl px-6 text-justify'>{currentevent.description}</td>
                        <td class=" pt-3">
                            <p class="">
                                <div class="flex p-2"><span class="mx-1">{currentevent.style1}</span> <span class="">{currentevent.capacity1}</span> </div>
                                <div class="flex p-2"><span class="mx-1">{currentevent.style2}</span> <span class="">{currentevent.capacity2}</span> </div>
                                <div class="flex p-2"><span class="mx-1">{currentevent.style3}</span> <span class="">{currentevent.capacity3}</span> </div>
                                <div class="flex p-2"><span class="mx-1">{currentevent.style4}</span> <span class="">{currentevent.capacity4}</span> </div>
                            </p>
                        </td>

                        <td className='px-6 py-4'>
                            <div class="">
                                <button className='items-center p-2 text-sm font-medium text-white duration-500 bg-blue-600 rounded-full hover:bg-pink-200' onClick={() => { this.gotoView(currentevent._id) }}>
                                    <div class="">
                                        <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round " stroke-width="2" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"></path>
                                        </svg>
                                    </div>
                                </button>
                            </div>
                        </td>

                        <td className='px-6 py-4'>
                            <div class="">
                                <button className='items-center p-2 text-sm font-medium text-white duration-500 bg-red-600 rounded-full hover:bg-pink-200' onClick={() => { this.deleteEvent(currentevent._id) }}>
                                    <div class="">
                                        <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                        </svg>
                                    </div>
                                </button>
                            </div>
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
                    <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
                        <td className='px-6 py-4'>{currentWedding.hallName}</td>
                        <td className='max-w-xl px-6 text-justify'>{currentWedding.description}</td>
                        <td class=" pt-3">
                            <p class="">
                                <div class="flex p-2"><span class="mx-1">Capacity</span> <span class="">{currentWedding.capacity}</span> </div>
                                <div class="flex p-2"><span class="mx-1">Length</span> <span class="">{currentWedding.length}</span> </div>
                                <div class="flex p-2"><span class="mx-1">Width</span> <span class="">{currentWedding.width}</span> </div>
                                <div class="flex p-2"><span class="mx-1">Price</span> <span class="">{currentWedding.price}</span> </div>
                            </p>
                        </td>
                        <td className='px-6 py-4'>
                            <div class="px-6 py-4">
                                <button className='items-center p-2 text-sm font-medium text-white duration-500 bg-blue-600 rounded-full hover:bg-pink-200' onClick={() => { this.gotoWeddingHall(currentWedding._id) }}>
                                    <div class="">
                                        <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round " stroke-width="2" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"></path>
                                        </svg>
                                    </div>
                                </button>
                            </div>
                        </td>
                        <td className='px-6 py-4'>
                            <div class="px-6 py-4">
                                <button className='items-center p-2 text-sm font-medium text-white duration-500 bg-red-600 rounded-full hover:bg-pink-200' onClick={() => { this.deleteWedding(currentWedding._id) }}>
                                    <div class="">
                                        <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                        </svg>
                                    </div>
                                </button>
                            </div></td>
                    </tr>
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
                        <td className='px-6 py-4'>{currentRoom.roomName}</td>
                        <td className='max-w-xl px-6 text-justify'>{currentRoom.description}</td>
                        <td class=" pt-3">
                            <p class="">
                                <div class="flex p-2"><span class="mx-1">Size</span> <span class="">{currentRoom.size}</span> </div>
                                <div class="flex p-2"><span class="mx-1">Price</span> <span class="">{currentRoom.price}</span> </div>
                            </p>
                        </td>
                        <td className='px-6 py-4'>
                            <div class="">
                                <button className='items-center p-2 text-sm font-medium text-white duration-500 bg-green-600 rounded-full hover:bg-pink-200' onClick={() => { this.gotoRoomDetails(currentRoom._id) }}>
                                    <div class="">
                                        <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                                            <path fillRule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                </button>
                            </div>
                        </td>
                        <td className='px-6 py-4'>
                            <div class="px-6 py-4">
                                <button className='items-center p-2 text-sm font-medium text-white duration-500 bg-blue-600 rounded-full hover:bg-pink-200' onClick={() => { this.gotoRoomUpdate(currentRoom._id) }}>
                                    <div class="">
                                        <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round " stroke-width="2" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"></path>
                                        </svg>
                                    </div>
                                </button>
                            </div>
                        </td>

                        <td className='px-6 py-4'>
                            <div class="px-6 py-4">
                                <button className='items-center p-2 text-sm font-medium text-white duration-500 bg-red-600 rounded-full hover:bg-pink-200' onClick={() => { this.deleteRoom(currentRoom._id) }}>
                                    <div class="">
                                        <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                        </svg>
                                    </div>
                                </button>
                            </div>
                        </td>
                    </tr>
                );
            }
        });
    }



    render() {
        return (
            <div>

                <div class="">
                    <section class="">
                        <div class="text-center bg-white text-gray-800 pt-10 px-6 pb-10">
                            <h1 class="text-5xl md:text-4xl xl:text-5xl font-bold tracking-tight uppercase mb-8 drop-shadow-md ">
                                <span class="text-blue-950 font-serif font-light  ">JETWING COLOMBO SEVEN</span>
                            </h1>
                        </div>
                    </section>

                    <div class="w-100 pb-16">
                        <img src="https://www.jetwinghotels.com/wp-content/uploads/2017/12/Location-banner-desktop-large.jpg" alt="Jetwing Colombo Seven" />
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

                            <div class="flex justify-end sm:flex-row sm:text-left sm:justify-end gap-2">
                                <button class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                                    <Link className='font-semibold text-white no-underline' to={"/createEvent"}>
                                        Add Events
                                    </Link></button>
                            </div>


                            <div class="py-2 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow  md:max-w-7xl  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">

                                <table>
                                    {this.searchEventList()}
                                </table>
                            </div>
                            <div class="">
                                <Modal show={this.state.show} onHide={this.closeModalBoxForEvent} centered size={"xl"}>

                                    <Modal.Body className='px-12 py-12 border-2 rounded-lg shadow-md bg-gray-50'>
                                        <EditEvent evId={this.state.id} key={this.state.id} close={this.closeModalBoxForEvent} />
                                    </Modal.Body>
                                </Modal>
                            </div>
                        </div>
                    </div>

                    {/* Wedding Halls*/}
                    <section class="">
                        <div class="text-center bg-white text-gray-800 px-6">
                            <h1 class="text-5xl md:text-6xl xl:text-3xl font-bold tracking-tight uppercase drop-shadow-md text-blue-950 ">Wedding Halls<br />
                            </h1>
                        </div>
                    </section>

                    <div class="container mx-auto px-5 py-2 lg:px-32 lg:pt-12 " >
                        <div class="p-10">
                            <div class="flex justify-end sm:flex-row sm:text-left sm:justify-end gap-2">
                                <button class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                                    <Link className='font-semibold text-white no-underline' to={"/createWedding"}>
                                        Add Wedding Hall
                                    </Link></button>
                            </div>
                            <div class="py-2 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow  md:max-w-7xl  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                                <table>
                                    {this.searchWeddingHallList()}
                                </table>
                            </div>
                            <div class="">
                                <Modal show={this.state.display} onHide={this.closeModalBoxForWedding} centered size={"xl"}>

                                    <Modal.Body className='px-12 py-12 border-2 rounded-lg shadow-md bg-gray-50'>
                                        <EditWeddingHall wedId={this.state.id} key={this.state.id} close={this.closeModalBoxForWedding} />
                                    </Modal.Body>
                                </Modal>
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

                    <div class="container mx-auto px-5 py-2 lg:px-32 lg:pt-12 " >
                        <div class="p-10">
                            <div class="flex justify-end sm:flex-row sm:text-left sm:justify-end gap-2">
                                <button class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                                    <Link className='font-semibold text-white no-underline' to={"/createRoom"}>
                                        Add Accomodation
                                    </Link></button>
                            </div>
                            <div class="py-2 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow  md:max-w-7xl  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                                <table>
                                    {this.searchRoomList()}
                                </table>
                            </div>
                            <div class="">
                                <Modal show={this.state.pop} onHide={this.closeModalBoxForRoomDetails} centered size={"xl"}>

                                    <Modal.Body className='px-12 py-12 border-2 rounded-lg shadow-md bg-gray-50' closeButton>
                                        <RoomDetails rmId={this.state.id} key={this.state.id} close={this.closeModalBoxForRoomDetails} />
                                    </Modal.Body>
                                </Modal>
                            </div>
                            <div class="">
                                <Modal show={this.state.view} onHide={this.closeModalBoxForRoomUpdate} centered size={"xl"}>

                                    <Modal.Body className='px-12 py-12 border-2 rounded-lg shadow-md bg-gray-50'>
                                        <EditRoom rmId={this.state.id} key={this.state.id} close={this.closeModalBoxForRoomUpdate} />
                                    </Modal.Body>
                                </Modal>
                            </div>
                        </div>
                    </div>
                    {/*  */}
                    <div class="text-center bg-white text-gray-800 px-6 pt-6 pb-8">
                        <h1 class="text-5xl md:text-6xl xl:text-3xl font-bold tracking-tight uppercase drop-shadow-md text-blue-950 ">Gallery<br />
                        </h1>
                    </div>
                    <div class="mb-24 container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
                        <div class="-m-1 flex flex-wrap md:-m-2">
                            <div class="flex w-1/3 flex-wrap hover:animate-pulse">
                                <div class="w-full p-1 md:p-2">
                                    <img
                                        alt="gallery"
                                        class="block h-full w-full rounded-lg object-cover object-center"
                                        src="https://www.jetwinghotels.com/wp-content/uploads/2019/06/colombo-hotel-category-744x653.jpg"
                                    />
                                </div>
                            </div>
                            <div class="flex w-1/3 flex-wrap hover:animate-pulse">
                                <div class="w-full p-1 md:p-2">
                                    <img
                                        alt="gallery"
                                        class="block h-full w-full rounded-lg object-cover object-center"
                                        src="https://www.jetwinghotels.com/wp-content/uploads/2018/07/mermaid-hotel-kalutara.jpg"
                                    />
                                </div>
                            </div>
                            <div class="flex w-1/3 flex-wrap hover:animate-pulse">
                                <div class="w-full p-1 md:p-2">
                                    <img
                                        alt="gallery"
                                        class="block h-full w-full rounded-lg object-cover object-center"
                                        src="https://www.jetwinghotels.com/wp-content/uploads/2017/10/Colombo-7-categorythumbnail.jpg" />
                                </div>
                            </div>
                            <div class="flex w-1/3 flex-wrap hover:animate-pulse">
                                <div class="w-full p-1 md:p-2">
                                    <img
                                        alt="gallery"
                                        class="block h-full w-full rounded-lg object-cover object-center"
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQceBMogAcpWxMh3HK4QGYZrGPKlIwN-Tximyd0rj8c-4sDIWZ7EGdrKe_G6jaFPIE_iSs&usqp=CAU"
                                    />
                                </div>
                            </div>
                            <div class="flex w-1/3 flex-wrap hover:animate-pulse">
                                <div class="w-full p-1 md:p-2">
                                    <img
                                        alt="gallery"
                                        class="block h-full w-full rounded-lg object-cover object-center"
                                        src="https://www.jetwinghotels.com/wp-content/uploads/2019/06/bentota-hotels-category-744x653-1.jpg" />
                                </div>
                            </div>
                            <div class="flex w-1/3 flex-wrap hover:animate-pulse">
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

            </div>


        )
    }
}

