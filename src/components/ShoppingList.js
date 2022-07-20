import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, addNewItem }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState('');

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  const onItemFormSubmit = (newItem) => {
    addNewItem(newItem);
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
      <ItemForm onItemFormSubmit={ onItemFormSubmit } />
      <Filter search={ search } onSearchChange={ handleSearch } onCategoryChange={handleCategoryChange} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
