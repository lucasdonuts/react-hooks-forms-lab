import React from "react";
import { v4 as uuid } from "uuid";

// items and setItems are already established as state in App

function ItemForm({ onItemFormSubmit, setFormData, formData }) {

  const handleChange = (e) => {
    setFormData({
      ...formData,
      id: uuid(),
      [e.target.name]: e.target.value
    })
  }

  console.log(formData)
  return (
    <form className="NewItem" onSubmit={ onItemFormSubmit }>
      <label>
        Name:
        <input type="text" name="name" onChange={ handleChange } />
      </label>

      <label>
        Category:
        <select name="category" onChange={ handleChange }>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
