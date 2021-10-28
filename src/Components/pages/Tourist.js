import React from "react";
import "../../App.css";
import CardItem from "../CardItem";

export default function Tourist() {
  return (
    <div className="cards">
      <h1>Let's Explore</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/bisnakandi.jpg"
              text="Explore the hidden waterfall deep inside the Amazon Jungle 1"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src="images/img-home.jpg"
              text="Explore the hidden waterfall deep inside the Amazon Jungle 2"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src="images/nature3.jpg"
              text="Explore the hidden waterfall deep inside the Amazon Jungle3 "
              label="Adventure"
              path="/services"
            />
            <CardItem
              src="images/nature4.jpg"
              text="Explore the hidden waterfall deep inside the Amazon Jungle4"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src="images/nature5.jpg"
              text="Travel through the Islands of Bali in a Private Cruise5"
              label="Luxury"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/saint.jpg"
              text="Set Sail in the Atlantic Ocean visiting Uncharted Waters"
              label="Mystery"
              path="/services"
            />

            <CardItem
              src="images/nature3.jpg"
              text="Explore the hidden waterfall deep inside the Amazon Jungle"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src="images/nature5.jpg"
              text="Explore the hidden waterfall deep inside the Amazon Jungle"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src="images/bisnakandi.jpg"
              text="Explore the hidden waterfall deep inside the Amazon Jungle"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src="images/sylhet.jpg"
              text="RAW beauty of bangladesh..."
              label="Adrenaline"
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}
