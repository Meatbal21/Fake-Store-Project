import React from 'react'
import './Contact.css'

function Contact() {
  return (
    <div className='contact-container'>
        <h2>Contact Us</h2>
        <form>
            <input type="text" placeholder='First Name' />
            <input type="text" placeholder='Last Name' />
            <textarea placeholder='Write your message' rows="4"></textarea>
            <button>Submit</button>
        </form>
        

    </div>
  )
}

export default Contact