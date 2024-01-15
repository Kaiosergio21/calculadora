import React, { Fragment,useState} from 'react';
import { evaluate } from 'mathjs';




function calculadora(){

    const[input,setInput] = useState('');

    const buttonhandler = (value) =>{

setInput((prevInput) => prevInput + value);
  
};/*função que  junta o input anterior com o  valor atual */

        

   
const calculate = () => {/*usar evaluate */
  try {/*calculo*/
    const result = evaluate(input);/*evaluate no imput apertado no botão*/
    setInput(result.toString());/*coloca resultado na string */
  } catch (error) {
    setInput('ERROR');
  }
};

 

   const clearAll = () =>{

    setInput('');
   };

   const clear = () =>{

setInput((prevInput) => prevInput.slice(0,-1));/* slice(0,-1) é usado para remover o ultimo caracter da string*/

   };
   
       
    
return(

<>

<body>
    
    
<div className ='calculator'></div>
<div className='input'>{input}</div>
<div className='buttons'>

<button className='mybutton' onClick={() =>buttonhandler('1')}>1</button>
<button className='mybutton' onClick={() =>buttonhandler('2')}>2</button>
<button className='mybutton' onClick={() =>buttonhandler('3')}>3</button>
<button className='mybutton' onClick={() =>buttonhandler('4')}>4</button>
<button className='mybutton' onClick={() =>buttonhandler('5')}>5</button>
<button className='mybutton' onClick={() =>buttonhandler('6')}>6</button>
<button className='mybutton' onClick={() =>buttonhandler('7')}>7</button>
<button className='mybutton' onClick={() =>buttonhandler('8')}>8</button>
<button className='mybutton' onClick={() =>buttonhandler('9')}>9</button>
<button className='mybutton' onClick={() =>buttonhandler('0')}>0</button>

<button className='mybutton' onClick={() =>buttonhandler('+')}>+</button>
<button className='mybutton' onClick={() =>buttonhandler('-')}>-</button>
<button className='mybutton' onClick={() =>buttonhandler('*')}>x</button>
<button className='mybutton' onClick={() =>buttonhandler('/')}>/</button>

<button className='mybutton' onClick={calculate}>=</button>

<button className='mybutton' onClick={clearAll}>C</button>

<button className='mybutton' onClick={clear}>delete</button>


</div>

</body>





</>

);
}

export default calculadora;
