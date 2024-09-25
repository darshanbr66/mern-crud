import React from 'react';
import axios from 'axios';

const ItemList = ({ items, setItems, setCurrentId }) => {
  const deleteItem = async (id) => {
    await axios.delete(`http://localhost:5000/api/items/${id}`);
    setItems(items.filter(item => item._id !== id));
  };

  return (
    <div>
      <h1>Item List</h1>
      <ul>
        {items.map(item => (
          <li key={item._id}>
            {item.name}
            <button onClick={() => setCurrentId(item._id)}>Edit</button>
            <button onClick={() => deleteItem(item._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
