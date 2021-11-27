import './App.css';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Login from './components/Login/Login';
import AuthProvider from './context/AuthProvider';
import AddRide from './components/AddRide/AddRide';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import RideDetail from './components/RideDetail/RideDetail';
import Booking from './components/Booking/Booking';
import AllBookings from './components/AllBookings/AllBookings';
import MyBookings from './components/MyBookings/MyBookings';
import UpdateBooking from './components/UpdateBooking/UpdateBooking';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import About from './components/About/About';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
       <Navbar></Navbar>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route path="/addride">
            <AddRide></AddRide>
          </Route>
          <Route path="/mybooking">
            <MyBookings></MyBookings>
          </Route>    
          <Route path="/allbooking">
            <AllBookings></AllBookings>
          </Route>   
          <Route path="/booking/update/:id">
              <UpdateBooking></UpdateBooking>
            </Route>  
          <PrivateRoute path="/ride/:rideid">
            <RideDetail></RideDetail>            
          </PrivateRoute>
          <PrivateRoute path="/booking/:bookid">
            <Booking></Booking>           
          </PrivateRoute>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
