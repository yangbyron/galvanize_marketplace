import React, { useRef } from 'react'
import { Link } from "react-router-dom"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"

const Login = ({ setCurrentUser }) => {

  const handleSubmit = (e) => {
    e.preventDefault()
    const email = emailRef.current.value
    const password = passwordRef.current.value

    // fetch('http://localhost:3001/user/api/' + userName)
    //   .then(response => response.json())
    //   .then((data) => {
    //     if (data['0'] === undefined) {
    //       alert('Account has not been created. Please create an account.');
    //     }
    //     const password = e.target['1'].value;
    //     if (password !== data[0].user_password) {
    //       alert('sorry, the username and password does\'t match what we have on file');
    //     }
    //   })
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      setCurrentUser(userCredential.user);
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
      </label>
    </div>
  )
}

export default Login