import { useLocation } from "react-router-dom";
import { AllRoutes } from "./AllRoutes/AllRoutes";
import { Navbar } from "./Components/Navbar";
import { AdminNavbar } from "./Admin/AdminNavbar";

function App() {
  const location = useLocation();
  const useAdminNavbar =
    location.pathname === "/admin-dashboard" ||
    location.pathname === "/admin-addlactures"||
    location.pathname === "/admin-addcourses" ||
    location.pathname === "/admin-schedulelacture" 
  return (
    <>
      {useAdminNavbar ? <AdminNavbar /> : <Navbar />}
      <AllRoutes />
    </>
  );
}

export default App;
