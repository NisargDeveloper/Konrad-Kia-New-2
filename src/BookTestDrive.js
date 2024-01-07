import React, { useState } from 'react'
import axios from 'axios';
import Header from './Header';
import EV9 from './assets/ev9-GT.png';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom'
import './BookTestDrive.css';
export const BookTestDrive = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    nextVehicle: '',
    preferredTimes: '',
    fullDate: '',
  })

  const [dateData, setDateData] = useState({
    date:'',
    month: '',
    year: ''
  })
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
  
    if (name === 'day' || name === 'month' || name === 'year') {
      // Update the fullDate property when day, month, or year changes
      const day = name === 'day' ? value : formData.day;
      const month = name === 'month' ? value : formData.month;
      const year = name === 'year' ? value : formData.year;
  
      const fullDate = `${day}/${month}/${year}`;
  
      setFormData((prevData) => ({
        ...prevData,
        day: name === 'day' ? value : prevData.day,
        month: name === 'month' ? value : prevData.month,
        year: name === 'year' ? value : prevData.year,
        fullDate,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: type === 'checkbox' ? checked : value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      console.log(formData);
      const response = await axios.post('http://localhost:3000/users', formData);
      console.log(response);
      navigate('/BookingConfirmed', { state: { formData } });
    } catch (error) {
      console.log('Failed to send form data: ', error.message);
    }
  }

  return (
    <div>
      <div className='test-drive-upper'>
        <p>Step 2</p>
        <h1>Additional Information</h1>
        <p>Please select your preferred dealership, enter your contact information and provide your preferred time to book a test drive</p>
      </div>

      <div className='test-drive-middle'>
        <img src={EV9} style={{width: '240px'}}/>
        <div>
          <h3>2024 EV9</h3>
          <button className='test-drive-model-btn'>Change Model</button>
        </div>
      </div>
      <p style={{marginLeft: '350px'}}>Contact Information</p>
      <form className='test-drive-form' onSubmit={handleSubmit}>
        <div className='test-div'>
        <label>First Name<br/>
        <input type='text' className="testInput" name='firstName' onChange={handleChange}/>
        </label>
        </div>
        <div className='test-div'>
        <label>Last Name<br/><input type='text' className="testInput" name='lastName' onChange={handleChange}/></label>
        </div>
        <div className='test-div'>
        <label>Email<br/><input type='text' className="testInput" name='email' onChange={handleChange}/></label>
        </div>
        <div className='test-div'>
        <label>Phone Number(Optional)<br/><input type='text' className="testInput" name='phoneNumber' onChange={handleChange}/></label>
        </div>
        <div className='test-div'>
        <label for="">When do you plan to buy your next vehicle</label>
        
        <select id="next-vehicle" className="dropdown-select" name='nextVehicle' onChange={handleChange}>
          <option value="" disabled selected>Select an option</option>
          <option value="this-month">This month</option>
          <option value="two-months">In 2-3 month</option>
          <option value="four-months">In 4-6 month</option>
          <option value="7-months">In 7-12 month</option>
          <option value="12-months">More than 12 months</option>
        </select>
        </div>
        <div className='test-div'>
        <label>Preferred times for your test drive<br/>
          <input type='text' className="testInput" name="preferredTimes" onChange={handleChange}/>
        </label>
        </div>
        <div className='test-div comingDiv'>
        <label>What day would you like to come in?(Optional) - (day/month/year)</label><br/>
        <div style={{display: 'flex'}}>
          <input type='text' name='day' className="" style={{flex: 1, padding: '15px', outline: 'none', marginTop: '15px'}} placeholder='DD' pattern='[0-3]?[0-9]' maxLength='2' onChange={handleChange}/>
          <input type='text' name='month' className="" style={{flex: 1, padding: '15px', outline: 'none', marginTop: '15px'}} placeholder='MM' pattern='[0-3]?[0-9]' maxLength= '2' onChange={handleChange}/>
          <input type='text' name='year' className="" style={{flex: 1, padding: '15px', outline: 'none', marginTop: '15px'}} placeholder='YYYY' pattern='\d{4}' maxLength='4' onChange={handleChange}/>
        </div>
        </div>
        <div className='test-drive-terms'>
        <input type='checkbox' id="termsCheckbox" name='termsAgreed' checked={formData.termsAgreed}/>
        <label htmlFor="termsCheckbox">I agree to receive electronic communications from Kia Canada Inc., (“Kia”), Kia Finance and the Kia&nbsp;dealer selected above in order to be provided with electronic communications related to promotions, marketing materials, offers, product and service information and I understand that the information that I have given above may be anonymized and used for aggregate data and statistical analysis. I understand that I have the option to opt-out of receiving email communications at any time, by clicking the&nbsp;<a href="https://www.kia.ca/manage-subscription?id=a663399891a8">UNSUBSCRIBE link</a>. You may&nbsp;<a href="/en/about-kia/Sample-email">Click here</a>&nbsp;to see a sample of email communications from Kia. If you have any questions or concerns, please reach out to the customer service department at Contact Kia’s Service&nbsp;<a href="mailto:consumer@kia.ca">consumer@kia.ca</a>, or Kia’s privacy officer at&nbsp;<a href="mailto:privacy@kia.ca">privacy@kia.ca</a>&nbsp;(<a href="/en/about-kia/privacy-policy">Privacy Policy</a>).</label>
        </div>
        
        <button type="submit"style={{padding: '15px', backgroundColor: 'black', color: 'white', cursor: 
      'pointer', marginTop: '20px', marginBottom: '20px', width: '100px'}}>Submit</button>
        <button style={{padding: '15px', color: 'black', cursor: 'pointer', marginTop: '20px', marginBottom: '20px', border: '1px solid black', width:'100px'}}>Back</button>
      </form>
      <Footer/>
    </div>
  )
}
