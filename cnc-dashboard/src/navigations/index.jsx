// import React from 'react'
import { BrowserRouter as Router,Route, Routes } from "react-router-dom"
import Login from "../screens/auth/login"
import Home from "../screens/home"
import NotFound from "../screens/404"
import AddDoctor from "../screens/doctor/add"
import AllDoctor from "../screens/doctor"
import AllClinic from "../screens/clinic"
import AddClinic from "../screens/clinic/add"
import Medicine from "../screens/medicine"
import PageNotFound from "../screens/404"
import Patient from "../screens/patient"
import AddPatient from "../screens/patient/add"
const NavigationContainer = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route  path="/home" element={<Home />} />
        <Route  path="/doctor/add-doctor" element={<AddDoctor />} />
        <Route  path="/doctor/all-doctors" element={<AllDoctor />} />
        <Route  path="/clinic/all-clinic" element={<AllClinic />} />
        <Route  path="/clinic/add-clinic" element={<AddClinic />} />
        <Route  path="/medicine" element={<Medicine />} />
        <Route  path="/patient/all-patients" element={<Patient />} />
        <Route  path="/patient/add-patient" element={<AddPatient />} />
        <Route  path="/*" element={<PageNotFound />} />

        {/* <Route  component={NotFound} /> */}
        <Route path="/not-found" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default NavigationContainer