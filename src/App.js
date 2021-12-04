import React from 'react';
import Tabs from "./components/Tabs";
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Team Agone</h1>
      <Tabs>
        <div label="Student Data">
          <table>
            <tr>
              <th>
                Athlete
              </th>
              <th>
                Phone Number
              </th>
              <th>
                Distance Ran(Miles)
              </th>
              <th>
                Wellness Report
              </th>
            </tr>
            <tr>
              <th>
                Jonathan W.
              </th>
              <th>
                555-4525
              </th>
              <th>
                10.5
              </th>
              <th>
                Not feeling well today
              </th>
            </tr>
            <tr>
              <th>
                Kaila I.
              </th>
              <th>
                555-9357
              </th>
              <th>
                15
              </th>
              <th>
                No issues today
              </th>
            </tr>
          </table>
        </div>
        <div label="WORKOUT PLAN">
        <table>
            <tr>
              <th>
                Athlete
              </th>
              <th>
                Current Weekly Workout
              </th>
              <th>
                Workout Progress percentage
              </th>
              <th>
                Athelte comments on current workout
              </th>
            </tr>
            <tr>
              <th>
                Jonathan W.
              </th>
              <th>
                10 mile run per week
              </th>
              <th>
                105%
              </th>
              <th>
                Satisfied with current workout.
              </th>
            </tr>
            <tr>
              <th>
                Kaila I.
              </th>
              <th>
                15 mile run per week
              </th>
              <th>
                100%
              </th>
              <th>
                Increase current workout please!
              </th>
            </tr>
          </table>
        </div>
        <div label="INJURY DASHBOARD">
        <table>
            <tr>
              <th>
                Athlete
              </th>
              <th>
                Injury History
              </th>
              <th>
                Type of Injuries
              </th>
              <th>
                Date of Injury
              </th>
            </tr>
            <tr>
              <th>
                Jonathan W.
              </th>
              <th>
                Yes
              </th>
              <th>
                torn ACL, cracked rib
              </th>
              <th>
                1/15/2015, 3/5/2020
              </th>
            </tr>
            <tr>
              <th>
                Kaila I.
              </th>
              <th>
                Yes
              </th>
              <th>
                Broken leg
              </th>
              <th>
                5/27/2019
              </th>
            </tr>
          </table>
        </div>
      </Tabs>
    </div>
  );
}

export default App;
