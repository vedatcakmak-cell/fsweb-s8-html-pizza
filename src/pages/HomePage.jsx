import React from "react";
import image from "../assets/home-banner.png";
import HomePageTitle from "../components/HomePageTitle";
import HungryButton from "../components/HungryButton";

const HomePage = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100dvw",
        marginLeft: "calc(50% - 50dvw)",
        minHeight: "100svh",
        paddingTop: "210px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        overflow: "hidden",
      }}
    >
      <HomePageTitle />
      <HungryButton />
    </div>
  );
};

export default HomePage;
