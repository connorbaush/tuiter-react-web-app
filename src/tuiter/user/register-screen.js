import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { registerUserThunk } from "../services/auth-thunks";
function RegisterScreen() {
    const [username, setUsername] = useState("");
    const [firstpass, setFirstPassword] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleLogin = async () => {
        try {
            if (firstpass.match(password)) {
                await dispatch(registerUserThunk({ username, password }));
                navigate("/profile");
            }
            else {
                alert("alert");
            }
        } catch (e) {
            alert(e);
        }
    };
    return (<div>
        <h1>Register Screen</h1>
        <div className="mt-2">
            <label>Username</label>
            <input className="form-control" type="text" value={username}
                onChange={(event) => setUsername(event.target.value)} />
        </div>
        <div className="mt-2">
            <label>Password</label>
            <input className="form-control" type="password" value={firstpass}
                onChange={(event) => setFirstPassword(event.target.value)} />
        </div>
        <div className="mt-2">
            <label>Enter Password Again</label>
            <input className="form-control" type="password" value={password}
                onChange={(event) => setPassword(event.target.value)} />
        </div>
        <button className="btn btn-primary mt-2"
            onClick={handleLogin}>
            Register
        </button>
    </div>
    );
}
export default RegisterScreen;