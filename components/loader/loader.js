import React from "react"

import { Balls } from './loadingBalls';
import { Screen } from './loadingScreen';

const LoadingScreen = () => {
  return (
    <Screen>
      <Balls>
        <div className="ball one"></div>
        <div className="ball two"></div>
        <div className="ball three"></div>
      </Balls>
    </Screen>
  );
};

export default LoadingScreen;
