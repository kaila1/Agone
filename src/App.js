import React from 'react';
import Tabs from "./components/Tabs";
import './App.css';

function App() {
  return (
    <div className="App">
		<div class="right">
			<a href="https://account.d5mz5bs8uvjp6.amplifyapp.com/">
			<img class="account" src="https://nyrevconnect.com/wp-content/uploads/2017/06/Placeholder_staff_photo-e1505825573317.png" width="50" height="50"  ></img>
			</a>
		</div>
		<h5 class="right">Username</h5>
		<div class="Top">
		  <h1>Team Agone</h1>
			<button class="right"> Distill Data </button>
      </div>
      <Tabs>
        <div label="STUDENT DATA">
        <table>
    	    <tr>
        	  <th>Athlete</th>
        	  <td>Rylee</td>
        	  <td>Sam</td>
        	  <td>Jonathan</td>
        	  <td>Kaila</td>
    	    </tr>
    	    <tr>
        	  <th>Phone Number</th>
        	  <td>555-9548</td>
        	  <td>555-3490</td>
        	  <td>555-8036</td>
        	  <td>555-4958</td>
    	    </tr>
    	    <tr>
      	    <th>Distance Ran(Miles)</th>
      	    <td>19.3</td>
            <td>8.7</td>
        	  <td>10.5</td>
      	    <td>15</td>
  	      </tr>
  	      <tr>
      	    <th>Wellness Report <button class="right"> Request Wellness Report </button> </th>
        	  <td>School has been stressing me out.</td>
        	  <td>Overall Good.</td>
            <td>Great, better than last week for sure.</td>
        	  <td>No issues today.</td>
    	    </tr>
    	  </table>
        </div>
        <div label="WORKOUT PLAN">
        <table>
    	    <tr>
        	  <th>Athlete</th>
        	  <td>Rylee</td>
        	  <td>Sam</td>
        	  <td>Jonathan</td>
        	  <td>Kaila</td>
    	    </tr>
    	    <tr>
        	  <th>Current Weekly Workout</th>
        	  <td>20 Miles Running</td>
        	  <td>10 Miles Running</td>
        	  <td>10 Miles Jogging</td>
        	  <td>15 Miles Running</td>
    	    </tr>
    	    <tr>
        	  <th>Workout Progress Percentage</th>
        	  <td>96.5%</td>
        	  <td>87%</td>
        	  <td>105%</td>
        	  <td>100%</td>
    	    </tr>
    	    <tr>
        	  <th>Comments on Workout</th>
          	  <td><div contenteditable="true" >Reduce workout?</div></td>
          	  <td><div contenteditable="true">Reduce workout?</div></td>
              <td><div contenteditable="true">You went over your goal!</div></td>
        	  <td><div contenteditable="true">You met your goal!</div></td>
    	    </tr>
    	  </table>
        </div>
        <div label="INJURY DASHBOARD">
        <table>
    	    <tr>
        	  <th>Athlete</th>
        	  <td>Rylee</td>
        	  <td>Sam</td>
        	  <td>Jonathan</td>
        	  <td>Kaila</td>
    	    </tr>
    	    <tr>
        	  <th>Injury History</th>
        	  <td>Yes</td>
        	  <td>No</td>
        	  <td>Yes</td>
        	  <td>Yes</td>
    	    </tr>
    	    <tr>
        	  <th>Type of Injuries</th>
        	  <td>Sprained Ankle</td>
        	  <td>-</td>
        	  <td>Cracked Rib, Torn ACL</td>
        	  <td>Dislocated Shoulder</td>
    	    </tr>
    	    <tr>
        	  <th>Date of Injury</th>
          	  <td>9/30/2015</td>
          	  <td>-</td>
              <td>11/21/2019, 3/13/2020</td>
        	  <td>6/3/2018</td>
    	    </tr>
    	  </table>
        </div>
      </Tabs>
    </div>
  );
}

export default App;
