import React from "react";
import { useState } from "react";
import "../App.css"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {faSun } from '@fortawesome/free-solid-svg-icons';




export default function App() {
    const [input,setInput]=useState('');

    const handleInput = (e) =>{
        setInput(input + e.target.value);

    }
    const clearInput = () =>{
        setInput('');
    }
    const calculateResult = () =>{
        try{
            const calculatedResult = eval(input).toString();
            setInput(calculatedResult);
        }
        catch{
            setInput('Error');
        }
    } 
    const deleteLastCharacter = () => {
      setInput((prevInput) =>
        prevInput.length > 1 ? prevInput.slice(0, -1) : ""
    );
    }
   


  return (
  <div className="container"> 
      
      <div className="buttondiv" >
        {/* <div style={{color:'red',textAlign:"center",marginBottom:"150px"}}>
        <FontAwesomeIcon icon={faSun}/>
        </div> */}
         

          <input type="text" id="display" value={input} placeholder="Enter the value"/>
          <div>
            
            
           
          </div>
          <div>
            <button onClick={handleInput} value="7" >7</button>
            <button onClick={handleInput} value="8" >8</button>
            <button onClick={handleInput} value="9" >9</button>
            <button onClick={handleInput} value="*" className="operator-btn">*</button>
          </div>
          <div>
            <button onClick={handleInput} value="4" >4</button>
            <button onClick={handleInput} value="5" >5</button>
            <button onClick={handleInput} value="6" >6</button>
            <button onClick={handleInput} value="+" className="operator-btn">+</button>
          </div>
          <div>
            <button onClick={handleInput} value="1" >1</button>
            <button onClick={handleInput} value="2" >2</button>
            <button onClick={handleInput} value="3" >3</button>
            <button onClick={handleInput} value="-" className="operator-btn">-</button>
          </div>
          <div>
          <button onClick={handleInput} value="0" >0</button>
          <button onClick={handleInput} value="00" >00</button>
          <button onClick={handleInput} value="." >.</button>
          <button onClick={handleInput} value="/"  className="operator-btn">/</button>
          </div>
          <div>
            
            <button onClick={clearInput} className="clear-btn" >AC</button>
            <button onClick={deleteLastCharacter}  className="clear-btn">X</button>
            <button onClick={calculateResult} value="="   className="clear-btn">=</button>
            <button onClick={handleInput} value="+/-" className="operator-btn">+/-</button>
            
          </div>
        </div>
          
      
</div>
  );

}



// // import React,{useState} from 'react'
// // import "../App.css"

// // export default function Calculator() {
// //     const [input,setInput]=useState('');

// //     const handleInput = (e) =>{
// //         setInput(input + e.target.value);

// //     }
// //     const clearInput = () =>{
// //         setInput('');
// //     }
// //     const calculateResult = () =>{
// //         try{
// //             const calculatedResult = eval(input).toString();
// //             setInput(calculatedResult);
// //         }
// //         catch{
// //             setInput('Error');
// //         }
// //     }
// //     const deleteLastCharacter = () => {
// //       setInput((prevInput) =>
// //         prevInput.length > 1 ? prevInput.slice(0, -1) : ""
// //       );
// //     };
  
// //   return (
// //     <div className='sty'>
// //     <div className='center'>
// //       <input type="text" value={input} placeholder='Enter the Value' style={{border:'black'}} />
// //       <table style={{paddingTop:'10px'}}>
// //         <tbody>
// //           <tr>
// //             <td><input onClick={clearInput} type="button" value="C" style={{backgroundColor: " #EFBBFF"}}/></td>
// //             <td><input onClick={handleInput} type="button" value="+/-" style={{backgroundColor: " #EFBBFF"}}/></td>
// //             <td><input onClick={handleInput} type="button" value="%" style={{backgroundColor: " #EFBBFF"}}/></td>
// //             <td><input onClick={handleInput} type="button" value="+" style={{backgroundColor: " #BE2AEB"}}/></td>
// //           </tr>
// //           <tr>
// //             <td><input onClick={handleInput} type="button" value="1"/></td>
// //             <td><input onClick={handleInput} type="button" value="2"/></td>
// //             <td><input onClick={handleInput} type="button" value="3"/></td>
// //             <td><input onClick={handleInput} style={{backgroundColor: "#BE2AEB"}} type="button" value="-"/></td>
// //           </tr>
// //           <tr>
// //             <td><input onClick={handleInput} type="button" value="4"/></td>
// //             <td><input onClick={handleInput} type="button" value="5"/></td>
// //             <td><input onClick={handleInput} type="button" value="6"/></td>
// //             <td><input onClick={handleInput} style={{backgroundColor: "#BE2AEB"}} type="button" value="*"/></td>
// //           </tr>
// //           <tr>
// //             <td><input onClick={handleInput} type="button" value="7"/></td>
// //             <td><input onClick={handleInput} type="button" value="8"/></td>
// //             <td><input onClick={handleInput} type="button" value="9"/></td>
// //             <td><input onClick={handleInput} style={{backgroundColor: "#BE2AEB"}} type="button" value="/"/></td>
// //           </tr>
// //           <tr>
// //             <td><input onClick={handleInput} type="button" value="."/></td>
// //             <td><input onClick={handleInput} type="button" value="0"/></td>
// //             <td><input onClick={deleteLastCharacter} type="button" value="x"/></td>
// //             <td><input onClick={calculateResult} type="button" value="=" style={{backgroundColor: "#BE2AEB"}}/></td>
// //           </tr>
// //           <tr>
// //           </tr>
// //         </tbody>
// //       </table>
// //     </div>
// //     </div>
// //   )
// // }


// import React, { useState } from "react";
// import "../App.css";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

// export default function App() {
//     const [input, setInput] = useState('');
//     const [isLightMode, setIsLightMode] = useState(false);

//     const handleInput = (e) => {
//         setInput(input + e.target.value);
//     };

//     const clearInput = () => {
//         setInput('');
//     };

//     const calculateResult = () => {
//         try {
//             const calculatedResult = eval(input).toString();
//             setInput(calculatedResult);
//         } catch {
//             setInput('Error');
//         }
//     };

//     const deleteLastCharacter = () => {
//         setInput((prevInput) =>
//             prevInput.length > 1 ? prevInput.slice(0, -1) : ""
//         );
//     };

//     const toggleMode = () => {
//         setIsLightMode(!isLightMode);
//         document.body.classList.toggle('light-mode');
//     };

//     return (
//         <div className={`container ${isLightMode ? 'light-mode' : 'container'}`}>
//             <div className="buttondiv">
//                 <div style={{ textAlign: "center", marginBottom: "20px" }}>
//                     <FontAwesomeIcon 
//                         icon={isLightMode ? faMoon : faSun} 
//                         onClick={toggleMode} 
//                         style={{ cursor: 'pointer', color: isLightMode ? 'black' : 'red' }} 
//                     />
//                 </div>

//                 <input 
//                     type="text" 
//                     id="display" 
//                     value={input} 
//                     placeholder="Enter the value" 
//                     className={isLightMode ? 'light-mode' : ''}
//                 />
                
//                 <div>
//                     <button onClick={handleInput} value="7" className={isLightMode ? 'light-mode' :''}>7</button>
//                     <button onClick={handleInput} value="8" className={isLightMode ? 'light-mode' : ''}>8</button>
//                     <button onClick={handleInput} value="9" className={isLightMode ? 'light-mode' : ''}>9</button>
//                     <button onClick={handleInput} value="*" className={`operator-btn ${isLightMode ? 'light-mode' : ''}`}>*</button>
//                 </div>
//                 <div>
//                     <button onClick={handleInput} value="4" className={isLightMode ? 'light-mode' : ''}>4</button>
//                     <button onClick={handleInput} value="5" className={isLightMode ? 'light-mode' : ''}>5</button>
//                     <button onClick={handleInput} value="6" className={isLightMode ? 'light-mode' : ''}>6</button>
//                     <button onClick={handleInput} value="+" className={`operator-btn ${isLightMode ? 'light-mode' : ''}`}>+</button>
//                 </div>
//                 <div>
//                     <button onClick={handleInput} value="1" className={isLightMode ? 'light-mode' : ''}>1</button>
//                     <button onClick={handleInput} value="2" className={isLightMode ? 'light-mode' : ''}>2</button>
//                     <button onClick={handleInput} value="3" className={isLightMode ? 'light-mode' : ''}>3</button>
//                     <button onClick={handleInput} value="-" className={`operator-btn ${isLightMode ? 'light-mode' : ''}`}>-</button>
//                 </div>
//                 <div>
//                     <button onClick={handleInput} value="0" className={isLightMode ? 'light-mode' : ''}>0</button>
//                     <button onClick={handleInput} value="00" className={isLightMode ? 'light-mode' : ''}>00</button>
//                     <button onClick={handleInput} value="." className={isLightMode ? 'light-mode' : ''}>.</button>
//                     <button onClick={handleInput} value="/" className={`operator-btn ${isLightMode ? 'light-mode' : ''}`}>/</button>
//                 </div>
//                 <div>
//                     <button onClick={clearInput} className={`clear-btn ${isLightMode ? 'light-mode' : ''}`}>AC</button>
//                     <button onClick={deleteLastCharacter} className={`clear-btn ${isLightMode ? 'light-mode' : ''}`}>X</button>
//                     <button onClick={calculateResult} className={`clear-btn ${isLightMode ? 'light-mode' : ''}`}>=</button>
//                     <button onClick={handleInput} value="+/-" className={`operator-btn ${isLightMode ? 'light-mode' : ''}`}>+/-</button>
//                 </div>
//             </div>
//         </div>
//     );
// }
