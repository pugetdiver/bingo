import React from 'react'
import './Bingo.css'

class Bingo extends React.Component {

    constructor(){
        super();
        this.state = {
            select: false,
            num: 0
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

       console.log(this.state.select)

       if(this.state.num === 0){
        var num = Math.round(Math.random() * 99)
        this.setState(state =>{
            return {num : num}
        })
       }

        if (this.props.max === null) {

            return (
            <div className='bg-light-green dib br3 pa3 ma2  bw2 shadow-5 fl w-100'>
                FR
            </div>
            )
        }
        else if(this.state.select) {
            return (
            <div onClick={this.DeSelectNumber} className='bg-light-green dib br3 pa3 ma2  bw2 shadow-5 fl w-100'>
              {this.state.num}
            </div>
            )
        }
        else  {
            return (
            <div onClick={this.SelectNumber} className='bg-light-white dib br3 pa3 ma2  bw2 shadow-5 fl w-100' >
               {this.state.num}
            </div>
            )
        }
    }

}


export default Bingo