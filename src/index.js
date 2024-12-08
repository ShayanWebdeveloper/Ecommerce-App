// Main entry point for React app (index.js)
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './Redux/store.js'
import { createBrowserRouter, RouterProvider } from "react-router-dom"; 
import Detail from './Component/Detail/Detail.jsx'; 

// Define routes for the app
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, 
  },
  {
    path: "/details/:id", 
    element: <Detail />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

// Render app inside Provider to pass Redux store
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} /> {/* Router Provider to handle routing */}
    </Provider>
  </React.StrictMode>
);

reportWebVitals(); // Optional: For performance monitoring
