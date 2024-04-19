import React from "react";
import Navbar from "../components/Navbar";


const Dashboard = () => {
  return (
    <div>
      <Navbar />

      <div class="pagecontent">
        <div class="topsection">
          <div class="searchbox">
            <form action="/">
              <input type="text" placeholder="Search.." name="search" />
            </form>
          </div>
          <div class="sidebar">
            <h6>Felix Paul</h6>
            <p>
              <sub>Agency Banking Head</sub>
            </p>
          </div>
        </div>

        <div class="middlesection">
          <div class="first">
            <h3>Overview</h3>
            <label for="numberofdays"></label>
            <select name="Days" id="#">
              <option value="#">Last 30 Days</option>
              <option value="#">Last 20 Days</option>
              <option value="#">Last 10 Days</option>
              <option value="#">Last 5 Days</option>
            </select>
          </div>

          <div class="boxes">
            <div class="box1">
              {/* <span className="icon"></span> */}
              <p>
                <sub>Total revenue of Transactions</sub>
              </p>
              <strong>₦530,000.00</strong>
              <p>
                <span className="tp">
                  12% increase from last month
                  {/* <sup>12% increase from last month</sup> */}
                </span>
              </p>
            </div>

            <div class="box2">
              {/* <span className="iconone"></span> */}
              <p>
                <sub>Terminal Uptime</sub>
              </p>
              <b>1950 /2100</b>
              <p>
                <span className="tpft">
                  
                </span>
                10% decrease from last month
              </p>
            </div>

            <div class="box3">
              {/* <img src="" alt="location" /> */}
              <p>
                <sub>Location Tracking</sub>
              </p>
              <b>1000 locations</b>
              <p>
                <span className="tp">
                  8% increase from last month
                </span>
              </p>
            </div>

            <div class="box4">
              {/* <img src="" alt="icon" /> */}
              <p>
                <sub>Active Agents</sub>
              </p>
              <b>1005 /1200</b>
              <p>
                <span className="tp">
                  2% increase from last month
                </span>
              </p>
            </div>
          </div>

          <div class="lastsection">
            <h6>
              <sub>Onboarding Activity - Agents by Region</sub>
            </h6>
            <div class="subsection">
              <h6>
                <sub>All</sub>
              </h6>
              <h6>
                <sub>Lagos</sub>
              </h6>
              <h6>
                <sub>South-West</sub>
              </h6>
              <h6>
                <sub>South-South</sub>
              </h6>
              <h6>
                <sub>North</sub>
              </h6>
            </div>
            <hr color="lightgrey" />

            <div class="card">
              <form action="/action_page.php">
                <label>
                  <input type="radio" name="location" value="Ibandan" />
                  New Agent Onboarded from Ibandan- South-West Region
                </label>
                <br />

                <label>
                  <input type="radio" name="location" value="Abuja" />
                  New Agent Onboarded from Abuja- North Region
                </label>
                <br />

                <label>
                  <input type="radio" name="location" value="Asaba" />
                  New Agent Onboarded from Asaba- South-South Region
                </label>
                <br />

                <label>
                  <input type="radio" name="location" value="Ogun" />
                  New Agent Onboarded from Ogun- South-West Region
                </label>
                <br />

                <label>
                  <input type="radio" name="location" value="Ikotun" />
                  New Agent Onboarded from Ikotun- Lagos Region
                </label>
                <br />

                <label>
                  <input type="radio" name="location" value="Alausa" />
                  New Agent Onboarded from Alausa- Lagos Region
                </label>
                <br />

                <label>
                  <input type="radio" name="location" value="Ikoyi" />
                  New Agent Onboarded from Ikoyi- Lagos Region
                </label>
                <br />

                <label>
                  <input type="radio" name="location" value="Isolo" />
                  New Agent Onboarded from Isolo- Lagos Region
                </label>
                <br />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default Dashboard;
