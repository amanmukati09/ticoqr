import React, { useState } from "react";
import Navbar from "./Navbar"; // Import the Navbar component
import { Link } from "react-router-dom";

const CreateMenu = () => {
  const [restaurantName, setRestaurantName] = useState(""); // State to store the restaurant name
  const [categories, setCategories] = useState([]); // State to store the categories
  const [currentCategory, setCurrentCategory] = useState(""); // State to manage the current category
  const [items, setItems] = useState({}); // State to store items within categories
  const [itemName, setItemName] = useState(""); // State to store the current item's name
  const [itemDescription, setItemDescription] = useState(""); // State to store the current item's description
  const [itemPrice, setItemPrice] = useState(""); // State to store the current item's price
  const [itemPhoto, setItemPhoto] = useState(null); // State to store the current item's photo
  const [cart, setCart] = useState([]); // State to manage the shopping cart
  const [isMenuSaved, setIsMenuSaved] = useState(false); // State to track menu saving

  // Function to add a new category
  const addCategory = () => {
    if (currentCategory.trim() !== "") {
      setCategories([...categories, currentCategory]);
      setCurrentCategory("");
    }
  };

  // Function to add a new item to the selected category
  const addItem = () => {
    if (itemName.trim() !== "" && itemPrice.trim() !== "") {
      const updatedItems = { ...items };
      if (!updatedItems[currentCategory]) {
        updatedItems[currentCategory] = [];
      }
      updatedItems[currentCategory].push({
        name: itemName,
        description: itemDescription,
        price: itemPrice,
        photo: itemPhoto,
      });

      setItems(updatedItems);
      setItemName("");
      setItemDescription("");
      setItemPrice("");
      setItemPhoto(null);
    }
  };

  // Function to remove a category
  const removeCategory = (category) => {
    setCategories(categories.filter((cat) => cat !== category));
    setItems((prevItems) => {
      const updatedItems = { ...prevItems };
      delete updatedItems[category];
      return updatedItems;
    });
  };

  // Function to remove an item from a category
  const removeItem = (category, item) => {
    setItems((prevItems) => {
      const updatedItems = { ...prevItems };
      updatedItems[category] = updatedItems[category].filter((i) => i !== item);
      return updatedItems;
    });
  };

  // Function to add an item to the shopping cart
  const addToCart = (category, item) => {
    setCart([...cart, { category, item }]);
  };

  // Function to remove an item from the shopping cart
  const removeFromCart = (category, item) => {
    setCart(cart.filter((cartItem) => !(cartItem.category === category && cartItem.item === item)));
  };

  // Function to save the menu
  const saveMenu = () => {
    // Implement your logic to save the menu here
    setIsMenuSaved(true);
  };

  return (
    <div>
      <Navbar /> {/* Include the Navbar component */}
      <div className="p-4 bg-white shadow-lg rounded-md m-2">
        <h1 className="text-2xl font-semibold mb-4 text-center">Create Your Menu</h1>
        <label className="block text-sm font-medium text-gray-700 mb-2">Restaurant Name:</label>
        <input
          type="text"
          className="block w-full border border-gray-300 rounded-md p-2 mb-4"
          value={restaurantName}
          onChange={(e) => setRestaurantName(e.target.value)}
          placeholder="Enter Restaurant Name"
        />

        <label className="block text-sm font-medium text-gray-700 mb-2">Add Categories:</label>
        <div className="flex space-x-2 mb-4">
          <input
            type="text"
            className="flex-1 border border-gray-300 rounded-md p-2"
            value={currentCategory}
            onChange={(e) => setCurrentCategory(e.target.value)}
            placeholder="Enter Category"
          />
          <button className="bg-indigo-500 text-white rounded-md p-2" onClick={addCategory}>
            Add
          </button>
        </div>

        {categories.map((category, index) => (
          <div key={index}>
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold">{category}</h2>
              <button className="text-red-500" onClick={() => removeCategory(category)}>
                Remove
              </button>
            </div>

            <div className="bg-gray-100 p-2 mb-4 rounded-md">
              <input
                type="text"
                className="flex-1 border border-gray-300 rounded-md p-2 mb-2"
                value={itemName}
                onChange={(e) => setItemName(e.target.value)}
                placeholder="Enter Item Name"
              />
              <input
                type="text"
                className="flex-1 border border-gray-300 rounded-md p-2 mb-2"
                value={itemDescription}
                onChange={(e) => setItemDescription(e.target.value)}
                placeholder="Enter Item Description"
              />
              <input
                type="text"
                className="flex-1 border border-gray-300 rounded-md p-2 mb-2"
                value={itemPrice}
                onChange={(e) => setItemPrice(e.target.value)}
                placeholder="Enter Item Price"
              />
              <label className="block text-sm font-medium text-gray-700 mb-2">Add Item Photo:</label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setItemPhoto(URL.createObjectURL(e.target.files[0]))}
                className="flex-1 border border-gray-300 rounded-md p-2 mb-4"
              />
              <button className="bg-indigo-500 text-white rounded-md p-2" onClick={addItem}>
                Add Item
              </button>
            </div>

            {items[category] &&
              items[category].map((item, i) => (
                <div key={i} className="bg-gray-100 p-2 mb-2 rounded-md">
                  <div className="flex justify-between">
                    <p className="text-lg font-semibold">{item.name}</p>
                    <button className="text-red-500" onClick={() => removeItem(category, item)}>
                      Remove
                    </button>
                  </div>
                  <p className="text-sm text-gray-500">{item.description}</p>
                  <p className="text-sm text-indigo-500">${item.price}</p>
                  <img src={item.photo} alt={item.name} className="w-32 h-32 object-cover rounded-md mb-2" />
                  <button
                    className="bg-indigo-500 text-white rounded-md p-2 mb-2"
                    onClick={() => addToCart(category, item)}
                  >
                    Add to Cart
                  </button>
                </div>
              ))}
          </div>
        ))}

        <div className="flex justify-center">
          <button className="text-white bg-indigo-500 rounded-md p-2 mr-2" onClick={saveMenu}>
            Save Menu
          </button>
          <Link to="/watch-menu" className="text-white bg-indigo-500 rounded-md p-2">
            Watch Menu
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CreateMenu;
