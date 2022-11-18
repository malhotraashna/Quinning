import React, { useEffect, useContext } from 'react';
import LoadingOverlay from 'react-loading-overlay-ts';
import WorldMapAtlas from '../WorldMapAtlas/WorldMapAtlas';
import MyContext from '../../context/context';
import { getDefaultLaunches } from '../../actions/action';
import LaunchDetails from '../LaunchDetail/LaunchDetail';
import Filters from '../Filters/Filter';

const Home = () => {
  const { state, dispatch } = useContext(MyContext);

  useEffect(() => {
    getDefaultLaunches(dispatch);
  }, []);

  return (
    <>
      <LoadingOverlay
        active={state.isLoading}
        spinner={true}
        text='Loading...'
      >
        <Filters />
        <WorldMapAtlas />
        {state?.currentLaunch?.name && <LaunchDetails />}
      </LoadingOverlay>
    </>
  );
};

export default Home;