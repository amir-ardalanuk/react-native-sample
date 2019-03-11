import { createStore, applyMiddleware } from 'redux';
import reducers from './resRedux/Reducer/AppReducer';
import ReduxThunk from 'redux-thunk';
import { createAppContainer, createStackNavigator, createBottomTabNavigator, createSwitchNavigator } from 'react-navigation';
import { ListItem, Profile, Splash, Login , CodeAuth } from './Component/';
import {Home,Dashboard,SearchLocation , TripList , TripDetail , LotteryList , LotteryDetail} from './Component/'

const LoginStack = createStackNavigator({
  signIn: Login,
  CodeAuth,
 
});

const SplashStack = createStackNavigator({
  splash: Splash
});

const HomeStack = createStackNavigator({
  TripList,
  Home,
  SearchLocation,
  Dashboard,
  TripDetail,
  List: ListItem,
  LotteryList,
  LotteryDetail,
}, {
  initialRouteName: 'LotteryDetail',
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
    initialRouteName: 'login',
  });
export const AppContainer = createAppContainer(AppStack);
export const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
