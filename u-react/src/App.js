import React from 'react';


// class App extends Component {
//     render() {
//         return (
//             <React.Fragment>
//                 <label htmlFor= "bar" >bar</label>
//                 <input type="text" onChange={() => {console.log("Heyyyyyy")}}/>
//             </React.Fragment>
//         )
//     }
//
// }


function App() {
    return (
        <div className="App">
            <h1>I'm App components</h1>
            <Cat />
        </div>
    );
}

const Cat = () =>{
    return <div>I'm Cat components</div>
}

export default App;
