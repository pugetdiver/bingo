import React from 'react';
import './App.css';
import BingoList from './components/BingoList';
import ResetButton from './components/ResetButton';

import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';
import BingoNumberGenerator from './components/BingoNumberGenerator';


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

    if(!cookies.cookies.drawnNumbers)
    {
      cookies.set('drawnNumbers', '{ "drawnNumbers": [] }', { path: '/' })
    }

    if(!cookies.cookies.currentNumber)
    {
      cookies.set('currentNumber', -1, { path: '/' })
    }

    if(!cookies.cookies.drawingNumbers)
    {
      cookies.set('drawingNumbers', false, { path: '/' })
    }

    if (!cookies.cookies.initialized) {
      cookies.set('initialized', false, { path: '/' })
    }

    if (!cookies.cookies.initialized) {
      cookies.set('board', GenerateBoard(), { path: '/' })
      cookies.set('initialized', true, { path: '/' })
      cookies.set('drawnNumbers', '{ "drawnNumbers": [] }', { path: '/' })
      cookies.set('currentNumber', -1, { path: '/' })
      cookies.set('drawingNumbers', false , { path: '/' })
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
      <BingoNumberGenerator/>
    </div>
  );
  }
}

export default withCookies( App);
