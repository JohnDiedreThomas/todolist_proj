import { useState } from "react";
import TaskList from "./TaskList";
import CategoryList from "./CategoryList";
import Analytics from "./Analytics";

const TodoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [categories, setCategories] = useState([]);
  const [task, setTask] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const addTask = () => {
    if (task.trim() === "" || dueDate.trim() === "") return;
    setTasks([...tasks, { name: task, dueDate, category: selectedCategory, completed: false }]);
    setTask("");
    setDueDate("");
  };

  return (
    <div className="w-full h-screen flex justify-center items-center p-10 bg-cover bg-center" 
         style={{ backgroundImage: "url('https://static.vecteezy.com/system/resources/previews/025/896/406/large_2x/businessman-to-do-list-checklist-with-computer-monitor-seamless-pattern-background-business-flat-illustration-checklist-task-list-symbol-pattern-vector.jpg')" }}>
      <div className="w-full max-w-6xl bg-slate-500 shadow-2xl rounded-lg p-8 flex gap-8">
        
        <CategoryList categories={categories} setCategories={setCategories} />
  
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">📝 Advanced Todo List 📝</h2>
          
          <div className="bg-slate-300 p-6 rounded-lg mb-6 shadow-md">
            <input
              type="text"
              placeholder="New Task"
              value={task}
              onChange={(e) => setTask(e.target.value)}
              className="w-full p-3 border rounded-lg mb-3 text-gray-700"
            />
            <input
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              className="w-full p-3 border rounded-lg mb-3 text-gray-700"
            />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full p-3 border rounded-lg mb-3 text-gray-700"
            >
              <option value="">Select Category</option>
              {categories.map((cat, index) => (
                <option key={index} value={cat}>{cat}</option>
              ))}
            </select>
            <button 
              onClick={addTask} 
              className="w-full bg-green-500 text-white px-4 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-green-600 transition-all"
            >
              ➕ Add Task
            </button>
          </div>
  
          <TaskList tasks={tasks} setTasks={setTasks} />
        </div>
  
        <Analytics tasks={tasks} />
      </div>
    </div>
  );
  
  
};

export default TodoApp;
