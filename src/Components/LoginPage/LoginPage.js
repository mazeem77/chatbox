import "./LoginPage.css"

function LoginPage(){
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
              <input type="email" name="loginEmail" id="lemail" placeholder="Email" /><br />
              <input type="password" name="loginPassword" id="lpass" placeholder="Password" /><br />
                    <a href="" id="forgot">Forgot your Password?</a><br />
                    <button type="submit">SIGN IN</button>
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
                    <input type="text" name="Full Name" id="name" placeholder="Full Name" />
                    <input type="email" name="loginEmail" id="lemail" placeholder="Email" /><br />
                    <input type="password" name="loginPassword" id="lpass" placeholder="Password" /><br />
                    <button type="submit">SIGN UP</button>
                </form>
            </div>
        </div>
    );
}

export default LoginPage;
