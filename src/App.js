import React from 'react';
import './App.css';
import BingoList from './components/BingoList';
import ResetButton from './components/ResetButton';

import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';
function GenerateBoard() {
  return `
 { 
   "numbers": [[],[],[],[],[]],
   "selected":  [[],[],[],[],[]],
   "initialized": [false,false,false,false]
}
  `
}

class  App extends React.Component {
  
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
};

constructor(props){
    super(props);
    
    this.Initialize();
}

   Initialize = () => {
    const { cookies } = this.props;
    if (!cookies.cookies.initialized) {
      cookies.set('initialized', false, { path: '/' })
    }

    if (!cookies.cookies.initialized) {
      cookies.set('board', GenerateBoard(), { path: '/' })
      cookies.set('initialized', true, { path: '/' })
    }

  }

  onClick = () =>
  {
    const { cookies } = this.props;
    cookies.set('initialized', false, { path: '/' })
    this.Initialize();

  }

  render(){
  return (
    <div className="App">

      <BingoList />
      <ResetButton onClick={this.onClick}/>
    </div>
  );
  }
}

export default withCookies( App);
