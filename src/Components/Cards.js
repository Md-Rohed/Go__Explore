import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Let's Explore</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/bisnakandi.jpg"
              text="Bisanakandi is situated at Bangladesh-India border in Sylhet. It is a landscape beauty among gardens and hills"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src="images/img-home.jpg"
              text="Explore the hidden waterfall deep inside the Amazon Jungle "
              label="Adventure"
              path="/services"
            />
            <CardItem
              src="images/nature3.jpg"
              text="Raw beauty of bangladesh "
              label="Adventure"
              path="/services"
            />
            <CardItem
              src="images/nature4.jpg"
              text="Explore the hidden waterfall deep inside the Amazon Jungle"
              label="Adventure"
              path="/services"
            />

            <CardItem
              src="images/Jhorjhori Waterfalls.jpeg"
              text="A challenging place for adventure seekers it is located in shitakundu."
              label="Adventure"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
