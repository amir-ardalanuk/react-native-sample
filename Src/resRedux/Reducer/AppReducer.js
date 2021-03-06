import { combineReducers } from 'redux'
import LibraryReducer from './LibraryReducer'
import SelectedLib from './SelectedLibReducer'
import LoginReducer from './LoginReducer'
import ProvinceReducer from './ProvinceReducer'
import CitiesReducer from './CitiesReducer'
import LocationItem from './LocationItemReducer'
import UserTrips from './UserTripsReducer'

export default combineReducers({
    lib : LibraryReducer ,
    selectLibrary : SelectedLib,
    loginProps: LoginReducer ,
    updatedCities :CitiesReducer,
    provinceList : ProvinceReducer,
    locationItems : LocationItem , 
    userTrips : UserTrips
})