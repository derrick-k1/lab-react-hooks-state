import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'
import './App.css'

const App = () => {
  const [darkMode, setDarkMode] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const [category, setCategory] = useState('all')

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode)
  }

  const handleAddToCart = (product) => {
    setCartItems((previousItems) => [...previousItems, product])
  }

  const handleCategoryChange = (event) => {
    setCategory(event.target.value)
  }

  return (
    <div className={`app ${darkMode ? 'dark' : 'light'}`}>
      <div className="top-bar">
        <div>
          <h1>🛒 Shopping App</h1>
          <p>
            Welcome! Your task is to implement filtering, cart management, and
            dark mode.
          </p>
        </div>

        <DarkModeToggle darkMode={darkMode} onToggle={toggleDarkMode} />
      </div>

      <div className="controls">
        <label htmlFor="category-select">Filter by Category: </label>
        <select
          id="category-select"
          value={category}
          onChange={handleCategoryChange}
        >
          <option value="all">All</option>
          <option value="Fruits">Fruits</option>
          <option value="Dairy">Dairy</option>
        </select>
      </div>

      <ProductList category={category} onAddToCart={handleAddToCart} />

      <Cart cartItems={cartItems} />
    </div>
  )
}

export default App
