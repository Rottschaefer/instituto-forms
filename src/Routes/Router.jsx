import { Route, Routes } from "react-router-dom";
import { Q1 } from "../Pages/Q1/Q1";
import { Q2 } from "../Pages/Q2/Q2";
import { Q0 } from "../Pages/Q0/Q0_start";
import { Q3 } from "../Pages/Q3/Q3";
import { Q4 } from "../Pages/Q4/Q4";
import { Q5 } from "../Pages/Q5/Q5";

export const Router = () => {
  return (
    <Routes>
      <Route index element={<Q0 />} />
      <Route path="1" element={<Q1 />} />
      <Route path="2" element={<Q2 />} />
      <Route path="3" element={<Q3 />} />
      <Route path="4" element={<Q4 />} />
      <Route path="5" element={<Q5 />} />
    </Routes>
  );
};
