import React, { createContext, useReducer } from 'react';
import axios from 'axios';

const initialState = {
  urls: [],
  loading: true
};

const UrlContext = createContext(initialState);

const urlReducer = (state, action) => {
  switch (action.type) {
    case 'GET_URLS':
      return {
        ...state,
        urls: action.payload,
        loading: false
      };
    // Add more cases as necessary
    default:
      return state;
  }
};

const UrlProvider = ({ children }) => {
  const [state, dispatch] = useReducer(urlReducer, initialState);

  const getUrls = async () => {
    // get URLs logic
  };

  return (
    <UrlContext.Provider value={{ state, getUrls }}>
      {children}
    </UrlContext.Provider>
  );
};

export { UrlContext, UrlProvider };
