import { LoginUserType , LoginUserFail , LoginUserLoading , FILTER_PROV} from '../type'

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
export const filterProv = (text) => { 
    return {
        type : FILTER_PROV,
        payload:text   
    }
}

export const loginUser = ({mobile = null}) => { 
    return (disptach) =>  {
        disptach({type:LoginUserLoading})
        setTimeout( ()=>{
            if(mobile === "09196475280"){
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