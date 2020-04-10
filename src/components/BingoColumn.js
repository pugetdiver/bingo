import React from 'react'
import Bingo from './Bingo'


class BingoColumn extends React.Component {

    render(){
    return (
     
             <div className='fl w-20'>
            <h1>{this.props.letter}</h1>
           <Bingo/>

           <Bingo/>
           <Bingo max={this.props.max} />
           <Bingo/>
           <Bingo/>
           </div>
           )
    }
}
export default BingoColumn