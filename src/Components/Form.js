import '../Visual/Css/style.css';
import { useState } from 'react';

function Form({someText}) {
    const [text, setText] = useState(someText);
    const [password, setPassword] = useState(someText);
    const [passwordRepeat, setPasswordRepeat] = useState(someText);
    const [firstName, setFirstName] = useState(someText);
    const [secondName, setSecondName] = useState(someText);

    const addText = () => {
        if (text == '') {
            alert('No username passed');
            return;
        } else if (password == '') {
            alert("Please, enter your password")
            return;
        } else if  (passwordRepeat !== password) {
            alert ('Passwords do not mach!')
            return;
        }
    else if  (password.length < 9) {
        alert ('Password should contain not less then 9 symbols')
        return;
    }
    else if (firstName == '') {
        alert('Please, enter your first name')
        return;
    }
    else {
        alert('Form has been sucessfully submitted')
    }
 
            setText('');
        setPassword('');
        setPasswordRepeat('');
    setFirstName('');
    setSecondName('');
    }
  
// let alertMessage = <h6></h6>
// if (text == '') {
//     return (<h6 style={{color:'red'}}>Username must be filled</h6>
//     )
//     let alertMessage = <h6></h6>
// if (text == '') {alertMessage = <h6 style={{color:'red'}}>Username must be filled</h6>
    
// } 
// else if (password == '') {alertMessage = <h6 style={{color:'red'}}>Please, enter your paswword</h6>
// }  
// else if (password < 9){ alertMessage = <h6 style={{color:'red'}}>Password should contain not less then 9 symbols</h6>
// }

// else if (passwordRepeat !== password){ alertMessage = <h6 style={{color:'red'}}>Password do not match</h6>
// }

const updateText = (event) => {
    setText(event.target.value);
}
    const updatePassword  = (event) => {
        setPassword(event.target.value);
    }
    const updatePasswordRepeat = (event) => {
        setPasswordRepeat(event.target.value);
    }

const updateFirstName = (event) => {
    setFirstName(event.target.value)
}
const updateSecondName = (event) => {
    setSecondName(event.target.value)
}


    return(
        <div className="row">
        <div className="col">
        <h5>Register</h5>
      {/* <form onsubmit="validateForm(event)" id="registerForm" className="formWithValidation" action="" name="forma" > */}
      <div>
          {/* {alertMessage} */}
        <input type="text" id="register-username" value=""  className="field" placeholder= "Username*" name="user" value={text} onChange={updateText}/>
      </div>
<div>
<input type="password" id="password-input-field" className="field" value="" placeholder= "Password*" name="pass" minlength="9" value={password} onChange={updatePassword} />
</div>
<div>
<input type="password" id="retype-password"  className="field" value="" placeholder= "Retype password*" name="passRepeat" value={passwordRepeat} onChange={updatePasswordRepeat}/>
</div>
<div>
<input type="text" id="last-name"  className="field" value="" placeholder= "First name*" required value={firstName} onChange={updateFirstName} />
</div>
<div>       
<input type="text" id="last-name" className="field" value="" placeholder= "Last name" value={secondName} onChange={updateSecondName}/>
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