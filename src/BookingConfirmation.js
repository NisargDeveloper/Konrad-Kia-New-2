import React from 'react'
import  EV9  from './assets/ev9-GT.png'
import { useLocation } from 'react-router-dom';
import './BookTestDrive.css';
export const BookingConfirmation = () => {
  const location = useLocation();
  const formData = location.state?.formData || {};
  console.log('Form Data:', JSON.stringify(formData, null, 2));
  return (
    <div>
    <div className='thank-container'>
        <h1>Thank you for booking a Test Drive.</h1>
        <p>A Sales representative from your selected dealership will reach out to you shortly</p>
      </div>
    <div className='booking-container'>
      <div className=''>
      <img src={EV9}/>
      </div>
      <div className='booking-detail-container'>
      <h1>2024 EV9</h1>
      <h3>Submission Details</h3>
      <h3 style={{marginTop: '10px', marginBottom: '10px'}}>Dealership location</h3>
      <div className='confirmation-details'>
        <p>Dealership Name</p>
        <p style={{textAlign: 'right'}}>Toronto Kia</p>
        <p>Preferred Time</p>
        <p style={{textAlign: 'right'}}>{formData.preferredTimes}</p>
      </div>
      <h3>Contact Information</h3>
      <div className='confirmation-details'>
        <p>First Name</p>
        <p style={{textAlign: 'right'}}>{formData.firstName}</p>
        <p>Last Name</p>
        <p style={{textAlign: 'right'}}>{formData.lastName}</p>
        <p>Email</p>
        <p style={{textAlign: 'right'}}>{formData.email}</p>
      </div>
      </div>
    </div>
    </div>
  )
}
