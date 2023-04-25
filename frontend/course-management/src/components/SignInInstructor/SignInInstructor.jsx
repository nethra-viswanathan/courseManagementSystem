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
    evt.preventDefault();

    fetch(`http://localhost:8080/auth/login/teacher`, {
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
            if (response.status === 200) {
                return response.json(); // Parse the response body as JSON
            } else {
                console.log('error');
                setShowMsg("Unable to login. Please try again");
                throw new Error('Login failed'); // Throw an error to trigger the catch block
            }
        })
        .then(data => {
            // Access userId and userType from the parsed JSON object
            const { userId, userType } = data;
            // Save userId and userType to local storage
            localStorage.setItem('userId', userId);
            localStorage.setItem('userType', userType);
            // Navigate to InstructorDashboard
            navigate("/InstructorDashboard");
        })
        .catch((err) => {
            console.error(err);
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