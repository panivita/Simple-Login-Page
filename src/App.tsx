import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
/* import { AboutPage } from "./pages/about-page";
import { UserDetailsPage } from "./pages/user-details-page";

import { Search } from "./components/search-section";
import { ResultSearch } from "./components/result-search-section";
import { SearchUserProvider } from "./Search-user-context"; */

const App = () => {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={''}>
            
            {/* <SearchUserProvider>
            <Header />
            <Search />
            <ResultSearch />
          </SearchUserProvider> */}
          </Route>
          <Route path="/accounts" element={''}/>
          <Route path="/support" element={''}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
