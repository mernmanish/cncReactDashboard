import API_PATH from "../apiEndPoint"
import { authRequest } from "../apiRequest"

class  Auth {
    login =async (data) => {
        return authRequest(API_PATH.LOGIN, data)
    }
    register = async (data) => {
        return authRequest(API_PATH.REGISTER, data)
    }
}

const AuthService=new Auth()

export default AuthService
