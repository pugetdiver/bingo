import React from 'react'
import './Bingo.css'

import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';

class Bingo extends React.Component {

    static propTypes = {
        cookies: instanceOf(Cookies).isRequired
    };

    constructor(props){
        super(props);
        this.state = {
            select: false
        }
    }

    SelectNumber = () =>
    {
        const { cookies } = this.props;
        const { id, row } = this.props;
        var board = JSON.parse(cookies.cookies.board);

        board.selected[id][row] = !board.selected[id][row];
        cookies.set('board', board, { path: '/' })
       
    }
    
    render() {
        const { cookies } = this.props;
        const { id, row } = this.props;
        var board = JSON.parse(cookies.cookies.board);

        if (this.props.free === true) {

            return (
            <div className='bg-light-green dib br3 pa3 ma2  bw2 shadow-5 fl w-100'>
                FR
            </div>
            )
        }
        else if(board.selected[id][row]) {
            return (
            <div onClick={this.SelectNumber} className='bg-light-green dib br3 pa3 ma2  bw2 shadow-5 fl w-100'>
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


export default withCookies( Bingo)