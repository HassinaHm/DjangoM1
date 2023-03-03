import { useState } from "react"
import AuthUser from './AuthUser';
import '../../asset/css/Bootstrap.min.css'

export default function Register() {
    
    const {http} = AuthUser();
    const [name,setName] = useState();
    const [role,setRole] = useState();
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();

    const submitForm = () =>{
        // api call
        http.post('/register',{name:name,role:role,email:email,password:password}).then((res)=>{
            console.log(res)
        })
        
    }

    return(
        <div className="row justify-content-left pt-5">
            <div className="col-sm-6">
                <div className="card p-4">
                    <h1 className="text-center mb-3">Register </h1>
                    <div className="form-group">
                        <label>Name:</label>
                        <input type="text" className="form-control" placeholder="Enter name"
                            onChange={e=>setName(e.target.value)}
                        id="name" />
                    </div>
                    <div className="form-group">
                        <label>Role:</label>
                        <input type="text" className="form-control" placeholder="Enter role"
                            onChange={e=>setRole(e.target.value)}
                        id="role" />
                    </div>
                    <div className="form-group mt-3">
                        <label>Email address:</label>
                        <input type="email" className="form-control" placeholder="Enter email"
                            onChange={e=>setEmail(e.target.value)}
                        id="email" />
                    </div>

                    <div className="form-group mt-3">
                        <label>Password:</label>
                        <input type="password" className="form-control" placeholder="Enter password"
                            onChange={e => setPassword(e.target.value)}
                        id="pwd" />
                    </div>
                    <button type="button" onClick={submitForm} className="btn btn-primary mt-4">Register</button>
                </div>
            </div>
        </div>
    )
}