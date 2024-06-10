import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)



   async function apiCall (){
    console.log('runing')
    fetch('https://y4z1bu6eld.execute-api.us-west-2.amazonaws.com/sensor_records/node-records-summary', {
      method: 'POST',
      headers: {
        'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImN0eSI6IkpXVCJ9.eyJzdWIiOiJwcml2YWN5QGFwcGxpZWRwYXJ0aWNsZXRlY2hub2xvZ3kuY29tIiwianRpIjoiNTc4NDcwYzQtZGQyMS00ZDRkLWExNDgtMTY0ZDM0MjJiOGExIiwiaWF0IjoxNzE4MDAxMjM3LCJyb2wiOiJhcGlfYWNjZXNzIiwiaWQiOiI4MWFiZDNlNi1mNDdiLTQxMmMtYmJmZC0xNmZhNjk2ZmMyMmIiLCJzZWN1cml0eVByb2ZpbGUiOiIxIiwidGVuYW50SWQiOiI0MiIsIm5iZiI6MTcxODAwMTIzNywiZXhwIjoxNzE4MDAzMDM3LCJpc3MiOiJ3ZWJBcGkiLCJhdWQiOiJodHRwczovL2xvY2FsaG9zdDo1MDAxLyJ9.748ZGEWgWntNe5s_R6N2vhcQUDIcKIbw72B25Bt-qwE',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({"analyteId": 7, "dateFilterType" : 1,  "endDate": 1716486239 , "endPointId": 1712 , "includeVideo": 0 ,"startDate": 1716444000})
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      // Display API response
      
    })
    .catch(error => {
      // Handle errors

    });
 
   }
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={apiCall}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
