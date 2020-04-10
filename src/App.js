import React from 'react';
import logo from './logo.svg';
import './App.css';
import BingoList from './components/BingoList';
import { useCookies } from 'react-cookie';
import ResetButton from './components/ResetButton';

import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';
import { render } from 'react-dom';

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
      console.log('hi')
      cookies.set('board', GenerateBoard(), { path: '/' })
      cookies.set('initialized', true, { path: '/' })
    }

console.log(cookies)
  }

  onClick = () =>
  {
    console.log('onClick')
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
