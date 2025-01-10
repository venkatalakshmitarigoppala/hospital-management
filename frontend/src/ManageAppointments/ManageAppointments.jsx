import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function ManageAppointments() {
    const [appointments, setAppointments] = useState([])
    useEffect(() => {
        fetchAppointments()
    }, [])
    async function handleConfirm(id) {
        axios.put(`http://localhost:4000/api/appointments/confirm/${id}`)
            .then((res) => {
                if (res.status === 204)
                    alert("Confirmed")
                fetchAppointments()
            })
    }
    async function handleCancel(id) {
        axios.put(`http://localhost:4000/api/appointments/cancel/${id}`)
            .then((res) => {
                if (res.status === 204)
                    alert("Cancelled")
                fetchAppointments()
            })
    }
    async function fetchAppointments() {
        axios.get("http://localhost:4000/api/appointments")
            .then((res) => {
                if (res.status === 200) {
                    console.log(res.data)
                    setAppointments(res.data)
                }
            })
    }
    return (
        <div className='container'>
            <h2>Appointment Dashboard</h2>
            <div className='row'>
                {
                    appointments.length > 0 ? (
                        appointments.map((item) => (
                            <div key={item._id} className='col-12 col-sm-6 col-md-4 card m-3' style={{ width: "20rem" }}>
                                <div className="card-body">
                                    <p className="card-title">Patient Name: <b>{item.patientId.name}</b></p>
                                    <p className="card-text">Disease: {item.patientId.disease}</p>
                                    <p className="card-text">Contact No: {item.patientId.mobile}</p>
                                    <p className='card-text'>Doctor Name: {item.doctorId.name}</p>
                                    <p className='card-text'>Doctor Designation: {item.doctorId.designation}</p>
                                </div>
                                {
                                    item.status === "Pending" &&
                                    <div className='card-footer'>
                                        <button onClick={() => handleConfirm(item._id)} className="btn btn-primary btn-sm">
                                            Confirm
                                        </button>
                                        <button onClick={() => handleCancel(item._id)} className="btn btn-danger btn-sm float-end">
                                            Cancel
                                        </button>
                                    </div>
                                }
                            </div>
                        ))
                    ) : (
                        <div>No appointments found</div>
                    )
                }
            </div>

        </div>
    )
}