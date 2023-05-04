import React, { Component } from 'react';
import axios from 'axios';
import * as Swal from "sweetalert2";
import AuthenticationService from './AuthenticationService';

export class UserLogin extends Component {
    constructor(props) {
        super(props);
        this.onChangeNIC = this.onChangeNIC.bind(this);
        this.onChangepassword = this.onChangepassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            NIC: '',
            user: [],
            password: ''
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/user/')
            .then(response => {
                this.setState({ user: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    onChangeNIC(e) {
        this.setState({
            NIC: e.target.value
        });
    }

    onChangepassword(e) {
        this.setState({
            password: e.target.value
        });
    }

    getUserList() {
        axios.get('http://localhost:5000/user/')
            .then(response => {
                this.setState({ user: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    UserList() {
        return this.state.user.map((currentuser) => {
            if (this.state.NIC === currentuser.NIC && this.state.password == currentuser.password) {
                const userRole = currentuser.userRole;
                console.log(userRole)
                AuthenticationService.successfulLogin(currentuser.NIC, currentuser.userRole)
                console.log(currentuser.NIC, currentuser.userRole)
                window.location = "/nav"
            }
        });
    }

    onSubmit(e) {
        e.preventDefault();
     
        if (this.state.NIC.length < 10 || this.state.NIC.length > 12) {
            this.setState({ nicError: "Please enter a valid NIC" })
        } else {
          
            this.state.user.map((currentuser) => {
                if (this.state.NIC === currentuser.NIC && this.state.password == currentuser.password) {
                    const userRole = currentuser.userRole;
                    console.log(userRole)
                    AuthenticationService.successfulLogin(currentuser.NIC, currentuser.userRole)
                    console.log(currentuser.NIC, currentuser.userRole)
                   
                    Swal.fire({
                        icon: 'successful',
                        title: 'Successful',
                        text: 'Successfully Logged In',
                        background: '#fff',
                        confirmButtonColor: '#333533',
                        iconColor: '#60e004'
                    })
                    const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
                  
                    if (isUserLoggedIn === true && currentuser.userRole == "Customer") {

                        window.location = "/nav"
                        window.location = "/"
                    }
                    if(isUserLoggedIn === false){

                        window.location = "/nav"
                        window.location = "/"

                    }
                    if(isUserLoggedIn === true && currentuser.userRole == "Admin"){
                        window.location = "/nav"
                        window.location = "/"
                    }
                
                }
               
            });
        }
    }

    clearData = () => {
        this.setState({
            NIC: '',
            password: '',
        })
    }

    render() {
        return (
            <div class="">
               

{/* Latest UI */}

                <div class="container my-44 px-6 mx-auto">
                    <section class="mb-32 text-gray-800 background-radial-gradient">
                        <div class="px-6 py-12 md:px-12 text-center lg:text-left bg-gradient-to-r rounded-lg from-indigo-900 from-10% via-sky-600 via-30% to-pink-700 to-90%">
                            <div class="container mx-auto xl:px-32">
                                <div class="grid lg:grid-cols-2 gap-12 items-center">
                                    <div class="mt-12 lg:mt-0">
                                        <h1
                                            class="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12"
                                            style={{ color: "hsl(218, 81%, 95%)" }}
                                        >
                                            Ayuobowan <br /></h1>
                                            
                                            <h2><span style={{ color: "hsl(218, 81%, 75%)" }}>Welcome To Jetwing</span>
                                        </h2>
                                        <p class="mb-4 opacity-90 lead text-stone-50 font-bold" >
                                        SUSTAINABLE TOURISM IS AT OUR CORE
                                        </p>
                                    </div>
                                    <div class="mb-12 lg:mb-0">
                                        <div class="block rounded-lg shadow-lg bg-white px-6 py-12 md:px-12">
                                            <h2 class="text-3xl font-bold mb-12">Sign In with <span class="text-indigo-900">Jetwing</span></h2>

                                            <form className='' onSubmit={this.onSubmit}>
                                                <div class="">
                                                    <div className="form-group">
                                                        <input type="text"
                                                            required
                                                            placeholder="NIC"
                                                            class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                            value={this.state.NIC}
                                                            onChange={this.onChangeNIC}
                                                        /><p className="block text-lg font-medium text-red-900 dark:text-white">{this.state.nicError}</p>
                                                    </div>
                                                    <div className="form-group">
                                                        <input type="password"
                                                            required
                                                            placeholder="Password"
                                                            class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                            value={this.state.password}
                                                            onChange={this.onChangepassword}
                                                        /><p />
                                                    </div>

                                                    <div className="text-center align-middle form-group">
                                                        <input
                                                            class="w-full px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                                                            type="submit" value="Sign In" />
                                                    </div>
                                                </div>

                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        )
    }
}