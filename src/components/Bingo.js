import React from 'react'
import './Bingo.css'

class Bingo extends React.Component {

    constructor(){
        super();
        this.state = {
            select: false
        }
    }

    SelectNumber = () =>
    {
     //   console.log('select');
        this.setState(state => {
            return {select: true}
        });
    }

    DeSelectNumber = () =>
    {
      //  console.log('deselect')
        this.setState(state => {
            return {select: false}
        });
    }

    render() {

        if (this.props.free === true) {

            return (
            <div className='bg-light-green dib br3 pa3 ma2  bw2 shadow-5 fl w-100'>
                FR
            </div>
            )
        }
        else if(this.state.select) {
            return (
            <div onClick={this.DeSelectNumber} className='bg-light-green dib br3 pa3 ma2  bw2 shadow-5 fl w-100'>
              {this.props.num}
            </div>
            )
        }
        else  {
            return (
            <div onClick={this.SelectNumber} className='bg-light-white dib br3 pa3 ma2  bw2 shadow-5 fl w-100' >
               {this.props.num}
            </div>
            )
        }
    }

}


export default Bingo