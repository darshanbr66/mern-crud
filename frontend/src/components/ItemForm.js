import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ItemForm = ({ currentId, setCurrentId, items, setItems }) => {
  const [itemData, setItemData] = useState({ name: '' });

  useEffect(() => {
    if (currentId) {
      const currentItem = items.find(item => item._id === currentId);
      setItemData(currentItem);
    } else {
      setItemData({ name: '' });
    }
  }, [currentId, items]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (currentId) {
      await axios.put(`http://localhost:5000/api/items/${currentId}`, itemData);
    } else {
      const { data } = await axios.post('http://localhost:5000/api/items', itemData);
      setItems([...items, data]);
    }
    setItemData({ name: '' });
    setCurrentId(null);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Item name"
        value={itemData.name}
        onChange={(e) => setItemData({ ...itemData, name: e.target.value })}
        required
      />
      <button type="submit">{currentId ? 'Update' : 'Add'} Item</button>
    </form>
  );
};

export default ItemForm;
