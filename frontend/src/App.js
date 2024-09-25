import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ItemList from './components/ItemList';
import ItemForm from './components/ItemForm';

function App() {
  const [items, setItems] = useState([]);
  const [currentId, setCurrentId] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/api/items')
      .then(response => setItems(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="App">
      <ItemForm
        currentId={currentId}
        setCurrentId={setCurrentId}
        items={items}
        setItems={setItems}
      />
      <ItemList
        items={items}
        setItems={setItems}
        setCurrentId={setCurrentId}
      />
    </div>
  );
}

export default App;

