import React, {useEffect} from 'react'

const Login = () => {

    const handleSubmit = (e) => {
      e.preventDefault()
      const userName = e.target["0"].value

        fetch('http://localhost:3001/user/api/' + userName)
        .then(response => response.json())
        .then((data) => {
          console.log(typeof data)
          if (data['0'] === undefined) {
            alert("Account has not been created. Please create a account.")
          }
          console.log(data)
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