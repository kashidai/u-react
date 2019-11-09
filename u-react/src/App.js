import React from 'react';


class App　extends　React.Component{

    constructor(props){
        super(props)
        this.state = {

        }
    //    bind func

    }


    printParam = () => {
        console.log(this);
    }
ß
    printParamB () {
        console.log(this.printParam);
        const A = () => {
           console.log(this);
       }
       A();
    }

    printParamC = () => {
        console.log("");
    }

    render(){
        let param = 'global param';

        // let object1 = {
        //     param: 'object111111',
        //     func: () => this.printParam('object111111')
        // }
        // let object2 = {
        //     param: 'object2222222222',
        //     func: this.printParam
        // }

        return (
            <div>
                state
                <button onClick={this.printParam}>object1</button>
                <button onClick={this.printParamB}>object2</button>
            </div>
        )
    }

}

const User = () => {
    return <div>props</div>
}

export default App;
