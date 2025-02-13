import React from "react";
import "./index.css";
import AppRouter from "./Routes/Routes";
import ToastContainer from "./components/ui/toaster";

const App = () => {
  return (
    <>
      <ToastContainer />
      <AppRouter />
    </>
  );
};

export default App;
