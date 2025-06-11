import React from "react";
import Card from "./Card";
import * as Images from "../assets/images";
import menuLinks from "../assets/menus/index";
import "./FoodTruckPage.css";

const FoodTruckPage = ({ onSwitch }) => {
  return (
    <div>
      <h1>Food Trck Favorites</h1>
      <div className="intro-page-switch">
        <button className="intro-page-switch-button" onClick={onSwitch}>
          Go to Intro Page{" "}
        </button>
      </div>

      <div className="food-truck-cards">
        <Card
          image={Images.birriaLandia}
          name="Birria Landia"
          genre="Mexican"
          menu={menuLinks.birriaLandia}
        />
        <Card
          image={Images.jerkPan}
          name="Jerk Pan"
          genre="Caribbean"
          menu={menuLinks.jerkPan}
        />
        <Card
          image={Images.kingSouvlaki}
          name="King Souvlaki of Astoria"
          genre="Greek"
          menu={menuLinks.kingSouvlaki}
        />
        <Card
          image={Images.lingsSweetMiniCakes}
          name="Ling's Sweet Mini Cakes"
          genre="Dessert"
          menuLinks={menuLinks.lingsSweetMiniCakes}
        />
        <Card
          image={Images.makinaCafe}
          name="Makina Cafe"
          genre="Cafe"
          menu={menuLinks.makinaCafe}
        />
        <Card
          image={Images.momsMono}
          name="Mom's Mono"
          genre="American"
          menu={menuLinks.momsMono}
        />
        <Card
          image={Images.mysttikMasala}
          name="Mysttik Masala"
          genre="Indian"
          menu={menuLinks.mysttikMasala}
        />
        <Card
          image={Images.nyDosas}
          name="NY Dosas"
          genre="Indian"
          menu={menuLinks.nyDosas}
        />
        <Card
          image={Images.pataconPisao}
          name="Patacon Pisao"
          genre="Latin"
          menu={menuLinks.pataconPisao}
        />
        <Card
          image={Images.theHalalGuys}
          name="The Halal Guys"
          genre="Middle Eastern"
          menu={menuLinks.theHalalGuys}
        />
        <Card
          image={Images.tong}
          name="Tong"
          genre="Asian"
          menu={menuLinks.tong}
        />
        <Card
          image={Images.uncleGussys}
          name="Uncle Gussy's"
          genre="American"
          menu={menuLinks.uncleGussys}
        />
      </div>
    </div>
  );
};

export default FoodTruckPage;
