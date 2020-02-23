import React, { Component } from 'react';

class CreateButton extends Component{
    constructor(props){
        super(props);

        this.state = {
            value : ''
        };
    }

    createSquare(){
        const {value} = this.state;
            {this.setState({
                    value: this.state.value + '■'
                })
            }
    }

    render(){
        return(
            <div>
                <button onClick={this.createSquare.bind(this)}>四角を生成する</button>
                <div>
                    {this.state.value}
                </div>
            </div>            
        );
    }
}

export default CreateButton;