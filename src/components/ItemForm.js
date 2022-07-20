import { useState, React }  from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  const [formData, setFormData] = useState({
    name: '',
    category: 'Produce'
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      id: uuid(),
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      id: formData.id,
      name: formData.name,
      category: formData.category
    }

    onItemFormSubmit(newItem);
  }

  return (
    <form className="NewItem" onSubmit={ handleSubmit }>
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
