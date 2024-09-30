import React, { createContext, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { AboutUs, Chef, FindUs, Gallery, Header, Intro, Laurels, SpecialMenu } from './container';
import { Navbar } from './components';
import './App.css';
import Reservation from './container/Reservation/reservation';
import FoodDisplay from './components/FoodDisplay/FoodDisplay';
import Signup from './components/signup/signup';
import Signin from './components/signin/signin';

export const StoreContext = createContext();

const App = () => {
  const [foodList, setFoodList] = useState([]); 
  const [cartItems, setCartItems] = useState({}); 
  const [category, setCategory] = useState("All"); 

  useEffect(() => {
    const fetchFoodItems = async () => {
      const response = await fetch('/api/food');
      const data = await response.json();
      setFoodList(data);
    };

    fetchFoodItems();
  }, []);

  const addToCart = (id) => {
    setCartItems((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => {
      const newCart = { ...prev };
      if (newCart[id]) {
        newCart[id] -= 1;
        if (newCart[id] <= 0) {
          delete newCart[id];
        }
      }
      return newCart;
    });
  };

  const location = useLocation();
  const hideNavbar = location.pathname === '/signin' || location.pathname === '/signup';

  return (
    <StoreContext.Provider value={{ food_list: foodList, cartItems, addToCart, removeFromCart }}>
      <div>
        {!hideNavbar && <Navbar />}
        <Routes>
          <Route path="/" element={
            <>
              <Header />
              <AboutUs />
              <FoodDisplay category={category}/>
              <SpecialMenu />
              <Chef />
              <Intro />
              <Laurels />
              <Gallery />
              <FindUs />
            </>
          } />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/menu" element={<FoodDisplay category={category} />} /> 
          <Route path="/signup" element={<Signup />}/>
          <Route path="/signin" element={<Signin />}/>
        </Routes>
      </div>
    </StoreContext.Provider>
  );
};
const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
