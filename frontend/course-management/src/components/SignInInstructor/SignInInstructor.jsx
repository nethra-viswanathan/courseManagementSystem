import { useNavigate } from "react-router-dom";

function SignInInstructor(){
    const navigate = useNavigate();
    const redirectSignUp = () =>{
        navigate("/SignUp")
    }
    const redirectSignIn = () => {
        navigate("/InstructorDashboard")
    }

    return(
        <>
            <div className="container-parent">
                <div className="signInContainer">
                    <div className="header">
                        <div className="primaryText">Welcome Back!</div>
                        <div className="secondaryText">Enter your details to sign in</div>
                    </div>
                    <form action="" className="sigInForm" onSubmit={redirectSignIn}>
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
                            <input type="submit" name="" id="" className="submit-login" value="Sign In" />
                        </div>
                        <div className="signUpSection">
                            New Here? <span href="#" onClick={redirectSignUp}>Sign Up Here</span>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default SignInInstructor;