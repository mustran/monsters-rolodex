import React, { useState, useEffect, useDebugValue } from "react";
import axios from "axios";
import CardList from "./components/CardList/CardList";

function App() {
  const [monsters, setMonsters] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://jsonplaceholder.typicode.com/users"
      ).then(res => res.data);
      setMonsters(result);
    };
    fetchData();
  }, []);

  const filterMonsters = monsters.filter(monster =>
    monster.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <input
        type="search"
        placeholder="search monsters"
        onChange={e => setSearchTerm(e.target.value)}
      />
      <CardList monsters={filterMonsters} />
    </>
  );
}

export default App;
