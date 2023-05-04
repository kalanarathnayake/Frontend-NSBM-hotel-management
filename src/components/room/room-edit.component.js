import React, { Component } from 'react';
import axios from 'axios';
import Swal from "sweetalert2";


export default class EditRoom extends Component {


    constructor(props) {
        super(props);

        this.onChangeHotelName = this.onChangeHotelName.bind(this);
        this.onChangeRoomName = this.onChangeRoomName.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeSize = this.onChangeSize.bind(this);
        this.onChangeNumOfPeople = this.onChangeNumOfPeople.bind(this);
        this.onChangeView = this.onChangeView.bind(this);
        this.onChangeFeature1 = this.onChangeFeature1.bind(this);
        this.onChangeFeature2 = this.onChangeFeature2.bind(this);
        this.onChangeFeature3 = this.onChangeFeature3.bind(this);
        this.onChangeFeature4 = this.onChangeFeature4.bind(this);
        this.onChangeFeature5 = this.onChangeFeature5.bind(this);
        this.onChangeFeature6 = this.onChangeFeature6.bind(this);
        this.onChangeFeature7 = this.onChangeFeature7.bind(this);
        this.onChangeFeature8 = this.onChangeFeature8.bind(this);
        this.onChangeFeature9 = this.onChangeFeature9.bind(this);
        this.onChangeFeature10 = this.onChangeFeature10.bind(this);
        this.onChangePrice = this.onChangePrice.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            id: props.rmId,
            hotelName: '',
            roomName: '',
            description: '',
            size: '',
            numofPeople: '',
            view: '',
            feature1: '',
            feature2: '',
            feature3: '',
            feature4: '',
            feature5: '',
            feature6: '',
            feature7: '',
            feature8: '',
            feature9: '',
            feature10: '',
            price: ''

        }
    }

    componentDidMount() {
        axios.get(`http://localhost:5000/room/` + this.state.id)
            .then(response => {
                this.setState({
                    hotelName: response.data.hotelName,
                    roomName: response.data.roomName,
                    description: response.data.description,
                    size: response.data.size,
                    numofPeople: response.data.numofPeople,
                    view: response.data.view,
                    feature1: response.data.feature1,
                    feature2: response.data.feature2,
                    feature3: response.data.feature3,
                    feature4: response.data.feature4,
                    feature5: response.data.feature5,
                    feature6: response.data.feature6,
                    feature7: response.data.feature7,
                    feature8: response.data.feature8,
                    feature9: response.data.feature9,
                    feature10: response.data.feature10,
                    price: response.data.price,

                })
            })
            .catch(function (error) {
                console.log(error);
            })

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

    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        });
    }

    onChangeSize(e) {
        this.setState({
            size: e.target.value
        });
    }

    onChangeNumOfPeople(e) {
        this.setState({
            numofPeople: e.target.value
        });
    }

    onChangeView(e) {
        this.setState({
            view: e.target.value
        });
    }

    onChangeFeature1(e) {
        this.setState({
            feature1: e.target.value
        });
    }

    onChangeFeature2(e) {
        this.setState({
            feature2: e.target.value
        });
    }

    onChangeFeature3(e) {
        this.setState({
            feature3: e.target.value
        });
    }

    onChangeFeature4(e) {
        this.setState({
            feature4: e.target.value
        });
    }

    onChangeFeature5(e) {
        this.setState({
            feature5: e.target.value
        });
    }

    onChangeFeature6(e) {
        this.setState({
            feature6: e.target.value
        });
    }

    onChangeFeature7(e) {
        this.setState({
            feature7: e.target.value
        });
    }

    onChangeFeature8(e) {
        this.setState({
            feature8: e.target.value
        });
    }

    onChangeFeature9(e) {
        this.setState({
            feature9: e.target.value
        });
    }

    onChangeFeature10(e) {
        this.setState({
            feature10: e.target.value
        });
    }

    onChangePrice(e) {
        this.setState({
            price: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const rooms = {
            hotelName: this.state.hotelName,
            roomName: this.state.roomName,
            description: this.state.description,
            size: this.state.size,
            numofPeople: this.state.numofPeople,
            view: this.state.view,
            feature1: this.state.feature1,
            feature2: this.state.feature2,
            feature3: this.state.feature3,
            feature4: this.state.feature4,
            feature5: this.state.feature5,
            feature6: this.state.feature6,
            feature7: this.state.feature7,
            feature8: this.state.feature8,
            feature9: this.state.feature9,
            feature10: this.state.feature10,
            price: this.state.price

        }

        console.log(rooms);



        // if (this.state.fullName.length < 6) {
        //     this.setState({ fullNameError: "Your Name is too short" })
        // } else if (!this.state.email || regex.test(this.state.email) === false) {
        //     this.setState({ emailError: "Please Enter a valid email." })
        // } else if (this.state.contactNo.length != 10) {
        //     this.setState({ contactError: "Please Enter a valid Phone Number." })
        // } else if (this.state.address.length < 10) {
        //     this.setState({ addressError: "Your address is too short." })
        // }else {
        axios.put('http://localhost:5000/room/' + this.state.id, rooms)
            .then(res => {
                console.log(res);

                if (res.status === 200) {



                    Swal.fire({
                        icon: 'success',
                        title: 'Successful',
                        text: 'Room has been updated!!',
                        background: '#fff',
                        confirmButtonColor: '#333533',
                        iconColor: '#60e004'
                    })

                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Error',
                        text: 'There was an error updating!',
                        background: '#fff',
                        confirmButtonColor: '#333533',
                        iconColor: '#e00404'
                    })
                }

            })
        // }
    }

    render() {
        return (
            <div className="flex flex-col px-5 pt-2 ">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                        <div className='items-center overflow-hidden'>
                            <div class="grid grid-cols-1 gap-4 content-start pt-5 px-20">

                                <section class="">
                                    <div class="text-center text-gray-800 px-6">
                                        <h1 class="text-5xl md:text-6xl xl:text-3xl font-bold tracking-tight uppercase drop-shadow-md text-blue-950 ">Update Accomodations<br />
                                        </h1>
                                    </div>
                                </section>
                                <form onSubmit={this.onSubmit}>



                                    <div className="grid grid-cols-2 gap-4 form-group">
                                        <div className="form-group">
                                            <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>Hotel Name</label>
                                            <select type="text"
                                                required
                                                className="form-control "
                                                value={this.state.hotelName}
                                                onChange={this.onChangeHotelName}
                                            >
                                                <option>Select From Here</option>
                                                <option>Jetwing Sea</option>
                                                <option>Jetwing Blue</option>
                                                <option>Jetwing Colombo Seven</option>

                                            </select>
                                            <p />
                                            {/* <p className="block text-lg font-medium text-red-900 dark:text-white">{this.state.fullNameError}</p> */}
                                        </div>


                                        <div className="form-group">
                                            <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>Room Name</label>
                                            <input type="text"
                                                required
                                                className="form-control"
                                                value={this.state.roomName}
                                                onChange={this.onChangeRoomName}
                                            />

                                            <p />{/* <p className="block text-lg font-medium text-red-900 dark:text-white">{this.state.emailError}</p> */}
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>Description</label>
                                        <textarea type="text"
                                            required
                                            className="form-control"
                                            value={this.state.description}
                                            onChange={this.onChangeDescription}
                                        />
                                        <p />
                                        {/* <p className="block text-lg font-medium text-red-900 dark:text-white">{this.state.contactError}</p> */}
                                    </div>


                                    <div className="form-group">
                                        <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>Size</label>
                                        <input type="text"
                                            required
                                            className="form-control"
                                            value={this.state.size}
                                            onChange={this.onChangeSize}
                                        />



                                        {/* <p className="block text-lg font-medium text-red-900 dark:text-white">{this.state.addressError}</p> */}
                                    </div>
                                    <p />

                                    <div className="form-group">
                                        <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>Num Of People</label>
                                        <input type="text"
                                            required
                                            className="form-control"
                                            value={this.state.numofPeople}
                                            onChange={this.onChangeNumOfPeople}
                                        />



                                        {/* <p className="block text-lg font-medium text-red-900 dark:text-white">{this.state.addressError}</p> */}
                                    </div>
                                    <p />
                                    <div className="form-group">
                                        <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>View</label>
                                        <input type="text"
                                            required
                                            className="form-control"
                                            value={this.state.view}
                                            onChange={this.onChangeView}
                                        />
                                        {/* <p className="block text-lg font-medium text-red-900 dark:text-white">{this.state.addressError}</p> */}
                                    </div>


                                    <p />


                                    <div className="form-group">
                                        <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>
                                            Feature 1
                                        </label>
                                        <select type="text"

                                            className="form-control"
                                            value={this.state.feature1}
                                            onChange={this.onChangeFeature1}
                                        >
                                            <option>Select From Here</option>
                                            <option>Central Air Conditioning with Individual Temperature Controls</option>
                                            <option>Telephone with I.D.D. Facilities</option>
                                            <option>Electric Power (220V-240V)</option>
                                            <option>Mini Bar</option>
                                            <option>Free Wi-Fi</option>
                                            <option>Hot and Cold Water</option>
                                            <option>Electronic Safe</option>
                                            <option>Magnifying Shaving Mirror</option>
                                            <option>Tea/Coffee Making Facility</option>
                                            <option>Iron and Ironing Board</option>


                                        </select>


                                        {/* <p className="block text-lg font-medium text-red-900 dark:text-white">{this.state.addressError}</p> */}
                                    </div>


                                    <p />
                                    <div className="form-group">
                                        <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>
                                            Feature 2
                                        </label>
                                        <select type="text"

                                            className="form-control"
                                            value={this.state.feature2}
                                            onChange={this.onChangeFeature2}
                                        >
                                            <option>Select From Here</option>
                                            <option>Central Air Conditioning with Individual Temperature Controls</option>
                                            <option>Telephone with I.D.D. Facilities</option>
                                            <option>Electric Power (220V-240V)</option>
                                            <option>Mini Bar</option>
                                            <option>Free Wi-Fi</option>
                                            <option>Hot and Cold Water</option>
                                            <option>Electronic Safe</option>
                                            <option>Magnifying Shaving Mirror</option>
                                            <option>Tea/Coffee Making Facility</option>
                                            <option>Iron and Ironing Board</option>


                                        </select>


                                        {/* <p className="block text-lg font-medium text-red-900 dark:text-white">{this.state.addressError}</p> */}
                                    </div>


                                    <p />
                                    <div className="form-group">
                                        <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>
                                            Feature 3
                                        </label>
                                        <select type="text"

                                            className="form-control"
                                            value={this.state.feature3}
                                            onChange={this.onChangeFeature3}
                                        >
                                            <option>Select From Here</option>
                                            <option>Central Air Conditioning with Individual Temperature Controls</option>
                                            <option>Telephone with I.D.D. Facilities</option>
                                            <option>Electric Power (220V-240V)</option>
                                            <option>Mini Bar</option>
                                            <option>Free Wi-Fi</option>
                                            <option>Hot and Cold Water</option>
                                            <option>Electronic Safe</option>
                                            <option>Magnifying Shaving Mirror</option>
                                            <option>Tea/Coffee Making Facility</option>
                                            <option>Iron and Ironing Board</option>


                                        </select>


                                        {/* <p className="block text-lg font-medium text-red-900 dark:text-white">{this.state.addressError}</p> */}
                                    </div>


                                    <p />
                                    <div className="form-group">
                                        <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>
                                            Feature 4
                                        </label>
                                        <select type="text"

                                            className="form-control"
                                            value={this.state.feature4}
                                            onChange={this.onChangeFeature4}
                                        >
                                            <option>Select From Here</option>
                                            <option>Central Air Conditioning with Individual Temperature Controls</option>
                                            <option>Telephone with I.D.D. Facilities</option>
                                            <option>Electric Power (220V-240V)</option>
                                            <option>Mini Bar</option>
                                            <option>Free Wi-Fi</option>
                                            <option>Hot and Cold Water</option>
                                            <option>Electronic Safe</option>
                                            <option>Magnifying Shaving Mirror</option>
                                            <option>Tea/Coffee Making Facility</option>
                                            <option>Iron and Ironing Board</option>


                                        </select>


                                        {/* <p className="block text-lg font-medium text-red-900 dark:text-white">{this.state.addressError}</p> */}
                                    </div>


                                    <p />
                                    <div className="form-group">
                                        <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>
                                            Feature 5
                                        </label>
                                        <select type="text"

                                            className="form-control"
                                            value={this.state.feature5}
                                            onChange={this.onChangeFeature5}
                                        >
                                            <option>Select From Here</option>
                                            <option>Central Air Conditioning with Individual Temperature Controls</option>
                                            <option>Telephone with I.D.D. Facilities</option>
                                            <option>Electric Power (220V-240V)</option>
                                            <option>Mini Bar</option>
                                            <option>Free Wi-Fi</option>
                                            <option>Hot and Cold Water</option>
                                            <option>Electronic Safe</option>
                                            <option>Magnifying Shaving Mirror</option>
                                            <option>Tea/Coffee Making Facility</option>
                                            <option>Iron and Ironing Board</option>


                                        </select>


                                        {/* <p className="block text-lg font-medium text-red-900 dark:text-white">{this.state.addressError}</p> */}
                                    </div>


                                    <p />
                                    <div className="form-group">
                                        <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>
                                            Feature 6
                                        </label>
                                        <select type="text"

                                            className="form-control"
                                            value={this.state.feature6}
                                            onChange={this.onChangeFeature6}
                                        >
                                            <option>Select From Here</option>
                                            <option>Central Air Conditioning with Individual Temperature Controls</option>
                                            <option>Telephone with I.D.D. Facilities</option>
                                            <option>Electric Power (220V-240V)</option>
                                            <option>Mini Bar</option>
                                            <option>Free Wi-Fi</option>
                                            <option>Hot and Cold Water</option>
                                            <option>Electronic Safe</option>
                                            <option>Magnifying Shaving Mirror</option>
                                            <option>Tea/Coffee Making Facility</option>
                                            <option>Iron and Ironing Board</option>


                                        </select>


                                        {/* <p className="block text-lg font-medium text-red-900 dark:text-white">{this.state.addressError}</p> */}
                                    </div>


                                    <p />
                                    <div className="form-group">
                                        <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>
                                            Feature 7
                                        </label>
                                        <select type="text"

                                            className="form-control"
                                            value={this.state.feature7}
                                            onChange={this.onChangeFeature7}
                                        >
                                            <option>Select From Here</option>
                                            <option>Central Air Conditioning with Individual Temperature Controls</option>
                                            <option>Telephone with I.D.D. Facilities</option>
                                            <option>Electric Power (220V-240V)</option>
                                            <option>Mini Bar</option>
                                            <option>Free Wi-Fi</option>
                                            <option>Hot and Cold Water</option>
                                            <option>Electronic Safe</option>
                                            <option>Magnifying Shaving Mirror</option>
                                            <option>Tea/Coffee Making Facility</option>
                                            <option>Iron and Ironing Board</option>


                                        </select>


                                        {/* <p className="block text-lg font-medium text-red-900 dark:text-white">{this.state.addressError}</p> */}
                                    </div>


                                    <p />
                                    <div className="form-group">
                                        <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>
                                            Feature 8
                                        </label>
                                        <select type="text"

                                            className="form-control"
                                            value={this.state.feature8}
                                            onChange={this.onChangeFeature8}
                                        >
                                            <option>Select From Here</option>
                                            <option>Central Air Conditioning with Individual Temperature Controls</option>
                                            <option>Telephone with I.D.D. Facilities</option>
                                            <option>Electric Power (220V-240V)</option>
                                            <option>Mini Bar</option>
                                            <option>Free Wi-Fi</option>
                                            <option>Hot and Cold Water</option>
                                            <option>Electronic Safe</option>
                                            <option>Magnifying Shaving Mirror</option>
                                            <option>Tea/Coffee Making Facility</option>
                                            <option>Iron and Ironing Board</option>


                                        </select>


                                        {/* <p className="block text-lg font-medium text-red-900 dark:text-white">{this.state.addressError}</p> */}
                                    </div>


                                    <p />
                                    <div className="form-group">
                                        <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>
                                            Feature 9
                                        </label>
                                        <select type="text"

                                            className="form-control"
                                            value={this.state.feature9}
                                            onChange={this.onChangeFeature9}
                                        >
                                            <option>Select From Here</option>
                                            <option>Central Air Conditioning with Individual Temperature Controls</option>
                                            <option>Telephone with I.D.D. Facilities</option>
                                            <option>Electric Power (220V-240V)</option>
                                            <option>Mini Bar</option>
                                            <option>Free Wi-Fi</option>
                                            <option>Hot and Cold Water</option>
                                            <option>Electronic Safe</option>
                                            <option>Magnifying Shaving Mirror</option>
                                            <option>Tea/Coffee Making Facility</option>
                                            <option>Iron and Ironing Board</option>


                                        </select>


                                        {/* <p className="block text-lg font-medium text-red-900 dark:text-white">{this.state.addressError}</p> */}
                                    </div>


                                    <p />
                                    <div className="form-group">
                                        <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>
                                            Feature 10
                                        </label>
                                        <select type="text"

                                            className="form-control"
                                            value={this.state.feature10}
                                            onChange={this.onChangeFeature10}
                                        >
                                            <option>Select From Here</option>
                                            <option>Central Air Conditioning with Individual Temperature Controls</option>
                                            <option>Telephone with I.D.D. Facilities</option>
                                            <option>Electric Power (220V-240V)</option>
                                            <option>Mini Bar</option>
                                            <option>Free Wi-Fi</option>
                                            <option>Hot and Cold Water</option>
                                            <option>Electronic Safe</option>
                                            <option>Magnifying Shaving Mirror</option>
                                            <option>Tea/Coffee Making Facility</option>
                                            <option>Iron and Ironing Board</option>


                                        </select>


                                        {/* <p className="block text-lg font-medium text-red-900 dark:text-white">{this.state.addressError}</p> */}
                                    </div>


                                    <p />

                                    <div className="form-group">
                                        <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>
                                            Price
                                        </label>
                                        <input type="text"

                                            className="form-control"
                                            value={this.state.price}
                                            onChange={this.onChangePrice}
                                        />


                                        {/* <p className="block text-lg font-medium text-red-900 dark:text-white">{this.state.addressError}</p> */}
                                    </div>


                                    <p />




                                    <div className="text-center align-middle form-group">
                                        <input className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800' type="submit" value="Update Room" />
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