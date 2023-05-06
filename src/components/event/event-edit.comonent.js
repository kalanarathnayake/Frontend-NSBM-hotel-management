import React, { Component } from 'react';
import axios from 'axios';
import Swal from "sweetalert2";

export default class EditEvent extends Component {
    constructor(props) {
        super(props);
        this.onChangeHotelName = this.onChangeHotelName.bind(this);
        this.onChangeHallName = this.onChangeHallName.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeStyle1 = this.onChangeStyle1.bind(this);
        this.onChangeCapacity1 = this.onChangeCapacity1.bind(this);
        this.onChangeStyle2 = this.onChangeStyle2.bind(this);
        this.onChangeCapacity2 = this.onChangeCapacity2.bind(this);
        this.onChangeStyle3 = this.onChangeStyle3.bind(this);
        this.onChangeCapacity3 = this.onChangeCapacity3.bind(this);
        this.onChangeStyle4 = this.onChangeStyle4.bind(this);
        this.onChangeCapacity4 = this.onChangeCapacity4.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            id: props.evId,
            hotelName: '',
            hallName: '',
            description: '',
            style1: '',
            capacity1: '',
            style2: '',
            capacity2: '',
            style3: '',
            capacity3: '',
            style4: '',
            capacity4: ''
        }
    }

    componentDidMount() {
        axios.get(`http://localhost:5000/event/` + this.state.id)
            .then(response => {
                this.setState({
                    hotelName: response.data.hotelName,
                    hallName: response.data.hallName,
                    description: response.data.description,
                    style1: response.data.style1,
                    capacity1: response.data.capacity1,
                    style2: response.data.style2,
                    capacity2: response.data.capacity2,
                    style3: response.data.style3,
                    capacity3: response.data.capacity3,
                    style4: response.data.style4,
                    capacity4: response.data.capacity4,
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

    onChangeStyle1(e) {
        this.setState({
            style1: e.target.value
        });
    }

    onChangeCapacity1(e) {
        this.setState({
            capacity1: e.target.value
        });
    }

    onChangeStyle2(e) {
        this.setState({
            style2: e.target.value
        });
    }

    onChangeCapacity2(e) {
        this.setState({
            capacity2: e.target.value
        });
    }

    onChangeStyle3(e) {
        this.setState({
            style3: e.target.value
        });
    }

    onChangeCapacity3(e) {
        this.setState({
            capacity3: e.target.value
        });
    }

    onChangeStyle4(e) {
        this.setState({
            style4: e.target.value
        });
    }

    onChangeCapacity4(e) {
        this.setState({
            capacity4: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const events = {
            hotelName: this.state.hotelName,
            hallName: this.state.hallName,
            description: this.state.description,
            style1: this.state.style1,
            capacity1: this.state.capacity1,
            style2: this.state.style2,
            capacity2: this.state.capacity2,
            style3: this.state.style3,
            capacity3: this.state.capacity3,
            style4: this.state.style4,
            capacity4: this.state.capacity4,
        }
        console.log(events);
        axios.put('http://localhost:5000/event/' + this.state.id, events)
            .then(res => {
                console.log(res);
                if (res.status === 200) {
                    this.props.close();
                    Swal.fire({
                        icon: 'success',
                        title: 'Successful',
                        text: 'Events has been updated!!',
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
                                        <h1 class="text-5xl md:text-6xl xl:text-3xl font-bold tracking-tight uppercase drop-shadow-md text-blue-950 ">Update Events<br />
                                        </h1>
                                    </div>
                                </section>
                                <form onSubmit={this.onSubmit}>
                                    <div class="">
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
                                            </div>
                                            <div className="form-group">
                                                <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>Hall Name</label>
                                                <input type="text"
                                                    required
                                                    className="form-control"
                                                    value={this.state.hallName}
                                                    onChange={this.onChangeHallName}
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
                                                onChange={this.onChangeDescription}
                                            />
                                            <p />
                                        </div>
                                        <div className="grid grid-cols-2 gap-4 form-group">
                                            <div className="form-group">
                                                <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>Style</label>
                                                <select type="text"
                                                    required
                                                    className="form-control"
                                                    value={this.state.style1}
                                                    onChange={this.onChangeStyle1}
                                                >
                                                    <option>Select From Here</option>
                                                    <option>Theater</option>
                                                    <option>Workshop</option>
                                                    <option>Classroom</option>
                                                    <option>Boardroom</option>
                                                    <option>FreeStyle</option>
                                                </select>
                                            </div>
                                            <div className="form-group">
                                                <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>Capacity</label>
                                                <input type="text"
                                                    required
                                                    className="form-control"
                                                    value={this.state.capacity1}
                                                    onChange={this.onChangeCapacity1}
                                                />
                                            </div>
                                        </div>
                                        <p />
                                        <div className="grid grid-cols-2 gap-4 form-group">
                                            <div className="form-group">
                                                <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>Style</label>
                                                <select type="text"
                                                    className="form-control"
                                                    value={this.state.style2}
                                                    onChange={this.onChangeStyle2}
                                                >
                                                    <option>Select From Here</option>
                                                    <option>Theater</option>
                                                    <option>Workshop</option>
                                                    <option>Classroom</option>
                                                    <option>Boardroom</option>
                                                    <option>FreeStyle</option>
                                                </select>
                                            </div>
                                            <div className="form-group">
                                                <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>Capacity</label>
                                                <input type="text"
                                                    className="form-control"
                                                    value={this.state.capacity2}
                                                    onChange={this.onChangeCapacity2}
                                                />
                                            </div>
                                        </div>
                                        <p />
                                        <div className="grid grid-cols-2 gap-4 form-group">
                                            <div className="form-group">
                                                <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>Style</label>
                                                <select type="text"
                                                    className="form-control"
                                                    value={this.state.style3}
                                                    onChange={this.onChangeStyle3}
                                                >
                                                    <option>Select From Here</option>
                                                    <option>Theater</option>
                                                    <option>Workshop</option>
                                                    <option>Classroom</option>
                                                    <option>Boardroom</option>
                                                    <option>FreeStyle</option></select>
                                            </div>
                                            <div className="form-group">
                                                <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>Capacity</label>
                                                <input type="text"
                                                    className="form-control"
                                                    value={this.state.capacity3}
                                                    onChange={this.onChangeCapacity3}
                                                />
                                            </div>
                                        </div>
                                        <p />
                                        <div className="grid grid-cols-2 gap-4 form-group">
                                            <div className="form-group">
                                                <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>Style</label>
                                                <select type="text"
                                                    className="form-control"
                                                    value={this.state.style4}
                                                    onChange={this.onChangeStyle4}
                                                >
                                                    <option>Select From Here</option>
                                                    <option>Theater</option>
                                                    <option>Workshop</option>
                                                    <option>Classroom</option>
                                                    <option>Boardroom</option>
                                                    <option>FreeStyle</option></select>
                                            </div>
                                            <div className="form-group">
                                                <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>Capacity</label>
                                                <input type="text"
                                                    className="form-control"
                                                    value={this.state.capacity4}
                                                    onChange={this.onChangeCapacity4}
                                                />
                                            </div>
                                        </div>
                                        <p />
                                        <div className="text-center align-middle form-group">
                                            <input className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800' type="submit" value="Update Event" />
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