import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Login from "./components/Login";
import Accounts from "./components/Accounts";
import Support from "./components/Support";
import { getStorageValue } from "./utils/getStorageValue";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const user = getStorageValue('user');

 useEffect(() => {
	if (user) {
		setLoggedIn(true);
	}
  }, [user]); 
  
  return (
    <>
      <Header loggedIn={loggedIn}/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={""}>
          </Route>
          <Route path="/login" element={<Login setLoggedIn={setLoggedIn}/>} />
          <Route path="/accounts" element={<Accounts/>} />
          <Route path="/support" element={<Support/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
