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


export class ViewJetwingSea extends Component {

    constructor(props) {
        super(props);

        this.deleteEvent = this.deleteEvent.bind(this);
        this.gotoView = this.gotoView.bind(this);
        this.gotoWeddingHall = this.gotoWeddingHall.bind(this);



        this.state = {
            event: [],
            wedding: [],
            room:[],
            search: "Jetwing Sea",
            show: false,
            display: false,
            view:false,
            pop:false
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
                    <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
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

                        <td className='px-6 py-4'>
                            <div class="">
                                <button className='inline-flex items-center px-4 py-2 mr-1 text-sm font-medium text-white bg-indigo-500 rounded-md hover:bg-blue-200' onClick={() => { this.gotoView(currentevent._id) }}>
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
                                <button className='inline-flex items-center px-4 py-2 mr-1 text-sm font-medium text-white bg-red-500 rounded-md hover:bg-red-200' onClick={() => { this.deleteEvent(currentevent._id) }}>
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

    searchWeddingHallList() {
        return this.state.wedding.map((currentWedding) => {
            if (
                this.state.search ==
                currentWedding.hotelName

            ) {
                return (
                    <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
                        {/* <td className='px-6 py-4'>{currentdelivery._id}</td>
                        <td className='px-6 py-4'>{currentdelivery.orderId}</td> */}
                        <td className='px-6 py-4'>{currentWedding.hallName}</td>
                        <td className='px-6 py-4'>{currentWedding.description}</td>
                        <td className='px-6 py-4'>{currentWedding.capacity}</td>
                        <td className='px-6 py-4'>{currentWedding.length}</td>
                        <td className='px-6 py-4'>{currentWedding.width}</td>
                        <td className='px-6 py-4'>{currentWedding.price}</td>
                        {/* <td className='px-6 py-4'>
                            <span
                                class="text-base inline-block whitespace-nowrap rounded-full bg-green-400 p-1 hover:bg-green-500 hover:drop-shadow-md hover:text-white  px-2 pt-[0.35em] pb-[0.25em] text-center align-baseline text-[0.75em] font-bold leading-none text-primary-700">
                                {currentdelivery.orderStatus}
                            </span>
                        </td> */}


                        <td className='px-6 py-4'>
                            <div class="">
                                <button className='inline-flex items-center px-4 py-2 mr-1 text-sm font-medium text-white bg-indigo-500 rounded-md hover:bg-blue-200' onClick={() => { this.gotoWeddingHall(currentWedding._id) }}>
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
                                <button className='inline-flex items-center px-4 py-2 mr-1 text-sm font-medium text-white bg-red-500 rounded-md hover:bg-red-200' onClick={() => { this.deleteWedding(currentWedding._id) }}>
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
            <div>
                <div className="flex flex-col px-5 pt-2">
                    <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                            <div className='items-center overflow-hidden'>
                                <div class="grid grid-cols-1 gap-4 content-start">
                                    <table className=''>
                                        <tr>
                                            <th className='drop-shadow-md'>
                                                <h3>Events and Meetings</h3>
                                            </th>
                                            <td className='flex justify-end gap-2'>
                                                <div class="flex justify-end sm:flex-row sm:text-left sm:justify-end gap-2">
                                                    <button class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                                                        <Link className='font-semibold text-white no-underline' to={"/createEvent"}>
                                                            Add Event
                                                        </Link></button>
                                                </div>

                                            </td>
                                        </tr>
                                    </table>
                                </div>
                                <div class="">
                                    <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400' >
                                        <thead className='p-5 text-xs text-gray-700 uppercase border bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                                            <tr>
                                                {/* <th className="p-2 border-black tbhead ">Delivery Id</th>
                                            <th className="p-2 border-black tbhead ">Order Id</th> */}
                                                <th className="p-2 tbhead">Hall Name</th>
                                                <th className="p-2 tbhead">Description</th>
                                                <th className="p-2 tbhead">Style1</th>
                                                <th className="p-2 tbhead">Capacity1</th>
                                                <th className="p-2 tbhead">Update</th>
                                                <th className="p-2 tbhead">Delete</th>

                                            </tr>
                                        </thead>
                                        <tbody >
                                            {/* {this.state.searchEvent == "" ? this.eventList() : this.searchEventList()} */}
                                            {this.searchEventList()}

                                        </tbody>
                                    </table>
                                </div>
                                <div class="">
                                    <Modal show={this.state.show} onHide={this.closeModalBoxForEvent} centered size={"xl"}>
                                        <Modal.Header className='px-5 pt-4 border-2 shadow-md bg-gray-50' closeButton>
                                            <div class="">
                                                <Modal.Title className='items-center' >
                                                    <p className='font-semibold text-black uppercase '>
                                                        Update Event Details
                                                    </p>
                                                </Modal.Title>
                                            </div>
                                        </Modal.Header >
                                        <Modal.Body className='px-12 py-12 border-2 rounded-lg shadow-md bg-gray-50'>
                                            <EditEvent evId={this.state.id} key={this.state.id} close={this.closeModalBoxForEvent} />
                                        </Modal.Body>
                                    </Modal>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col px-5 pt-2">
                    <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                            <div className='items-center overflow-hidden'>
                                <div class="grid grid-cols-1 gap-4 content-start">
                                    <table className=''>
                                        <tr>
                                            <th className='drop-shadow-md'>
                                                <h3>Wedding Halls</h3>
                                            </th>
                                            <td className='flex justify-end gap-2'>
                                                <div class="flex justify-end sm:flex-row sm:text-left sm:justify-end gap-2">
                                                    <button class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                                                        <Link className='font-semibold text-white no-underline' to={"/createWedding"}>
                                                            Add Wedding Halls
                                                        </Link></button>
                                                </div>

                                            </td>
                                            {/* <td className='flex justify-end gap-2'>
                            <div class="flex justify-end sm:flex-row sm:text-left sm:justify-end gap-2">
                                <button class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" >
                                    
                                        Download Report Here
                                   
                                </button>
                            </div>
                            
                        </td> */}
                                        </tr>
                                    </table>
                                </div>
                                <div class="">
                                    <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400' >
                                        <thead className='p-5 text-xs text-gray-700 uppercase border bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                                            <tr>
                                                {/* <th className="p-2 border-black tbhead ">Delivery Id</th>
                            <th className="p-2 border-black tbhead ">Order Id</th> */}
                                                <th className="p-2 tbhead">Hall Name</th>
                                                <th className="p-2 tbhead">Description</th>
                                                <th className="p-2 tbhead">Capacity</th>
                                                <th className="p-2 tbhead">Length</th>
                                                <th className="p-2 tbhead">Width</th>
                                                <th className="p-2 tbhead">Price</th>
                                                <th className="p-2 tbhead">Update</th>
                                                <th className="p-2 tbhead">Delete</th>

                                            </tr>
                                        </thead>
                                        <tbody >
                                            {/* {this.state.searchEvent == "" ? this.eventList() : this.searchEventList()} */}
                                            {this.searchWeddingHallList()}

                                        </tbody>
                                    </table>
                                </div>
                                <div class="">
                                    <Modal show={this.state.display} onHide={this.closeModalBoxForWedding} centered size={"xl"}>
                                        <Modal.Header className='px-5 pt-4 border-2 shadow-md bg-gray-50' closeButton>
                                            <div class="">
                                                <Modal.Title className='items-center' >
                                                    <p className='font-semibold text-black uppercase '>
                                                        Update Wedding Hall Details
                                                    </p>
                                                </Modal.Title>
                                            </div>
                                        </Modal.Header >
                                        <Modal.Body className='px-12 py-12 border-2 rounded-lg shadow-md bg-gray-50'>
                                            <EditWeddingHall wedId={this.state.id} key={this.state.id} close={this.closeModalBoxForWedding} />
                                        </Modal.Body>
                                    </Modal>
                                </div>

                            </div>
                        </div>
                    </div>
                    </div>
                    <div className="flex flex-col px-5 pt-2">
                    <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                            <div className='items-center overflow-hidden'>
                                <div class="grid grid-cols-1 gap-4 content-start">
                                    <table className=''>
                                        <tr>
                                            <th className='drop-shadow-md'>
                                                <h3>Accomodations</h3>
                                            </th>
                                            <td className='flex justify-end gap-2'>
                                                <div class="flex justify-end sm:flex-row sm:text-left sm:justify-end gap-2">
                                                    <button class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                                                        <Link className='font-semibold text-white no-underline' to={"/createRoom"}>
                                                            Add Accomodation
                                                        </Link></button>
                                                </div>

                                            </td>
                                        </tr>
                                    </table>
                                </div>
                                <div class="">
                                    <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400' >
                                        <thead className='p-5 text-xs text-gray-700 uppercase border bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                                            <tr>
                                                {/* <th className="p-2 border-black tbhead ">Delivery Id</th>
                                            <th className="p-2 border-black tbhead ">Order Id</th> */}
                                               
                                                <th className="p-2 tbhead">Room Name</th>
                                                <th className="p-2 tbhead">Description</th>
                                                <th className="p-2 tbhead">Size</th>
                                                <th className="p-2 tbhead">Price</th>
                                                <th className="p-2 tbhead">View</th>
                                                <th className="p-2 tbhead">Update</th>
                                                <th className="p-2 tbhead">Delete</th>

                                            </tr>
                                        </thead>
                                        <tbody >
                                            {/* {this.state.searchEvent == "" ? this.eventList() : this.searchEventList()} */}
                                            {this.searchRoomList()}

                                        </tbody>
                                    </table>
                                </div>
                                <div class="">
                                    <Modal show={this.state.pop} onHide={this.closeModalBoxForRoomDetails} centered size={"xl"}>
                                        <Modal.Header className='px-5 pt-4 border-2 shadow-md bg-gray-50' closeButton>
                                            <div class="">
                                                <Modal.Title className='items-center' >
                                                    <p className='font-semibold text-black uppercase '>
                                                        Event Details
                                                    </p>
                                                </Modal.Title>
                                            </div>
                                        </Modal.Header >
                                        <Modal.Body className='px-12 py-12 border-2 rounded-lg shadow-md bg-gray-50'>
                                            <RoomDetails rmId={this.state.id} key={this.state.id} close={this.closeModalBoxForRoomDetails} />
                                        </Modal.Body>
                                    </Modal>
                                </div>
                                <div class="">
                                    <Modal show={this.state.view} onHide={this.closeModalBoxForRoomUpdate} centered size={"xl"}>
                                        <Modal.Header className='px-5 pt-4 border-2 shadow-md bg-gray-50' closeButton>
                                            <div class="">
                                                <Modal.Title className='items-center' >
                                                    <p className='font-semibold text-black uppercase '>
                                                        Update Accomodation Details
                                                    </p>
                                                </Modal.Title>
                                            </div>
                                        </Modal.Header >
                                        <Modal.Body className='px-12 py-12 border-2 rounded-lg shadow-md bg-gray-50'>
                                            <EditRoom rmId={this.state.id} key={this.state.id} close={this.closeModalBoxForRoomUpdate} />
                                        </Modal.Body>
                                    </Modal>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
               
            </div>

            
        )
    }
}

