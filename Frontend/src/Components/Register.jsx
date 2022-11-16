import React from "react";

const Register = (props) => {
    function handleSubmit(e) {
        e.preventDefault();
        const email = e.target[0].value;
        const password = e.target[1].value;
        if (e.target[1].value !== e.target[2].value) {
            alert('passwords don\'t match, please try again!');
        } else {
            props.registerUser(email, password);
            const newUser = {
                user_name: email,
                user_password: password,
                is_seller: e.target[3].value
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
            <input type='email' placeholder="username" required />
            <input type='password' placeholder="password" minlength="6" required />
            <input type='password' placeholder="confirm password" minlength="6" required />
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