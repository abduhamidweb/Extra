import React from 'react';
import NavigateLink from "../../Components/NavigateLink/NavigateLink";
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
        <div className="NavigateLine"></div>
       
      </>
    );
};

export default NavigateLinks;