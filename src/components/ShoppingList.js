import React, { useState } from 'react';
import Item from './Item';

const initialItems = [
  { id: 1, name: 'Milk', category: 'Dairy' },
  { id: 2, name: 'Eggs', category: 'Dairy' },
  { id: 3, name: 'Bread', category: 'Bakery' },
  { id: 4, name: 'Apples', category: 'Fruit' },
  // Ensure your test categories are included here
];

function ShoppingList() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = ['All', ...new Set(initialItems.map(item => item.category))];

  const filteredItems = selectedCategory === 'All' ? initialItems : initialItems.filter(item => item.category === selectedCategory);

  return (
    <div>
      <select name="filter" onChange={(e) => setSelectedCategory(e.target.value)}>
        {categories.map(category => (
          <option key={category} value={category}>{category}</option>
        ))}
      </select>
      <ul className="Items">
        {filteredItems.map(item => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
