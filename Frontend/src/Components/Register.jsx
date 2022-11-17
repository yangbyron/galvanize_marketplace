import React from "react";

const Register = (props) => {
    function handleSubmit(e) {
        e.preventDefault();
        const username = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;
        if (e.target[2].value !== e.target[3].value) {
            alert('passwords don\'t match, please try again!');
        } else {
            props.registerUser(email, password);
            const newUser = {
                user_name: username,
                user_email: email,
                is_seller: e.target[4].value
            }
            fetch('http://localhost:3001/user/api', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newUser)
            })
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type='text' placeholder="username" required />
            <input type='email' placeholder="email" required />
            <input type='password' placeholder="password" minLength="6" required />
            <input type='password' placeholder="confirm password" minLength="6" required />
            <select required defaultValue={false}>
                <option value={false}>buyer</option>
                <option value={true}>seller</option>
            </select>
            <input type='submit' />
            <button onClick={props.cancel}>Cancel</button>
        </form>
    )
}
export default Register