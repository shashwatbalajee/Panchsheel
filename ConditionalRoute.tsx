import { Outlet, Navigate } from "react-router-dom";
import { useAppSelector } from "./app/hooks";
interface prop {
  path: string;
  condition: boolean;
}
function ConditionalRoute(prop: prop) {
  const { isAuth } = useAppSelector((state) => state.login);
  return isAuth == prop.condition ? <Outlet /> : <Navigate to={prop.path} />;
  
  const {isAuth1} = useAppSelector((state)=> state.login);
  return isAuth1 == prop.condition ? <Outlet /> : <Navigate to={prop.path}/>
} 

export default ConditionalRoute;
