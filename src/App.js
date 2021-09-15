
// import './App.css';
// import {useState} from "react";
//
 import Test from "./component/Test";

function App() {

//     const [ amount , setAmount ] = useState([] )
// const convert= (e) =>{
//         setAmount(e.target.value *167)
// }
// const handleClick = () => {
//     fetch("http://data.fixer.io/api/convert?access_key=bf63b2c067c49c8899ef71ca489ed069&from=usd&to=eur&amount=25",{method : "GET"})
//         .then((responce) => responce.json())
//         .then((responce) => setAmount(responce))
//
// }
  return <div>

   {/*<h1 >{amount}</h1>*/}
   {/*   {JSON.stringify(amount)}*/}
          {/*<span>Enter Usd  </span>*/}
      {/*<input type="text" onChange={convert}  /><br/>*/}
    {/*<button onClick={handleClick} > click me </button>*/}

      <Test/>

      </div>

}

export default App;
