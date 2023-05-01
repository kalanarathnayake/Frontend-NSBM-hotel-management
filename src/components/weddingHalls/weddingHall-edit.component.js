import React, { Component } from 'react';
import axios from 'axios';
import * as Swal from "sweetalert2";

export class EditWeddingHall extends Component {
    constructor(props) {
        super(props);
        this.onChangeHotelName = this.onChangeHotelName.bind(this);
        this.onChangeHallName = this.onChangeHallName.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeCapacity = this.onChangeCapacity.bind(this);
        this.onChangeLength = this.onChangeLength.bind(this);
        this.onChangeWidth = this.onChangeWidth.bind(this);
        this.onChangePrice = this.onChangePrice.bind(this);

       
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            id : props.wedId,
            hotelName: '',
            hallName: '',
            description: '',
            capacity: '',
            length:'',
            width: '',
            price:''
        }
    }

    componentDidMount() {
        axios.get(`http://localhost:5000/weddingHall/`+ this.state.id)
        .then(response => {
            this.setState({
            hotelName : response.data.hotelName,
            hallName : response.data.hallName,
            description : response.data.description,
            capacity : response.data.capacity,
            length : response.data.length,
            width : response.data.width,
            price : response.data.price,
         
                })
            })
            .catch(function(error) {
                console.log(error);
            })

        }

    onChangeHotelName(e) {
        this.setState({
            hotelName: e.target.value
        });
    }

    onChangeHallName(e) {
        this.setState({
            hallName: e.target.value
        });
    }

    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        });
    }

    onChangeCapacity(e) {
        this.setState({
            capacity: e.target.value
        });
    }

    onChangeLength(e) {
        this.setState({
            length: e.target.value
        });
    }

    onChangeWidth(e) {
        this.setState({
            width: e.target.value
        });
    }

    onChangePrice(e) {
        this.setState({
            price: e.target.value
        });
    }

    

    onSubmit(e) {
        e.preventDefault();

        const weddinghalls = {
            hotelName: this.state.hotelName,
            hallName: this.state.hallName,
            description: this.state.description,
            capacity: this.state.capacity,
            length: this.state.length,
            with: this.state.width,
            price: this.state.price,
          

        }

        console.log(weddinghalls);

        // if (this.state.fullName.length < 6) {
        //     this.setState({ fullNameError: "Your Name is too short" })
        // } else if (!this.state.email || regex.test(this.state.email) === false) {
        //     this.setState({ emailError: "Please Enter a valid email." })
        // } else if (this.state.contactNo.length != 10) {
        //     this.setState({ contactError: "Please Enter a valid Phone Number." })
        // } else if (this.state.address.length < 10) {
        //     this.setState({ addressError: "Your address is too short." })
        // } else {

        axios.put('http://localhost:5000/weddingHall/' + this.state.id, weddinghalls)

                .then(res => {

                    console.log(res);

                    if (res.status === 200) {

                        Swal.fire({
                            icon: 'success',
                            title: 'Successful',
                            text: 'Wedding Hall has been Updated!!',
                            background: '#fff',
                            confirmButtonColor: '#333533',
                            iconColor: '#60e004'
                        })
                        this.clearData();

                    } else {
                        Swal.fire({
                            icon: 'error',
                            title: 'Error',
                            text: 'Error in updating!',
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
            hallName: '',
            description: '',
            capacity: '',
            length:'',
            width: '',
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

                                    <div class="">
                                        {/* <p className='text-4xl font-semibold text-black uppercase'>
                                            Add Wedding Hall
                                        </p> */}

                                        <div className="form-group">
                                            <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>Hotel Name</label>
                                            <input type="text"
                                                required
                                                className="form-control "
                                                value={this.state.hotelName}
                                                onChange={this.onChangeHotelName}
                                            />
                                            <p/>
                                            {/* <p className="block text-lg font-medium text-red-900 dark:text-white">{this.state.fullNameError}</p> */}
                                        </div>

                                      
                                            <div className="form-group">
                                                <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>Hall Name</label>
                                                <input type="text"
                                                    required
                                                    className="form-control"
                                                    value={this.state.hallName}
                                                    onChange={this.onChangeHallName}
                                                />
                                                
                                                <p/>{/* <p className="block text-lg font-medium text-red-900 dark:text-white">{this.state.emailError}</p> */}
                                            </div>
                                            <div className="form-group">
                                                <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>Description</label>
                                                <textarea type="text"
                                                    required
                                                    className="form-control"
                                                    value={this.state.description}
                                                    onChange={this.onChangeDescription}
                                                />
                                                  <p/>
                                                {/* <p className="block text-lg font-medium text-red-900 dark:text-white">{this.state.contactError}</p> */}
                                            </div>
                                       
                                            
                                        <div className="form-group">
                                            <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>Capacity</label>
                                            <input type="text"
                                                required
                                                className="form-control"
                                                value={this.state.capacity}
                                                onChange={this.onChangeCapacity}
                                            />
                                                 

                                           
                                            {/* <p className="block text-lg font-medium text-red-900 dark:text-white">{this.state.addressError}</p> */}
                                        </div>
                                        <p/>
                                        
                                        
                                        <div className="grid grid-cols-2 gap-4 form-group">
                                        <div className="form-group">
                                            <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>Length</label>
                                            <input type="text"
                                       
                                                className="form-control"
                                                value={this.state.length}
                                                onChange={this.onChangeLength}
                                            />
                                                 
                                            {/* <p className="block text-lg font-medium text-red-900 dark:text-white">{this.state.addressError}</p> */}
                                        </div>
                                        <div className="form-group">
                                            <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>Width</label>
                                            <input type="text"
                                           
                                                className="form-control"
                                                value={this.state.width}
                                                onChange={this.onChangeWidth}
                                            />
                                            {/* <p className="block text-lg font-medium text-red-900 dark:text-white">{this.state.addressError}</p> */}
                                        </div>
                                    
                                        </div>
                                        <p/>

                                      
                                        <div className="form-group">
                                            <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>Price</label>
                                            <input type="text"
                                            
                                                className="form-control"
                                                value={this.state.price}
                                                onChange={this.onChangePrice}
                                            />
                                                
                                            {/* <p className="block text-lg font-medium text-red-900 dark:text-white">{this.state.addressError}</p> */}
                                        </div>
                                       
                                        <p/>

                                        
                                       

                                        <div className="text-center align-middle form-group">
                                            <input className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800' type="submit" value="Update Wedding Hall" />
                                        </div>
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