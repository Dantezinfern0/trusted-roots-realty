import React from 'react'

const EmailForm = () => {
    return (<>
<form name="contact" method="POST">
    <input type="hidden" name="form-name" value="contact" />
    <h1>Stay in Touch with Us!</h1>
  <p>
    <label>Your Name: <input type="text" name="name" /></label>   
  </p>
  <p>
    <label>Your Email: <input type="email" name="email" /></label>
  </p>
  <p>
    <button type="submit">Send</button>
  </p>
</form>
</>
)}
export default EmailForm