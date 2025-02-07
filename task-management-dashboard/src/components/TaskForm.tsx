import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask, updateTask } from "../redux/taskSlice";
import { useNavigate, useParams } from "react-router-dom";
import { Task } from "../types";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { v4 as uuidv4 } from "uuid";

// const TaskForm = () => {
//   const { id } = useParams<{ id: string }>();
//   const existingTask = useSelector((state: RootState) =>
//     state.tasks.tasks.find((t) => t.id === id)
//   );

//   const [title, setTitle] = useState(existingTask?.title || "");
//   const [description, setDescription] = useState(existingTask?.description || "");
//   const [dueDate, setDueDate] = useState(existingTask?.dueDate || "");
//   const [status, setStatus] = useState(existingTask?.status || "Pending");

//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     const newTask: Task = {
//       id: existingTask ? existingTask.id : uuidv4(),
//       title,
//       description,
//       dueDate,
//       status,
//     };

//     if (existingTask) {
//       dispatch(updateTask(newTask));
//     } else {
//       dispatch(addTask(newTask));
//     }

//     navigate("/");
//   };

//   return (
//     <form onSubmit={handleSubmit} className="p-4 bg-white rounded shadow-md">
//       <h2 className="text-xl font-bold">{existingTask ? "Edit Task" : "Add New Task"}</h2>
//       <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" required />
//       <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" required />
//       <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} required />
//       <select value={status} onChange={(e) => setStatus(e.target.value as Task["status"])}>
//         <option value="Pending">Pending</option>
//         <option value="In Progress">In Progress</option>
//         <option value="Completed">Completed</option>
//       </select>
//       <button type="submit" className="bg-blue-500 text-white p-2 rounded">{existingTask ? "Update" : "Add"}</button>
//     </form>
//   );
// };
const TaskForm = () => {
    const { id } = useParams<{ id: string }>();
    const existingTask = useSelector((state: RootState) =>
      state.tasks.tasks.find((t) => t.id === id)
    );
  
    const [title, setTitle] = useState(existingTask?.title || "");
    const [description, setDescription] = useState(existingTask?.description || "");
    const [dueDate, setDueDate] = useState(existingTask?.dueDate || "");
    const [status, setStatus] = useState(existingTask?.status || "Pending");
  
    const dispatch = useDispatch();
    const navigate = useNavigate();
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      const newTask: Task = {
        id: existingTask ? existingTask.id : uuidv4(),
        title,
        description,
        dueDate,
        status,
      };
  
      if (existingTask) {
        dispatch(updateTask(newTask));
      } else {
        dispatch(addTask(newTask));
      }
  
      navigate("/");
    };
  
    return (
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          {existingTask ? "Edit Task" : "Add New Task"}
        </h2>
        <div className="space-y-4">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors duration-200"
          />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors duration-200 min-h-32"
          />
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors duration-200"
          />
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value as Task["status"])}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors duration-200"
          >
            <option value="Pending">Pending</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 shadow-sm"
          >
            {existingTask ? "Update Task" : "Add Task"}
          </button>
        </div>
      </form>
    );
  };
export default TaskForm;
