import React from 'react';
import { Form } from 'react-bootstrap';
import { Link,useLocation,useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';




const Login = () => {

    const {signInUsingGoogle,handleEmail,handlePass,error,loggIn} =useAuth();
    const location = useLocation();
    const history=useHistory();
    const redirect_uri = location.state?.from || '/home';
    // console.log('came from', location.state?.from);


    const handleGoogleLogin = () => {
        signInUsingGoogle()
        .then(result =>{
                history.push(redirect_uri)
        })
    }
    
    return (
        <div>
            <h2 className="text-info m-3">Please Login</h2>
            

            {/* -------------another login------------------ */}

            <div className="w-50 mx-auto mb-2 shadow-lg p-3">
                    {/* <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onClick={handleEmail} type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onClick={handlePass} type="password" placeholder="Password" />
                    </Form.Group>

                    <button onClick={loggIn} className="bg-warning rounded py-2 px-3 border-0">Login</button>
                    <br />
                    <Link to="/sign">New user?</Link>
                    <p>{error}</p>
                    
                    <p className="text-info">Or</p> */}

                    <button onClick={handleGoogleLogin} className="btn btn-warning">Google Sign In</button>
                </div>

                


                
        </div>
    );
};

export default Login;