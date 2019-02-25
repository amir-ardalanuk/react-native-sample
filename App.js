
import React, {Component} from 'react';
import { Provider } from 'react-redux'
import reducers from  './Src/resRedux/Reducer/AppReducer' 
import { store, AppContainer } from './Src/AppNavigationStack';

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