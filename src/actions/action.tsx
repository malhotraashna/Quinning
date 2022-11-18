import React from "react";
import services from "../services/service";

const getDefaultLaunches = async (dispatch: React.Dispatch<any>) => {
  dispatch({
    type: 'START_LOADING',
  });
  const launchData = await services.getDefaultLaunchData();
  console.log('launchData::: ', launchData);
  dispatch({
    type: 'LAUNCH_DATA',
    data: launchData,
  });
};

const setCurrentLaunch = (launch: any, dispatch: React.Dispatch<any>) => {
  dispatch({
    type: 'START_LOADING',
  });
  dispatch({
    type: 'CURRENT_LAUNCH',
    data: launch,
  });
};

const applyFilters = async (dispatch: React.Dispatch<any>, startDate: any, endDate: any) => {
  dispatch({
    type: 'START_LOADING',
  });
  //designed to handle other filters too
  const start_date = new Date(startDate).toISOString();
  console.log('start_date:: ', start_date);
  const end_date = new Date(endDate).toISOString();
  console.log('end_date:: ', end_date);
  const launchData = await services.getLaunchData(start_date, end_date);
  dispatch({
    type: 'LAUNCH_DATA',
    data: launchData,
  });
};

export {
  getDefaultLaunches,
  setCurrentLaunch,
  applyFilters,
};