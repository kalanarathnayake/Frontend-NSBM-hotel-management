import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Swal from "sweetalert2";
// import jsPDF from 'jspdf';
import 'jspdf-autotable';
// import { Modal } from "react-bootstrap";
// import { ViewDeliveryDetails } from './deliveryDetails-view.component';

// const Event = props => (
//     <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
       
//         <td className='px-6 py-4'>{props.event.hotelName}</td>
//         <td className='px-6 py-4'>{props.event.hallName}</td>
//         <td className='px-6 py-4'>{props.event.description}</td>
//         <td className='px-6 py-4'>{props.event.style1}</td>
//         <td className='px-6 py-4'>{props.event.capacity1}</td>
//         {/* <td className='px-6 py-4'> */}
//             {/* <div class="flex justify-center">
//                 <div class="">
//                     <button className='inline-flex items-center px-4 py-2 ml-1 text-sm font-medium text-white duration-100 bg-yellow-500 rounded-md hover:bg-yellow-200' onClick={() => { props.gotoView(props.delivery._id) }}>
                       
//                             <div class=" grid grid-cols-2 gap-1 hover:text-black duration-100">
//                                 <div class="">
//                                     <svg class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                         <path stroke-linecap="round" stroke-linejoin="round " stroke-width="2" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"></path>
//                                     </svg>
//                                 </div>
//                                 <div class="">
//                                     View
//                                 </div>
//                             </div>
                       
//                     </button>
//                 </div>
//                 </div>
//                 </td> */}
//         {/* <td className='px-6 py-4'>
//             <div class="flex justify-center">
//                 <div class="">
//                     <button className='inline-flex items-center px-4 py-2 ml-1 text-sm font-medium text-white duration-100 bg-indigo-500 rounded-md hover:bg-blue-200'>
                        
//                             <div class=" grid grid-cols-2 gap-1 hover:text-black duration-100">
//                                 <div class="">
//                                     <svg class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                         <path stroke-linecap="round" stroke-linejoin="round " stroke-width="2" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"></path>
//                                     </svg>
//                                 </div>
//                                 <div class="">
//                                     Delivery Completed
//                                 </div>
//                             </div>
                       
//                     </button>
//                 </div>
//             </div>
//         </td> */}

//     </tr>
// )

export class ViewEvent extends Component {

    constructor(props) {
        super(props);

this.updateDeliveryStatus = this.updateDeliveryStatus.bind(this);
this.gotoView = this.gotoView.bind(this);



        this.state = {
            event: [],
            wedding:[],
            searchEvent: "Jetwing Blue",
            show:false
        };
    }


    componentDidMount() {
       this.refreshList();
       this.weddingHallList()
        }

        refreshList(){
            axios.get('http://localhost:5000/event/')
            .then(response => {
                this.setState({ event: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
        }

        weddingHallList(){
            axios.get('http://localhost:5000/weddingHall/')
            .then(response => {
                this.setState({ wedding: response.data })
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
            console.log("LIst id is :" +id);
        }
    
        //Modal box
        closeModalBoxForView = () => {
            this.setState({ show: false })
            this.refreshList();
           
        }

        updateDeliveryStatus(id) {
            const delivery = {
                orderStatus: 'Delivery Completed'
            }

            // console.log("delivery Id is"+id);
            axios.put('http://localhost:5000/delivery/status/' + id, delivery)
                .then(res => console.log(res.data));
            window.location ='/ongoingDelivery';
        }

    // eventList() {
    //     return this.state.event.map(currentevent => {
    //         return <Event event={currentevent}   key={currentevent._id}/>;
    //     })
    // }

    searchEventList() {
        return this.state.event.map((currentevent) => {
            if (
                this.state.searchEvent ==
                currentevent.hotelName 
              
            ) {
                return (
                    <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
                         {/* <td className='px-6 py-4'>{currentdelivery._id}</td>
                        <td className='px-6 py-4'>{currentdelivery.orderId}</td> */}
                        <td className='px-6 py-4'>{currentevent.hallName}</td>
                        <td className='px-6 py-4'>{currentevent.description}</td>
                        <td className='px-6 py-4'>{currentevent.style1}</td>
                        <td className='px-6 py-4'>{currentevent.capacity1}</td>
                        {/* <td className='px-6 py-4'>
                            <span
                                class="text-base inline-block whitespace-nowrap rounded-full bg-green-400 p-1 hover:bg-green-500 hover:drop-shadow-md hover:text-white  px-2 pt-[0.35em] pb-[0.25em] text-center align-baseline text-[0.75em] font-bold leading-none text-primary-700">
                                {currentdelivery.orderStatus}
                            </span>
                        </td> */}
                        

                        {/* <td className='px-6 py-4'>
                            {
                                <div class="flex justify-center">
                                <div class="">
                                <button className='inline-flex items-center px-4 py-2 ml-1 text-sm font-medium text-white duration-100 bg-yellow-500 rounded-md hover:bg-yellow-200' onClick={() => { this.gotoView(currentdelivery._id) }}>
                                    
                                <div class=" grid grid-cols-2 gap-1 hover:text-black duration-100">
                                <div class="">
                                    <svg class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round " stroke-width="2" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"></path>
                                    </svg>
                                </div>
                                <div class="">
                                    View
                                </div>
                            </div>
                                    
                                </button>
                                </div>
                               </div> 
                            }
                            </td>
                        <td className='flex justify-center px-6 py-4 '>
                            {
                                <div class="">
                                    <button className='inline-flex items-center px-4 py-2 mr-1 text-sm font-medium text-white bg-indigo-500 rounded-md hover:bg-blue-200' onClick={() => { this.updateDeliveryStatus(currentdelivery._id) }}>
                                        
                                            <div class=" grid grid-cols-2 gap-1">
                                                <div class="">
                                                    <svg class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round " stroke-width="2" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"></path>
                                                    </svg>
                                                </div>
                                                <div class="">
                                                    Delivery Completed
                                                </div>
                                            </div>
                                        
                                    </button>
                                </div>
                            }
                        </td> */}

                       
                    </tr>
                );
            }
        });
    }

    searchWeddingHallList() {
        return this.state.wedding.map((currentWedding) => {
            if (
                this.state.searchEvent ==
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
                        

                        {/* <td className='px-6 py-4'>
                            {
                                <div class="flex justify-center">
                                <div class="">
                                <button className='inline-flex items-center px-4 py-2 ml-1 text-sm font-medium text-white duration-100 bg-yellow-500 rounded-md hover:bg-yellow-200' onClick={() => { this.gotoView(currentdelivery._id) }}>
                                    
                                <div class=" grid grid-cols-2 gap-1 hover:text-black duration-100">
                                <div class="">
                                    <svg class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round " stroke-width="2" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"></path>
                                    </svg>
                                </div>
                                <div class="">
                                    View
                                </div>
                            </div>
                                    
                                </button>
                                </div>
                               </div> 
                            }
                            </td>
                        <td className='flex justify-center px-6 py-4 '>
                            {
                                <div class="">
                                    <button className='inline-flex items-center px-4 py-2 mr-1 text-sm font-medium text-white bg-indigo-500 rounded-md hover:bg-blue-200' onClick={() => { this.updateDeliveryStatus(currentdelivery._id) }}>
                                        
                                            <div class=" grid grid-cols-2 gap-1">
                                                <div class="">
                                                    <svg class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round " stroke-width="2" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"></path>
                                                    </svg>
                                                </div>
                                                <div class="">
                                                    Delivery Completed
                                                </div>
                                            </div>
                                        
                                    </button>
                                </div>
                            }
                        </td> */}

                       
                    </tr>
                );
            }
        });
    }


    // exportDelivery = () => {
    //     console.log( "Export PDF" )


    //     const unit = "pt";
    //     const size = "A3"; 
    //     const orientation = "landscape"; 
    //     const marginLeft = 40;
    //     const doc = new jsPDF( orientation, unit, size );

    //     const title = "Completed Delivery List Report ";
    //     const headers = [["Delivery ID","Order ID","Customer","Item 1","Quantity 1","Item 2","Quantity 2","Item 3","Quantity 3","Delivery Address","Amount","Order Status","Assigned Driver"]];

    //     const del = this.state.delivery.map(
    //         Delivery=>[
    //             Delivery._id,
    //             Delivery.orderId,
    //             Delivery.customer,
    //             Delivery.item1,
    //             Delivery.quantity1,
    //             Delivery.item2,
    //             Delivery.quantity2,
    //             Delivery.item3,
    //             Delivery.quantity3,
    //             Delivery.deleteDelivery,
    //             Delivery.amount,
    //             Delivery.orderStatus,
    //             Delivery.assignedEmp,
    //         ]
    //     );

        

    //     let content = {
    //         startY: 50,
    //         head: headers,
    //         body:del
    //     };
    //     doc.setFontSize( 20 );
    //     doc.text( title, marginLeft, 40 );
    //     require('jspdf-autotable');
    //     doc.autoTable( content );
    //     doc.save( "Completed-Delivery-list.pdf" )
    // }



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
                                            <th className="p-2 tbhead">Style1</th>
                                            <th className="p-2 tbhead">Capacity1</th>
                                          
                                        </tr>
                                    </thead>
                                    <tbody >
                                        {/* {this.state.searchEvent == "" ? this.eventList() : this.searchEventList()} */}
                                        {this.searchEventList()}

                                    </tbody>
                                </table>
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
                            <h3>Events and Meetings</h3>
                        </th>
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
                          
                        </tr>
                    </thead>
                    <tbody >
                        {/* {this.state.searchEvent == "" ? this.eventList() : this.searchEventList()} */}
                        {this.searchWeddingHallList()}

                    </tbody>
                </table>
            </div>


        </div>
    </div>
</div>
</div>
</div>
        )
    }
}

