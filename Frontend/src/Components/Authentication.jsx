import { useRef } from 'react'

import bcrypt from 'bcryptjs'

// SALT should be created ONE TIME upon sign up
const salt = bcrypt.genSaltSync(10)
// example =>  $2a$10$CwTycUXWue0Thq9StjUM0u => to be added always to the password hash

function Authentication() {
  const emailInputRef = useRef()
  const passwordInputRef = useRef()

  function handleLoginForm() {
    const email = emailInputRef.current.value
    const password = passwordInputRef.current.value
    const hashedPassword = bcrypt.hashSync(password, '$2a$10$CwTycUXWue0Thq9StjUM0u') // hash created previously created upon sign up

    fetch('http://localhost:3001/user/api', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user_name: email,
        user_password: hashedPassword,
      }),
    })
  }

  return (
    <div className='Authentication'>
      <header className='Authentication-header'>
        <form>
          <input style={{ padding: '15px', borderRadius: '10px', margin: '10px' }} ref={emailInputRef} type='email' placeholder='User Name' />
          <input style={{ padding: '15px', borderRadius: '10px', margin: '10px' }} ref={passwordInputRef} type='password' placeholder='Password' />
          <button
            type='submit'
            style={{ padding: '15px', borderRadius: '10px', margin: '10px' }}
            onClick={e => {
              e.preventDefault()
              handleLoginForm()
            }}>
            Log In
          </button>
        </form>
        <span>Your new SALT: {salt}</span>
        <br />
        <span>
          Save this Salt, UPON sign up <br /> if you refresh it will generate a new SALT!!!
        </span>
      </header>
    </div>
  )
}

export default Authentication