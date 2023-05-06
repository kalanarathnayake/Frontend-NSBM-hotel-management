import React, { Component } from 'react';
import axios from 'axios';
import Swal from "sweetalert2";

export default class RoomDetails extends Component {
    constructor(props) {
        super(props);
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

    render() {
        return (
            <div className="flex flex-col px-5 pt-2 ">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                        <div className='items-center overflow-hidden'>
                            <div class="grid grid-cols-1 gap-4 content-start pt-5 px-20">
                                <section class="">
                                    <div class="text-center text-gray-800 px-6">
                                        <h1 class="text-5xl md:text-6xl xl:text-3xl font-bold tracking-tight uppercase drop-shadow-md text-blue-950 ">Accomodations<br />
                                        </h1>
                                    </div>
                                </section>
                                <form  >
                                    <div className="grid grid-cols-2 gap-4 form-group">
                                        <div className="form-group">
                                            <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>Hotel Name</label>
                                            <input type="text"
                                                required
                                                readOnly
                                                className="form-control "
                                                value={this.state.hotelName}
                                            />
                                            <p />
                                        </div>
                                        <div className="form-group">
                                            <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>Room Name</label>
                                            <input type="text"
                                                required
                                                readOnly
                                                className="form-control"
                                                value={this.state.roomName}
                                            />
                                            <p />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>Description</label>
                                        <textarea type="text"
                                            required
                                            className="form-control"
                                            value={this.state.description}
                                            readOnly
                                        />
                                        <p />

                                    </div>


                                    <div className="form-group">
                                        <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>Size</label>
                                        <input type="text"
                                            required
                                            className="form-control"
                                            value={this.state.size}
                                            readOnly
                                        />




                                    </div>
                                    <p />

                                    <div className="form-group">
                                        <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>Num Of People</label>
                                        <input type="text"
                                            required
                                            className="form-control"
                                            value={this.state.numofPeople}
                                            readOnly
                                        />



                                    </div>
                                    <p />
                                    <div className="form-group">
                                        <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>View</label>
                                        <input type="text"
                                            required
                                            className="form-control"
                                            value={this.state.view}
                                            readOnly
                                        />

                                    </div>


                                    <p />


                                    <div className="form-group">
                                        <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>
                                            Feature 1
                                        </label>
                                        <input type="text"

                                            className="form-control"
                                            value={this.state.feature1}
                                            readOnly
                                        />


                                    </div>


                                    <p />
                                    <div className="form-group">
                                        <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>
                                            Feature 2
                                        </label>
                                        <input type="text"

                                            className="form-control"
                                            value={this.state.feature2}
                                            readOnly
                                        />



                                    </div>


                                    <p />
                                    <div className="form-group">
                                        <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>
                                            Feature 3
                                        </label>
                                        <input type="text"

                                            className="form-control"
                                            value={this.state.feature3}
                                            readOnly
                                        />


                                    </div>


                                    <p />
                                    <div className="form-group">
                                        <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>
                                            Feature 4
                                        </label>
                                        <input type="text"

                                            className="form-control"
                                            value={this.state.feature4}
                                            readOnly
                                        />


                                    </div>


                                    <p />
                                    <div className="form-group">
                                        <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>
                                            Feature 5
                                        </label>
                                        <input type="text"

                                            className="form-control"
                                            value={this.state.feature5}
                                            readOnly
                                        />


                                    </div>


                                    <p />
                                    <div className="form-group">
                                        <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>
                                            Feature 6
                                        </label>
                                        <input type="text"

                                            className="form-control"
                                            value={this.state.feature6}
                                            readOnly
                                        />

                                    </div>


                                    <p />
                                    <div className="form-group">
                                        <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>
                                            Feature 7
                                        </label>
                                        <input type="text"

                                            className="form-control"
                                            value={this.state.feature7}
                                            readOnly
                                        />


                                    </div>


                                    <p />
                                    <div className="form-group">
                                        <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>
                                            Feature 8
                                        </label>
                                        <input type="text"

                                            className="form-control"
                                            value={this.state.feature8}
                                            readOnly
                                        />

                                    </div>


                                    <p />
                                    <div className="form-group">
                                        <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>
                                            Feature 9
                                        </label>
                                        <input type="text"

                                            className="form-control"
                                            value={this.state.feature9}
                                            readOnly
                                        />


                                    </div>


                                    <p />
                                    <div className="form-group">
                                        <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>
                                            Feature 10
                                        </label>
                                        <input type="text"

                                            className="form-control"
                                            value={this.state.feature10}
                                            readOnly
                                        />


                                    </div>


                                    <p />

                                    <div className="form-group">
                                        <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>
                                            Price
                                        </label>
                                        <input type="text"

                                            className="form-control"
                                            value={this.state.price}
                                            readOnly
                                        />


                                    </div>


                                    <p />



                                    <div className="text-center align-middle form-group">
                                        <input className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800' type="submit" value="Add Room" />
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