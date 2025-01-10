import React,{useState} from 'react'
import axios from 'axios'
export default function Register() {
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [disease,setDisease]=useState('')
    const [mobile,setMobile]=useState('')
    function handleRegister(e){
        e.preventDefault()
        const newPatient={name,email,password,disease,mobile}
        console.log(newPatient)
        axios.post("http://localhost:4000/api/patients/addpatient",newPatient)
            .then((res)=>{
                if(res.status===201)
                    alert("Patient Created successfully")
            })
    }
    return (
        <div className='container mt-5'>
            <div className='row'>
                <form className='col-12 col-md-6' onSubmit={handleRegister}>
                    <div className="mb-3">
                        <label htmlFor="nameInputEmail1" className="form-label"> Name</label>
                        <input type="text" className="form-control" id="NameInputEmail1" aria-describedby="nameHelp" onChange={(e)=>setName(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=>setEmail(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" onChange={(e)=>setPassword(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="diseaseInputEmail1" className="form-label"> Enter your disease</label>
                        <input type="text" className="form-control" id="diseaseInputEmail1" aria-describedby="nameHelp" onChange={(e)=>setDisease(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="phoneInputEmail1" className="form-label">Enter mobile number</label>
                        <input type="text" className="form-control" id="phoneInputEmail1" aria-describedby="phoneHelp" onChange={(e)=>setMobile(e.target.value)}/>
                    </div>
                    
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}
