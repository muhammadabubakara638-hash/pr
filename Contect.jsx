import React from 'react'
import "./contect.css"

const Contect = () => {
  return (
    <>
  <div className="main5">
    <div className="cont">
    <h1 id="hg">Let's talk</h1>
    <p className='p7'>Lorem ipsum dolor sit amet consectetur adipisicing elit.  Alias beatae deleniti <br /> voluptates?  Praesentium sequi laborum aperiam dolorum, id voluptas, <br /> ipsum asperiores quod corrupti.</p>
    <div className="m">
        <h2 className='my'>✉️</h2>
        <h5>abubakarshafique64@gmail.com</h5>
    </div>
      <div className="m">
        <h2 className='my'>📞</h2>
        <h5>+9232278-9</h5>
    </div>
      <div className="m">
        <h2 className='my'>📍</h2>
        <h5>CA, united states</h5>
    </div>
    </div>
<div className="contact-form">
  <form className="cont2">
    <label className="label">Your Name</label>
    <input type="text" placeholder="Enter your name" required />

    <label className="label">Your Email</label>
    <input type="email" placeholder="Enter your email" required />

    <label className="label">Write your message here</label>
    <textarea placeholder="Enter your message" required></textarea>

    <button type="submit" className="submit-btn">Submit now</button>
  </form>
</div>

  </div>

    </>
  )
}

export default Contect