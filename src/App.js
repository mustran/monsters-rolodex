import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [monsters, setMonsters] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await axios("https://jsonplaceholder.typicode.com/users").then(res =>
        setMonsters(res.data)
      );
    };
    fetchData();
  }, []);

  return (
    <>
      {" "}
      {monsters.map(monster => (
        <h1 key={monster.id}> {monster.name} </h1>
      ))}{" "}
    </>
  );
}

export default App;
