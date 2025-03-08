import Page404 from "./Pages/Page404";
import Homepage from "./Pages/Homepage";
import Layout from "./Layout";
//設定 Router
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />}></Route>
          <Route path="*" element={<Page404 />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
