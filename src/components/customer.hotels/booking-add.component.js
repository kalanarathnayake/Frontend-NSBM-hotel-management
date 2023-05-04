import React, {Component} from 'react';
import axios from 'axios';
import Swal from "sweetalert2";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css"
import AuthenticationService from '../user/AuthenticationService';
import CreatePayment from './payment-add.component';
import { Modal } from "react-bootstrap";


export default class CreateBooking extends Component {

    
    constructor(props){
        super(props);
        this.onChangeHotelName = this.onChangeHotelName.bind(this);
        this.onChangeRoomName = this.onChangeRoomName.bind(this);
        this.onChangeNumberOfDays = this.onChangeNumberOfDays.bind(this);
        this.onChangeNumberOfRooms = this.onChangeNumberOfRooms.bind(this);
        this.onChangeCheckinDate = this.onChangeCheckinDate.bind(this);
        this.onChangeCheckoutDate = this.onChangeCheckoutDate.bind(this);
        this.onChangeCardNumber = this.onChangeCardNumber.bind(this);
        this.onChangeBankName = this.onChangeBankName.bind(this);
        this.onChangeAccName = this.onChangeAccName.bind(this);
        this.onChangeCVCNum = this.onChangeCVCNum.bind(this);

        this.onSubmit = this.onSubmit.bind(this);

        

        this.state = {

            id:props.rmId,
            hotelName: '',
            roomName: '',
            numofRooms:'',
            numofdays:'',
           checkinDate:new Date(),
           checkoutDate:new Date(),
           display:false,
           show:false,
           cardNum: '',
           bankName: '',
           accName:'',
           cvcNum:'',
            
        }
    }

    onChangeCardNumber(e) {
        this.setState({
            cardNum: e.target.value
        });
    }

    onChangeBankName(e) {
        this.setState({
            bankName: e.target.value
        });
    }

    onChangeAccName(e) {
        this.setState({
            accName: e.target.value
        });
    }

    onChangeCVCNum(e) {
        this.setState({
            cvcNum: e.target.value
        });
    }

    onChangeHotelName(e) {
        this.setState({
            hotelName: e.target.value
        });
    }

    onChangeRoomName(e) {
        this.setState({
            roomName: e.target.value
        });
    }

    onChangeNumberOfDays(e) {
        this.setState({
            numofdays: e.target.value
        });
    }

    onChangeNumberOfRooms(e) {
        this.setState({
            numofRooms: e.target.value
        });
    }

    onChangeCheckinDate(date) {
        this.setState({
            checkinDate: date
        });
    }

    onChangeCheckoutDate(date) {
        this.setState({
            checkoutDate: date
        });
    }

    componentDidMount() {
        axios.get(`http://localhost:5000/room/`+ this.state.id)
        .then(response => {
            this.setState({
            hotelName : response.data.hotelName,
            roomName : response.data.roomName,
            description : response.data.description,
            size : response.data.size,
            numofPeople : response.data.numofPeople,
            view : response.data.view,
            feature1 : response.data.feature1,
            feature2 : response.data.feature2,
            feature3 : response.data.feature3,
            feature4 : response.data.feature4,
            feature5 : response.data.feature5,
            feature6 : response.data.feature6,
            feature7 : response.data.feature7,
            feature8 : response.data.feature8,
            feature9 : response.data.feature9,
            feature10 : response.data.feature10,
            price : response.data.price,
                })
            })
            .catch(function(error) {
                console.log(error);
            })

        }

        gotoPayment = (id) => {
            this.setState({
              id: id,
              display: true
        
            })
            console.log("List id is :" + id);
          }
        
          //Modal box
          closeModalBoxForPayment = () => {
            this.setState({ display: false })
        
           
        
          }

        

        calculatePrice(numofRooms,numofdays,price){


            // const numofdays = checkoutDate - checkinDate
            // console.log("Number Of Stays" +numofdays);

            let finalAmount = numofdays * numofRooms * price
            return finalAmount;


        }

        closeModalBoxForBooking = () => {
            this.setState({ show: false })
        
           
        
          }

        onSubmit(e) {

            const loggedUserId = AuthenticationService.loggedUserId();
            e.preventDefault();

            // const priceFinal = this.calculatePrice(this.state.numofRooms,this.state.numofdays,this.state.price)
    
            const booking = {
                hotelName: this.state.hotelName,
                roomName: this.state.roomName,
                userName: AuthenticationService.loggedUserId(),
                numofRooms: this.state.numofRooms,
                checkinDate: this.state.checkinDate,
                checkoutDate: this.state.checkoutDate,
                price:this.state.price,
                paymentStatus:"Paid",
                bankName:this.state.bankName,
                accName:this.state.accName

    
            }
    
            console.log(booking);
    
            // if (this.state.fullName.length < 6) {
            //     this.setState({ fullNameError: "Your Name is too short" })
            // } else if (!this.state.email || regex.test(this.state.email) === false) {
            //     this.setState({ emailError: "Please Enter a valid email." })
            // } else if (this.state.contactNo.length != 10) {
            //     this.setState({ contactError: "Please Enter a valid Phone Number." })
            // } else if (this.state.address.length < 10) {
            //     this.setState({ addressError: "Your address is too short." })
            // } else {
    
                axios.post('http://localhost:5000/booking/', booking)
    
                    .then(res => {
    
                        console.log(res);

                        
    
                        const bkId = res.data;
                        if (res.status === 200) {
    
                            Swal.fire({
                                icon: 'success',
                                title: 'Successful',
                                text: 'Booking is Completed!!',
                                background: '#fff',
                                confirmButtonColor: '#333533',
                                iconColor: '#60e004'
                            })
                            this.clearData();
    
                        } else {
                            Swal.fire({
                                icon: 'error',
                                title: 'Error',
                                text: 'Error in adding!',
                                background: '#fff',
                                confirmButtonColor: '#333533',
                                iconColor: '#e00404'
                            })
                        }

                       
                        
                       
                    })
                // window.location = '/customer';
                // }
            // }
        }
    
        clearData = () => {
            this.setState({
                hotelName: '',
                roomName: '',
                numofRooms:'',
                numofDays:'',
                checkinDate: '',
                checkoutDate:'',
                cardNum: '',
                bankName: '',
                accName:'',
                cvcNum:'',
                price:''
            })
        }

       

    render() {
        return (
            <div className="flex flex-col px-5 pt-2 ">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                        <div className='items-center overflow-hidden'>
                            <div class="grid grid-cols-1 gap-4 content-start pt-5 px-20">

                                <form className='px-12 py-12 border-2 rounded-lg shadow-md bg-gray-50' onSubmit={this.onSubmit}>

                                <div>
                                            <h3 class="pb-4">Accomodation Details</h3>
                                        </div>
                                        
                                <div className="grid grid-cols-2 gap-4 form-group">
                                        <div className="form-group">
                                            <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>Hotel Name</label>
                                            <input type="text"
                                                required
                                                readOnly
                                                className="form-control "
                                                value={this.state.hotelName}
                                                onChange={this.onChangeHotelName}
                                                
                                            />
                                            <p/>
                                            {/* <p className="block text-lg font-medium text-red-900 dark:text-white">{this.state.fullNameError}</p> */}
                                        </div>

                                      
                                            <div className="form-group">
                                                <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>Room Name</label>
                                                <input type="text"
                                                    required
                                                    readOnly
                                                    className="form-control"
                                                    value={this.state.roomName}
                                                    onChange={this.onChangeRoomName}
                                                   
                                                />
                                                
                                                <p/>{/* <p className="block text-lg font-medium text-red-900 dark:text-white">{this.state.emailError}</p> */}
                                            </div>
                                            </div>
                                            <div className="form-group">
                                                <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>Price of the Room (LKR)</label>
                                                <input type="text"
                                                    required
                                                    readOnly
                                                    className="form-control"
                                                    value={this.state.price}
                                                   
                                                   
                                                />
                                                
                                                <p/>{/* <p className="block text-lg font-medium text-red-900 dark:text-white">{this.state.emailError}</p> */}
                                            </div>
                                            <div className="grid grid-cols-2 gap-4 form-group">
                                            <div className="form-group">
                                                <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>Number Of Rooms</label>
                                                <input type="text"
                                                    required
                                                   
                                                    className="form-control"
                                                    value={this.state.numofRooms}
                                                    onChange={this.onChangeNumberOfRooms}
                                                   
                                                />
                                                  <p/>
                                                {/* <p className="block text-lg font-medium text-red-900 dark:text-white">{this.state.contactError}</p> */}
                                            </div>
                                            
                                            <div className="form-group">
                                                <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>Number Of Days</label>
                                                <input type="text"
                                                    required
                                                    
                                                    className="form-control"
                                                    value={this.state.numofdays}
                                                    onChange={this.onChangeNumberOfDays}
                                                   
                                                />
                                                  <p/>
                                                {/* <p className="block text-lg font-medium text-red-900 dark:text-white">{this.state.contactError}</p> */}
                                            </div>
                                            </div>


                                            <div className="grid grid-cols-2 gap-4 form-group">
                                            <div className="form-group">
                                                <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>Checkin Date</label>
                                                <DatePicker
                                                            viewBox="0 0 20 40"
                                                            required
                                                            format = "y-MM-dd"
                                                            selected={this.state.checkinDate}
                                                            onChange={this.onChangeCheckinDate}
                                                        />
                                                  <p/>
                                                {/* <p className="block text-lg font-medium text-red-900 dark:text-white">{this.state.contactError}</p> */}
                                            </div>
                                            
                                            <div className="form-group">
                                                <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>Checkout Date</label>
                                                <DatePicker
                                                            viewBox="0 0 20 40"
                                                            required
                                                            format = "y-MM-dd"
                                                            selected={this.state.checkoutDate}
                                                            onChange={this.onChangeCheckoutDate}
                                                        />
                                                  <p/>
                                                {/* <p className="block text-lg font-medium text-red-900 dark:text-white">{this.state.contactError}</p> */}
                                            </div>
                                            </div>
                                            <p/>
                                       
                                            {/* <div className="grid grid-cols-2 gap-4 form-group">
                                        <div className="form-group">
                                            <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>Check In Date</label>
                                            <DatePicker
                                                            viewBox="0 0 20 40"
                                                            required
                                                            format = "y-MM-dd"
                                                            selected={this.state.checkinDate}
                                                            onChange={this.onChangeCheckinDate}
                                                        />
                                                

                                           
                                           
                                        </div>
                                        
                                        <p/>

                                        <div className="form-group">
                                            <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>Check Out Date</label>
                                            <DatePicker
                                                            viewBox="0 0 20 40"
                                                            required
                                                            format = "y-MM-dd"
                                                            selected={this.state.checkoutDate}
                                                            onChange={this.onChangeCheckoutDate}
                                                        />
                                                

                                           
                                           
                                        </div>
                                        </div>
                                        
                                        <p/> */}
                                        
                                       
                                       
                                       
                                    
                                        
                                        
                                        
                                        
                                    
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                      

                                        

                                        <div>
                                            <h3 class="pb-4">Payment Details</h3>
                                        </div>

                                        <div className="form-group">
                                                <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>Price</label>
                                                <input type="text"
                                                    required
                                                    
                                                    className="form-control"
                                                    value={this.calculatePrice(this.state.numofRooms,this.state.numofdays,this.state.price)}
                                                    
                                                   
                                                />
                                                  <p/>
                                                {/* <p className="block text-lg font-medium text-red-900 dark:text-white">{this.state.contactError}</p> */}
                                            </div>

                                            <div className="grid grid-cols-2 gap-4 form-group">
                                            <div className="form-group">
                                                <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>Bank Name</label>
                                                <select type="text"
                                                    required
                                                    
                                                    className="form-control"
                                                    value={this.state.bankName}
                                                    onChange={this.onChangeBankName}
                                                    
                                                   
                                                >
                                                      <option>Select From Here</option>
                                                    <option>Bank Of Ceylon</option>
                                                    <option>Nations Trust Bank</option>
                                                    <option>Hatton National Bank</option>
                                                    <option>Sampath Bank</option>
                                                    <option>Commercial Bank</option>
                                                    <option>National Savings Bank</option>
                                                    <option>Amanaa Bank</option>
                                                </select>
                                                  <p/>
                                                {/* <p className="block text-lg font-medium text-red-900 dark:text-white">{this.state.contactError}</p> */}
                                            </div>

                                            <div className="form-group">
                                                <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>Account Name</label>
                                                <input type="text"
                                                    required
                                                    
                                                    className="form-control"
                                                    value={this.state.accName}
                                                    onChange={this.onChangeAccName}
                                                    
                                                   
                                                />
                                                  <p/>
                                                {/* <p className="block text-lg font-medium text-red-900 dark:text-white">{this.state.contactError}</p> */}
                                            </div>
                                            </div>

                                            <div className="grid grid-cols-2 gap-4 form-group">
                                            <div className="form-group">
                                                <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>Card Number</label>
                                                <input type="text"
                                                    required
                                                    
                                                    className="form-control"
                                                    value={this.state.cardNum}
                                                    onChange={this.onChangeCardNumber}
                                                    
                                                   
                                                />
                                                  <p/>
                                                {/* <p className="block text-lg font-medium text-red-900 dark:text-white">{this.state.contactError}</p> */}
                                            </div>

                                            <div className="form-group">
                                                <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>CVC</label>
                                                <input type="text"
                                                    required
                                                    
                                                    className="form-control"
                                                    value={this.state.cvcNum}
                                                    onChange={this.onChangeCVCNum}
                                                    
                                                   
                                                />
                                                  <p/>
                                                {/* <p className="block text-lg font-medium text-red-900 dark:text-white">{this.state.contactError}</p> */}
                                            </div>
                                            </div>
                                   
                                   <div className="text-center align-middle form-group">
                                            <input className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800' type="submit" value="Add Booking" />
                                        </div>

                                </form>

                            </div>
                           
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}