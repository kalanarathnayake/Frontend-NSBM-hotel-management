import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/navbar.component";
import Footer from "./components/navbar/footer.component";
import Home from "./components/navbar/home";

import { CreateEvent } from './components/event/event-add.component';
import { ViewEvent } from './components/event/event-view.component';

import { CreateWeddingHall } from './components/weddingHalls/weddingHall-add.component';

import { CreateRoom } from './components/room/room-add.component';

import { ViewJetwingBlue } from './components/admin.hotels/jetwingBlue-view.component';
import { ViewJetwingSea } from './components/admin.hotels/jetwingSea-view.component';
import { ViewJetwingColomboSeven } from './components/admin.hotels/jetwingColomboSeven-view.component';

import { UserRegistration } from './components/user/user-registration.component';
import { UserLogin } from './components/user/user-login.component';

function App() {
  return (
    <div>
      <Navbar />
      <Router>
        <Routes>
          <Route exact path="/nav" element={Navbar} />
          <Route exact path="/" element={<Home />} />

          <Route exact path="/createEvent" element={<CreateEvent />} />
          <Route exact path="/event" element={<ViewEvent />} />

          <Route exact path="/createWedding" element={<CreateWeddingHall />} />

          <Route exact path="/createRoom" element={<CreateRoom />} />

          <Route exact path="/jetwingBlue" element={<ViewJetwingBlue />} />
          <Route exact path="/jetwingSea" element={<ViewJetwingSea />} />
          <Route exact path="/jetwingSeven" element={<ViewJetwingColomboSeven />} />


          <Route exact path="/signUp" element={<UserRegistration />} />
          <Route exact path="/signIn" element={<UserLogin />} />
          {/* <Route exact path="/" element={<Home />} /> */}
        </Routes>
      </Router>
      <Footer />
    </div>
  );

}

export default App;
