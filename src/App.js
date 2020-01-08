import React, { useState, useEffect } from "react";
import axios from "axios";
import CardList from "./components/CardList/CardList";

function App() {
  const [monsters, setMonsters] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://jsonplaceholder.typicode.com/users"
      ).then(res => res.data);
      setMonsters(result);
    };
    fetchData();
  }, []);

  return (
    <>
      <CardList monsters={monsters} />
    </>
  );
}

export default App;
