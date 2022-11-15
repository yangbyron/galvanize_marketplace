import React from "react";
const Register = (props) => {
    function handleSubmit(e) {
        e.preventDefault();
        if (e.target[1].value !== e.target[2].value) {
            alert('passwords don\'t match, please try again!');
        } else {
            console.log('username: ' + e.target[0].value);
            //delete the following two lines after feature implemented
            console.log('password: ' + e.target[1].value);
            console.log('confirmed password: ' + e.target[2].value);
            console.log('is_seller: ' + e.target[3].value)
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type='email' placeholder="username" required />
            <input type='password' placeholder="password" required />
            <input type='password' placeholder="confirm password" required />
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