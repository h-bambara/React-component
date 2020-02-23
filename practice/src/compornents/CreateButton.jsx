import React, { Component } from 'react';

class CreateButton extends Component{
    render(){
        return(
            <button onClick={()=> {this.createSquare()}} type="button" name="createSquare" value="createSquare">四角を生成する</button>
        
            
        );
    }

    createSquare(){
        //console.log('呼び出し確認');
        return(
        <div>
            ■
        </div>
        );
    }

}

export default CreateButton;