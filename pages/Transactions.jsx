import React from 'react'
import Navbar from '../components/Navbar'

const Transactions = () => {

    const transactions = [
        {
          terminalId: '2076YN45',
          category: 'Card',
          amount: '₦5,000.00',
          date: '2/7/2022',
          region: 'Lagos',
          status: 'Transaction Approved',
          time: '12:00'
        },
        {
          terminalId: '2076YJ15',
          category: 'Cardless',
          amount: '₦15,000.00',
          date: '11/13/2019',
          region: 'South-West',
          status: 'Transaction Approved',
          time: '11:23'
        },
    ]

  return (
    <div>
        <Navbar />

        <div className="pagecontent">
            <div class="topsection">
                    <div class="searchbox">
                        <form action="/">
                            <input type="text" placeholder="Search.." name="search"/>
                        </form>
                    </div>
                    <div class="sidebar">
                        <img src="./icons/bell.ico" alt=""/>
                        <h6>Felix Paul</h6>
                        <p><sub>Agency Banking Head</sub></p>
                    </div>
            </div>

                <div className="transactionsection">
                    <div className="transaction-box">
                        {/* <div className="icon">
                            <img src="/" alt="Terminal Icon" />
                        </div> */}
                            <br /><sub>Total amount from Transactions</sub>
                            <div className="amount">
                                <span>50,000,000</span>
                            </div>
                    </div>

                    <div className="transaction-box">
                        {/* <div className="icon">
                        <img src="/" alt="Online Icon" />
                        </div> */}
                        <br /><sub>Number of Successful Transaction</sub><br></br>
                        <div className="amount">
                        <span>126,987</span>
                        </div>
                    </div>

                    <div className="transaction-box">
                        {/* <div className="icon">
                        <img src="/" alt="Online Icon" />
                        </div> */}
                        <br /><sub>Number of Failed Transactions</sub><br></br>
                        <div className="amount">
                        <span>28,906</span>
                        </div>
                    </div>
                </div>

                <div className="container">
      <h2>Transaction Reference</h2>
      <div className="transaction-table">
        <div className="transaction-header">
          <div>Terminal ID</div>
          <div>Category</div>
          <div>Amount</div>
          <div>Date</div>
          <div>Region</div>
          <div>Status</div>
          <div>Time</div>
        </div>
        {transactions.map((transaction, index) => (
          <div key={index} className="transaction-row">
            <div>{transaction.terminalId}</div>
            <div>{transaction.category}</div>
            <div>{transaction.amount}</div>
            <div>{transaction.date}</div>
            <div>{transaction.region}</div>
            <div>{transaction.status}</div>
            <div>{transaction.time}</div>
          </div>
        ))}
      </div>
    </div>

        </div>

    </div>
  )
}

export default Transactions