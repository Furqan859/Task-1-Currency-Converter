// import {Button, InputGroup} from "react-bootstrap";
// import {useState} from "react";
//
// function Test () {
//     const [digit , setDigit] = useState("")
//     const [value , setValue] = useState("")
//
//     function handleClick() {
//         setDigit(digit/167)
//         setValue(digit*167)
//
//     }
//
//     function USD(e){
//         setDigit(e.target.value)
//     }
//     function PKR(e) {
//
//        setValue(e.target.value)
//     }
//     return(<div>
//         <h1>{digit}</h1>
//         <InputGroup>
//             <InputGroup.Text>$</InputGroup.Text>
//             <input type="text"  onChange={USD}  />
//             <InputGroup>
//             <h1>{value}</h1>
//             <input type="text" onChange={PKR}/>
//             <InputGroup.Text>Rs.</InputGroup.Text>
//                 </InputGroup>
//
//         </InputGroup>
//     </div>)
// }
// export default Test;

import React, {useState} from 'react';


function Test(props) {
    const [pkr, setPkr] = useState(0);
    const [dollar, setDollar] = useState(0);

    const convertDollarToPkr = (e) => {
        setPkr(0)
        setPkr(e.target.value * 167)
        setDollar(e.target.value)
    }

    const convertPkrToDollar = (e) => {
        setDollar(0)
        setDollar(e.target.value / 167);
        setPkr(e.target.value)
    }
    return (
        <div>
            <label className="text-muted mr-2">Pkr to Dollar</label>
            <input value={pkr} onChange={convertPkrToDollar}/><br/>
            <label className="text-muted mr-2">Dollar to Pkr</label>
            <input value={dollar} onChange={convertDollarToPkr}/>
        </div>
    );
}

export default Test;