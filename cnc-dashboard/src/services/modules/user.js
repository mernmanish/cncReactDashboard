import API_PATH from "../apiEndPoint"
import { apiService } from "../apiRequest"
import { API_METHOD } from "../apiUtils"

class User {
    
    updateUserDetails = async (data) => {
        const options = {
            contentType: "multipart/form-data",
        }
        return apiService(API_METHOD.POST, API_PATH.UPDATE_USER_DETAILS, data, options)
    }

}

const UserService = new User()

export default UserService
