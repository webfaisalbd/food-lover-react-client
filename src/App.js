import './App.css';
import { BrowserRouter as Router ,Switch,Route} from 'react-router-dom';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import NotFound from './Pages/NotFound/NotFound';
import Home from './Pages/Home/Home/Home';
import Services from './Pages/Home/Services/Services';
import Booking from './Pages/Booking/Booking';
import Login from './Pages/Login/Login/Login';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Deliveries from './Pages/Home/Deliveries/Deliveries';
import Signup from './Pages/Signup/Signup';
import Covid from './Pages/Home/Covid/Covid';
import AddNewService from './Pages/AddNewService/AddNewService';
import MyBookings from './Pages/MyBookings/MyBookings';
import ManageAllOrders from './Pages/ManageAllOrders/ManageAllOrders';





function App() {
  return (
    <div className="App">
         <AuthProvider>

         <Router>
                   <Header> </Header>
                   
          <Switch>
              <Route exact path="/">
                   <Home></Home>
              </Route>
              <Route path="/home">
                   <Home></Home>
              </Route>
              <Route path="/services">
              <Services></Services>
              </Route>

              <Route path="/deliveries">
              <Deliveries></Deliveries>
              </Route>

              <Route path="/covid">
              <Covid></Covid>
              </Route>
            
              <PrivateRoute path="/booking/:serviceId">
                 <Booking></Booking>
            </PrivateRoute>

              <Route path="/login">
                 <Login></Login>
            </Route>

            <Route path="/addNewService">
                 <AddNewService></AddNewService>
            </Route>
            <Route path="/MyBookings">
                 <ManageAllOrders></ManageAllOrders>
            </Route>
            
            <Route path="/ManageAllOrders">
                 <MyBookings></MyBookings>
            </Route>

            <Route path="/sign">
              <Signup></Signup>
            </Route>

            <Route path="*">
                 <NotFound></NotFound>
            </Route>
            
          </Switch>

          <Footer></Footer>

          </Router>

         </AuthProvider>
      
    </div>
  );
}

export default App;
