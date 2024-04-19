import React from 'react'
import { Link } from 'react-router-dom';
{/* <link href="/YOUR_PATH/favicon.ico" rel="icon" type="image/x-icon"></link> */}

const Navbar = () => {
  return (
    <nav className='Navbar'>
        <h1>PaymentSentry</h1>
        <ul>
            <li>
                <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
                <Link to="/Terminal">Terminal</Link>
            </li>
            <li>
                <Link to="/Agents">Agents</Link>
            </li>
            <li>
                <Link to="/Tracking">Tracking</Link>
            </li>
            <li>
                <Link to="/Reporting">Reporting</Link>
            </li>
            <li>
                <Link to="/Transactions">Transactions</Link>
            </li>
        </ul>

    </nav>
  )
}

export default Navbar