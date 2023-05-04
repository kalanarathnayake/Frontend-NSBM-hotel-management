import React, {Component} from 'react';
import axios from 'axios';
import Swal from "sweetalert2";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css"
import AuthenticationService from '../user/AuthenticationService';


export default class CreatePayment extends Component {

    
    constructor(props){
        super(props);
        this.onChangeCardNumber = this.onChangeCardNumber.bind(this);
        this.onChangeBankName = this.onChangeBankName.bind(this);
        this.onChangeAccName = this.onChangeAccName.bind(this);
        this.onChangeCVCNum = this.onChangeCVCNum.bind(this);
        

        this.onSubmit = this.onSubmit.bind(this);

        

        this.state = {

            id:props.bkId,
            cardNum: '',
            bankName: '',
            accName:'',
            cvcNum:'',
            price:''
          
            
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

   

    componentDidMount() {
        axios.get('http://localhost:5000/booking/'+ this.state.id)
        .then(response => {
            this.setState({
            bookingId : response.data._id,
            price:response.data.price
           
                })
            })
            .catch(function(error) {
                console.log(error);
            })

        }


        onSubmit(e) {

           
    
            const booking = {
                paymentStatus: 'Paid',
                accName: this.state.accName,
                bankName: this.state.bankName,
               
    
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
    
                axios.put('http://localhost:5000/booking/payment'+this.state.id, booking)
    
                    .then(res => {
    
                        console.log(res);
    
                        if (res.status === 200) {
    
                            Swal.fire({
                                icon: 'success',
                                title: 'Successful',
                                text: 'Payment has been added!!',
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

                                <form className='px-12 py-12 border-2 rounded-lg shadow-md bg-gray-50'  onSubmit={this.onSubmit}>

                                  
                                        

                                        <div className="form-group">
                                            <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>Booking ID</label>
                                            <input type="text"
                                                required
                                                readOnly
                                                className="form-control "
                                                value={this.state.id}
                                               
                                                
                                            />
                                            <p/>
                                            {/* <p className="block text-lg font-medium text-red-900 dark:text-white">{this.state.fullNameError}</p> */}
                                        </div>

                                        <div className="form-group">
                                            <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>Price(LKR)</label>
                                            <input type="text"
                                                required
                                                readOnly
                                                className="form-control "
                                                value={this.state.price}
                                               
                                                
                                            />
                                            <p/>
                                            {/* <p className="block text-lg font-medium text-red-900 dark:text-white">{this.state.fullNameError}</p> */}
                                        </div>

                                      
                                            <div className="form-group">
                                                <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>Bank Name</label>
                                                <input type="text"
                                                    required
                                                 
                                                    className="form-control"
                                                    value={this.state.bankName}
                                                    onChange={this.onChangeBankName}
                                                   
                                                />
                                                
                                                <p/>{/* <p className="block text-lg font-medium text-red-900 dark:text-white">{this.state.emailError}</p> */}
                                            </div>
                                            <div className="form-group">
                                                <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>Card Number</label>
                                                <input type="text"
                                                    required
                                                  
                                                    className="form-control"
                                                    value={this.state.cardNum}
                                                    onChange={this.onChangeCardNumber}
                                                   
                                                   
                                                />
                                                
                                                <p/>{/* <p className="block text-lg font-medium text-red-900 dark:text-white">{this.state.emailError}</p> */}
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
                                            <div className="form-group">
                                                <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>CVC Number</label>
                                                <input type="text"
                                                    required
                                                    
                                                    className="form-control"
                                                    value={this.state.cvcNum}
                                                    onChange={this.onChangeCVCNum}
                                                   
                                                />
                                                  <p/>
                                                {/* <p className="block text-lg font-medium text-red-900 dark:text-white">{this.state.contactError}</p> */}
                                            </div>
                                       
                                           
                                       
                                        
                                       
                                       
                                       
                                    
                                        
                                        
                                        
                                        
                                    
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                      

                                        <div className="text-center align-middle form-group">
                                            <input className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800' type="submit" value="Add Payment" />
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