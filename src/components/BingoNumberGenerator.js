import React from 'react'
import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';

function getRandomInt(minn, maxx) {
    var min = Math.ceil(minn);
    var max = Math.floor(maxx) + 1;
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function displayNumber(currentNumber) {

    if (currentNumber === '-1') {
        return '';
    }
    else if (currentNumber === '-100') {
        return 'All numbers drawn, start new game';
    }
    else {
        if (currentNumber < 16) {
            return 'B  - ' + currentNumber
        }
        else if (currentNumber < 31) {
            return 'I - ' + currentNumber
        }
        else if (currentNumber < 46) {
            return 'N - ' + currentNumber
        }
        else if (currentNumber < 61) {
            return 'I - ' + currentNumber
        }
        else if (currentNumber < 76) {
            return 'N - ' + currentNumber
        }
        else {
            return ''
        }

    }
}


class BingoNumberGenerator extends React.Component {

    static propTypes = {
        cookies: instanceOf(Cookies).isRequired
    };

    constructor(props) {
        super(props);


    }
    currentNumber = 0;

    generateNumber = () => {
        const { cookies } = this.props;
        var nextNumber = -100

        var drawnNumbers = JSON.parse(cookies.cookies.drawnNumbers);
        var numberList = drawnNumbers.drawnNumbers;
        var i = 0;
        while (true) {
            if (i > 100 || drawnNumbers.drawnNumbers.length >= 75) {
                break;
            }
            var num = getRandomInt(1, 75);
            if (num === 0) {
                num = 1;
            }

            if (!numberList.includes(num)) {
                nextNumber = num
                break;
            }
            i = i + 1;
        }
        drawnNumbers.drawnNumbers = numberList.concat(nextNumber);
        console.log(drawnNumbers.drawnNumbers);
        if (nextNumber > 0) {
            cookies.set('drawnNumbers', drawnNumbers, { path: '/' })
        }
        cookies.set('currentNumber', nextNumber, { path: '/' })
    }

    drawingNumbersSwtich = () => {
        const { cookies } = this.props;
        console.log(cookies.cookies.drawingNumbers)

        var drawingNumbers = cookies.cookies.drawingNumbers

        if (drawingNumbers === 'false') {
            console.log('switch')
            cookies.set('drawingNumbers', 'true', { path: '/' })
        }
        else {
            cookies.set('drawingNumbers', 'false', { path: '/' })
        }
        console.log(cookies.cookies.drawingNumbers)

    }

    render() {
        const { cookies } = this.props;
        var drawingNumbers = cookies.cookies.drawingNumbers

        if (drawingNumbers === 'true') {
            return (
                <div>
                    <button className="bg-light-green dib br3 pa3 ma2  bw2 shadow-5 "
                    onClick={this.generateNumber}>Get Number</button>
                    <h1>{displayNumber(cookies.cookies.currentNumber)}</h1>
                </div>
            )
        }
        else {
            return (
                <div>
                    <button className="bg-light-yellow dib br3 pa3 ma2  bw2 shadow-5 "
                     onClick={this.drawingNumbersSwtich}>Draw numbers?</button>
                </div>
            )
        }
    }

}

export default withCookies(BingoNumberGenerator)