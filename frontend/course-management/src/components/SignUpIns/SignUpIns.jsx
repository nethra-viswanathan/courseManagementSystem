import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import { Alert } from "@mui/material";
function SignUpIns(){
    const navigate = useNavigate();
    const redirectSignIn = () =>{
        navigate("/InstructorSignin")
    }
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [showMsg, setShowMsg] = useState({});
    const handleClick = (evt) => {
        evt.preventDefault()
        
        fetch(`http://localhost:8080/auth/register/teacher`,{
        method: 'POST',

        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json ',
        },
        
        body: JSON.stringify({
            "name": name,
            "email": email,
            "password": password 
        }),
        })
        .then(response => {
            if(response.status == 200){
                response.json();
                setShowMsg( showMsg => ({msg: "Registered Successfully",type:"success"}));
                setTimeout(() => {
                    navigate("/InstructorSignin")
                }, 3000);
            }else{
                console.log('error'); 
                setShowMsg( showMsg => ({msg: "Unable to register. Please try again",type:"error"}))
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
                    { showMsg.msg && 
                        <Alert variant="filled" severity={showMsg.type}>
                        {showMsg.msg}
                        </Alert> 
                    }
                    <div className="header">
                        <div className="primaryText">Hey There!</div>
                        <div className="secondaryText">Enter your details to sign up</div>
                    </div>
                    <form action="" className="sigInForm">
                        <div className="text-input"> 
                            <label class="input">
                                <input class="input__field" type="text" placeholder=" " onChange={(e) => setName(e.target.value)}/>
                                <span class="input__label">Name</span>
                            </label>
                        </div>
                        <div className="text-input"> 
                            <label class="input">
                                <input class="input__field" type="text" placeholder=" " onChange={(e) => setEmail(e.target.value)}/>
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
                            <input type="submit" name="" id="" className="submit-login" value="Sign Up" onClick={handleClick}/>
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

export default SignUpIns;