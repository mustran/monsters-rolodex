import React, { useState, useEffect } from "react";
import axios from "axios";
import CardList from "./components/CardList/CardList";
import SearchBox from "./components/Search-box/SearchBox";
import styles from './App.module.css'

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
    <div className={styles.App}>
      <h1 className={styles.title}>Monsters Rolodex</h1>
      <SearchBox
        placeholder="search monsters"
        handleChange={e => setSearchTerm(e.target.value)}
      />
      <CardList monsters={filterMonsters} />
    </div>
  );
}

export default App;
