import { useState } from "react";

function Calculator() {
    let [num1,setNum1] = useState('');
    let [num2,setNum2] = useState('');
    let [result,setResult] = useState('');
    let [message,setMessage] = useState('');
    let [valid,setValid] = useState('');
    


    function validateNumber(num1,num2) {
        // Check if the string is empty
        if (!num1.trim() || !num2.trim() ) {
          return false;
        }
      
        // Regular expression pattern to match a number
        var pattern = /^[-+]?(\d+(\.\d*)?|\.\d+)$/;
      
        // Check if the string matches the pattern
        return pattern.test(num1) & pattern.test(num2);
      }

    function add(){
        if(num1=='' && num2==''){
            console.log('hello');
            setMessage(`Error: Inputs Cannot be empty`);
            setResult('');
            setValid(false);
            return;
        }
        else if(num1==''){
            console.log('hello');
            setMessage(`Error: Num1 Cannot be empty`);
            setResult('');
            setValid(false);
            return;
        }
        else if(num2==''){
            console.log('hello');
            setMessage(`Error: Num2 Cannot be empty`);
            setResult('');
            setValid(false);
            return;
        }

        if(!validateNumber(num1,num2)){
            console.log('worng');
            setMessage(`Error: Inputs should be a number`);
            setResult('');
            setValid(false);
            return;
        }
        setMessage(`Success : Your result is shown above!`);
        setValid(true);
        let ans = "Result = "+(parseFloat(num1)+parseFloat(num2))
        setResult(ans);
    }

    function substract(){
        if(num1=='' && num2==''){
            console.log('hello');
            setMessage(`Error: Inputs Cannot be empty`);
            setResult('');
            setValid(false);
            return;
        }
        else if(num1==''){
            console.log('hello');
            setMessage(`Error: Num1 Cannot be empty`);
            setResult('');
            setValid(false);
            return;
        }
        else if(num2==''){
            console.log('hello');
            setMessage(`Error: Num2 Cannot be empty`);
            setResult('');
            setValid(false);
            return;
        }

        if(!validateNumber(num1,num2)){
            console.log('worng');
            setMessage(`Error: Inputs should be a number`);
            setResult('');
            setValid(false);
            return;
        }
        setMessage(`Success : Your result is shown above!`);
        setValid(true);
        let ans = "Result = "+(parseFloat(num1)-parseFloat(num2))
        setResult(ans);
    }

    function multiply(){
        if(num1=='' && num2==''){
            console.log('hello');
            setMessage(`Error: Inputs Cannot be empty`);
            setResult('');
            setValid(false);
            return;
        }
        else if(num1==''){
            console.log('hello');
            setMessage(`Error: Num1 Cannot be empty`);
            setResult('');
            setValid(false);
            return;
        }
        else if(num2==''){
            console.log('hello');
            setMessage(`Error: Num2 Cannot be empty`);
            setResult('');
            setValid(false);
            return;
        }

        if(!validateNumber(num1,num2)){
            console.log('worng');
            setMessage(`Error: Inputs should be a number`);
            setResult('');
            setValid(false);
            return;
        }
        setMessage(`Success : Your result is shown above!`);
        setValid(true);
        let ans = "Result = "+(parseFloat(num1)*parseFloat(num2))
        setResult(ans);
    }

    function divide(){
        if(num1=='' && num2==''){
            console.log('hello');
            setMessage(`Error: Inputs Cannot be empty`);
            setResult('');
            setValid(false);
            return;
        }
        else if(num1==''){
            console.log('hello');
            setMessage(`Error: Num1 Cannot be empty`);
            setResult('');
            setValid(false);
            return;
        }
        else if(num2==''){
            console.log('hello');
            setMessage(`Error: Num2 Cannot be empty`);
            setResult('');
            setValid(false);
            return;
        }

        if(!validateNumber(num1,num2)){
            console.log('worng');
            setMessage(`Error: Inputs should be a number`);
            setResult('');
            setValid(false);
            return;
        }
        setMessage(`Success : Your result is shown above!`);
        setValid(true);
        let ans = "Result = "+(parseFloat(num1)/parseFloat(num2))
        setResult(ans);
    }


    return(
        <div className='container'>
            <h1>React Calculator</h1>
            <input type="text" id='num1' onChange={(e)=>setNum1(e.target.value)} placeholder="Num1"/>
            <br></br>
            <input type="text" id='num2' onChange={(e)=>setNum2(e.target.value)} placeholder="Num2"/>
            <br></br>

            <button onClick={add}>+</button>
            <button onClick={substract}>-</button>
            <button onClick={multiply}>x</button>
            <button onClick={divide}>/</button>

            <div className='result'>{result}</div>
            <div className='message'>
                { valid ?
                <div className='success'>{message}</div>:
                <div className='error'>{message}</div>
                }
             </div>

        </div>
    )
}

export default Calculator;