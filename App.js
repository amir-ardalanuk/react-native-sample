
import React, {Component} from 'react';
import { Provider } from 'react-redux'
import { createStore , applyMiddleware } from 'redux'
import reducers from  './Src/resRedux/Reducer/AppReducer' 
import ReduxThunk from 'redux-thunk'

import { createAppContainer , createStackNavigator , createBottomTabNavigator , createSwitchNavigator} from 'react-navigation'
import ListItem from './Src/Component/List/ListItem'
import Home from './Src/Component/Home/HomeCntrl'
import Dashboard from './Src/Component/Dashboard/Dashboard'
import Profile from './Src/Component/Profile/ProfileCntrl'
import Splash from './Src/Component/Splash/SplashCntrl'
import SignIn from './Src/Component/Login/SignIn'
import SearchLocation from './Src/Component/Search location/SearchLocation'

const LoginStack = createStackNavigator({
  signIn :  SignIn
})

const SplashStack = createStackNavigator({
  splash :  Splash
})

const HomeStack = createStackNavigator({
  SearchLocation,
  Dashboard,
  Home,
  List : ListItem
})

const ProfileStack = createStackNavigator({
  Profile :  Profile
})

const HomeTabbar = createBottomTabNavigator({
  HomeStack : HomeStack , 
  ProfileStack : ProfileStack
})
const AppStack =  createSwitchNavigator(
  {
    tabBar: HomeTabbar,
    splashStack: SplashStack,
    login : LoginStack

  },
  {
    initialRouteName: 'login',
  }
);
const AppContainer = createAppContainer(AppStack)
const store = createStore(reducers ,{} , applyMiddleware(ReduxThunk) );   

export default class App extends Component {

  render() {
    console.log(reducers)
    return (
    
      <Provider store = {store } >
       <AppContainer screenProps = {this.props} />
      </Provider> 
    

    );
  }
}