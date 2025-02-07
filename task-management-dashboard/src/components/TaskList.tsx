import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import TaskItem from "./TaskItem";
import Filter from "./Filter";
import { useState } from "react";

// const TaskList = () => {
//   const [filter, setFilter] = useState("All");
//   const tasks = useSelector((state: RootState) => state.tasks.tasks);

//   const filteredTasks = tasks.filter((task) => {
//     if (filter === "All") return true;
//     return task.status === filter;
//   });

//   return (
//     <div className="p-4 bg-gray-100 rounded-lg shadow-md">
//       <h2 className="text-lg font-semibold mb-4">Your Tasks</h2>
//       <Filter setFilter={setFilter} />
//       <div className="space-y-4">
//         {filteredTasks.length > 0 ? (
//           filteredTasks.map((task) => <TaskItem key={task.id} task={task} />)
//         ) : (
//           <p className="text-gray-500">No tasks available.</p>
//         )}
//       </div>
//     </div>
//   );
// };
const TaskList = () => {
    const [filter, setFilter] = useState("All");
    const tasks = useSelector((state: RootState) => state.tasks.tasks);
  
    const filteredTasks = tasks.filter((task) => {
      if (filter === "All") return true;
      return task.status === filter;
    });
  
    return (
      <div className="max-w-4xl mx-auto p-6 bg-gray-50 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Your Tasks</h2>
        <Filter setFilter={setFilter} />
        <div className="space-y-4">
          {filteredTasks.length > 0 ? (
            filteredTasks.map((task) => <TaskItem key={task.id} task={task} />)
          ) : (
            <p className="text-gray-500 text-center py-8">No tasks available.</p>
          )}
        </div>
      </div>
    );
  };
  
export default TaskList;
