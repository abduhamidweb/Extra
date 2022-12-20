import React from 'react';
import NavigateLink from "../../Components/NavigateLink/NavigateLink";
import "./NavigateLinks.css"
const NavigateLinks = () => {
    return (
      <>
        <ul className="list">
          <NavigateLink LinkItem="/" TitleItem="Hot Dishes" />
          <NavigateLink LinkItem="/colddishes" TitleItem="  Cold Dishes" />
          <NavigateLink LinkItem="/soup" TitleItem="Soup" />
          <NavigateLink LinkItem="/grill" TitleItem="Grill" />
          <NavigateLink LinkItem="/appetizer" TitleItem="Appetizer" />
          <NavigateLink LinkItem="/desert" TitleItem="Desert" />
        </ul>
        
       
      </>
    );
};

export default NavigateLinks;