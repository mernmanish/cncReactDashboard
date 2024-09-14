import API_PATH from "../apiEndPoint"
import { apiService } from "../apiRequest"
import { API_METHOD } from "../apiUtils"


class  Patient {
    fetchRecentPatient =async () => {
        const options = { }
        options.headers={clinic_id:1}
        return apiService(API_METHOD.GET,API_PATH.RECENT_PATIENT,{},options)
    }
}

const PatientService=new Patient()

export default PatientService