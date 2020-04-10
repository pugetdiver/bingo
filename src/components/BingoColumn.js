import React from 'react'
import Bingo from './Bingo'


function getRandomInt(minn, maxx) {
    var min = Math.ceil(minn);
    var max = Math.floor(maxx);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

class BingoColumn extends React.Component {

    constructor() {
        super();
        this.state = {
            numbers: []
        }
    }



    GenerateNumber = () => {

        var newnumbers = []
        var i = 4

        while (i > -1) {

            var num = getRandomInt(this.props.min, this.props.max);
            if (num == 0) {
                num = 1;
            }
            console.log(num);
            console.log(newnumbers)
            if (!newnumbers.includes(num)) {
                newnumbers[i] = num;
                i = i - 1;
            }

        }

        this.setState(state => {
            return { numbers: newnumbers }
        });
    }



    render() {
        if (this.state.numbers.length === 0) {
            this.GenerateNumber();
        }

        console.log(this.state.numbers)
        return (

            <div className='fl w-20'>
                <h1>{this.props.letter}</h1>
                <Bingo num={this.state.numbers[0]} free={false} />

                <Bingo num={this.state.numbers[1]} free={false} />
                <Bingo num={this.state.numbers[2]} free={this.props.free} />
                <Bingo num={this.state.numbers[3]} free={false} />
                <Bingo num={this.state.numbers[4]} free={false} />
            </div>
        )
    }
}
export default BingoColumn