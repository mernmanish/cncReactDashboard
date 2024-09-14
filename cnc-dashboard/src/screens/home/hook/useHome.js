import {useState,useEffect} from 'react'
import PatientService from '../../../services/modules/patient';
const useHome = () => {
    const [recentPatients, setRecentPatients] = useState([]);
    const [errors, setError] = useState(null);
  
  const getRecentPatientData = async() => {
    try {
     const res = await PatientService.fetchRecentPatient();
     setRecentPatients(res.patients)
     console.log(res.patients);
    } catch (error) {
      setError(error.message)
    }

  }



    useEffect(() => {
      getRecentPatientData();
     //do async operation here 
    }, [])
  return {recentPatients}
}

export default useHome