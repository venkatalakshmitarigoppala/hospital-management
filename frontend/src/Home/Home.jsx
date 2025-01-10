import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Home() {
    const [doctors, setDoctors] = useState([])
    const [selectedDoctorId, setSelectedDoctorId] = useState(null)
    const [appointmentDate, setAppointmentDate] = useState(null)
    const [appointmentTime, setAppointmentTime] = useState('')
    const patientId = localStorage.getItem("patientId")
    useEffect(() => {
        fetchDoctors()
    }, [])
    function handleSubmit(e) {
        e.preventDefault()
        const newAppointment = {
            patientId: patientId, doctorId: selectedDoctorId, date: appointmentDate, time: appointmentTime
        }
        console.log(newAppointment)
        axios.post("http://localhost:4000/api/appointments/add", newAppointment)
            .then((res) => {
                console.log(res)
                if(res.status===201){
                    alert("Booked successfully")
                    setSelectedDoctorId(null)
                    setAppointmentDate(null)
                    setAppointmentTime(null)
                }
            })

            .catch((e)=>{
                alert("Something went wrong")
                console.log(e)
            })
            
    }
    async function fetchDoctors() {
        await axios.get("http://localhost:4000/api/doctors")
            .then((res) => {
                console.log(res.data)
                setDoctors(res.data)
            })
            .catch((e) => {
                alert("error while fetching")
            })
    }
    return (
        <div className='container'>
            <div className='row mt-5'>
                {
                    doctors && doctors.map((doctorItem) => {
                        return <div key={doctorItem._id} className="col-12 col-sm-6 col-md-4 card m-3" style={{ width: "18rem" }}>
                            <div className="card-body">
                                <h5 className="card-title">{doctorItem.specializaton}</h5>
                                <p className="card-text">{doctorItem.name}</p>
                                <p className="card-text">{doctorItem.email}</p>
                                <p className="card-text">{doctorItem.mobile}</p>
                                <p className="card-text">{doctorItem.designation}</p>
                            </div>
                            <div className="card-footer text-body-secondary">
                                <button onClick={() => {
                                    setSelectedDoctorId(doctorItem._id)

                                }} className="btn btn-primary">Book Appointment</button>
                            </div>
                        </div>
                    })
                }
            </div>
            {console.log(selectedDoctorId)}
            {
                selectedDoctorId && <div className="modal show d-block" id="exampleModal" tabIndex="-1" role="modal">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">Appointment Details</h1>
                                <button onClick={() => setSelectedDoctorId(null)} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <label htmlFor="recipient-name" className="col-form-label">Appointment Date:</label>
                                        <input
                                            type="date"
                                            className="form-control"
                                            id="recipient-name"
                                            onChange={(e) => setAppointmentDate(e.target.value)}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="recipient-time" className="col-form-label">Appointment Time:</label>
                                        <input
                                            type="time"
                                            className="form-control"
                                            id="recipient-time"
                                            onChange={(e) => setAppointmentTime(e.target.value)} />
                                    </div>
                                    <div className="modal-footer">
                                        <button onClick={() => setSelectedDoctorId(null)} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        <button className="btn btn-success">Confirm Appointment</button>
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
            }


        </div>
    )
}