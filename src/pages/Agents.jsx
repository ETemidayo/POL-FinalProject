import React from 'react'
import Navbar from '../components/Navbar';

const Agents = () => {

    const agentData = [
        { name: "Olise Efem", id: "P1235Z23", location: "Ikotun", category: "ISW-enable Polaris Agents", dateCreated: "2/7/2022", region: "Lagos", status: "True" },
        { name: "Vodina Precious", id: "P1235Z23", location: "Ibandan", category: "Appzone Agent", dateCreated: "11/13/2019", region: "South-West", status: "True" },
        { name: "Simon Okon", id: "P1235Z23", location: "Jos", category: "ISW-enable Polaris Agents", dateCreated: "11/20/2019", region: "North", status: "False" },
        { name: "Cynthia Ese", id: "P1235Z23", location: "Asaba", category: "ISW-enable Polaris Agents", dateCreated: "11/22/2019", region: "South-South", status: "True" },
        { name: "Tunde Bakare", id: "P1235Z23", location: "Ojota", category: "Polaris Agent", dateCreated: "11/22/2019", region: "Lagos", status: "True" },
        { name: "Peter Obi", id: "P1235Z23", location: "Ogun", category: "Polaris Agent", dateCreated: "11/22/2019", region: "South-West", status: "False" },
        { name: "Stella Olantunji", id: "P1235Z23", location: "Abuja", category: "ISW-enable Polaris Agents", dateCreated: "11/22/2019", region: "North", status: "False" },
        { name: "Praise Ugbonna", id: "P1235Z23", location: "Ikeja", category: "Appzone Agent", dateCreated: "11/22/2019", region: "Lagos", status: "True" }
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

            <div className="agentsection">
                <div className="agent-box">
                    {/* <div className="icon">
                        <img src="terminal-icon.png" alt="Terminal Icon" />
                    </div> */}
                        <br /><sub>Total amount of agents</sub>
                        <div className="amount">
                            <span>15,000</span>
                        </div>
                </div>

                <div className="agent-box">
                    {/* <div className="icon">
                    <img src="online-icon.png" alt="Online Icon" />
                    </div> */}
                    <br /><sub>Total amount of Active Agents</sub><br></br>
                    {/* <sup>UP-TIME</sup> */}
                    <div className="amount">
                    <span>4,590</span>
                    </div>
                </div>

                <div className="agent-box">
                    {/* <div className="icon">
                    <img src="online-icon.png" alt="Online Icon" />
                    </div> */}
                    <br /><sub>Total amount of Deactivated Agents</sub><br></br>
                    {/* <sup>UP-TIME</sup> */}
                    <div className="amount">
                    <span>200</span>
                    </div>
                </div>

                <div className="agent-box">
                    {/* <div className="icon">
                    <img src="online-icon.png" alt="Online Icon" />
                    </div> */}
                    <br /><sub>Total amount of Super Agents</sub><br></br>
                    {/* <sup>UP-TIME</sup> */}
                    <div className="amount">
                    <span>15</span>
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
                    {agentData.map((agent, index) => (
                        <tr key={index}>
                        <td>{agent.name}</td>
                        <td>{agent.id}</td>
                        <td>{agent.location}</td>
                        <td>{agent.category}</td>
                        <td>{agent.dateCreated}</td>
                        <td>{agent.region}</td>
                        <td>{agent.status}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>

        </div>
    </div>
  )
}
<body>

<button type="terminal ">Click Me!</button>


</body>

export default Agents