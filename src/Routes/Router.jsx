import { Route, Routes } from "react-router-dom";
import { Q1 } from "../Pages/Q1/Q1";
import { Q2 } from "../Pages/Q2/Q2";
import { Q0 } from "../Pages/Q0/Q0_start";

export const Router = () => {
  return (
    <Routes>
      <Route index element={<Q0 />} />
      <Route path="1" element={<Q1 />} />
      <Route path="2" element={<Q2 />} />
      {/* <Route path="1" element={<BasePage imgsrc={flowerImage} />} />
      <Route path="2" element={<BasePage imgsrc={flowerImage} />} />
      <Route path="3" element={<BasePage imgsrc={flowerImage} />} />
      <Route path="4" element={<BasePage imgsrc={flowerImage} />} /> */}
    </Routes>
  );
};
