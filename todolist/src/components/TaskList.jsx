const TaskList = ({ tasks, setTasks }) => {
    const toggleTaskCompletion = (index) => {
      const updatedTasks = [...tasks];
      updatedTasks[index].completed = !updatedTasks[index].completed;
  
      updatedTasks.sort((a, b) => b.completed - a.completed);
  
      setTasks(updatedTasks);
    };
  
    return (
      <div>
        <h3 className="text-lg font-semibold mb-2">Tasks List</h3>
        {tasks.length === 0 ? (
          <p className="text-gray-500">No tasks available.</p>
        ) : (
          <ul className="space-y-2">
            {tasks.map((task, index) => (
              <li
                key={index}
                className={`p-2 border rounded-md flex items-center gap-2 ${
                  task.completed ? "bg-green-100 line-through" : "bg-white"
                }`}
              >
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleTaskCompletion(index)}
                />
                <span>{task.name}</span>
                <span className="ml-auto text-gray-500 text-sm">Due: {task.dueDate}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  };
  
  export default TaskList;
  