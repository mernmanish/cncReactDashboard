import axios from 'axios';
import Config from '../config';
import { getUserToken } from '../utils/helper';
import { API_METHOD } from './apiUtils';




// Helper function for handling errors
function handleErrors(error) {

    // console.log("handleerror",error.response.status);
    if(error.response.status==401)
    {
        throw new Error('Invalid Login Credentails');
    }
    else if (error.request) {
        throw new Error('No response received from the server.');
    }
    else{
        const errorMessage = error.response.data.error ||error?.response?.data?.message || 'An error occurred on the server.';
        throw new Error(errorMessage);
    }
    // if (error?.response?.data) {
    //     const errorMessage = error.response.data.error ||error?.response?.data?.message || 'An error occurred on the server.';
    //     throw new Error(errorMessage);
    // }
    // else if (error.request) {
    //     throw new Error('No response received from the server.');
    // }
    // else {
    //     throw new Error('An error occurred while making the request.');
    // }
}


// Function for making GET and POST requests
export async function apiService(method, path, data = {}, options = {}) {
    const { timeout = 12000, headers = {}, contentType = 'application/json' } = options;
    const token = getUserToken();
    const config = {
        headers: {
            'Content-Type': contentType,
              Authorization: `Bearer ${token}`,
            ...headers,
        },
    };
    

    // console.log(config,BASE_URL,__DEV__)

  //  console.log(config)

    try {
        const response = await axios.request({
            method,
            url: `${Config.BASE_URL}/${path}`,
            data,
            ...config,
            timeout
        });
      // console.log(response)
        return response.data;
    } catch (error) {
        console.log('api error::::', error)
        handleErrors(error);
    }
}

// Function for making AUTH requests (login, register)
export async function authRequest(path, data = {}) {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    const options = {
        auth: true
    }

    try {
        const response = await apiService(API_METHOD.POST, path, data, config, options);
       // console.log('Response', response);
        return response;
    } catch (error) {
        throw error
    }
}





