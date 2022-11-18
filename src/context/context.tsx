import React, { createContext } from 'react';

interface ContextInterface {
  state: any,
  dispatch: React.Dispatch<any>
}

const MyContext = createContext({} as ContextInterface);

export default MyContext;