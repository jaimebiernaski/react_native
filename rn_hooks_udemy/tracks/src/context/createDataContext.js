import React, { useReducer } from 'react';

export default (reducer, actions, initialState) => {
  const Context = React.createContext();
  const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const boundActions = {};

    for (let actionAsKey in actions) {
      boundActions[actionAsKey] = actions[actionAsKey](dispatch);
    }

    return (
      <Context.Provider value={{ state, ...boundActions }}>
        {children}
      </Context.Provider>
    );
  };

  return { Context, Provider };
};
