import React, { useState, useEffect } from 'react';

const useCurrentTime = () => {
  const [currentTime, setCurrentTime] = useState();

  useEffect(() => {
    const handler = setInterval(() => {
      const currentTime = new Date().toISOString().slice(11, 19);
      setCurrentTime(currentTime);
    }, 1000);
    return () => clearInterval(handler);
  }, []);

  return currentTime;
};

const useWindowWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);

  const onResize = () => {
    setWidth(window.innerWidth);
    console.log('move');
  };
  useEffect(() => {
    console.log('five');
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return width;
};

const App = () => {
  const currentTime = useCurrentTime();
  const windowWidth = useWindowWidth();

  return (
    <div>
      <h1>time now</h1>
      <h2>{currentTime}</h2>
      {windowWidth}
    </div>
  );
};

export default App;
