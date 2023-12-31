import React, { Fragment,useState} from 'react';




function calculadora(){

    const[input,setInput] = useState('');

    const buttonhandler = (value) =>{

setInput((prevInput) => prevInput + value);
  
};/*função que  junta o input anterior com o  valor atual */

        

   const calculate = ()=>{

    try{

        setInput(eval(input).toString());/*usar eval(input).toString() para identificar os sinais e executar os calculos*/

    }catch(error){

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

<button onClick={() =>buttonhandler('1')}>1</button>
<button onClick={() =>buttonhandler('2')}>2</button>
<button onClick={() =>buttonhandler('3')}>3</button>
<button onClick={() =>buttonhandler('4')}>4</button>
<button onClick={() =>buttonhandler('5')}>5</button>
<button onClick={() =>buttonhandler('6')}>6</button>
<button onClick={() =>buttonhandler('7')}>7</button>
<button onClick={() =>buttonhandler('8')}>8</button>
<button onClick={() =>buttonhandler('9')}>9</button>
<button onClick={() =>buttonhandler('0')}>0</button>

<button onClick={() =>buttonhandler('+')}>+</button>
<button onClick={() =>buttonhandler('-')}>+</button>
<button onClick={() =>buttonhandler('*')}>x</button>
<button onClick={() =>buttonhandler('/')}>/</button>

<button onClick={calculate}>=</button>

<button onClick={clearAll}>C</button>

<button onClick={clear}>delete</button>


</div>

</body>





</>

);
}

export default calculadora;