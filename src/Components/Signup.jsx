import './Signup.css'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

 export const Signup = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [allEntry, setAllEntry] = useState([])

  const submitForm = (e) => {
    e.preventDefault()
    const newEntry = { email: email, password: password, id: new Date().getTime().toString() }
    setAllEntry([...allEntry, newEntry])
    console.log(allEntry)
  }

  return (
    <div className="container">
      <h1>CREATE YOUR ACCOUNT</h1> <br />
      <p className='para'>Sign up now and get 15% off your first order.</p> <br />
      {/* <div className='form'> */}
      <form onSubmit={submitForm}>
        <div>
          {/* <label htmlFor='email'>Email</label> */}
          <input type="text" placeholder='Email*' name='email' id='email' value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div>
          {/* <label htmlFor='password'>Password</label> */}
          <input type="password" placeholder='Password*' name='password' id='password' value={password} onChange={(e) => setPassword(e.target.value)} />
          <p>Please use 8+ characters, with at least 1 number and a mixture of big and small letters</p>
        </div>

        <div>
          <input type="checkbox" id="checkbox1" name="checkbox1" value="age" />
          <label htmlfor="checkbox1">Yes, I am over 18 years old</label><br />
        </div>
        <div>
          <input type="checkbox" id="checkbox2" name="checkbox2" value="update" />
          <label htmlfor="checkbox2">
            I would like to stay up to date with adidas. I agree to receive personalised email marketing messages from adidas India Marketing Pvt. Ltd</label><br />
        </div>
        <div>
          <input type="checkbox" id="checkbox3" name="checkbox3" value="terms" />
          <label htmlfor="checkbox3"> I have read and accepted the Terms & Conditions, the Creators Club Terms & Conditions and the adidas Privacy Policy.</label><br />
        </div>

         <Link to="/login"><button>Register</button></Link>
      </form>
      {/* </div> */}
      {/* <div>
        {
          allEntry.map((curElem) => {
            return (
              <div key={curElem.id}>
                <p>{curElem.email}</p>
                <p>{curElem.password}</p>
              </div>
            )
          })
        }
      </div> */}
    </div>
  )
}

