import React, { useRef } from 'react'
import { Link } from "react-router-dom"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"

const Login = ({ setCurrentUser, setIsSeller }) => {

  const handleSubmit = (e) => {
    e.preventDefault()
    const email = emailRef.current.value
    const password = passwordRef.current.value

    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      setCurrentUser(userCredential.user);
      
        fetch('http://localhost:3001/user/api/' + userCredential.user.email)
            .then(response => response.json())
            .then((data) => {
              setIsSeller(data[0].is_seller)
              //console.log(userCredential.user)
            })
       
      alert("You have been authenticated successfully.")
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert("Invalid user credentials. Please try again or register for an account.")
    });
  }

  const emailRef = useRef();
  const passwordRef = useRef();

  return (
    <div>Login Page
      <form>
        <label>
          Email:
          <input ref={emailRef} type="text" name="name" required />
        </label>
        <label>
          Password:
          <input ref={passwordRef} type="password" required />
        </label>
        <Link onClick={handleSubmit} to="/">
          <button>Submit</button>
        </Link>
        <Link to="/">
          <button>Cancel</button>
        </Link>
      </form>
      <label>
        Doesn't have an account?
        <Link to="/register">
          <button>Register</button>
        </Link>
        <Link to="/">Back to Home</Link>
      </label>
    </div>
  )
}

export default Login