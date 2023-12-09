//import React from "react";
//import logo from "./logo.svg";
import Login from "./features/Component/Login/Login";
import Dash from "./features/Component/Dashboard/Dashboard";
// import Dash1 from "./features/Component/Dashboard/Dashboard1";
import Defi from "./features/Component/Defination/Defination";
import City from "./features/Component/Defination/CityMaster/City";
import Site from "./features/Component/Defination/Site/Site";
import Company from "./features/Component/Defination/CompanyName/Company";
import Role from "./features/Component/Defination/Role/Role";
import State from "./features/Component/Defination/PState/PState";
import Dep from "./features/Component/Defination/Department/Department";
import Grade from "./features/Component/Defination/Grade/Grade";
import CompVeh from "./features/Component/Defination/CompanyVehicle/CompanyVehicle";
import Acaquli from "./features/Component/Defination/AcademicQualification/AcademicQulification";
import Locti from "./features/Component/Defination/Location/Location";
import Desig from "./features/Component/Defination/Designation/Designation";
import Leavcag from "./features/Component/Defination/LeaveCategory/LeaveCategory";
import Myreq from "./features/Component/ESSModule/MyRequest/MyRequest";
import ProfiPage from "./features/Component/ESSModule/ProfilePage/ProfilePage";
import Communfeed from "./features/Component/CommunFeed/CommunFeed";
import Empparti from "./features/Component/HCMModule/EmployeeRecord/EmployeeParticular/EmployeeParticular";
import Attendpara from "./features/Component/HCMModule/EmployeeRecord/AttendenceParameters/AttendenceParameters";
import Btools from "./features/Component/HCMModule/EmployeeRecord/BToolsEntitlement/BToolsEntitlement";
import Attend from "./features/Component/HCMModule/Attendance/Attendance";
import Menu2 from "./features/Component/MenuBar/MenuBar2";
import Menu from "./features/Component/MenuBar/MenuBar";
import TreeV from "./features/Component/HCMModule/HierarchyTree/HierarchyTree";
import Side3 from "./features/Component/SideBar/SideBar3/SideBar3";
import Confi from "./features/Component/HCMModule/LifeCycle/Confirmation/Confirmation";
import Transf from "./features/Component/HCMModule/LifeCycle/Transfer/Transfer";
import Prof from "./features/Component/HCMModule/Security/Profile/Profile";
import Secur from "./features/Component/HCMModule/Security/Security";
import Userss from "./features/Component/HCMModule/Security/Users/Users";
import ESSUC from "./features/Component/HCMModule/Security/ESSUserCreation/ESSUserCreation";
import Promo from "./features/Component/HCMModule/LifeCycle/Promotion/Promotion";
import FFS from "./features/Component/HCMModule/LifeCycle/FFS/FFS";
import HistPro from "./features/Component/HCMModule/LifeCycle/HistoricalPromotionForm/HistoricalPromotionForm";
import Clear from "./features/Component/HCMModule/LifeCycle/Clearance/Clearance";
import Sepr from "./features/Component/HCMModule/LifeCycle/Seperation/Seperation";
import ChangeInRe from "./features/Component/HCMModule/LifeCycle/ChangeInReporting/ChangeInReporting";
// import Appra from "./features/Component/HCMModule/LifeCycle/Appraisal/Appraisal";
import Shiftr from "./features/Component/HCMModule/Attendance/ShiftRoster/ShiftRoster";
import Leaveadj from "./features/Component/HCMModule/Attendance/LeaveAdjustment/LeaveAdjustment";
import Leaveappli from "./features/Component/HCMModule/Attendance/LeaveApplication/LeaveApplication";
import AdminLe from "./features/Component/HCMModule/Attendance/AdminLeave/AdminLeave";
import Attenchek from "./features/Component/HCMModule/Attendance/AttendanceCheck/AttendanceCheck";
import AttenLok from "./features/Component/HCMModule/Attendance/AttendanceLock/AttendanceLock";
import AttenRegularis from "./features/Component/HCMModule/Attendance/AttendRegularisation/AttendRegularisation";
import Attenreg from "./features/Component/HCMModule/Attendance/AttendRegister/AttendRegister";
import Lifecy from "./features/Component/HCMModule/LifeCycle/LifeCycle";
import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import ConditionalRoute from "./ConditionalRoute";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import Religion from "./features/Component/Defination/Religion/Religion";
import Bank from "./features/Component/Defination/BankMaster/Bank";
import toast, { Toaster } from "react-hot-toast";
import moment from "moment";
import { Fragment } from "react";
import { LogoutAction } from "./features/Component/Login/LoginActions";
import CommuneFeed from "./features/Component/HCMModule/InfoFeeds/CommuneFeed/CommuneFeed";
import ESSFeed from "./features/Component/HCMModule/InfoFeeds/ESSFeed/ESSFeed";
import Poll from "./features/Component/HCMModule/InfoFeeds/Poll/Poll";
import UploadFile from "./features/Component/HCMModule/InfoFeeds/UploadFile/UploadFile";
import React from "react";
import HelpDesk from "./features/Component/HCMModule/EmployeeRecord/HelpDesk/HelpDesk";
import HolidayCalender from "./features/Component/Defination/HolidayCalender/HolidayCalender";
import RecuritChnl from "./features/Component/Defination/RecuritChannel/RecuritChannel";
import HolidayCalendearMapping from "./features/Component/Defination/HolidayCalendearMapping/HolidayCalendearMapping";
import BloodGroup from "./features/Component/Defination/BloodGroup/BloodGroup";
import BusinessTools from "./features/Component/Defination/BusinessTools/BusinessTools";
import ClearanceMaster from "./features/Component/Defination/ClearanceMaster/ClearanceMaster";
import TimeSheetCat from "./features/Component/Defination/TimeSheetCat/TimeSheetCat";
import TimeSheetEmp from "./features/Component/Defination/TimeSheetEmpAllocation/TimeSheetEmpAllocation";
import LocationMachinesMapping from "./features/Component/Defination/LocationMachinesMapping/LocationMachinesMapping";
import Language from "./features/Component/Defination/Language/Language";
import Training from "./features/Component/Defination/Training/Training";
import Shift from "./features/Component/Defination/Shift/Shift";
import NameReligionChange from "./features/Component/HCMModule/EmployeeRecord/NameReligionChange/NameReligionChange";
//import ShiftDetailsTest from "./features/Component/Defination/Shift/Shift/ShiftDetailsTest/ShiftDetailsTest";
import CarBooking from "./features/Component/HCMModule/EmployeeRecord/CarBooking/CarBooking";
import BusinessFunct from "./features/Component/Defination/BusinessFunction/BusinessFunction";
import DocUpload from "./features/Component/HCMModule/EmployeeRecord/DocUpload/DocUpload";
import TimeSheetCatDept from "./features/Component/Defination/TimeSheetCatDept/TimeSheetCatDept";
import EmployeeRegister from "./features/Component/Dashboard/EmployeeRegisterMaster/EmployeeRegister";
import EmployeeQualification from "./features/Component/Dashboard/EmpQualificationReport/EmpQualificationRecord";
import Appraisal from "./features/Component/HCMModule/LifeCycle/Appraisal/Apprisal";
import ITBToolsIssue from "./features/Component/HCMModule/EmployeeRecord/BToolsEntitlement/ITBToolIssue";
import HRBToolsIssue from "./features/Component/HCMModule/EmployeeRecord/BToolsEntitlement/HRBToolsIssue";
import Dash3 from "./features/Component/Dashboard/Dashboard3";
function App() {
  const expiry = useAppSelector((state) => state.login.expiry);
  const dispatch = useAppDispatch();
  setInterval(() => {
    let current = moment(Date.now());
    let expiration = moment(expiry ?? "");
    if (moment(expiration).diff(current) == 5) {
      toast.error("Session About To Timeout!");
    }
    if (
      moment(expiration).diff(current) == 0 ||
      moment(expiration).diff(current) < 0
    ) {
      dispatch(LogoutAction());
    }
  }, 1000);
  return (
    <Fragment>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route
            element={<ConditionalRoute condition={false} path="/Dashboard" />}
          >
            <Route path="/" element={<Login />} />
          </Route>
          {/* <ConditionalRoute path="/Dashboard" element={<Dash/>} otherElement={<Dash1/>} condition={"0"} currentValue={localStorage.getItem('userName')} /> */}
          <Route element={<ConditionalRoute condition={true} path="/" />}>
            <Route
              path="/Dashboard"
              element={
                localStorage.getItem("userName") == "1" ? <Dash /> : <Dash />
                // localStorage.getItem("userName") == "1" ? <Dash /> : <Dash1 />
              }
            />
            <Route path="/Defination" element={<Defi />} />
            <Route path="/Dashboard3" element={<Dash3 />} />
            <Route path="/City" element={<City />} />
            <Route path="/Site" element={<Site />} />
            <Route path="/Department" element={<Dep />} />
            <Route path="/Role" element={<Role />} />
            <Route path="/Bank" element={<Bank />} />
            <Route path="/Grade" element={<Grade />} />
            <Route path="/BloodGroup" element={<BloodGroup />} />
            <Route path="/BusinessTools" element={<BusinessTools />} />
            <Route path="/Location" element={<Locti />} />
            <Route path="/PState" element={<State />} />
            <Route path="/Company" element={<Company />} />
            <Route path="/TimeSheetCat" element={<TimeSheetCat />} />
            <Route path="/TimeSheetEmpAllocation" element={<TimeSheetEmp />} />
            <Route path="/CompanyVehicle" element={<CompVeh />} />
            <Route path="/Designation" element={<Desig />} />
            <Route path="/AcademicQulification" element={<Acaquli />} />
            <Route path="/Religion" element={<Religion />} />
            <Route path="/LeaveCategory" element={<Leavcag />} />
            <Route path="/HolidayCalender" element={<HolidayCalender />} />
            <Route path="/BusinessFunction" element={<BusinessFunct />} />
            <Route
              path="/HolidayCalendearMapping"
              element={<HolidayCalendearMapping />}
            />
            <Route path="/MyRequest" element={<Myreq />} />
            <Route path="/ProfilePage" element={<ProfiPage />} />
            <Route path="/CommunFeed" element={<Communfeed />} />
            <Route path="/EmployeeParticular" element={<Empparti />} />
            <Route path="/AttendenceParameters" element={<Attendpara />} />
            <Route path="/BToolsEntitlement" element={<Btools />} />
            <Route path="/HelpDesk" element={<HelpDesk />} />
            <Route path="/Attendance" element={<Attend />} />
            <Route path="/MenuBar2" element={<Menu2 />} />
            <Route path="/MenuBar" element={<Menu />} />
            <Route path="/HierarchyTree" element={<TreeV />} />
            <Route path="/SideBar3" element={<Side3 />} />
            <Route path="/AttendRegister" element={<Attenreg />} />
            <Route path="/LeaveAdjustment" element={<Leaveadj />} />
            <Route path="/Confirmation" element={<Confi />} />
            <Route path="/Transfer" element={<Transf />} />
            <Route path="/Profile" element={<Prof />} />
            <Route path="/Security" element={<Secur />} />
            <Route path="/Users" element={<Userss />} />
            <Route path="/ESSUserCreation" element={<ESSUC />} />
            <Route path="/Promotion" element={<Promo />} />
            <Route path="/ShiftRoster" element={<Shiftr />} />
            <Route path="/LeaveApplication" element={<Leaveappli />} />
            <Route path="/AdminLeave" element={<AdminLe />} />
            <Route path="/AttendanceCheck" element={<Attenchek />} />
            <Route path="/AttendanceLock" element={<AttenLok />} />
            <Route path="/AttendRegularisation" element={<AttenRegularis />} />
            <Route path="/LifeCycle" element={<Lifecy />} />
            <Route path="/HistoricalPromotionForm" element={<HistPro />} />
            <Route path="/Clearance" element={<Clear />} />
            <Route path="/Seperation" element={<Sepr />} />
            {/* <Route path="/Appraisal" element={<Appra />} /> */}
            <Route path="/FFS" element={<FFS />} />
            <Route path="/ChangeInReporting" element={<ChangeInRe />} />
            <Route path="/CommuneFeed" element={<CommuneFeed />} />
            <Route path="/ESSFeed" element={<ESSFeed />} />
            <Route path="/Poll" element={<Poll />} />
            <Route path="/UploadFile" element={<UploadFile />} />
            <Route path="/ClearanceMaster" element={<ClearanceMaster />} />
            <Route
              path="/LocationMachinesMapping"
              element={<LocationMachinesMapping />}
            />
            <Route path="/RecuritChannel" element={<RecuritChnl />} />
            <Route path="/Language" element={<Language />} />
            <Route path="/Training" element={<Training />} />
            <Route path="/Shift" element={<Shift />} />
            <Route path="/apprisal" element={<Appraisal />} />
            <Route
              path="/NameReligionChange"
              element={<NameReligionChange />}
            />
            <Route path="/CarBooking" element={<CarBooking />} />
            <Route path="/DocUpload" element={<DocUpload />} />
            <Route path="/TimeSheetCatDept" element={<TimeSheetCatDept />} />
            <Route path="/ITBToolsIssue" element={<ITBToolsIssue />} />
            <Route path="/HRBToolsIssue" element={<HRBToolsIssue />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
