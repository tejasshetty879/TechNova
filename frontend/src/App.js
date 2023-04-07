import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";
import AppointmentScreen from "./screens/AppointmentScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrderScreen from "./screens/OrderScreen";
import userListScreen from "./screens/userListScreen";
import userEditScreen from "./screens/userEditScreen";



const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            <Route path="/order/:id" Component={OrderScreen } />
            <Route path="/appointment" Component={AppointmentScreen } />
            <Route path="/payment" Component={PaymentScreen } />
            <Route path="/placeorder" Component={PlaceOrderScreen } />
            <Route path="/login"  Component={LoginScreen } />
            <Route path="/register" Component={RegisterScreen } />
            <Route path="/profile" Component={ProfileScreen } />
            <Route path="/product/:id" Component={ProductScreen } />
            <Route path="/cart/:id?" Component={CartScreen } />
            <Route path="/admin/userlist" Component={userListScreen }/>
            <Route path="/admin/user/:id/edit" Component={userEditScreen }/>
            <Route path="/" Component={HomeScreen } />
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App;
