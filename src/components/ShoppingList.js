import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    category: 'Produce'
  });

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  const handleItemFormSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: formData.id,
      name: formData.name,
      category: formData.category
    }
    items.push( newItem )
  }

  const itemsToDisplay = items.filter( item => {
    if (selectedCategory === 'All' && search === '' ) {
      return true;
    } else if (selectedCategory === 'All') {
      return item.name.toLowerCase().includes(search.toLowerCase())
    } else {
      return (
        item.name.toLowerCase().includes(search.toLowerCase())
        && item.category === selectedCategory
      )
    }
  })

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={ handleItemFormSubmit } setFormData={ setFormData } formData={ formData } />
      <Filter onSearchChange={ handleSearch } onCategoryChange={handleCategoryChange} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
