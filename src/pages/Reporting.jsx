import React from 'react'
import Navbar from '../components/Navbar';

const Reporting = () => {

    const cardTransactions = [500000, 200000, 100000, 50000, 10000, 0];
    const cardlessTransactions = [0, 10000, 50000, 100000, 200000, 500000];
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <div>
        <Navbar />

        <div className="pagecontent">
        <div>
      <h2>Transaction Analytics</h2>
      <div>
        <h3>Card Transactions</h3>
        <div>
          {cardTransactions.map((amount, index) => (
            <div key={index} style={{ display: 'inline-block', margin: '0 10px' }}>
              <div>{amount}k</div>
              <div>{daysOfWeek[index]}</div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h3>Cardless Transactions</h3>
        <div>
          {cardlessTransactions.map((amount, index) => (
            <div key={index} style={{ display: 'inline-block', margin: '0 10px' }}>
              <div>{amount}k</div>
              <div>{daysOfWeek[index]}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
        </div>
    </div>
  )
}

export default Reporting