import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home } from "./app/Home";

import "./App.scss";

const App = () => {
  return (
    <BrowserRouter basename={"/HoneyHiveLandingPage/"}>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="*" element={<p>404</p>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
