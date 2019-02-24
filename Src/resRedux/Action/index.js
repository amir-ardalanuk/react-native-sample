import { LoginUserType , LoginUserFail , LoginUserLoading} from '../type'
export const selectLibrary = (libId) => { 
    return {
        type : 'select_library',
        payload:libId   
    }
}

export const selectCity = (city) => { 
    return {
        type : 'select_city',
        payload:city   
    }
}

export const selectProv = (prov) => { 
    return {
        type : 'select_prov',
        payload:prov   
    }
}

export const loginUser = ({email = null , pass = null}) => { 
    return (disptach) =>  {
        disptach({type:LoginUserLoading})
        setTimeout( ()=>{
            if(email === "Amir" && pass === "1234"){
                disptach({ type : LoginUserType , payload:{state : true}})
            }else{
                loginFailed(disptach)
            }
            
          }, 700 );
    }
}

const loginFailed = (dispatch) => {
    dispatch({type: LoginUserFail})
}