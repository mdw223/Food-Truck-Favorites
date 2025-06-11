import React from 'react';

const FoodTruckPage = ({  onSwitch }) => {
  return (
    <div>
          <h1>Food Trck Favorites</h1>
          <button className='intro-page-switch-button' onClick={onSwitch}>Go to Intro Page </button>
        </div>
  );
};

export default FoodTruckPage;
