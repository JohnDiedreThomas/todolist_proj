import React, { useState } from "react";

const CategoryList = ({ categories, setCategories }) => {
  const [categoryInput, setCategoryInput] = useState("");


  const addCategory = () => {
    if (categoryInput.trim() !== "" && !categories.includes(categoryInput)) {
      setCategories([...categories, categoryInput]); 
    }
  };

  return (
    <div className="p-4 border rounded-lg bg-slate-300 shadow-md w-64">
      <h2 className="text-lg font-semibold mb-3">Category List</h2>

      <input
        type="text"
        value={categoryInput}
        onChange={(e) => setCategoryInput(e.target.value)}
        placeholder="Enter category name"
        className="w-full p-2 border rounded-md mb-2"
      />
      <button
        onClick={addCategory}
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 w-full"
      >
       ➕ Add Category
      </button>

      
      <div className="mt-4">
        {categories.length > 0 ? (
          categories.map((category, index) => (
            <div key={index} className="bg-gray-100 p-2 mb-2 rounded">
              {category}
            </div>
          ))
        ) : (
          <p className="text-gray-500">No categories available.</p>
        )}
      </div>
    </div>
  );
};

export default CategoryList;
