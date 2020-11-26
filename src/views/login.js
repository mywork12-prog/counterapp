import React,{useState} from 'react'
import { useHistory } from "react-router-dom";
import axios from 'axios';

export default function Login(){
    const history = useHistory()
    const [username,setUsername] = useState(null);
    const [password,setPassword] = useState(null);

    const login = async () => {
        let user = { username:username,password:password }
      const response = await  axios.post('http://localhost:4000/login',user)
        localStorage.setItem('jwt',response.data.token)
        localStorage.setItem('name',response.data.users[0].name)
        localStorage.setItem('address',response.data.users[0].address)
        localStorage.setItem('phone',response.data.users[0].mobile)
        localStorage.setItem('id',response.data.users[0]._id)
        return history.push('/dashboard')
    }

    return(
        <div id="login">
            <h3 className="text-center text-white pt-5">Login form</h3>
            <div className="container">
                <div id="login-row" className="row justify-content-center align-items-center">
                    <div id="login-column" className="col-md-6">
                        <div id="login-box" className="col-md-12">
                                <h3 className="text-center text-info">Login</h3>
                                <div className="form-group">
                                    <label htmlFor="username" className="text-info">Username:</label><br/>
                                    <input type="text" name="username" id="username" className="form-control" onChange={(e)=> setUsername(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password" className="text-info">Password:</label><br/>
                                    <input type="text" name="password" id="password" className="form-control" onChange={(e)=> setPassword(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <input type="submit" name="submit" className="btn btn-info btn-md" onClick={login} value="submit" />
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}