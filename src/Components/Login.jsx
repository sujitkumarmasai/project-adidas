import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Login.css'

const Login = () => {

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
        <div>
            <div className="container_log">
                <div className='left_log'>
                    <h1>LOG IN</h1>

                    <form onSubmit={submitForm}>
                        <div>
                            {/* <label htmlFor='email'>Email</label> */}
                            <input type="text" placeholder='Email*' name='email' id='email_log' value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>

                        <div>
                            {/* <label htmlFor='password'>Password</label> */}
                            <input type="password" placeholder='Password*' name='password' id='password_log' value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>

                        <div className='checkbox_log'>
                            <input type="checkbox" id="checkbox1_log" name="checkbox1" value="age" />
                            <label htmlfor="checkbox1">Keep me logged in.</label><br />
                        </div>

                        <Link to="/"><button className='button_log'>LOG IN</button></Link>
                    </form>

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
                <div className='right_log'>
                    <h1>JOIN THE CLUB. GET REWARDED.</h1>
                    <p>Join the adidas Creators Club membership program:</p>
                    <p> ✓ Get immediate access to all Challenger level rewards</p>
                    <p> ✓ Earn access to shop limited edition products</p>
                    <p> ✓ Level up for exclusive access to sport, yoga and music events</p>
                    <p> ✓ Receive our best special offers and promotions</p>
                    <p>Join now and start earning points to access new levels and rewards. It's time to unlock the best of adidas.</p>
                    <button>JOIN THE CLUB</button>
                    <img className='img_log' src="https://www.adidas.co.in/glass/react/fcd48fc/assets/img/CC2.0_my_account_register.jpg" alt="" />
                </div>
            </div>

            <div className='lowerDiv_log' >
                <h1>JOIN ADIDAS AND GET 15% OFF</h1>
               <Link to="/signup"> <button id='signup_log'>SIGN UP</button></Link>
            </div>

        </div>
    )
}

export default Login