const mockTrip =  [
    {
      "id": "5c62b12f614d94edeeb84bf0",
      "driverName": "Ali",
      "driverFamily": "ardalan",
      "fromName": "Terhan",
      "toName": "Karaj",
      "toID": "1",
      "fromID": "2",
      "price": "20000",
      "tripHour" : "07",
      "tripMin" : "15",
      "driverCarModel": "Benz",
      "driverCarColor": "blue",
    },
    {
        "id": "5c62b12f614d94edeeb84bf0",
        "driverName": "Ali",
        "driverCarModel": "Benz",
        "driverCarColor": "blue",
        "driverFamily": "ardalan",
        "fromName": "Terhan",
        "toName": "Karaj",
        "toID": "1",
        "fromID": "2",
        "price": "50000",
        "tripHour" : "07",
        "tripMin" : "15",
      },
      {
        "id": "5c62b12f614d94edeeb84bf0",
        "driverName": "amir",
        "driverCarModel": "Benz",
        "driverCarColor": "blue",
        "driverFamily": "ardalan",
        "fromName": "Terhan",
        "toName": "Karaj",
        "toID": "1",
        "fromID": "2",
        "price": "30000",
        "tripHour" : "08",
        "tripMin" : "00",
      },
    
  ]
import {USER_TRIP_ACTION} from './../type';
  export default UserTripreducer = (state=null , action) => { 
      switch (action.type) { 
          case  USER_TRIP_ACTION : 
          return mockTrip
          default:
          return mockTrip
      }
  }