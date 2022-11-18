import React from 'react';
import { render, screen } from '@testing-library/react';
import services from '../../services/service';
import MyContext from '../../context/context';
import Home from './Home';

const mockLaunchData: any = [{
  agency: 'Test ID 1',
  coordinates: ['-80.57735736', '28.56194122'],
  start_time: 'Test Start Date 1',
  end_time: 'Test End Date 1',
  launch_pad: 'Test Launch Pad',
  name: 'Test Name 1',
}, {
  agency: 'Test ID 2',
  coordinates: ['-80.57735736', '28.56194122'],
  start_time: 'Test Start Date 2',
  end_time: 'Test End Date 2',
  launch_pad: 'Test Launch Pad',
  name: 'Test Name 2',
}, {
  agency: 'Test ID 3',
  coordinates: ['-80.57735736', '28.56194122'],
  start_time: 'Test Start Date 3',
  end_time: 'Test End Date 3',
  launch_pad: 'Test Launch Pad',
  name: 'Test Name 3',
}];

let mockDispatch: React.Dispatch<any>;
let mockState: any;

describe('All Home elements are displayed correctly', () => {
  beforeAll(() => {
    jest.spyOn(services, 'getLaunchData').mockResolvedValue(mockLaunchData);
    mockDispatch = jest.fn();
    mockState = {
      launches: mockLaunchData,
      currentLaunch: mockLaunchData[0],
      isLoading: false,
    };
  });

  test('display loading icon when getting data from server', () => {
    // given
    mockState = {
      launches: [],
      currentLaunch: {},
      isLoading: true,
    };

    // when
    render(<MyContext.Provider value={{ state: mockState, dispatch: mockDispatch }}><Home /></MyContext.Provider>);

    // then
    const loaderComponent = screen.getByTestId('wrapper');
    expect(loaderComponent).toBeInTheDocument();
  });

  test('display map on load without details when no point is clicked', () => {
    // given
    mockState = {
      launches: mockLaunchData,
      currentLaunch: {},
      isLoading: false,
    };

    // when
    render(<MyContext.Provider value={{ state: mockState, dispatch: mockDispatch }}><Home /></MyContext.Provider>);

    // then
    const filterComponent = screen.getByTestId('filters');
    const mapComponent = screen.getByTestId('map');
    expect(filterComponent).toBeInTheDocument();
    expect(mapComponent).toBeInTheDocument();
  });

  test('display map with details when currentLaunch is set', () => {
    // given
    mockState = {
      launches: mockLaunchData,
      currentLaunch: mockLaunchData[0],
      isLoading: false,
    };

    // when
    render(<MyContext.Provider value={{ state: mockState, dispatch: mockDispatch }}><Home /></MyContext.Provider>);

    // then
    const filterComponent = screen.getByTestId('filters');
    const mapComponent = screen.getByTestId('map');
    const detailComponent = screen.getByTestId('details');
    expect(filterComponent).toBeInTheDocument();
    expect(mapComponent).toBeInTheDocument();
    expect(detailComponent).toBeInTheDocument();
  });
});