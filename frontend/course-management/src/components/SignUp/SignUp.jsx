import { useNavigate } from "react-router-dom";
function SignUp(){
    const navigate = useNavigate();
    const redirectSignIn = () =>{
        navigate("/SignIn")
    }
    return(
        <>
            <div className="container-parent">
                <div className="signInContainer">
                    <div className="header">
                        <div className="primaryText">Hey There!</div>
                        <div className="secondaryText">Enter your details to sign up</div>
                    </div>
                    <form action="" className="sigInForm">
                        <div className="text-input"> 
                            <label class="input">
                                <input class="input__field" type="text" placeholder=" " />
                                <span class="input__label">Name</span>
                            </label>
                        </div>
                        <div className="text-input"> 
                            <label class="input">
                                <input class="input__field" type="text" placeholder=" " />
                                <span class="input__label">Email ID</span>
                            </label>
                        </div>
                        <div className="text-input"> 
                            <label class="input">
                                <input class="input__field" type="text" placeholder=" " />
                                <span class="input__label">Password</span>
                            </label>
                        </div>
                        <div className="button-input">
                            <input type="submit" name="" id="" className="submit-login" value="Sign Up" />
                        </div>
                        <div className="signUpSection">
                            Already A User? <span href="#" onClick={redirectSignIn}>Sign In Here</span>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default SignUp;