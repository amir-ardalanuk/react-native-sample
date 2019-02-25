import { FILTER_PROV } from '../type'
import ProvList from './ProvinceReducer'
export default (state = null , action) => {
    list = ProvList()
    switch (action.type){
        case  FILTER_PROV:
        
        if(action.payload == undefined || action.payload == ""  ){
            return list
        }else{
            const lucky = list.filter(function(item) {
                return filterItem(item,action.payload)
              });
              console.log(lucky)
            return lucky
        }
        default : return list
    }
}
const filterItem = (item , text) => {
    return  item.province_name.includes(text)
}