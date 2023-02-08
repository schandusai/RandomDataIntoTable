import React, { useState } from "react";

const App = () => {
  const [data, setData] = useState([]);

  const addRandomData = () => {
    const newData = [
      ...data,
      { id: data.length + 1, name: Math.random().toString(36).substring(2) }
    ];
    setData(newData);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {data.map(d => (
            <tr key={d.id}>
              <td>{d.id}</td>
              <td>{d.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={addRandomData}>Add Random Data</button>
    </div>
  );
};

export default App;