import React from 'react'

const Login = (props) => {

  const handleSubmit = (e) => {
    e.preventDefault()
    const userName = e.target["0"].value

    fetch('http://localhost:3001/user/api/' + userName)
      .then(response => response.json())
      .then((data) => {
        if (data['0'] === undefined) {
          alert('Account has not been created. Please create an account.');
        }
        const password = e.target['1'].value;
        if (password !== data[0].user_password) {
          alert('sorry, the username and password does\'t match what we have on file');
        }
      })
  }

  return (
    <div>Login Page
      <form onSubmit={handleSubmit}>
        <label>
          User Name:
          <input type="text" name="name" required />
        </label>

        <label>
          Password:
          <input type="password" required />
        </label>

        <button>Submit</button>

      </form>
    </div>
  )
}

export default Login