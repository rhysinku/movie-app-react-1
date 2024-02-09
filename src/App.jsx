import React from "react";
import "./App.scss";
import HomeHeader from "./components/HomeHeader";
import HomeBanner from "./components/HomeBanner";
import Movielist from "./components/Movielist";

const App = () => {
  return (
    <>
      <HomeHeader />
      <HomeBanner />
      <Movielist />
    </>
  );
};

export default App;
