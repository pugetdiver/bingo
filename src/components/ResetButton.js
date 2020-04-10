import React from 'react'

import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';
import { render } from 'react-dom';




class ResetButton extends React.Component {

    static propTypes = {
        cookies: instanceOf(Cookies).isRequired
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div >

                <button className="bg-light-blue dib br3 pa3 ma2  bw2 shadow-5 grow"
                onClick={this.props.onClick}>New Game</button>
            </div>
        );
    }
}

export default withCookies(ResetButton);
