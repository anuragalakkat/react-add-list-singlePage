import React, { useState } from 'react';

const AddTask = () => {
  const [product, setProduct] = useState('');

  const [list, setList] = useState([]);

  const handleChange = (e) => {
    setProduct(e.target.value);
  };

  const handleAdd = (e) => {
    const data = { product };
    setList((ls) => [...ls, data]);
  };

  return (
    <div>
      <h1>Add tasks</h1>
      <input value={product} onChange={handleChange}></input>
      <button onClick={handleAdd}>Add</button>
      <h1>List</h1>
      {list.map((p) => {
        return <h1>{p.product}</h1>;
      })}
    </div>
  );
};

export default AddTask;
