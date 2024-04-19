import React from 'react'
import Navbar from '../components/Navbar'

const Terminal = () => {

    const agents = [
        { agentName: "Olise Efem", agentID: "P1235Z23", location: "Ikotun", category: "ISW-enable Polaris Agents", dateCreated: "2/7/2022", region: "Lagos", status: true },
        { agentName: "Vodina Precious", agentID: "P1235Z23", location: "Ibandan", category: "Appzone Agent", dateCreated: "11/13/2019", region: "South-West", status: true },
        { agentName: "Simon Okon", agentID: "P1235Z23", location: "Jos", category: "ISW-enable Polaris Agents", dateCreated: "11/20/2019", region: "North", status: false },
        { agentName: "Cynthia Ese", agentID: "P1235Z23", location: "Asaba", category: "ISW-enable Polaris Agents", dateCreated: "11/22/2019", region: "South-South", status: true },
        { agentName: "Tunde Bakare", agentID: "P1235Z23", location: "Ojota", category: "Polaris Agent", dateCreated: "11/22/2019", region: "Lagos", status: true },
        { agentName: "Peter Obi", agentID: "P1235Z23", location: "Ogun", category: "Polaris Agent", dateCreated: "11/22/2019", region: "South-West", status: false },
        { agentName: "Stella Olantunji", agentID: "P1235Z23", location: "Abuja", category: "ISW-enable Polaris Agents", dateCreated: "11/22/2019", region: "North", status: false },
        { agentName: "Praise Ugbonna", agentID: "P1235Z23", location: "Ikeja", category: "Appzone Agent", dateCreated: "11/22/2019", region: "Lagos", status: true }
      ];

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

            <div className="terminalsection">
                <div className="terminal-box">
                    {/* <div className="icon"> */}
                        {/* <img src="" alt="Terminal Icon" /> */}
                    {/* </div> */}
                        <br /><sub>Total amount of Terminals</sub>
                        <div className="amount">
                            <span>28,906</span>
                        </div>
                </div>

                <div className="terminal-box">
                    {/* <div className="icon">
                    <img src="online-icon.png" alt="Online Icon" />
                    </div> */}
                    <br /><sub>Online/Active Terminals</sub><br></br>
                    <sup>UP-TIME</sup>
                    <div className="amount">
                    <span>28,906</span>
                    </div>
                </div>

                <div className="terminal-box">
                    {/* <div className="icon">
                    <img src="online-icon.png" alt="Online Icon" />
                    </div> */}
                    <br /><sub>Offline/Inactive Terminals</sub><br></br>
                    <sup>UP-TIME</sup>
                    <div className="amount">
                    <span>28,906</span>
                    </div>
                </div>
            </div>

            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Agent Name</th>
                            <th>Agent ID</th>
                            <th>Location</th>
                            <th>Category</th>
                            <th>Date Created</th>
                            <th>Region</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                        <tbody>
                            {agents.map((agent, index) => (
                                <tr key={index}>
                                <td>{agent.agentName}</td>
                                <td>{agent.agentID}</td>
                                <td>{agent.location}</td>
                                <td>{agent.category}</td>
                                <td>{agent.dateCreated}</td>
                                <td>{agent.region}</td>
                                <td>{agent.status ? 'Active' : 'Inactive'}</td>
                                </tr>
                            ))}
                        </tbody>
                </table>
            </div>

        </div>
    </div>
  )
}

export default Terminal