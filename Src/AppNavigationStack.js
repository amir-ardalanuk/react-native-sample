import { createStore, applyMiddleware } from 'redux';
import reducers from './resRedux/Reducer/AppReducer';
import ReduxThunk from 'redux-thunk';
import { createAppContainer, createStackNavigator, createBottomTabNavigator, createSwitchNavigator } from 'react-navigation';
import { ListItem, Profile, Splash, Login } from './Component/';
import {Home,Dashboard,SearchLocation} from './Component/'

const LoginStack = createStackNavigator({
  signIn: Login
});

const SplashStack = createStackNavigator({
  splash: Splash
});

const HomeStack = createStackNavigator({
  Home,
  SearchLocation,
  Dashboard,
  List: ListItem
}, {
  initialRouteName: 'Dashboard',
});
const ProfileStack = createStackNavigator({
  Profile: Profile
});
const HomeTabbar = createBottomTabNavigator({
  HomeStack: HomeStack,
  ProfileStack: ProfileStack
});
const AppStack = createSwitchNavigator({
  tabBar: HomeTabbar,
  splashStack: SplashStack,
  login: LoginStack
}, {
    initialRouteName: 'splashStack',
  });
export const AppContainer = createAppContainer(AppStack);
export const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
