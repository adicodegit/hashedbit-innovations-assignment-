import { useEffect, useState } from "react"
import './App.css';

function App() {
  const [iplData, setIplData] = useState([]);

  useEffect(()=>{
    const fetchData = async () => {
      const result = await fetch('https://my-json-server.typicode.com/FreSauce/json-ipl/data');
      const data = await result.json();
      data.sort((a, b) => a.NRR - b.NRR)
      setIplData(data);
    }
    
    fetchData();
  }, []);

  return (
    <>
    <section className="result-section">
      <h1 className="title">IPL Season 2022 Points</h1>
      <table className="table">
        <thead>
          <tr>
            <th>No</th>
            <th>Team</th>
            <th>Matches</th>
            <th>Won</th>
            <th>Lost</th>
            <th>Tied</th>
            <th>NRR</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {iplData.map((team) => 
            <tr key={team.No}>
              <td>{team.No}</td>
              <td>{team.Team}</td>
              <td>{team.Matches}</td>
              <td>{team.Won}</td>
              <td>{team.Lost}</td>
              <td>{team.Tied}</td>
              <td>{team.NRR}</td>
              <td>{team.Points}</td>
            </tr>
          )}
        </tbody>
      </table>
    </section>
    </>
  )
}

export default App
