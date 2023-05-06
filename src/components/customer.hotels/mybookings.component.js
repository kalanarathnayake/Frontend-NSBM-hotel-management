import React, { Component } from 'react';
import axios from 'axios';
import AuthenticationService from '../user/AuthenticationService';

export class MyBookingDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bookings: [],
            hotelName: '',
            roomName: '',
            numofRooms: '',
            checkinDate: '',
            checkoutDate: '',
            price: '',
            search: AuthenticationService.loggedUserId()
        }
    }

    componentDidMount() {
        this.bookingList();
    }

    bookingList() {
        axios.get('http://localhost:5000/booking/')
            .then(response => {
                this.setState({ bookings: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    searchMyBookingList() {
        return this.state.bookings.map((currentevent) => {
            if (
                this.state.search === currentevent.userName
            ) {
                return (
                    <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
                        <td class='h-20 text-lg w-44 justify-center px-8'>{currentevent.hotelName}</td>
                        <td class='h-20 text-lg w-44 justify-center px-8'>{currentevent.roomName}</td>
                        <td class='h-20 text-lg w-44 justify-center px-8'>{currentevent.numofRooms}</td>
                        <td class='h-20 text-lg w-44 justify-center px-8'>{currentevent.checkinDate.substring(0, 10)}</td>
                        <td class='h-20 text-lg w-44 justify-center px-8'>{currentevent.checkoutDate.substring(0, 10)}</td>
                        <td class='h-20 text-lg w-44 justify-center px-8'>{currentevent.price}</td>
                    </tr>
                );
            }
        });
    }

    render() {
        return (
            <div>
                <div class="w-100">
                    <img src="https://www.jetwinghotels.com/jetwingyala/wp-content/uploads/sites/32/2018/03/yala-location-desktop.jpg" alt="Shoes" />
                    <section class="">
                        <div class="text-center bg-white text-gray-800 px-6 pt-12">
                            <h1 class="text-4xl text-blue-950  font-bold tracking-tight uppercase drop-shadow-md ">My Bookings<br />
                            </h1>
                        </div>
                    </section>
                    <div class="container mx-auto px-5 py-2 lg:px-32 lg:pt-12 mb-16" >
                        <div class="p-10">
                            <div class="py-2 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow  md:max-w-7xl  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                                <table>
                                    <thead>
                                        <tr class="h-24 text-lg"><th class='w-44 justify-center px-8'>Hotel Name</th>
                                            <th class='w-44 justify-center px-8'>Room Name</th>
                                            <th class='w-44 justify-center px-8'>Number of Rooms</th>
                                            <th class='w-44 justify-center px-8'>Checkin Date</th>
                                            <th class='w-44 justify-center px-8'>CheckoutDate</th>
                                            <th class='w-44 justify-center px-8'>Price(LKR)</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.searchMyBookingList()}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}