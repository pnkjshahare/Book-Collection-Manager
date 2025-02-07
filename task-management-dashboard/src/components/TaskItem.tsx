import { Task } from "../types";
import { useDispatch } from "react-redux";
import { toggleTaskStatus, deleteTask } from "../redux/taskSlice";
import { useNavigate } from "react-router-dom";

// const TaskItem = ({ task }: { task: Task }) => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   return (
//     <div className="p-4 bg-white rounded-md shadow flex justify-between items-center">
//       <div>
//         <h3 className="text-lg font-medium">{task.title}</h3>
//         <p className="text-gray-500">{task.description}</p>
//         <p className="text-sm text-gray-600">Due: {task.dueDate}</p>
//       </div>
//       <div className="flex gap-2">
//         <button
//           onClick={() => dispatch(toggleTaskStatus(task.id))}
//           className={`px-3 py-1 rounded ${task.status === "Completed" ? "bg-green-500" : "bg-yellow-500"}`}
//         >
//           {task.status}
//         </button>
//         <button onClick={() => navigate(`/task/${task.id}`)} className="bg-blue-500 px-3 py-1 rounded">
//           View
//         </button>
//         <button onClick={() => dispatch(deleteTask(task.id))} className="bg-red-500 px-3 py-1 rounded">
//           Delete
//         </button>
//       </div>
//     </div>
//   );
// };

const TaskItem = ({ task }: { task: Task }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
  
    return (
      <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200">
        <div className="flex justify-between items-start">
          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-gray-800">{task.title}</h3>
            <p className="text-gray-600">{task.description}</p>
            <p className="text-sm text-gray-500">Due: {task.dueDate}</p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => dispatch(toggleTaskStatus(task.id))}
              className={`px-4 py-2 rounded-lg text-white transition-colors duration-200 ${
                task.status === "Completed"
                  ? "bg-green-500 hover:bg-green-600"
                  : "bg-yellow-500 hover:bg-yellow-600"
              }`}
            >
              {task.status}
            </button>
            <button
              onClick={() => navigate(`/task/${task.id}`)}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors duration-200"
            >
              View
            </button>
            <button
              onClick={() => dispatch(deleteTask(task.id))}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors duration-200"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  };
  

export default TaskItem;
