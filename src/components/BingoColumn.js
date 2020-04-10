import React from 'react'
import Bingo from './Bingo'
import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';

function getRandomInt(minn, maxx) {
    var min = Math.ceil(minn);
    var max = Math.floor(maxx);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}



class BingoColumn extends React.Component {
    static propTypes = {
        cookies: instanceOf(Cookies).isRequired
    };

    constructor(props) {
        super(props);

        this.GenerateNumber();
    }

    UpdateCookie = (numbers, board, id) => {
        const { cookies } = this.props;

        board.numbers[id] = numbers;
        board.selected[id] = [false, false, false, false, false];
        board.initialized[id] = true;
        cookies.set('board', board, { path: '/' })
    }

    shouldComponentUpdate (){
        const { cookies } = this.props;
        const { id } = this.props;
        var board = JSON.parse(cookies.cookies.board);

        if(!board.initialized[id])
        {
            this.GenerateNumber();
        }

        return true;
    }

    GenerateNumber = () => {
        const { cookies } = this.props;
        const { id } = this.props;
        var board = JSON.parse(cookies.cookies.board);

        if (!board.initialized[id]) {

            var newnumbers = []
            var i = 4

            while (i > -1) {

                var num = getRandomInt(this.props.min, this.props.max);
                if (num === 0) {
                    num = 1;
                }
                
                if (!newnumbers.includes(num)) {
                    newnumbers[i] = num;
                    i = i - 1;
                }

            }

            this.UpdateCookie(newnumbers, board, id);
        }
    }

    render() {
      
        const { cookies } = this.props;
        const { id } = this.props;
        var board = JSON.parse(cookies.cookies.board);

        console.log('rendercolumn')
        console.log(board)
        return (

            <div className='fl w-20'>
                <h1>{this.props.letter}</h1>
                <Bingo id={id} row={'0'} num={board.numbers[id][0]} sel={board.selected[id][0]} free={false} />

                <Bingo id={id} row={'1'} num={board.numbers[id][1]} sel={board.selected[id][1]} free={false} />
                <Bingo id={id} row={'2'} num={board.numbers[id][2]} sel={board.selected[id][2]} free={this.props.free} />
                <Bingo id={id} row={'3'} num={board.numbers[id][3]} sel={board.selected[id][3]} free={false} />
                <Bingo id={id} row={'4'} num={board.numbers[id][4]} sel={board.selected[id][4]} free={false} />
            </div>
        )
    }
}
export default withCookies(BingoColumn)