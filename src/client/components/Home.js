import React from 'react';

const Home = () => {
  
  const handleClick = function(){
    console.log('Hi, there');
  };

  return (
    <div>
      I'm the home component
      <button onClick={handleClick}>Press Me</button>
    </div>
  );
};

export default Home;