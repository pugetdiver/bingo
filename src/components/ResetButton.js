import React from 'react'


class ResetButton extends React.Component {

    render() {
        return (
            <div >

                <button className="bg-light-blue dib br3 pa3 ma2  bw2 shadow-5 grow"
                onClick={this.props.onClick}>New Game</button>
            </div>
        );
    }
}

export default ResetButton;
