import React,{useState} from 'react';
import {BrowserRouter,Route,Routes} from 'react-router-dom';

//login routes
import AppLogin from './components/appointment_management/login';
import InvLogin from './components/inventory_management/InvLogin';
import LabLogin from './components/lab_management/LabLogin';
import PetLogin from './components/pet_management/PetLogin';
import PhrLogin from './components/pharamarcy_management/phrLogin';
import LoginStaff from './components/staff_management/LoginStaff';

//appointment manager routes
import AppointmentDetails from './components/appointment_management/AppointmentDetails';
import Appointments from './components/appointment_management/Appointments';
import CreateAppointment from './components/appointment_management/CreateAppointment';
import EditAppointment from './components/appointment_management/EditAppointment';
import DailyAppointments from './components/appointment_management/DailyAppointments';
import CheckedInAppointments from './components/appointment_management/DailyCheckedInAppointments';
import Vaccination from "./components/appointment_management/VaccinationAppointments"
import AppointmentReport from "./components/appointment_management/AppointmentReport"
//lab management routes
import Labs from './components/lab_management/Labs';
import Createlab from './components/lab_management/Createlab';
import EditLab from './components/lab_management/EditLab';
import Reservation from './components/lab_management/Reservation';
import CreateReservation from './components/lab_management/CreateReservation';
import EditReservation from './components/lab_management/EditReservation';
import LabReport from './components/lab_management/LabReport';
//pharamarcy management routes
import Add_Medicine from "./components/pharamarcy_management/Add_Medicine";
import Medicine_Details from "./components/pharamarcy_management/Medicine_Details";
import Buyer_Request from "./components/pharamarcy_management/Buyer_Request";
import View_Prescription from "./components/pharamarcy_management/View_Prescription";
import Update_Medicine from "./components/pharamarcy_management/Update_Medicine";
import MedicineCode from "./components/pharamarcy_management/MedicineCode";
import View_Request from "./components/pharamarcy_management/View_Request";
import Update_Request from "./components/pharamarcy_management/Update_Request";
//Inventory management
import ViewMed from "./components/inventory_management/ViewMed";
import AddMed from "./components/inventory_management/AddMed";
import MedEdit from "./components/inventory_management/MedEdit";
import MedReport from "./components/inventory_management/MedReport";
import BuyerReq from "./components/inventory_management/BuyerReq";
//Prescription management
import AllPrescription from './components/prescription_management/AllPrescription';
import Newprescription from './components/prescription_management/Newprescription';
import DocViewPrescription from './components/prescription_management/DocViewPrescription';
import DocViewAppoinment from './components/prescription_management/DocViewAppoinment';
import GivePrescrption from './components/prescription_management/GivePrescrption';
import PrescriptionReport0 from './components/prescription_management/PrescriptionReport0';
import PharmacyReport from "./components/pharamarcy_management/PharmacyReport";
import LoginPrescription from './components/prescription_management/LoginPrescription';
//pet management
import ViewPets from './components/pet_management/ViewPets';
import ViewProfile from './components/pet_management/ViewProfile';
import UpdateProfile from './components/pet_management/UpdateProfile';
import Newform from './components/pet_management/Newform';
import InquiryForm from './components/pet_management/InquiryForm';
import ViewInquiries from './components/pet_management/ViewInquiries';
//staff management
import AddDocter from './components/staff_management/AddDocter';
import AddNurse from './components/staff_management/AddNurse';
import DoctorView from './components/staff_management/DoctorView';
import Updatedoc from './components/staff_management/Updatedoc';
import NurseView from './components/staff_management/NurseView';
import UpdateNurse from './components/staff_management/UpdateNurse';
//payment management
import DoPayment from "./components/payment_management/DoPayment";
import DisplayPaymets from "./components/payment_management/DisplayPaymets";
import UpdatePayment from "./components/payment_management/UpdatePayment";
import DailyPayment from "./components/payment_management/DailyPayment";

//Dashboard
import Dashboard from './components/DashBoard';

export default function App() {
    const[search,setSearch] = useState("")
    return(

      <BrowserRouter>
            <Routes>
              {/* dashboard */}
              <Route path="/" element ={<Dashboard/>}></Route>
              {/* login routes */}
              <Route path="/applogin" element={<AppLogin/>}></Route>
              <Route path="/invLogin" element ={<InvLogin/>}></Route>
              <Route path="/labLogin" element ={<LabLogin/>}></Route>
              <Route path="/petLogin" element ={<PetLogin/>}></Route>
              <Route path="/phrLogin" element ={<PhrLogin/>}></Route>
              {/* appointment management routes */}
              <Route path="/add" element ={<CreateAppointment/>}></Route>
              <Route path="/all" element = {<Appointments/>}></Route>
              <Route path="/dailyAppointments" element = {<DailyAppointments/>}></Route>
              <Route path="/updateAppointment/:id" element ={<EditAppointment/>}></Route>
              <Route path="/appointmentDetails/:id" element ={<AppointmentDetails/>}></Route>
              <Route path="/checkedInAppointments" element ={<CheckedInAppointments/>}></Route>
              <Route path="/Vaccinations" element ={<Vaccination/>}></Route>
              <Route path="/AppointmentReport" element ={<AppointmentReport setSearch={setSearch} search={search}/>}></Route>
              {/* lab management routes */}
              <Route path="/labs" element={<Labs/>}></Route>
              <Route path="/Createlab" element={<Createlab/>}></Route>
              <Route path="/LabReport" element={<LabReport setSearch={setSearch} search={search} />}></Route>
              <Route path="/EditLab/:id" element={<EditLab/>}></Route>
              <Route path="/Reservation" element={<Reservation/>}></Route>
              <Route path='/CreateReservation' element={<CreateReservation/>}></Route>
              <Route path="/EditReservation/:id" element={<EditReservation/>}></Route>
              {/* Pharamracy Management Routes */}
              <Route path="/medicineDetails" element={<Medicine_Details />}></Route>
              <Route path="/addMedicine" element={<Add_Medicine />}></Route>
              <Route path="/buyer/addRequest" element={<Buyer_Request />}></Route>
              <Route path="/prescription" element={<View_Prescription />}></Route>
              <Route path="/View_Request" element={<View_Request/>}></Route>
              <Route path="/Update_Request/:id" element={<Update_Request/>}></Route>
              <Route path="/Update_Medicine/:id" element={<Update_Medicine />}></Route>
              <Route path="/MedicineCode" element={<MedicineCode />}></Route>
              <Route path="/PharmacyReport"element={<PharmacyReport setSearch={setSearch} search={search} />}></Route>
              {/* inventory management routes */}
              <Route path="/viewMed" element={<ViewMed />}></Route>
              <Route path="/AddMed" element={<AddMed />}></Route>
              <Route path="/MedEdit/:id" element={<MedEdit />}></Route>
              <Route path="/MedReport" element={<MedReport setSearch={setSearch} search={search} />}></Route>
              <Route path="/BuyerReq" element={<BuyerReq />}></Route>
              {/* Prescription management routes */}
              <Route path="/DocViewAppoinment" element={<DocViewAppoinment/>}></Route>
              <Route path="/AllPrescription/:petid" element={<AllPrescription/>}></Route>
              <Route path="/Newprescription/:id" element={<Newprescription/>}></Route> 
              <Route path="/DocViewPrescription/:petid/:id" element={<DocViewPrescription/>}></Route>
              <Route path="/GivePrescrption/:petid/:id" element={<GivePrescrption/>}></Route>
              <Route path="/PrescriptionReport0" element={<PrescriptionReport0/>}></Route>
              <Route path="/loginPrescription" element={<LoginPrescription/>}></Route>
              {/* pet management */}
              <Route path="/viewPets" element={<ViewPets/>}></Route>
              <Route path="/ViewProfile/:id" element={<ViewProfile/>}></Route>
              <Route path="/UpdateProfile/:id" element={<UpdateProfile/>}></Route>
              <Route path="/Newform/" element={<Newform/>}></Route>
              <Route path="/InquiryForm/:id" element={<InquiryForm/>}></Route>
              <Route path="/ViewInquiries" element={<ViewInquiries/>}></Route>
              {/* Staff Management */}
              <Route path="/addDoctor" element={<AddDocter/>}></Route>
              <Route path="/AddNurse" element={<AddNurse/>}></Route> 
              <Route path="/DoctorView" element={<DoctorView/>}></Route>
              <Route path="/AddDocter" element={<AddDocter/>}></Route>
              <Route path="/Updatedoc/:id" element={<Updatedoc/>}></Route>
              <Route path="/NurseView" element={<NurseView/>}></Route> 
              <Route path="/UpdateNurse/:id" element={<UpdateNurse/>}></Route>
              <Route path="/LoginStaff" element={<LoginStaff/>}></Route>

              {/* payment management */}
              {/* <Route path="/" element={<DashBoard/>}/> */}
              <Route path="/add-payment" element={<DoPayment/>}/>
              <Route path="/display-payment" element={<DisplayPaymets/>}/>
              <Route path="/update-payment" element={<UpdatePayment/>}/>
              <Route path="/daily-payment" element={<DailyPayment/>}/>

            </Routes>     
      </BrowserRouter>

    )

}
