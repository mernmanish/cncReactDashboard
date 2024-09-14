import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
// import { API_STATUS } from '../../../../services/apiUtils'
import { AuthService } from '../../../../services/modules'
import { getLoggedUser,saveUserToken,saveUser } from '../../../../utils/helper'
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';


const useLogin = () => {
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState(null);
  const [loginError, setLoginError] = useState(null);

 const navigate = useNavigate();


  const onSubmit = async (data) => {
    const payLoad = {
      email: data.email,
      password: data.password
    };
    setLoading(true)
    AuthService.login(payLoad)
      .then(res => {
        setLoading(false);
        if(res.user && res.access_token){
          saveUserToken(res.access_token);
          saveUser(res.user);
          setMessage('Login Successful')
          navigate('/home');

          //navigate here or do some action
        }
      })
      .catch(e => {
        setLoading(false);
        setLoginError(e.message);
        // toast.setLoginError('Error fetching data. Please try again.', {
        //   position: 'top-right',
        //   autoClose: 3000, // 3 seconds
        //   hideProgressBar: true,
        // })
      })
  }
  useEffect(() => {
    const user = getLoggedUser()
    // if (user !== null && user !== undefined) {
    //   navigate('/home')
    return;
    // }
}, []);
  return { onSubmit,loading,message,loginError }
}

export default useLogin