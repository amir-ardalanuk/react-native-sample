
import React, {Component} from 'react';
import { Provider } from 'react-redux'
import reducers from  './Src/resRedux/Reducer/AppReducer' 
import { store, AppContainer } from './Src/AppNavigationStack';
import Theme from './Src/Theme'

export default class App extends Component {

  render() {
    console.log(reducers)
    this.props.theme = Theme
    return (
    
      <Provider store = {store } >
       <AppContainer screenProps = {{...this.props,theme:Theme}} />
      </Provider> 
    

    );
  }
}