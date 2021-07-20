import '../Visual/Css/style.css';
import { useState } from 'react';

function Form({someText}) {
    const [text, setText] = useState(someText);
    const [password, setPassword] = useState(someText);
    const [passwordRepeat, setPasswordRepeat] = useState(someText);
    const addText = () => {
    //     if (text == '') {
    //         alert('No name passed');
    //         return;
    //     } else if (password == '') {
    //         alert("Please, enter your password")
    //         return;
    //     } else if  (passwordRepeat !== password) {
    //         alert ('Passwords do not mach!')
    //         return;
    //     }
    // else if  (password.length < 9) {
    //     alert ('Password should contain not less then 9 symbols')
    //     return false;
    // }
    // else {
    //     alert('Form has been sucessfully submitted')
    // }
 
            setText('');
        setPassword('');
        setPasswordRepeat('');
    
    }
  
let alertMessage = <h6></h6>
if (text == '') {
    return (<h6 style={{color:'red'}}>Username must be filled</h6>

    )
//     let alertMessage = <h6></h6>
// if (text == '') {alertMessage = <h6 style={{color:'red'}}>Username must be filled</h6>
    
} else if (password == '') {alertMessage = <h6 style={{color:'red'}}>Please, enter your paswword</h6>
}  
else if (password < 9){ alertMessage = <h6 style={{color:'red'}}>Password should contain not less then 9 symbols</h6>
}

else if (passwordRepeat !== password){ alertMessage = <h6 style={{color:'red'}}>Password do not match</h6>
}

// for (let i=0; i<=9; i++) { alertMessage.push(<h6 style={{color:'red'}}>not less then 9 symbolds</h6>)}
// for (let i=0; i<=9; i++) { alertMessage = <h6 style={{color:'red'}}>not less then 9 symbolds</h6>}
// else if (password <9) {alertMessage = <h6 style={{color:'red'}}>not less then 9 symbolds</h6>}

    const updatePassword  = (event) => {
        setPassword(event.target.value);
    }
    const updatePasswordRepeat = (event) => {
        setPasswordRepeat(event.target.value);
    }

    const updateText = (event) => {
        setText(event.target.value);

        // updateCallback(event.target.value);

  
        
    // }
}
    //     if (updateText === "");
    //  console.log ('this field must be filled')}
        
// EXAMPLE
    // import React from "react";
    // import { useForm } from "react-hook-form";
    
    // export default function App() {
    //   const { register, formState: { errors }, handleSubmit } = useForm();
      
    //   return (
    //     <form onSubmit={handleSubmit(onSubmit)}>
    //       <input {...register("firstName", { required: true })} />
    //       {errors.firstName?.type === 'required' && "First name is required"}
          
    //       <input {...register("lastName", { required: true })} />
    //       {errors.lastName && "Last name is required"}
          
    //       <input type="submit" />
    //     </form>
    //   );
    // }
    
    

    return(
        <div className="row">
        <div className="col">
        <h5>Register</h5>
      {/* <form onsubmit="validateForm(event)" id="registerForm" className="formWithValidation" action="" name="forma" > */}
      <div>
          {alertMessage}
        <input type="text" id="register-username" value=""  className="field" placeholder= "Username*" name="user" value={text} onChange={updateText}/>
      </div>
<div>
<input type="password" id="password-input-field" className="field" value="" placeholder= "Password*" name="pass" minlength="9" value={password} onChange={updatePassword} />
</div>
<div>
<input type="password" id="retype-password"  className="field" value="" placeholder= "Retype password*" name="passRepeat" value={passwordRepeat} onChange={updatePasswordRepeat}/>
</div>
<div>
<input type="text" id="last-name"  className="field" value="" placeholder= "First name*" required value={text} onChange={updateText} />
</div>
<div>       
<input type="text" id="last-name" className="field" value="" placeholder= "Last name" value={text} onChange={updateText}/>
</div>
             
<div>
<select className="field" id="country-select" name="coutry">
<option selected> Country*</option>
<optgroup label="Earth System">
  <option>Earth</option>
  <option>Moon</option>
</optgroup>
<optgroup label="Solar System">   
<option >Venus</option>
<option>Mars</option>
</optgroup>             
</select>
</div>
<div>
<input className="field" type="checkbox" name="agreedCheck" id="agree-checkbox" value="1" />
<label for="agree-checkbox">Agree with terms and conditions </label>
</div>
<div> 
<button onClick={addText} className='validateBtn' name="submit">Register</button>
</div>
            </div>
        </div>
    )
}
export default Form;