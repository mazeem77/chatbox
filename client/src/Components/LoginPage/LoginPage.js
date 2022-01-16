import { useState } from "react";
import "./LoginPage.css"
import {Route} from "react-router-dom";
import Axios from "axios"
import Dock from "../Dock/Dock";
// import App from "../../App.js";


function LoginPage({socket}){
  const [fullName, setFullName] = useState("");
  const [signUpEmail, setsignUpEmail] = useState("");
  const [signUpPassword, setsignUpPassword] = useState("");

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const signUpFunction = ()=>{
    Axios.post("http://localhost:8080/signUpFunction", {
      fullName: fullName,
      signUpEmail: signUpEmail,
      signUpPassword: signUpPassword
    }).then((response) => {
      console.log(response.data.msg);
    });
  };

  const logInFunction = ()=>{
    Axios.post("http://localhost:8080/logInFunction", {
      loginEmail: loginEmail,
      loginPassword: loginPassword
    }).then((response) => {
      console.log(response);
    });
  };


  function signupClicked(){
    var signIn = document.getElementById("signIn");
    var signUp = document.getElementById("signUp");
    signIn.style.visibility = "hidden";
    signUp.style.visibility = "visible";
  }
    
  function signinClicked(){
    var signIn = document.getElementById("signIn");
    var signUp = document.getElementById("signUp");
    signIn.style.visibility = "visible";
    signUp.style.visibility = "hidden";
  }
    
  return (
    <div className="outerPart"> 
      <div className="external" id="signIn">
        <form id="signin">
          <h1 id="colorLess">Sign in to ChatBox!</h1>
          <input type="email" name="loginEmail" id="lemail" placeholder="Email" onChange={(event)=>{
            setLoginEmail(event.target.value);
          }}/><br />
          <input type="password" name="loginPassword" id="lpass" placeholder="Password"  onChange={(event)=>{
              setLoginPassword(event.target.value);
            }}/><br />
            <a href="" id="forgot">Forgot your Password?</a><br />
            <button type="button" onClick={logInFunction}>SIGN IN</button>
        </form>
    
            <form className="sideNote" id="rightsideNote">
                <h1 id="colored">Want to Join!</h1>
                <p id="supportingStatement">Join ChatBox to Socialize!!</p>
                <button type="button" onClick={signupClicked}>SIGN UP</button>
            </form>
      </div>
    
      <div className="external" id="signUp">
    
            <form className="sideNote" id="leftsideNote">
                <h1 id="colored">Welcome Back!</h1>
                <p id="supportingStatement">Already Member of ChatBox!!</p>
                <p id="supportingStatement">LogIn your Credentials</p>
                <button type="button" onClick={signinClicked}>SIGN IN</button>
            </form>
    
            <form id="signup">
                <h1 id="colorLess">Register to Chat!</h1>
                <input type="text" name="fullName" id="name" placeholder="Full Name" onChange={(event)=>{
                  setFullName(event.target.value);
                }}/>
                <input type="email" name="signUpEmail" id="lemail" placeholder="Email" onChange={(event)=>{
                  setsignUpEmail(event.target.value);
                }}/><br />
                <input type="password" name="signUpPassword" id="lpass" placeholder="Password" onChange={(event)=>{
                  setsignUpPassword(event.target.value);
                }}/><br />
                <button type="button" onClick={signUpFunction}>SIGN UP</button>
            </form>
        </div>
    </div>
    );
}

export default LoginPage;
