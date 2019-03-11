import {LoginUserType , LoginUserFail , LoginUserLoading , FILTER_PROV} from '../type'
const INITIAL_STATE = {
    email : '' , 
    password : '' , 
    user: null , 
    error : null,
    loading : false
}
export default (state = INITIAL_STATE , action) => {
    switch (action.type){
        case  LoginUserType: 
        return {...state,loading : false, user:true}

        case  LoginUserFail: 
        return {...state , error:'fail authenticate' , password : '',loading : false}

        case LoginUserLoading:
        return {...state , error:'' , password : '' ,loading : true }
        default : return state
    }
}