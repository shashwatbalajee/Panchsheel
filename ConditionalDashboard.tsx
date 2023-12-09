import { Outlet, Navigate } from "react-router-dom";
import { useAppSelector } from "./app/hooks";
import Dashboard from "./features/Component/Dashboard/Dashboard";
import Dashboard1 from "./features/Component/Dashboard/DashboardGraph2";
// interface prop {
//   path: string;
//   condition: boolean;
// }
function ConditionalDashboard() {
  return localStorage.getItem("userName") == "1" ? (
    <Dashboard />
  ) : (
    <Dashboard1 />
  );

  // return localStorage.getItem("userName") == "768" ? (<Dashboard />
  // ):(
  //  <Dash
  // );
}

export default ConditionalDashboard;
