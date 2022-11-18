import React, { useCallback, useContext, useState } from 'react';
import DatePicker from 'react-date-picker';
import { applyFilters } from '../../actions/action';
import MyContext from '../../context/context';

const Filters = () => {
  const { state, dispatch } = useContext(MyContext);
  const [startDate, setStartDate] = useState(new Date());
  const date = new Date();
  const [endDate, setEndDate] = useState(new Date(date.setMonth(date.getMonth() + 3)));

  const search = useCallback(() => {
    applyFilters(dispatch, startDate, endDate);
  }, [dispatch, startDate, endDate]);

  return (
    <div data-testid='filters'>
      <div>
        <span>Start Date: <DatePicker onChange={setStartDate} value={startDate} /></span>
        <span>End Date: <DatePicker onChange={setEndDate} value={endDate} /></span>
      </div>

      <br /><div><button type='button' onClick={search}>Find Launches</button></div>
    </div>
  );
};

export default Filters;