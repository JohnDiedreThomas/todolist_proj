import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";

const Analytics = ({ tasks }) => {
  const completedTasks = tasks.filter((task) => task.completed).length;
  const totalTasks = tasks.length;
  const overallCompletionRate = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;

  const categories = tasks.reduce((acc, task) => {
    if (!acc[task.category]) acc[task.category] = { total: 0, completed: 0 };
    acc[task.category].total++;
    if (task.completed) acc[task.category].completed++;
    return acc;
  }, {});

  const data = [
    { name: "Overall", "Completion Rate": overallCompletionRate }, 
    ...Object.entries(categories).map(([category, stats]) => ({
      name: category || "Uncategorized",
      "Completion Rate": (stats.completed / stats.total) * 100 || 0,
    })),
  ];

  return (
    <div className="p-4 border rounded-lg bg-slate-300 shadow-md w-80">
      <h2 className="text-lg font-semibold mb-3">Analytics</h2>

      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data} margin={{ top: 10, right: 20, left: 10, bottom: 5 }}>
          <XAxis dataKey="name" />
          <YAxis domain={[0, 100]} tickFormatter={(tick) => `${tick}%`} />
          <Tooltip formatter={(value) => `${value.toFixed(2)}%`} />
          <Legend />
          <Bar dataKey="Completion Rate" fill="#69c2e6" />
        </BarChart>
      </ResponsiveContainer>

      <div className="mt-4 text-gray-700">
        <p className="font-semibold">Overall: {overallCompletionRate.toFixed(2)}% completed ({completedTasks}/{totalTasks})</p>
        {Object.entries(categories).map(([category, stats], index) => (
          <p key={index}>
            {category || "Uncategorized"}: {((stats.completed / stats.total) * 100).toFixed(2)}% completed ({stats.completed}/{stats.total})
          </p>
        ))}
      </div>
    </div>
  );
};

export default Analytics;
