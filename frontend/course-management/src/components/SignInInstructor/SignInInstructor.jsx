import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import { Alert } from "@mui/material";
function SignInInstructor(){
    const navigate = useNavigate();
    const [name,setName] = useState("");
    const [password,setPassword] = useState("")
    const [showMsg, setShowMsg] = useState("");

    const redirectSignUp = () =>{
        navigate("/InstructorSignUp")
    }
    const redirectSignIn = () => {
        navigate("/InstructorDashboard")
    }
    const handleClick = (evt) => {
        evt.preventDefault()
        
        fetch(`http://localhost:8080/auth/login/teacher`,{
        method: 'POST',

        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json ',
        },
        
        body: JSON.stringify({
            "email": name,
            "password": password 
        }),
        })
        .then(response => {
            if(response.status == 200){
                // setTimeout(() => {
                    navigate("/InstructorDashboard")
                // }, 2000);
            }else{
                console.log('error'); 
                setShowMsg("Unable to login. Please try again")
            }
        })
        .then(data => {
            
        })
        .catch((err) => {
            
        });
    };

    return(
        <>
            <div className="container-parent">
                <div className="signInContainer">
                    { showMsg && 
                        <Alert variant="filled" severity="error">
                        {showMsg}
                        </Alert> 
                    }
                    <div className="header">
                        <div className="primaryText">Welcome Back!</div>
                        <div className="secondaryText">Enter your details to sign in</div>
                    </div>
                    <form action="" className="sigInForm" onSubmit={handleClick}>
                        <div className="text-input"> 
                            <label class="input">
                                <input class="input__field" type="text" placeholder=" "  onChange={(e) => setName(e.target.value)}/>
                                <span class="input__label">Email ID</span>
                            </label>
                        </div>
                        <div className="text-input"> 
                            <label class="input">
                                <input class="input__field" type="password" placeholder=" " onChange={(e) => setPassword(e.target.value)}/>
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