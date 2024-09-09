"use client";

import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../store/store'; // Adjust the path as needed
import 'react-toastify/dist/ReactToastify.css';


interface ReduxProviderProps {
  children: React.ReactNode;
}

const ReduxProvider: React.FC<ReduxProviderProps> = ({ children }) => {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};

export default ReduxProvider;
