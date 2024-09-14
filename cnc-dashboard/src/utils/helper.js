const getLoggedUser = () => {
    try{
        let user = JSON.parse(localStorage.getItem('user'));
        if (user !== undefined && user !== null) {
            //console.log("userData",user);
            return user
        }
    }
    catch(error)
    {
        //
    }
}

const saveUser = (user)=>{
    localStorage.setItem('user', JSON.stringify(user))
    //console.log(user);
}

const saveUserToken = (token)=>{
    localStorage.setItem('token',token)
    //console.log(token);
    //code here
}
const getUserToken = () => {
    return localStorage.getItem('token');
}

export{getLoggedUser,saveUser,saveUserToken,getUserToken}