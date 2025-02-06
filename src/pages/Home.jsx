import React from "react";
import Header from "../components/header/Header";
import Hero from "../components/home/Hero";
import Services from "../components/home/Services";
import Technology from "../components/home/Technology";
import BuildFaster from "../components/home/BuildFaster";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Technology />
        <BuildFaster />
      </main>
    </>
  );
};

export default Home;
