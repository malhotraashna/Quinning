import React, { useContext } from 'react';
import MyContext from '../../context/context';

const LaunchDetails = () => {
  const { state, dispatch } = useContext(MyContext);

  return (
    <div data-testid='details'>
      <span>Name: {state.currentLaunch?.name}</span><br />
      <span>Start Time: {state.currentLaunch?.start_time}</span><br />
      <span>End Time: {state.currentLaunch?.end_time}</span><br />
      <span>Launch Pad Name: {state.currentLaunch?.launch_pad}</span><br />
      <span>Agency ID: {state.currentLaunch?.agency}</span><br />
    </div>
  );
};

export default LaunchDetails;