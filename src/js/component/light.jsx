import React, { useState } from 'react';

const Light = () => {
  //const [on, setOn] = useState(false);
  const [colorOn, setColorOn] = useState('');

  const selectColor = (color) => {
    setColorOn(color);
  };

  return (
    <>
    <div 
    className={`light red ${colorOn === 'red' ? 'on' : ''}`} 
    onClick={()=>selectColor('red')}>
    </div>

    <div 
    className={`light yellow ${colorOn === 'yellow' ? 'on' : ''}`} 
    onClick={()=>selectColor('yellow')}>
    </div>

    <div 
    className={`light green ${colorOn === 'green' ? 'on' : ''}`} 
    onClick={()=>selectColor('green')}>
    </div>
  </>
  );
};

export default Light;